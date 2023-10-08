"use client";
import styled from "styled-components";
import { colors } from "@/utils";
import { ButtonI } from "@/interface";

export function Button({ children, variant = "primary" }: ButtonI) {
  return <StyledButton className={variant}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 100px;
  cursor: pointer;

  &.primary {
    color: ${colors.white};
    border: 1px solid ${colors.primary_100};
    background-color: ${colors.primary_100};
  }

  &.secondary {
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
    color: ${colors.black_75};
    border: 1px solid ${colors.black_75};
    transition: all 0.3s ease;

    svg path {
      transition: fill 0.3s ease;
    }

    &:hover {
      color: ${colors.white};
      border-color: ${colors.primary_100};
      background-color: ${colors.primary_100};

      svg path {
        fill: ${colors.white};
      }
    }
  }
`;
