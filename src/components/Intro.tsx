import React from 'react';
import Container from './layout/Container';
import { Code2, Server, Laptop } from 'lucide-react';

const Intro = () => {
  const highlights = [
    {
      icon: Code2,
      text: 'Full Stack Developer',
      color: 'text-blue-400'
    },
    {
      icon: Server,
      text: 'Backend Specialist',
      color: 'text-green-400'
    },
    {
      icon: Laptop,
      text: 'Frontend Expert',
      color: 'text-purple-400'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <Container>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main intro text with gradient border */}
          <div className="relative p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
            <div className="bg-gray-900 p-8 rounded-xl">
              <p className="text-lg text-gray-300 leading-relaxed">
                Hi there! I'm <span className="text-purple-400 font-semibold">Archit Verma</span>, 
                an enthusiastic entry-level Full Stack Developer with a Bachelor's in Electronics 
                and Telecommunications from SPPU (2023). I'm passionate about web development 
                and have hands-on experience with frameworks like Django, Laravel, and Node.js 
                for the back end, and React.js for the front end.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm 
                         border border-gray-700 hover:border-gray-600 
                         transform hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gray-800 ${item.color}`}>
                    <item.icon size={24} />
                  </div>
                  <span className={`font-medium ${item.color}`}>
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Intro;