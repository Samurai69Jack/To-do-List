import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => (
  <div className={`container mx-auto px-6 ${className}`}>
    {children}
  </div>
);

export default Container;