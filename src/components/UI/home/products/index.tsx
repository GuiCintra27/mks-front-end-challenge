import { Product } from "./product";
import { Container } from "./styles";
import { ProductModel } from "@/models/product";
import { ProductLoading } from "./productLoading";

export function Products({ products }: { products: ProductModel[] }) {
  return (
    <Container>
      {!products || products.length === 0
        ? new Array(8).fill(0).map((_, index) => <ProductLoading key={index} />)
        : products.map((product) => <Product {...product} key={product.id} />)}
    </Container>
  );
}
