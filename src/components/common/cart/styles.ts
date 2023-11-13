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
    padding-top: 1rem;
    padding-right: 1rem;
    height: 60%;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    gap: 2.2rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .total {
    margin: 0 5.4rem 4rem 4.7rem;
    width: calc(100% - 10rem);

    display: flex;
    align-items: center;
    justify-content: space-between;

    color: #fff;
    font-size: 2.8rem;
    font-weight: 700;
    line-height: 1.5rem; /* 53.571% */
  }
`;
