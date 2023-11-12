"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThemeProvider as ThemeProviderStyled } from "styled-components";

import { darkTheme } from "./dark-theme";
import { whiteTheme } from "./white-theme";
import { useAppSelector } from "@/hooks/useAppSelector";
import { ThemeType, setTheme } from "@/components/infra/storage/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const { theme } = useAppSelector((state) => state.theme);
  const dispatch = useDispatch();

  const themes = {
    [ThemeType.light]: whiteTheme,
    [ThemeType.dark]: darkTheme,
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme && JSON.parse(theme) === ThemeType.dark) {
      dispatch(
        setTheme({
          theme: ThemeType.dark,
        })
      );
    }
  }, []);

  return (
    <ThemeProviderStyled theme={themes[theme]}>{children}</ThemeProviderStyled>
  );
}
