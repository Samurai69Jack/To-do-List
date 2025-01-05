import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
}

const SectionTitle = ({ children }: SectionTitleProps) => (
  <h2 className="text-3xl font-bold text-center text-white mb-16">
    {children}
  </h2>
);

export default SectionTitle;