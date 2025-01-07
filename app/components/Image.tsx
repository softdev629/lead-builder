import React from 'react';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const Image: React.FC<ImageProps> = ({ 
  src, 
  alt, 
  width, 
  height 
}) => {
  return (
    <img
      src={src || 'https://via.placeholder.com/200'}
      alt={alt}
      width={width}
      height={height}
    />
  );
}; 