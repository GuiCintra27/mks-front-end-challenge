import { AnyAction, Dispatch } from "redux";

import { ProductModel } from "@/models/product";
import { confirmAlert } from "@/components/UI/alerts";
import { insertItem, removeItem } from "../storage/cart-slice";

export function addOnCart({
  dispatch,
  productData,
}: {
  dispatch: Dispatch<AnyAction>;
  productData:
    | ProductModel
    | Pick<ProductModel, "id" | "name" | "price" | "photo">;
}) {
  dispatch(
    insertItem({
      ...productData,
    })
  );
}

export function removeFromCart({
  dispatch,
  id,
  quantity,
}: {
  dispatch: Dispatch<AnyAction>;
  id: number;
  quantity: number;
}) {
  if (quantity === 1) {
    confirmAlert(
      "Você tem certeza?",
      "Este produto será removido do carrinho",
      {
        confirm: "Continuar",
        cancel: "Cancelar",
      }
    ).then((response) => {
      if (response.isConfirmed) {
        dispatch(removeItem({ id }));
      }
    });
  } else dispatch(removeItem({ id }));
}
