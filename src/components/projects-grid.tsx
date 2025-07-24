"use client"

import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

interface Project {
  title: string
  description: string
  tech: string[]
  github: string
  live: string | null
}

interface ProjectsGridProps {
  projects: Project[]
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto p-6 xl:p-8 2xl:p-12 space-y-8 xl:space-y-12">
      <div className="space-y-6 xl:space-y-8">
        <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-black mb-6">Projects</h2>
        <p className="text-gray-600 text-sm xl:text-base 2xl:text-lg">
          A collection of projects I've built to solve real-world problems
        </p>
      </div>
      
      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:gap-6 2xl:gap-8">
        {projects.map((project, index) => (
          <div key={index} className="group p-4 xl:p-6 2xl:p-8 transition-all duration-200 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50">
            <div className="space-y-4">
              {/* Title and Action Buttons */}
              <div className="flex items-start justify-between">
                <h3 className="font-mono text-lg xl:text-xl 2xl:text-2xl text-black font-semibold">
                  {project.title}
                </h3>
                <div className="flex space-x-2 ml-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-100 transition-colors"
                  >
                    <Github className="w-4 h-4 xl:w-5 xl:h-5 text-black" />
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 xl:w-5 xl:h-5 text-black" />
                    </a>
                  )}
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm xl:text-base 2xl:text-lg leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 text-xs xl:text-sm bg-gray-100 text-gray-700 border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 