import React from 'react';

interface TextareaProps {
  disabled?: boolean;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  disabled = false,
  placeholder = 'Ask away!',
  value = '',
  onChange = () => {},
  onSubmit = () => {}
}) => {
  const onEnterPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSubmit(value);
    }
  };

  return (
    <textarea
      className="textarea textarea-bordered w-full"
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyDown={onEnterPress}
      rows={3}
    />
  );
};

export default Textarea;
