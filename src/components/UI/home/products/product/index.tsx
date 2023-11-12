import Image from "next/image";

import { ProductContainer } from "./styles";
import { ProductProps } from "@/models/product";

export function Product({ name, price, photo, description }: ProductProps) {
  return (
    <ProductContainer>
      <img src={photo} alt={name} />
      <main>
        <h3>{name}</h3>
        <div className="price-wrapper">
          <span>R$ {price}</span>
        </div>
      </main>
      <p>{description}</p>
      <div className="buy-wrapper">
        <Image src="/icons/shopping-bag-icon.svg" width={12} height={13.5} alt="Comprar" />
        <span>Comprar</span>
      </div>
    </ProductContainer>
  );
}
