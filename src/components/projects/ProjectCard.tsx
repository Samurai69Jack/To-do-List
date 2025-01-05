import React from 'react';
import { Github } from 'lucide-react';
import { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="group bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.github && (
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>View Source</span>
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;