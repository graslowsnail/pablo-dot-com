"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
}

interface ProjectsCarouselProps {
  projects: Project[];
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' }); // 288px (w-72) + 12px spacing
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' }); // 288px (w-72) + 12px spacing
    }
  };

  return (
    <div className="md:hidden">
      {/* Navigation Container with proper spacing */}
      <div className="relative px-8">
        <div 
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex space-x-3 pb-4 px-1" style={{ scrollSnapType: 'x mandatory' }}>
            {projects.map((project, index) => (
              <Card key={index} className="flex-none w-72 min-h-[200px]" style={{ scrollSnapAlign: 'start' }}>
                <CardHeader className="pb-2 px-4 pt-4">
                  <CardTitle className="flex items-start justify-between text-base leading-tight">
                    <span className="flex-1 pr-2">{project.title}</span>
                    <div className="flex space-x-1 flex-shrink-0">
                      <Button variant="ghost" size="sm" className="h-7 w-7 p-0" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-3 h-3" />
                        </a>
                      </Button>
                      {project.live && (
                        <Button variant="ghost" size="sm" className="h-7 w-7 p-0" asChild>
                          <a href={project.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardTitle>
                  <CardDescription className="text-xs leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0 px-4 pb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows - positioned outside the scroll area */}
        <Button
          variant="outline"
          size="sm"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg h-8 w-8 p-0"
          onClick={scrollLeft}
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-background shadow-lg h-8 w-8 p-0"
          onClick={scrollRight}
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
} 