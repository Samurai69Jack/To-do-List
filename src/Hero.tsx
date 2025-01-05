import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-900 text-white relative">
      <div className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Hi, I'm <span className="text-purple-500">Archit Verma</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 animate-fade-in-delay">
              Full Stack Developer
            </p>
            <div className="flex justify-center md:justify-start space-x-6 animate-fade-in-delay-2">
              <button 
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105"
              >
                View Projects
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-purple-500 text-purple-500 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>
          </div>
          
          <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center animate-fade-in-delay">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-64 rounded-full overflow-hidden ring-4 ring-purple-500/50">
                <img
                  src="/profile.jpg"
                  alt="Archit Verma"
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div 
          onClick={() => scrollToSection('skills')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        >
          <ArrowDown className="text-purple-500" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;