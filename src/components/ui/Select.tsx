import React from 'react';
import { Select as MUISelect, MenuItem, FormControl, InputLabel } from '@mui/material';

interface SelectProps {
  options: string[];
  selected: string;
  onChange: (selected: string) => void;
  label?: string;
}

const SelectComponent: React.FC<SelectProps> = ({ options, selected, onChange, label }) => {
  return (
    <FormControl fullWidth variant="outlined" size="small" sx={{ pb: 2 }}>
      {label && <InputLabel>{label}</InputLabel>}
      <MUISelect
        value={selected}
        label={label}
        onChange={(e) => onChange(e.target.value as string)}
      >
        {options.map((option) => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  );
};

export const Select = SelectComponent;
