import { useState } from "react";
import {
  BsHeart,
  BsHeartFill,
  BsSearch,
  BsStar,
  BsStarFill,
  BsBag,
} from "react-icons/bs";
import "./components.css";
import CardDescription from "./CardDescription";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToFavorite,
  removeFromFavorite,
} from "../context/actions/favoriteSlice";
import AddToCartButton from "./AddToCartButton";
import { addToCart } from "../context/actions/cartSlice";
import { toast } from "react-toastify";

const Card = (item) => {
  const dispatch = useDispatch();

  const { favoriteProducts } = useSelector((state) => state.favorite);

  const isFavorite = favoriteProducts.some(
    (product) => product._id === item._id
  );

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorite(item));
      toast("Remove successfully from favorite cart");
    } else {
      dispatch(addToFavorite(item));
      toast("Add successfully to favorite cart");
    }
  };

  const [isRate, setRate] = useState();
  const addToCartHandler = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className="w-80 shadow rounded-xl select-none">
      <div className="shadow-lg rounded-xl imgCard relative">
        <Link to={`/detail/${item._id}`}>
          <div className="relative img_container h-[426px] rounded-xl overflow-hidden">
            <img
              src={item.backdrop_image}
              alt=""
              className="object-contain absolute backdrop_image"
            />
            <img
              src={item.image}
              alt=""
              className=" object-contain absolute image"
            />
          </div>
        </Link>

        <div className="px-4 py-2 rounded-full bg-gray-300/70 shadow absolute top-4 left-4">
          <h6 className="capitalize text-xs font-semibold">{item.category}</h6>
        </div>
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white shadow absolute top-4 right-4 cursor-pointer">
          <button className="" onClick={toggleFavorite}>
            {isFavorite ? (
              <BsHeartFill size={20} color="red" />
            ) : (
              <BsHeart size={20} color="black" />
            )}
          </button>
        </div>
        <div className="addToCart flex justify-evenly absolute bottom-0 w-full">
          <div
            className="p-2 rounded-full bg-white shadow-md cursor-pointer relative tooltip-icons hidden sm:hidden md:block lg:block"
            onClick={() => setRate(!isRate)}
          >
            {isRate ? (
              <BsStarFill size={20} color="blue" />
            ) : (
              <BsStar size={20} color="black" />
            )}
            <h6 className="select-none text-[9px] w-12 h-6 bg-black text-white font-semibold absolute -top-5 right-1 left-0 m-auto rounded-full flex justify-center items-center tooltip">
              Rate
            </h6>
          </div>
          <Link to={`/detail/${item._id}`}>
            <div className="p-2 rounded-full bg-white shadow-md cursor-pointer relative tooltip-icons hidden sm:hidden md:block lg:block">
              <BsSearch size={20} color="black" />
              <h6 className="select-none text-[9px] w-12 h-6 bg-black text-white font-semibold absolute -top-5 right-1 left-0 m-auto rounded-full flex justify-center items-center tooltip">
                Detail
              </h6>
            </div>
          </Link>
          <div
            className="p-2 rounded-full bg-white shadow-md cursor-pointer relative tooltip-icons hidden sm:hidden md:block lg:block"
            onClick={addToCartHandler}
          >
            <BsBag size={20} color="black" />
            <h6 className="select-none text-[9px] w-12 h-6 bg-black text-white font-semibold absolute -top-5 right-1 left-0 m-auto rounded-full flex justify-center items-center tooltip">
              Add
            </h6>
          </div>
        </div>
      </div>
      <CardDescription item={item} />
      <div className="my-3 flex justify-end w-full">
        <AddToCartButton handler={addToCartHandler} />
      </div>
    </div>
  );
};

export default Card;
