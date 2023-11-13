"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";

import { ProductModel } from "@/models/product";
import { Container, QuantityWrapper } from "./styles";
import { addOnCart, removeFromCart } from "@/components/infra/fetch-logic/cart";

export function CartProduct({
  id,
  name,
  photo,
  price,
  quantity,
}: Pick<ProductModel, "id" | "name" | "photo" | "price"> & {
  quantity: number;
}) {
  const dispatch = useDispatch();

  return (
    <Container>
      <Image
        onClick={() =>
          removeFromCart({ dispatch, id, quantity, removeAll: true })
        }
        className="close"
        src={"icons/close-cart-icon.svg"}
        width={18}
        height={18}
        alt={"Remover Produto"}
      />
      <div className="description">
        <img src={photo} />
        <h3>{name}</h3>
      </div>
      <QuantityWrapper>
        <span>Qtd:</span>
        <div className="button">
          <span onClick={() => removeFromCart({ dispatch, id, quantity })}>
            -
          </span>
          <div className="separator" />
          <div>{quantity}</div>
          <div className="separator" />
          <span
            onClick={() =>
              addOnCart({ dispatch, productData: { id, name, photo, price } })
            }
          >
            +
          </span>
        </div>
      </QuantityWrapper>
      <p className="price">R$ {price}</p>
    </Container>
  );
}
