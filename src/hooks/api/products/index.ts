"use client";

import { useQuery } from "@tanstack/react-query";

import * as api from "@/services/productsApi";

export function useProductsApi() {
  const {
    data: products,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["products-list"],
    queryFn: api.getProducts,
    staleTime: 1000 * 60 * 60,
  });

  return {
    products,
    isLoading,
    isError
  };
}
