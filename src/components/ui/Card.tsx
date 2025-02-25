import React, { JSX } from 'react';
import Button from './Button';
interface CardProps {
  children?: React.ReactNode;
  title?: string;
  content?: string;
  hasButton?: boolean;
  isButtonDisabled?: boolean;
  buttonName?: string;
  onButtonClick?: () => void;
  hasBadge?: boolean;
  badgeContent?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  children,
  content = null,
  className = '',
  hasButton,
  isButtonDisabled = true,
  buttonName = 'Open',
  onButtonClick = () => {},
  hasBadge,
  badgeContent
}) => {
  const handleRenderCardTitle: () => JSX.Element | null = () => {
    if (!title) {
      return null;
    }
    if (hasBadge) {
      return (
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{badgeContent}</div>
        </h2>
      );
    }
    return <h2 className="card-title">{title}</h2>;
  };

  const handleRenderCardAction: () => JSX.Element | null = () => {
    if (!hasButton) {
      return null;
    }
    const variant = isButtonDisabled ? 'disabled' : 'primary';
    return (
      <div className="card-actions justify-end">
        <Button
          variant={variant}
          disabled={isButtonDisabled}
          onClick={onButtonClick}
        >
          {buttonName}
        </Button>
      </div>
    );
  };

  const handleRenderContent: () => React.ReactNode | JSX.Element | null = () => {
    if (!content) {
      return children;
    }

    return <p>{content}</p>;
  };

  return (
    <div className={`card w-[75vw] bg-base-100 shadow-xl ${className}`}>
      <div className="card-body">
        {handleRenderCardTitle()}
        {handleRenderContent()}
        {handleRenderCardAction()}
      </div>
    </div>
  );
};

export default Card;
