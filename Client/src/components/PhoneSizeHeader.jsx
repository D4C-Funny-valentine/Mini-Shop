import React, { useRef } from "react";
import Logo from "../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import useFetch from "../hook/useFetch";
import { useNavigate } from "react-router-dom";

const PhoneSizeHeader = () => {
  const { products } = useFetch();
  const navigation = useNavigate();
  const searchRef = useRef();
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
    <div className="block sm:block md:hidden lg:hidden duration-300 w-full z-10 mb-8 backdrop-blur-md">
      <div className="mx-auto w-[90%] sm:w-[80%] md:w-[75%] lg:w-[70%] flex justify-center flex-col items-center">
        <div className="p-2">
          <div className="header-container">
            <div className="flex gap-4 items-center mb-1">
              <h3 className="text-2xl font-semibold">Mini Shop</h3>
              <img
                src={Logo}
                alt="Mini Logo"
                className="w-12 h-12 object-contain"
              />
            </div>
            <h5 className="text-base font-medium mb-6">
              One of the best t-shirt shop is right in front of you{" "}
            </h5>
            <p className="italic mb-4 p-2 bg-gradient-to-tr from-sky-500 to-pink-300 text-white rounded-md">
              You can have anything you want in life if you dress for it
            </p>
          </div>
          <form
            onSubmit={handleSearchProduct}
            className="w-full flex bg-[#f3f3f3ee] rounded-md overflow-hidden mt-8"
          >
            <input
              type="text"
              ref={searchRef}
              placeholder="Search Product"
              className="px-3 py-2 w-full bg-[#f3f3f3ee] outline-none text-gray-800 placeholder:text-gray-400"
            />
            <button
              type="submit"
              className="bg-gradient-to-tr rounded-md from-[#c21e99ee] to-[#21bbcf] p-1  flex items-center justify-center"
            >
              <IoMdSearch size={30} color="white" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PhoneSizeHeader;
