import { useParams } from "react-router-dom";
import useFetch from "../hook/useFetch";
import Loader from "../components/Loader";
import Rating from "../components/Rating";
import { BsCart4 } from "react-icons/bs";
import Similar from "../components/Similar";
import { useDispatch } from "react-redux";
import { useCallback } from "react";
import { addToCart } from "../context/actions/cartSlice";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { productDetail: item } = useFetch(id);

  const addToCartHandler = useCallback(() => {
    dispatch(addToCart(item));
  }, [dispatch, item]);

  if (item === null) {
    return <Loader />;
  }
  return (
    <div className="mb-auto flex bg-gray-50 font-serif pb-24 select-none h-screen">
      <div className="flex items-center container mx-auto pt-44">
        <div className="flex-1">
          <Similar category={item.category} />
        </div>
        <div className="flex-1 flex flex-col justify-between h-full">
          <div className="mb-3 w-full h-full">
            <div className="relative img_container">
              <img
                src={item.backdrop_image}
                className="object-contain h-[400px] shadow-md rounded-xl absolute backdrop_image"
                alt=""
              />
              <img
                src={item.image}
                className="object-contain h-[400px] shadow-md rounded-xl absolute image"
                alt=""
              />
            </div>
          </div>
          <div className="">
            <div className="flex space-x-5 items-center">
              <h2 className="text-xl font-semibold my-3">{item.title}</h2>

              <div className="px-4 py-2 rounded-full bg-gray-300 shadow flex items-center text-black hover:bg-black hover:text-white duration-200 font-medium">
                <h6 className="capitalize">{item.category}</h6>
              </div>
            </div>
            <p className="tracking-wide text-gray-800 font-medium text-lg my-4 leading-8">
              {item.description}
            </p>
            <div className="flex space-x-8 items-center">
              <h6 className="font-semibold text-lg">Price : $ {item.price}</h6>
              <div className="flex space-x-3">
                <h6 className="text-md font-medium">Rates :</h6>
                <Rating rating={item.rating} />
              </div>
            </div>
            <div className="flex my-4">
              <button
                onClick={addToCartHandler}
                className="px-6 py-2 rounded-full bg-black text-white font-semibold flex items-center space-x-2 active:scale-95"
              >
                <h3 className="text-lg">Add to Cart</h3>
                <BsCart4 size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
