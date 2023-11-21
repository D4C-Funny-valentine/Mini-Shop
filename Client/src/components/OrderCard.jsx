import { useDispatch } from "react-redux";
import {
  addQuantity,
  reduceQuantity,
  removeFromCart,
} from "../context/actions/cartSlice";
import MenuCard from "./MenuCard";

const OrderCard = ({ product }) => {
  const dispatch = useDispatch();

  const handlers = {
    handleRemoveFromCart: () => {
      dispatch(removeFromCart(product));
    },

    handleIncreaseProductQuantity: () => {
      dispatch(addQuantity(product));
    },

    handleReduceProductQuantity: () => {
      dispatch(reduceQuantity(product));
    },
  };

  return (
    <MenuCard
      product={product}
      increaseQuantity={handlers.handleIncreaseProductQuantity}
      reduceQuantity={handlers.handleReduceProductQuantity}
      remove={handlers.handleRemoveFromCart}
      diffUI={true}
    />
  );
};

export default OrderCard;
