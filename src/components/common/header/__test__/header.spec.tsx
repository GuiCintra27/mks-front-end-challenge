import { fireEvent, render, screen } from "@testing-library/react";

import { Cart } from "../cart";
import { ThemeProvider } from "@/theme/theme";
import { CartProduct } from "../../cart/product";
import { ReduxProvider } from "@/lib/reduxProvider";
import { Product } from "@/components/UI/home/products/product";
import { QueryClientProvider } from "@/lib/queryClientProvider";
import { ChangeThemeButton } from "../changeThemeButton";

const productData = {
  id: 1,
  name: "name",
  photo: "photo",
  price: 10,
  description: "description",
  createdAt: new Date().toDateString(),
  updatedAt: new Date().toDateString(),
  brand: "brand",
};

describe("Header", () => {
  describe("Cart", () => {
    function renderComponent({
      children,
      quantity = 1,
    }: { children?: React.ReactNode; quantity?: number } = {}) {
      return render(
        <QueryClientProvider>
          <ReduxProvider>
            <ThemeProvider>
              <Cart />
              {new Array(quantity).fill(0).map((_, index) => (
                <Product key={index} {...productData} id={index} />
              ))}
              {children}
            </ThemeProvider>
          </ReduxProvider>
        </QueryClientProvider>
      );
    }

    it("Initial value should be 0", () => {
      const { getByTestId } = render(
        <ReduxProvider>
          <Cart />
        </ReduxProvider>
      );

      const span = getByTestId("cart-items-count");

      expect(span.textContent).toBe("0");
    });
    describe("When a new item is added", () => {
      it("The value should increase by 1", () => {
        const { getByTestId } = renderComponent();

        const buyButton = getByTestId("buy-button-0");

        fireEvent.click(buyButton);

        const span = getByTestId("cart-items-count");

        expect(span.textContent).toBe("1");
      });
      it("If the same item already in the cart, the cart value must remain the same", () => {
        const { getByTestId } = renderComponent();

        const buyButton = getByTestId("buy-button-0");

        fireEvent.click(buyButton);
        fireEvent.click(buyButton);

        const span = getByTestId("cart-items-count");

        expect(span.textContent).toBe("1");
      });
      describe("When two different itens are added", () => {
        it("The cart value must increase by 2", () => {
          const { getByTestId } = renderComponent({ quantity: 2 });

          const buyButton = getByTestId("buy-button-0");
          const buyButton2 = getByTestId("buy-button-1");

          fireEvent.click(buyButton);
          fireEvent.click(buyButton2);

          const span = getByTestId("cart-items-count");

          expect(span.textContent).toBe("2");
        });
      });
    });

    describe("When an item is removed", () => {
      it("If was the last item, an alert should appear", () => {
        const { getByTestId } = renderComponent({
          children: <CartProduct {...productData} quantity={1} />,
        });

        const buyButton = getByTestId("buy-button-0");
        const decreaseButton = getByTestId("decrease-button-1");

        fireEvent.click(buyButton);

        fireEvent.click(decreaseButton);

        expect(screen.getByText("Você tem certeza?")).toMatchSnapshot();
      });
    });
  });

  describe("Theme", () => {
    function renderComponent() {
      return render(
        <ReduxProvider>
          <ThemeProvider>
            <ChangeThemeButton />
            <Product {...productData} />
          </ThemeProvider>
        </ReduxProvider>
      );
    }

    it("Should change the theme when change theme button is clicked", async () => {
      const { getByTestId } = renderComponent();

      const changeThemeButton = getByTestId("change-theme-button");
      const productContainer = getByTestId("product-container");
      const style = window.getComputedStyle(productContainer);

      expect(style.backgroundColor).toBe("rgb(255, 255, 255)");

      fireEvent.click(changeThemeButton);

      const newProductContainer = getByTestId("product-container");
      const newStyle = window.getComputedStyle(newProductContainer);

      expect(newStyle.backgroundColor).toBe("rgb(24, 26, 42)");
    });
  });
});
