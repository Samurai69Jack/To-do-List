import React from 'react';
import { GraduationCap, School } from 'lucide-react';
import Container from './layout/Container';
import SectionTitle from './ui/SectionTitle';

const About = () => {
  const education = [
    {
      level: 'Bachelor of Engineering',
      field: 'Electronics and Telecommunications',
      institution: 'International Institute of Information Technology Pune',
      university: 'SPPU',
      cgpa: '8.43',
      period: '2019-2023',
      icon: GraduationCap
    },
    {
      level: 'High School',
      field: 'KV no.1 AFS Pune',
      percentage: '70%',
      period: '2018',
      icon: School
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <div className="max-w-3xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-gray-900 rounded-xl p-8 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start space-x-4">
                <edu.icon className="w-8 h-8 text-purple-500 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-white">{edu.level}</h3>
                  <p className="text-purple-400">{edu.field}</p>
                  {edu.institution && (
                    <p className="text-gray-400">{edu.institution}</p>
                  )}
                  {edu.university && (
                    <p className="text-gray-400">University: {edu.university}</p>
                  )}
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-gray-400">{edu.period}</span>
                    {edu.cgpa && (
                      <>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">CGPA: {edu.cgpa}</span>
                      </>
                    )}
                    {edu.percentage && (
                      <>
                        <span className="text-gray-500">•</span>
                        <span className="text-gray-400">Score: {edu.percentage}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default About;