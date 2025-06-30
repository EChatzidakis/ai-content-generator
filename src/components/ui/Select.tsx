'use client';
import React from 'react';
import styled from 'styled-components';
import {
  Select as MuiSelect,
  MenuItem,
  FormControl as MuiFormControl,
  InputLabel as MuiInputLabel,
  SelectChangeEvent,
} from '@mui/material';

// -------------------------------------------------------------------------
// Types
// -------------------------------------------------------------------------

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps {
  options: SelectOption[];
  selected: string;
  onChange: (selected: string) => void;
  label?: string;
  disabled?: boolean;
}

// -------------------------------------------------------------------------
// Theme-aware wrappers
// -------------------------------------------------------------------------

const FormControl = styled(MuiFormControl)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

const InputLabel = styled(MuiInputLabel)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.textSubtle || theme.colors.text};

  &.Mui-focused {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const StyledSelect = styled(MuiSelect)`
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.surface};
  font-size: ${({ theme }) => theme.fontSizes.base};

  .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.border};
    transition: border-color 0.2s ease;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ theme }) => theme.colors.primary};
    border-width: 2px;
  }
`;

// -------------------------------------------------------------------------
// Component
// -------------------------------------------------------------------------

const SelectComponent: React.FC<SelectProps> = ({
  options,
  selected,
  onChange,
  label,
  disabled = false,
}) => (
  <FormControl variant="outlined" size="small" disabled={disabled}>
    {label && <InputLabel>{label}</InputLabel>}
    <StyledSelect
      value={selected}
      label={label}
      onChange={(e: SelectChangeEvent<unknown>) =>
        onChange(e.target.value as string)
      }
    >
      {options.map(({ value, label }) => (
        <MenuItem key={value} value={value}>
          {label}
        </MenuItem>
      ))}
    </StyledSelect>
  </FormControl>
);

export const Select = SelectComponent;
