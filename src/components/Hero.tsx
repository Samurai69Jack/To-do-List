import React from 'react';
import { ArrowDown } from 'lucide-react';
import Container from './layout/Container';
import Button from './ui/Button';
import { scrollToSection } from '../utils/scroll';

const Hero = () => {
  return (
    <section id="home" className="min-h-[80vh] flex items-center justify-center bg-gray-900 text-white relative">
      <Container className="py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">Archit Verma</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-12 animate-fade-in-delay">
            Full Stack Developer
          </p>
          <div className="flex justify-center space-x-6 animate-fade-in-delay-2">
            <Button onClick={() => scrollToSection('projects')}>
              View Projects
            </Button>
            <Button variant="outline" onClick={() => scrollToSection('contact')}>
              Contact Me
            </Button>
          </div>
        </div>
        
        <div 
          onClick={() => scrollToSection('skills')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ArrowDown className="text-purple-500" size={32} />
        </div>
      </Container>
    </section>
  );
};

export default Hero;