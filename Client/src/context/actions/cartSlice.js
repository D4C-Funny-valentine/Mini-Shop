import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  cartProducts: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const STORE_KEY = "cartItems";

const storeCartItems = Cookies.get(STORE_KEY);

if (storeCartItems) {
  initialState.cartProducts = JSON.parse(storeCartItems);
  initialState.totalPrice = calculateTotalPrice(initialState.cartProducts);
  initialState.totalQuantity = calculateQuantity(initialState.cartProducts);
}

function calculateTotalPrice(carts) {
  return carts.reduce(
    (prevPrice, cart) => prevPrice + cart.price * cart.quantity,
    0
  );
}

function calculateQuantity(carts) {
  return carts.reduce((prevQty, cart) => prevQty + cart.quantity, 0);
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const isCartExisted = state.cartProducts.find(
        (cart) => cart._id === payload._id
      );
      if (isCartExisted) {
        return state;
      }
      state.cartProducts = [...state.cartProducts, { ...payload, quantity: 1 }];
      state.totalQuantity = calculateQuantity(state.cartProducts);
      state.totalPrice = calculateTotalPrice(state.cartProducts);
      Cookies.set(STORE_KEY, JSON.stringify(state.cartProducts));
    },
    removeFromCart: (state, { payload }) => {
      let filterProduct = state.cartProducts.filter(
        (cart) => cart._id !== payload._id
      );
      state.cartProducts = filterProduct;
      state.totalQuantity = calculateQuantity(state.cartProducts);
      state.totalPrice = calculateTotalPrice(state.cartProducts);
      Cookies.set(STORE_KEY, JSON.stringify(state.cartProducts));
    },
    addQuantity: (state, { payload }) => {
      const updatedCartsProduct = state.cartProducts.map((product) => {
        if (product._id === payload._id) {
          return { ...product, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
      state.cartProducts = updatedCartsProduct;
      state.totalPrice = calculateTotalPrice(state.cartProducts);
      state.totalQuantity = calculateQuantity(state.cartProducts);
      Cookies.set(STORE_KEY, JSON.stringify(state.cartProducts));
    },
    reduceQuantity: (state, { payload }) => {
      if (payload.quantity > 1) {
        const updatedCartsProduct = state.cartProducts.map((product) => {
          if (product._id === payload._id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
        state.cartProducts = updatedCartsProduct;
        state.totalPrice = calculateTotalPrice(state.cartProducts);
        state.totalQuantity = calculateQuantity(state.cartProducts);
        Cookies.set(STORE_KEY, JSON.stringify(state.cartProducts));
      } else {
        return state;
      }
    },
  },
});

export const { addToCart, removeFromCart, addQuantity, reduceQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
