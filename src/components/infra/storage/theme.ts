import { useLocalStorage } from "@/hooks/useLocalStorage";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export enum ThemeType {
  light = "light",
  dark = "dark",
}

export type Theme = {
  theme: ThemeType;
};

const initialState: Theme = {
  theme: ThemeType.light,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.theme === ThemeType.light) {
        state.theme = ThemeType.dark;
        useLocalStorage.setItem("theme", ThemeType.dark);
      } else {
        state.theme = ThemeType.light;
        useLocalStorage.setItem("theme", ThemeType.light);
      }
    },
    setTheme: (state, action: PayloadAction<Theme>) => {
      const theme = action.payload?.theme;

      state.theme = theme;
      useLocalStorage.setItem("theme", theme);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
