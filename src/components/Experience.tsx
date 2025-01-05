import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-900 rounded-xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-start space-x-4">
              <Briefcase className="w-8 h-8 text-purple-500 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-white">Web Development Intern</h3>
                <p className="text-purple-400 mb-2">SourceCodeTechnologies</p>
                <p className="text-gray-400">Sept 2023 - Feb 2024</p>
                <ul className="list-disc list-inside text-gray-400 mt-4 space-y-2">
                  <li>Developed and maintained web applications using modern technologies</li>
                  <li>Collaborated with team members on various projects</li>
                  <li>Gained hands-on experience with full-stack development</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;