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
    insertItem: (
      state,
      action: PayloadAction<
        ProductModel | Pick<ProductModel, "id" | "name" | "price" | "photo">
      >
    ) => {
      const { id, name, price, photo } = action.payload;
      let repeatedId = -1;

      state.products.map((product, index) => {
        if (product.id === id) {
          repeatedId = index;
        }
      });

      if (repeatedId !== -1) {
        state.products[repeatedId].quantity += 1;
      } else
        state.products = [
          { id, name, price: Number(price), photo, quantity: 1 },
          ...state.products,
        ];
    },
    removeItem: (
      state,
      action: PayloadAction<(ProductModel | Pick<ProductModel, "id">) & { removeAll?: boolean }>
    ) => {
      const { id, removeAll } = action.payload;
      let listId = -1;

      state.products.map((product, index) => {
        if (product.id === id) listId = index;
      });

      if (state.products[listId].quantity === 1 || removeAll) {
        state.products = state.products.filter((product) => product.id !== id);
      } else {
        state.products[listId].quantity -= 1;
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.isActive = false;
    }
  },
});

export const { toggleCart, insertItem, removeItem, clearCart } = CartSlice.actions;
export const cartReducer = CartSlice.reducer;
