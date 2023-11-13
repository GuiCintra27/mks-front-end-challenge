"use client";

import { useDispatch } from "react-redux";

import { ProductModel } from "@/models/product";
import { addOnCart } from "@/components/infra/fetch-logic/cart";

export function BuyWrapper({
  children,
  productData,
}: {
  children: React.ReactNode;
  productData: ProductModel;
}) {
  const dispatch = useDispatch();

  return (
    <div
      className="buy-wrapper"
      onClick={() => addOnCart({ dispatch, productData })}
    >
      {children}
    </div>
  );
}
