"use client";
import styled from "styled-components";
import { useState } from "react";
import { colors } from "@/utils";
import { SelectI } from "@/interface";
import { ArrowDownIcon } from "@/assets";
import { MenuItem, Select } from "@mui/material";

export function AppSelect({
  options,
  labelKey,
  valueKey,
  defaultValue = options[0],
}: SelectI) {
  const [selected, setSelected] = useState<any>(defaultValue);

  return (
    <StyledSelect
      IconComponent={ArrowDownIcon}
      renderValue={() => (
        <Label>{labelKey ? selected[labelKey] : selected}</Label>
      )}
      defaultValue={valueKey ? selected[valueKey] : selected}
    >
      {options.map((option, index) =>
        option !== selected ? (
          <StyledMenuItem
            key={index}
            value={valueKey ? option[valueKey] : option}
            onClick={() => setSelected(option)}
          >
            {labelKey ? option[labelKey] : option}
          </StyledMenuItem>
        ) : null
      )}
    </StyledSelect>
  );
}

const StyledSelect = styled(Select)`
  width: fit-content;

  .MuiSelect {
    &-select {
      padding: 0;
    }

    &-icon {
      top: 50%;
      transform: translateY(-50%);
    }
  }

  fieldset {
    display: none;
  }
`;

const Label = styled.h5`
  font-size: 1rem;
  font-weight: 400;
  line-height: 125%;
  color: ${colors.black_100};
`;

const StyledMenuItem = styled(MenuItem)`
  font-size: 1rem;
  font-weight: 400;
  line-height: 125%;
  color: ${colors.black_100};
`;
