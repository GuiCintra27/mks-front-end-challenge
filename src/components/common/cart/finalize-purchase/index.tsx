import { useDispatch } from "react-redux";

import { Container } from "./styles";
import { ProductModel } from "@/models/product";
import { finalizePurchase } from "@/components/infra/fetch-logic/cart";

export function FinalizePurchase({products}: {products: Pick<ProductModel, "id" | "name" | "price" | "photo">[]}) {
  const dispatch = useDispatch();

  return <Container onClick={() => finalizePurchase({dispatch, products})}>Finalizar compra</Container>;
}
