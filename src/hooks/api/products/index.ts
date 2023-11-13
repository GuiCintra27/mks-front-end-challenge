"use client";

import { useQuery } from "@tanstack/react-query";

import * as api from "@/services/productsApi";
import { timeUntilTheNextDay } from "@/utils/dateUtil";

export function useProductsApi() {
  const {
    data: products,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["products-list"],
    queryFn: api.getProducts,
    staleTime: timeUntilTheNextDay(),
  });

  return {
    products,
    isLoading,
    isError
  };
}
