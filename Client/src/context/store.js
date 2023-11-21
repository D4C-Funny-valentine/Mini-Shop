import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./actions/cartSlice";
import favoriteSlice from "./actions/favoriteSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorite: favoriteSlice
  },
});
