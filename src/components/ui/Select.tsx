import React from 'react';

interface SelectProps {
  options: string[];
  selected: string;
  onChange: (selected: string) => void;
}

const Select: React.FC<SelectProps> = ({ options, selected, onChange }) => {
  const handleRenderOptions = () => {
    return options.map((option) => {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      );
    });
  };

  return (
    <select
      className="select select-bordered w-full max-w-xs"
      value={selected}
      onChange={(e) => onChange(e.target.value)}
    >
      <option disabled selected>
        Click to select
      </option>
      {handleRenderOptions()}
    </select>
  );
};

export default Select;
