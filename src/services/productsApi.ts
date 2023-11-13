import { instance } from "./instance";
import { ProductModel } from "@/models/product";

export async function getProducts(): Promise<ProductModel[]> {
  const response = await instance.get("products?page=1&rows=8&sortBy=id&orderBy=DESC");
  return response.data.products;
}