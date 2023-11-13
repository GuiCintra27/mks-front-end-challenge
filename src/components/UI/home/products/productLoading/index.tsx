import { ProductContainer } from "../product/styles";
import { SkeletonLoading } from "@/components/common/loading";

export function ProductLoading() {
  return (
    <ProductContainer>
      <SkeletonLoading
        $height="11.5rem"
        $width="100%"
        $border_radius="0.6rem"
      />
      <div style={{ marginTop: "1.6rem", display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
        <SkeletonLoading
          $height="3rem"
          $width="10rem"
          $border_radius="0.3rem"
        />
        <SkeletonLoading
          $height="2.6rem"
          $width="6.5rem"
          $border_radius="0.8rem"
        />
      </div>
      <SkeletonLoading style={{ marginTop: "0.8rem" }} $height="2.6rem" $width="100%" $border_radius="0.4rem" />
    </ProductContainer>
  );
}
