import React from 'react';

interface TextProps {
  content: string;
  fontSize: string;
  color: string;
}

export const Text: React.FC<TextProps> = ({ 
  content, 
  fontSize, 
  color 
}) => {
  return (
    <p style={{ fontSize, color }}>
      {content}
    </p>
  );
}; 