
import { Product } from "./product";
import { Container } from "./styles";
import { ProductModel } from "@/models/product";

export function Products({products}: {products: ProductModel[]}) {
  return (
    <Container>
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </Container>
  );
}


