"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";

import { Container } from "./styles";
import { useAppSelector } from "@/hooks/useAppSelector";
import { toggleCart } from "@/components/infra/storage/cart-slice";
import { CartProduct } from "./product";

export function Cart() {
  const { isActive, products } = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

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
        {products.map((product) => (
          <CartProduct
            id={product.id}
            name={product.name}
            price={product.price * product.quantity}
            quantity={product.quantity}
            photo={product.photo}
            key={product.id}
          />
        ))}
      </div>
      <div className="total">
        <span>Total</span>
        <span>R$ {products.reduce((acc, product) => acc + product.price, 0)}</span>
      </div>
    </Container>
  );
}
