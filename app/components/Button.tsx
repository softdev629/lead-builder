import React from 'react';

interface ButtonProps {
  text: string;
  backgroundColor: string;
  color: string;
  padding: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  text, 
  backgroundColor, 
  color, 
  padding 
}) => {
  return (
    <button
      style={{ backgroundColor, color, padding }}
    >
      {text}
    </button>
  );
}; 