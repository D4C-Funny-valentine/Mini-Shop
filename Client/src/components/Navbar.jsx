import { FaOpencart } from "react-icons/fa";
import { BsCart3, BsHeart, BsSearch } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import useFetch from "../hook/useFetch";
import { useDisclosure } from "@mantine/hooks";
import Menubar from "./Menubar";

const Navbar = () => {
  const { products } = useFetch();
  const searchRef = useRef();
  const [opened, { open, close }] = useDisclosure(false);
  const [whichMenuOpen, setWhichMenuOpen] = useState("order");

  const navigation = useNavigate();
  const { cartProducts } = useSelector((state) => state.cart);
  const { favoriteProducts } = useSelector((state) => state.favorite);

  const handleSearchProduct = (e) => {
    e.preventDefault();
    const filterProducts = products?.filter((product) =>
      product.title
        .toLowerCase()
        .includes(searchRef.current.value.toLowerCase())
    );
    navigation("/search", { state: { filterProducts } });
  };

  return (
    <nav className="bg-blue-900 shadow py-2 px-3 sm:py-2.5 sm:px-3 md:py-4 md:px-3 lg:py-4 lg:px-3 fixed w-full top-0 z-50">
      <div className="mx-auto w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%]">
        <div className="flex items-center justify-between">
          <Link to={"/"}>
            <div className="flex space-x-2 items-center">
              <span className="text-2xl font-bold text-white">Shop</span>
              <FaOpencart size={30} color="white" />
            </div>
          </Link>
          <div className="">
            <div className="flex space-x-2">
              <div className="hidden sm:hidden md:block lg:block">
                <form className="flex" onSubmit={handleSearchProduct}>
                  <button
                    type="submit"
                    className="rounded-s-full rounded-l-full bg-slate-200 py-3 pl-3 flex justify-center items-center"
                  >
                    <BsSearch size={17} color="gray" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search"
                    ref={searchRef}
                    className="placeholder:text-gray-500 rounded-r-full rounded-e-full outline-none px-4 py-3 bg-slate-200"
                  />
                </form>
              </div>
              <div
                onClick={() => {
                  setWhichMenuOpen("order");
                  open();
                }}
                className="rounded-full hover:bg-gray-100 hover:text-black text-white h-12 w-12 flex justify-center items-center relative duration-200 cursor-pointer"
              >
                <BsCart3 size={20} />
                <div className="bg-blue-400 rounded-full flex justify-center items-center absolute top-0 right-0 w-5 h-5">
                  <span className="text-[10px] font-semibold text-white">
                    {cartProducts.length}
                  </span>
                </div>
              </div>
              <div
                onClick={() => {
                  setWhichMenuOpen("favorite");
                  open();
                }}
                className="rounded-full hover:bg-gray-100 hover:text-black text-white h-12 w-12 flex justify-center items-center relative duration-200 cursor-pointer"
              >
                <BsHeart size={20} />
                <div className="bg-blue-400 rounded-full flex justify-center items-center absolute top-0 right-0 w-5 h-5">
                  <span className="text-[10px] font-semibold text-white">
                    {favoriteProducts.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Menubar opened={opened} close={close} whichMenuOpen={whichMenuOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
