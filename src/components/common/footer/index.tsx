"use client";

import styled from "styled-components";

export function Footer() {
  return (
    <Container>
      <p>MKS sistemas © Todos os direitos reservados</p>
    </Container>
  );
}

const Container = styled.div`
  padding: 0.9rem 0;
  width: 100vw;

  text-align: center;

  background-color: ${({ theme }) => theme.colors.footer};

  p {
    color: ${({ theme }) => theme.colors.onFooter};
    font-size: 1.2rem;
    font-weight: 400;
  }
`;
