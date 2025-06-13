'use client';
import React from 'react';
import { Select as MUISelect, MenuItem, FormControl, InputLabel } from '@mui/material';

export interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  selected: string;
  onChange: (selected: string) => void;
  label?: string;
  disabled?: boolean;
}

const SelectComponent: React.FC<SelectProps> = ({ options, selected, onChange, label, disabled = false }) => {
  return (
    <FormControl fullWidth variant="outlined" size="small" sx={{ pb: 2 }}>
      {label && <InputLabel>{label}</InputLabel>}
      <MUISelect
        value={selected}
        label={label}
        onChange={(e) => onChange(e.target.value as string)}
        disabled={disabled}
      >
        {options.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export const Select = SelectComponent;
