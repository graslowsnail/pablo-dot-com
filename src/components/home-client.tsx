"use client"

import { useState } from "react";
import { Post } from "@/lib/notion";
import NavigationGrid from "@/components/navigation-grid";
import WhoAmI from "@/components/who-am-i";
import ProjectsGrid from "@/components/projects-grid";
import ContactInfo from "@/components/contact-info";
import BlogsGrid from "@/components/blogs-grid";

type SectionType = "whoami" | "projects" | "blogs" | "contact";

interface HomeClientProps {
  posts: Post[];
  projects: any[];
}

export default function HomeClient({ posts, projects }: HomeClientProps) {
  const [activeSection, setActiveSection] = useState<SectionType>("whoami");

  const renderSection = () => {
    switch (activeSection) {
      case "whoami":
        return <WhoAmI />;
      case "contact":
        return <ContactInfo />;
      case "projects":
        return <ProjectsGrid projects={projects} />;
      case "blogs":
        return <BlogsGrid posts={posts} />;
      default:
        return <WhoAmI />;
    }
  };

  return (
    <>
      {/* Navigation Section */}
      <NavigationGrid 
        activeSection={activeSection} 
        onSectionChange={setActiveSection} 
      />

      {/* Dynamic Section Content */}
      <div>
        <div 
          key={activeSection} 
          className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out"
        >
          {renderSection()}
        </div>
      </div>
    </>
  );
} 