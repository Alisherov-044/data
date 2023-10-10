"use client";
import styled from "styled-components";
import { colors } from "@/utils";
import { MapIcon } from "@/assets";
import { MapButtonI } from "@/interface";

export function MapButton({ variant = "primary", ...rest }: MapButtonI) {
  return (
    <Button className={variant || ""} {...rest}>
      <MapIcon />
      {"Manzil"}
      <TypoBtn className="typo-btn">{"xarita"}</TypoBtn>
    </Button>
  );
}

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  width: fit-content;
  padding: 8px 16px;
  border-radius: 100px;
  cursor: pointer;

  font-size: 12px;
  font-weight: 500;
  line-height: 1.57;
  transition: all 0.3s ease;

  svg path {
    transition: fill 0.3s ease;
  }

  .typo-btn {
    transition: all 0.3s ease;
  }

  &.primary {
    color: ${colors.black_100};
    border: 1px solid ${colors.black_100};

    svg path {
      fill: ${colors.black_75};
    }

    .typo-btn {
      color: ${colors.black_50};
      background-color: ${colors.neo_2};
    }
  }

  &.secondary {
    color: ${colors.white};
    border: 1px solid ${colors.white};
    border-radius: 12px;
    padding-inline: 10px;

    svg path {
      fill: ${colors.white};
    }

    .typo-btn {
      color: ${colors.black_100};
      background-color: ${colors.white};
    }
  }

  &:hover {
    color: ${colors.primary_100};
    border-color: ${colors.primary_100};

    svg path {
      fill: ${colors.primary_100};
    }

    .typo-btn {
      color: ${colors.white};
      background-color: ${colors.primary_100};
    }
  }
`;

const TypoBtn = styled.button`
  font-size: 12px;
  font-weight: 500;
  line-height: 1.57;
  padding: 7px 14px;
  border-radius: 8px;
  transition: all 0.3 ease;
  cursor: pointer;
`;
