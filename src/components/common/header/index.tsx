"use client";

import Image from "next/image";
import styled from "styled-components";

import { Cart } from "./cart";
import { ChangeThemeButton } from "./changeThemeButton";

export function Header() {
  return (
    <Container>
      <Image
        priority
        id="logo"
        src="/logo/logo-extended.svg"
        width={186}
        height={30}
        alt="Logo"
      />
      <div className="actions">
        <Cart />
        <ChangeThemeButton />
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 2.8rem 8rem;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.secondary};

  .actions {
    display: flex;
    align-items: center;

    gap: 4rem;
  }
`;
