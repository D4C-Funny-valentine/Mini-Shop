import OrderCard from "./OrderCard";
import Lottie from "lottie-react";
import OrderAnimation from "../animation/Empty-Order.json";
import { AiOutlineSend } from "react-icons/ai";
import MenubarHeader from "./MenubarHeader";
import { useSelector } from "react-redux";

const OrderMenu = () => {
  const { cartProducts, totalPrice } = useSelector((state) => state.cart);

  return (
    <div className="">
      <MenubarHeader
        menubarTitle={"Order"}
        productNumbers={cartProducts.length}
      />

      {cartProducts.length === 0 ? (
        <div className="flex flex-1 flex-col">
          <div className="">
            <Lottie animationData={OrderAnimation} loop={true} />
          </div>
          <div className="flex flex-col justify-center items-center">
            <h4 className="text-2xl font-semibold">Your cart is empty</h4>
            <p className="text-lg font-medium">Please buy something else.</p>
          </div>
        </div>
      ) : (
        <div className="mt-2 mx-2 overflow-scroll">
          <div className="flex flex-col">
            <div className="flex flex-col gap-y-2 mb-3">
              {cartProducts.map((item) => (
                <OrderCard key={item.id} product={item} />
              ))}
            </div>
            <div className="py-4 px-3 rounded-2xl mb-3 bg-blue-800 mt-auto flex justify-between">
              <div className="flex items-center text-sm sm:text-sm lg:text-base md:text-base space-x-1 sm:space-x-1 md:space-x-2 lg:space-x-2 text-white font-semibold">
                <h4>Total Amount : </h4>
                <span>$ {totalPrice?.toFixed(2)}</span>
              </div>
              <div className="">
                <button className="flex items-center text-sm sm:text-sm lg:text-base md:text-base space-x-1 sm:space-x-1 md:space-x-2 font-semibold text-white border-2 rounded-full px-3 py-2">
                  <span>Order now</span>
                  <AiOutlineSend />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderMenu;
