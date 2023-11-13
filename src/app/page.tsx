import { Cart } from "@/components/common/cart";
import { Footer } from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Products } from "@/components/UI/home/products";

export default function Home() {
  const data = {
    products: []
  }
  return (
    <>
      <Header />
      <Cart />
      <Products products={data.products} />
      <Footer />
    </>
  );
}
