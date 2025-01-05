import React from 'react';
import { Award } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Python Programming Course',
      issuer: 'Coding Ninjas',
      icon: Award
    },
    {
      title: 'Web Development Course',
      issuer: 'Internshala',
      icon: Award
    },
    {
      title: 'ASP.NET Core',
      issuer: 'Microsoft',
      icon: Award
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Certifications
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <cert.icon className="w-8 h-8 text-purple-500" />
                <div>
                  <h3 className="text-lg font-semibold text-white">{cert.title}</h3>
                  <p className="text-gray-400">{cert.issuer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;