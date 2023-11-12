"use client";

import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;

  height: 100vh;
  width: 48.6rem;

  background-color: ${({ theme }) => theme.colors.secondary};
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);

  .title-wrapper {
    margin: 3.6rem 2.2rem 7rem 4.7rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      max-width: 18rem;

      color: #fff;
      font-size: 2.7rem;
      font-weight: 700;
    }

    img {
      cursor: pointer;
      filter: invert(${({ theme }) => theme.invert});
    }
  }

  .products-list {
    margin: 0 5.4rem 3rem 4.7rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.2rem;
  }
`;
