import React from 'react';
import SkillCategory from './skills/SkillCategory';

const Skills = () => {
  const skills = {
    Frontend: ['React', 'JavaScript', 'Bootstrap', 'Tailwind CSS'],
    Backend: ['Node.js', 'Django', 'Laravel', 'ASP.NET'],
    Database: ['MySQL', 'PostgreSQL']
  };

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-16">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {Object.entries(skills).map(([category, items]) => (
            <SkillCategory key={category} title={category} skills={items} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;