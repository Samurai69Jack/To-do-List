import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
  >
    {children}
  </a>
);

export default NavLink;