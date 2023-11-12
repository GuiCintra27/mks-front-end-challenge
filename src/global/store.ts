
import { configureStore } from "@reduxjs/toolkit";

import { themeReducer } from "@/components/infra/storage/theme-slice";
import { cartReducer } from "@/components/infra/storage/cart-slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    cart: cartReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
