import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      onPrimary: string;
      secondary: string;
      onSecondary: string;
      price: string;
      onPrice: string;
      footer: string;
      onFooter: string;
      background: string;
      changeThemeButton: string
      loading: {
        primary: string;
        secondary: string;
      }
    };
    borderWidth: string;
    invert: number;
  }
}
