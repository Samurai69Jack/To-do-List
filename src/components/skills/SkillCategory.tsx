import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => (
  <div className="bg-gray-900 rounded-xl p-6 transform hover:scale-105 transition-all duration-300">
    <h3 className="text-xl font-semibold text-purple-500 mb-4">{title}</h3>
    <div className="space-y-3">
      {skills.map((skill) => (
        <div key={skill} className="bg-gray-800 rounded-lg p-3">
          <div className="flex items-center justify-between">
            <span className="text-gray-300">{skill}</span>
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default SkillCategory;