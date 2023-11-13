import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  padding: 1.9rem 2.3rem;
  width: 100%;
  height: 9.5rem;

  display: flex;
  align-items: center;
  gap: 2rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.primary};
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
  color: ${({ theme }) => theme.colors.onPrimary};

  .close {
    position: absolute;
    top: 0;
    right: 0;

    transform: translate(50%, -50%);
    cursor: pointer;
  }

  .description {
    display: flex;
    gap: 2rem;
    align-items: center;

    img {
      width: 7rem;
      max-height: 6rem;

      border-radius: 0.8rem;
    }

    h3 {
      width: 8.5rem;
      word-wrap: break-word;

      font-size: 1.3rem;
      line-height: 1.7rem; /* 130.769% */
    }
  }

  .price {
    color: ${({ theme }) => theme.colors.onPrimary};
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.7rem; /* 121.429% */
  }
`;

export const QuantityWrapper = styled.div`
  width: 6rem;

  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  font-size: 0.8rem;

  .button {
    padding: 0.5rem;
    height: 2.4rem;
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    border: 1px solid #bfbfbf;
    border-radius: 0.4rem;

    span {
      font-size: 1.2rem;
      cursor: pointer;
    }
  }

  .separator {
    width: 0.2px;
    height: 1.15rem;

    background-color: #bfbfbf;
  }
`;
