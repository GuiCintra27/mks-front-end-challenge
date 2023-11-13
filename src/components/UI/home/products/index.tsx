"use client";

import { Product } from "./product";
import { Container } from "./styles";
import { ProductLoading } from "./productLoading";
import { useProductsApi } from "@/hooks/api/products";

export function Products() {
  const { products, isLoading, isError } = useProductsApi();

  return (
    <Container>
      {isLoading
        ? new Array(8).fill(0).map((_, index) => <ProductLoading key={index} />)
        : products?.map((product) => <Product {...product} key={product.id} />)}
    </Container>
  );
}
