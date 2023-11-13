import { AnyAction, Dispatch } from "redux";

import { ProductModel } from "@/models/product";
import { confirmAlert, successToast } from "@/components/UI/alerts";
import { clearCart, insertItem, removeItem } from "../storage/cart-slice";

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
  removeAll,
}: {
  dispatch: Dispatch<AnyAction>;
  id: number;
  quantity: number;
  removeAll?: boolean;
}) {
  if (quantity === 1 || removeAll) {
    confirmAlert(
      "Você tem certeza?",
      "Este produto será removido do carrinho",
      {
        confirm: "Continuar",
        cancel: "Cancelar",
      }
    ).then((response) => {
      if (response.isConfirmed) {
        dispatch(removeItem({ id, removeAll }));
      }
    });
  } else dispatch(removeItem({ id }));
}

export function finalizePurchase({
  dispatch,
  products,
}: {
  dispatch: Dispatch<AnyAction>;
  products: Pick<ProductModel, "id" | "name" | "price" | "photo">[];
}) {
  if (products.length === 0) return;

  confirmAlert("Tem certeza?", "A compra será finalizada", {
    confirm: "Continuar",
    cancel: "Cancelar",
  }).then((response) => {
    if (response.isConfirmed) {
      dispatch(clearCart());
      successToast("Sua compra foi finalizada com sucesso");
    }
  });
}
