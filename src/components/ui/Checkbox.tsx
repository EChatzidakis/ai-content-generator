import React from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">{label}</span>
        <input
          type="checkbox"
          checked={checked}
          className="checkbox-primary checkbox"
          onChange={(e) => onChange(e.target.checked)}
        />
      </label>
    </div>
  );
};

export default Checkbox;