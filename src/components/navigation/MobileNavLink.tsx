import React from 'react';

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const MobileNavLink = ({ href, children, onClick }: MobileNavLinkProps) => (
  <a
    href={href}
    className="block text-gray-300 hover:text-purple-400 transition-colors duration-300"
    onClick={onClick}
  >
    {children}
  </a>
);

export default MobileNavLink;