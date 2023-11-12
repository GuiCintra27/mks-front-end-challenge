import { ProductModel } from "@/models/product";
import { Container, QuantityWrapper } from "./styles";

export function CartProduct({
  name,
  photo,
  price,
  quantity,
}: Pick<ProductModel, "name" | "photo" | "price"> & { quantity: number }) {
  return (
    <Container>
      <div className="description">
        <img src={photo} />
        <h3>{name}</h3>
      </div>
      <QuantityWrapper>
        <span>Qtd:</span>
        <div className="button">
          <span>-</span>
          <div className="separator" />
          <div>{quantity}</div>
          <div className="separator" />
          <span>+</span>
        </div>
      </QuantityWrapper>
      <p className="price">R$ {price}</p>
    </Container>
  );
}
