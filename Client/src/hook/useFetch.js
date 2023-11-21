import { useEffect, useState } from "react";

const useFetch = (id) => {
  const [products, setProducts] = useState(null);
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const productResponse = await fetch(
          `https://mini-shop-hy57.onrender.com/api/product`
        );
        const productData = await productResponse.json();
        setProducts(productData);

        if (id) {
          const selectedProductResponse = await fetch(
            `https://mini-shop-hy57.onrender.com/api/product/${id}`
          );
          const selectedProductData = await selectedProductResponse.json();
          setProductDetail(selectedProductData);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { products, productDetail, isLoading };
};

export default useFetch;
