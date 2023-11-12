import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { CartModel } from "@/models/cart";
import { ProductModel } from "@/models/product";

const initialState: CartModel = {
  isActive: false,
  products: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isActive = !state.isActive;
    },
    insertItem: (state, action: PayloadAction<ProductModel>) => {
      const {id, name, price, photo} = action.payload;

      const product = state.products.find((product) => product.id === id);

      if(product) console.log(product)

      state.products = [...state.products, {id, name, price, photo, quantity: 1}];
    },
  },
});

export const { toggleCart, insertItem } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;
