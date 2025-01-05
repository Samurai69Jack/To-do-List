import React from 'react';
import { Menu, X } from 'lucide-react';
import NavLink from './navigation/NavLink';
import MobileNavLink from './navigation/MobileNavLink';
import SocialLink from './navigation/SocialLink';
import { socialLinks } from '../config/socialLinks';

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-purple-500 hover:text-purple-400 transition-colors">
            AV
          </a>
          
          <div className="hidden md:flex space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="hidden md:flex space-x-4">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.id}
                href={link.href}
                icon={<link.icon />}
                label={link.label}
              />
            ))}
          </div>

          <button 
            className="md:hidden text-white hover:text-purple-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>Home</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>About</MobileNavLink>
            <MobileNavLink href="#skills" onClick={() => setIsOpen(false)}>Skills</MobileNavLink>
            <MobileNavLink href="#experience" onClick={() => setIsOpen(false)}>Experience</MobileNavLink>
            <MobileNavLink href="#certifications" onClick={() => setIsOpen(false)}>Certifications</MobileNavLink>
            <MobileNavLink href="#projects" onClick={() => setIsOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>Contact</MobileNavLink>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;