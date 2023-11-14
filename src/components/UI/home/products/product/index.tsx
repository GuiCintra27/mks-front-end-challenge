import Image from "next/image";

import { BuyWrapper } from "./buyWrapper";
import { ProductContainer } from "./styles";
import { ProductModel } from "@/models/product";

export function Product(productData: ProductModel) {
  return (
    <ProductContainer data-testid="product-container">
      <img src={productData.photo} alt={productData.name} />
      <main>
        <h3>{productData.name}</h3>
        <div className="price-wrapper">
          <span>R$ {productData.price.toString().slice(0, -3)}</span>
        </div>
      </main>
      <p>{productData.description}</p>
      <BuyWrapper productData={productData}>
        <Image
          src="/icons/shopping-bag-icon.svg"
          width={12}
          height={13.5}
          alt="Comprar"
        />
        <span data-testid={`buy-button-${productData.id}`}>Comprar</span>
      </BuyWrapper>
    </ProductContainer>
  );
}
