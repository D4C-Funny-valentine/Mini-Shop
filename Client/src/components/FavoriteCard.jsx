import { useDispatch } from "react-redux";
import { removeFromFavorite } from "../context/actions/favoriteSlice";

import { addToCart } from "../context/actions/cartSlice";
import MenuCard from "./MenuCard";

const FavoriteCard = ({ product }) => {
  const dispatch = useDispatch();

  const handlers = {
    removeFavoriteHandler: () => {
      dispatch(removeFromFavorite(product));
    },
    addToCartHandler: () => {
      dispatch(addToCart(product));
    },
  };
  return (
    <MenuCard
      product={product}
      add={handlers.addToCartHandler}
      remove={handlers.removeFavoriteHandler}
      diffUI={false}
    />
  );
};

export default FavoriteCard;
