"use client";

import { Product } from "./product";
import { Container } from "./styles";
import { errorToast } from "../../alerts";
import { ProductLoading } from "./productLoading";
import { useProductsApi } from "@/hooks/api/products";

export function Products() {
  const { products, isLoading, isError } = useProductsApi();

  if(isError) errorToast("Ocorreu um erro ao carregar os produtos");

  return (
    <Container>
      {isLoading
        ? new Array(8).fill(0).map((_, index) => <ProductLoading key={index} />)
        : products?.map((product) => <Product {...product} key={product.id} />)}
    </Container>
  );
}
