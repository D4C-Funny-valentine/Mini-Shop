import { BsCart } from "react-icons/bs";

const AddToCartButton = ({ handler }) => {
  return (
    <button
      onClick={handler}
      className="px-4 py-2 rounded-full bg-black text-white font-semibold flex items-center mr-3 active:scale-95"
    >
      <span>Add to cart</span>{" "}
      <BsCart size={20} color="white" className="ml-2" />
    </button>
  );
};

export default AddToCartButton;
