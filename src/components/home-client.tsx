"use client"

import { useState, useEffect } from "react";
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

  // Load section only if returning from a blog post
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const returnFromBlog = sessionStorage.getItem('returnFromBlog');
      const isFromBlogReferrer = document.referrer.includes('/posts/');
      
      // Only use saved section if specifically returning from a blog post
      if (returnFromBlog === 'true' || isFromBlogReferrer) {
        const savedSection = sessionStorage.getItem('activeSection') as SectionType;
        if (savedSection && ["whoami", "projects", "blogs", "contact"].includes(savedSection)) {
          setActiveSection(savedSection);
        }
        
        // Clear the flag after using it
        sessionStorage.removeItem('returnFromBlog');
      }
      // For all other cases (fresh loads, refreshes, new tabs), stay with default "whoami"
    }
  }, []);

  // Save section to sessionStorage whenever it changes (for within-session navigation)
  const handleSectionChange = (section: SectionType) => {
    setActiveSection(section);
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('activeSection', section);
    }
  };

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
        onSectionChange={handleSectionChange} 
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