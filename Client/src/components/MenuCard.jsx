import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { RxCross2 } from "react-icons/rx";
import AddToCartButton from "./AddToCartButton";

const MenuCard = ({
  product,
  remove,
  add,
  reduceQuantity,
  increaseQuantity,
  diffUI,
}) => {
  return (
    <div className=" mx-3 select-none">
      <div className="py-3 px-2 rounded-xl shadow-md flex flex-col duration-300 cardOrder relative">
        <div className="flex justify-between">
          <div className="flex-1">
            <img
              src={product?.backdrop_image}
              alt=""
              className="h-[160px] object-contain rounded-lg shadow"
            />
          </div>
          <div className="flex-1">
            <h5 className="font-semibold line-clamp-1 mb-1">{product.title}</h5>
            <h6 className="capitalize">
              <span className="font-medium"> Category </span>
              <span>: {product.category}</span>
            </h6>
            <h6 className="mb-3">
              <span className="font-medium">Price</span>{" "}
              <span>: ${product.price}</span>
            </h6>
            {diffUI ? (
              <div className="flex">
                <div className="px-4 py-2 rounded-xl my-3 shadow-md flex items-center space-x-4">
                  <div className="cursor-pointer" onClick={increaseQuantity}>
                    <BiSolidUpArrow color="blue" />
                  </div>
                  <div className="w-5 h-5 p-1 rounded-full bg-slate-300 shadow-md flex items-center justify-center">
                    <h6 className="text-sm">{product.quantity}</h6>
                  </div>
                  <div className="cursor-pointer" onClick={reduceQuantity}>
                    <BiSolidDownArrow color="blue" />
                  </div>
                </div>
              </div>
            ) : (
              <AddToCartButton handler={add} />
            )}
          </div>
        </div>
        <div
          onClick={remove}
          className="w-7 h-7 border-2 bg-white shadow-sm absolute top-0 -left-3 cursor-pointer rounded-full flex justify-center items-center"
        >
          <RxCross2 size={20} color="black" />
        </div>
      </div>
    </div>
  );
};

export default MenuCard;