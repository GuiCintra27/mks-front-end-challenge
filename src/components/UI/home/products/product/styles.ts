"use client";

import styled from "styled-components";

export const ProductContainer = styled.div`
  position: relative;
  padding: 1.6rem 1.2rem calc(1.6rem + 3.1rem) 1.2rem;
  width: 21.8rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  border: ${({ theme }) => theme.borderWidth} solid #242535;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);

  & > img {
    margin-bottom: 1.4rem;
    max-width: 100%;
    max-height: 13.8rem;

    border-radius: .8rem;
  }

  main {
    margin-bottom: .8rem;
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      max-width: 11.5rem;
      word-wrap: break-word;

      color: ${({ theme }) => theme.colors.onPrimary};
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1.9rem; /* 118.75% */
    }

    .price-wrapper {
      padding: 0.5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 0.5rem;
      background: ${({ theme }) => theme.colors.price};

      span {
        color: ${({ theme }) => theme.colors.onPrice};
        font-size: 1.5rem;
        font-weight: 700;
        line-height: 1.5rem; /* 100% */
      }
    }
  }

  p {
    color: ${({ theme }) => theme.colors.onPrimary};
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.2rem; /* 120% */
  }

  .buy-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;

    padding: 0.9rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.4rem;

    border-radius: 0rem 0rem 0.8rem 0.8rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;

    span {
      color: ${({ theme }) => theme.colors.onSecondary};
      font-size: 1.4rem;
      font-weight: 600;
      line-height: 1.8rem; /* 128.571% */
    }
  }
`;
