"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";

import { Container } from "./styles";
import { useAppSelector } from "@/hooks/useAppSelector";
import { toggleCart } from "@/components/infra/storage/cart-slice";
import { CartProduct } from "./product";

export function Cart() {
  const dispatch = useDispatch();
  const { isActive } = useAppSelector((state) => state.cart);

  if (!isActive) return null;

  return (
    <Container>
      <div className="title-wrapper">
        <h3>Carrinho de compras</h3>
        <Image
          src="/icons/close-cart-icon.svg"
          width={38}
          height={38}
          alt="Fechar"
          onClick={() => dispatch(toggleCart())}
        />
      </div>
      <div className="products-list">
        <CartProduct
          name="Macbook Air"
          price={8200.0}
          quantity={1}
          photo="https://mks-sistemas.nyc3.digitaloceanspaces.com/products/macbookair.webp"
        />
      </div>
    </Container>
  );
}
