import React, { JSX } from 'react';
import Button from './Button';

/**
 * Props for the Card component.
 * @typedef {Object} CardProps
 * @property {React.ReactNode} [children] - The children elements to be rendered inside the card.
 * @property {string} [title] - The title of the card.
 * @property {string} [content] - The content of the card.
 * @property {boolean} [hasButton] - Whether the card has a button.
 * @property {boolean} [isButtonDisabled] - Whether the button is disabled.
 * @property {string} [buttonName] - The name of the button.
 * @property {() => void} [onButtonClick] - The function to call when the button is clicked.
 * @property {boolean} [hasBadge] - Whether the card has a badge.
 * @property {string} [badgeContent] - The content of the badge.
 * @property {string} [className] - Additional class names for the card.
 */
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
  widthClass?: string;
}

/**
 * Card component to display content with optional title, button, and badge.
 * 
 * @param {CardProps} props - The props for the Card component.
 * @returns {JSX.Element} The rendered Card component.
 */
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
  badgeContent,
  widthClass
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

  const cardWidth = widthClass ? widthClass : 'w-[75vw]';

  return (
    <div className={`card ${cardWidth} bg-base-100 shadow-xl ${className}`}>
      <div className="card-body">
        {handleRenderCardTitle()}
        {handleRenderContent()}
        {handleRenderCardAction()}
      </div>
    </div>
  );
};

export default Card;
