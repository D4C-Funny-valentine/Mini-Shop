import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";


const initialState = {
  favoriteProducts: [],
};

const STORE_KEY = "favoriteItems";


const storeFavorite = Cookies.get(STORE_KEY);

if (storeFavorite) {
  initialState.favoriteProducts = JSON.parse(storeFavorite);
}

export const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    addToFavorite: (state, { payload }) => {
      const isFavoriteExisted = state.favoriteProducts.find(
        (cart) => cart._id === payload._id
      );
      if (isFavoriteExisted) {
        return state;
      }
      state.favoriteProducts = [...state.favoriteProducts, { ...payload }];
      Cookies.set(STORE_KEY, JSON.stringify(state.favoriteProducts));
    },
    removeFromFavorite: (state, { payload }) => {
      let filterProduct = state.favoriteProducts.filter(
        (cart) => cart._id !== payload._id
      );
      state.favoriteProducts = filterProduct;
      Cookies.set(STORE_KEY, JSON.stringify(state.favoriteProducts));
    },
  },
});

export const { addToFavorite, removeFromFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
