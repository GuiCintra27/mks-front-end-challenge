
import { Product } from "./product";
import { Container } from "./styles";
import { ProductProps } from "@/models/product";

export function Products({products}: {products: ProductProps[]}) {
  return (
    <Container>
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </Container>
  );
}


