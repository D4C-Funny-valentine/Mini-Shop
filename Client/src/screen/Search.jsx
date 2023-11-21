import { useLocation } from "react-router-dom";
import Card from "../components/Card";
import Lottie from "lottie-react";
import SearchAnimation from "../animation/SearchEmpty.json";

const Search = () => {
  const routes = useLocation();

  const searchProducts = routes.state?.filterProducts;

  return (
    <>
      {searchProducts.length === 0 ? (
        <div className="h-screen">
          <div className="flex justify-center items-center h-full flex-col">
            <Lottie animationData={SearchAnimation} loop={true} />
            <h4 className="text-2xl font-semibold">There is no data</h4>
          </div>
        </div>
      ) : (
        <div className="mt-16 pt-20 pb-16">
          <div className="flex flex-wrap justify-center gap-10 container mx-auto">
            {searchProducts?.map((item) => (
              <Card key={item._id} {...item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
