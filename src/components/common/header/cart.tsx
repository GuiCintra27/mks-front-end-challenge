import Image from "next/image";
import styled from "styled-components";
import { useDispatch } from "react-redux";

import { toggleCart } from "@/components/infra/storage/cart-slice";

export function Cart() {
  const dispatch = useDispatch();
  return (
    <Container onClick={() => dispatch(toggleCart())}>
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
  cursor: pointer;

  span {
    color: #000;
    font-size: 1.8rem;
    font-weight: 700;
    line-height: normal;
  }
`;
