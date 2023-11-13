"use client";

import styled from "styled-components";

export const SkeletonLoading = styled.div<{
  $height: string;
  $width: string;
  $border_radius: string;
}>`
  height: ${({ $height }) => $height};
  width: ${({ $width }) => $width};

  border-radius: ${({ $border_radius }) => $border_radius};
  background-size: 400%;
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.loading.primary} 0%,
    ${({ theme }) => theme.colors.loading.primary} 30%,
    ${({ theme }) => theme.colors.loading.secondary} 45%,
    ${({ theme }) => theme.colors.loading.secondary} 50%,
    ${({ theme }) => theme.colors.loading.primary} 60%,
    ${({ theme }) => theme.colors.loading.primary} 100%
  );

  animation: shimmer 1s linear infinite;

  @keyframes shimmer {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
`;
