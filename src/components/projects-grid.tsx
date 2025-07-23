"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="h-full border border-gray-300 hover:border-green-600 transition-colors duration-200">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                {project.title}
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                  {project.live && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
} 