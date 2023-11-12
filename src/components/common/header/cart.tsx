import Image from "next/image";
import styled from "styled-components";

export function Cart() {
  return (
    <Container>
      <Image src="/icons/cart-icon.svg" width={19} height={18} alt="Cart" />
      <span>0</span>
    </Container>
  );
}

const Container = styled.div`
  padding: 1.3rem 1.5rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  border-radius: 0.8rem;
  background: #fff;

  span {
    color: #000;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: normal;
  }
`;
