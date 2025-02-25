import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'disabled';
}

const VARIANTS = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  disabled: 'btn-disabled'
};

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  disabled = variant === 'disabled',
  children,
  ...props
}) => {
  const classNames = VARIANTS[variant];
  return (
    <button className={`btn ${classNames}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;
