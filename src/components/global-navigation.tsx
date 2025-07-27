"use client"

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import LoadingSpinner from "./loading-spinner";

type SectionType = "whoami" | "projects" | "blogs" | "contact";

const getSectionDisplayName = (section: SectionType): string => {
  switch (section) {
    case "whoami":
      return "about me";
    case "projects":
      return "projects";
    case "blogs":
      return "blogs";
    case "contact":
      return "contact";
    default:
      return section;
  }
};

export default function GlobalNavigation() {
  const [isLoading, setIsLoading] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionType>("whoami");
  const pathname = usePathname();
  
  // Determine if we're on a blog post page
  const isBlogPost = pathname.startsWith('/posts/');
  
  // Reset loading state when pathname changes (navigation complete)
  useEffect(() => {
    setIsLoading(false);
  }, [pathname]);
  
  // Get the current section based on pathname or session storage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isBlogPost) {
        // On blog post pages, we don't show the terminal header
        return;
      }
      
      // For home page, get the active section from session storage or default to "whoami"
      const savedSection = sessionStorage.getItem('activeSection') as SectionType;
      if (savedSection && ["whoami", "projects", "blogs", "contact"].includes(savedSection)) {
        setActiveSection(savedSection);
      } else {
        setActiveSection("whoami");
      }
    }
  }, [pathname, isBlogPost]);
  
  // Listen for session storage changes to update the active section
  useEffect(() => {
    const handleStorageChange = () => {
      if (typeof window !== 'undefined' && !isBlogPost) {
        const savedSection = sessionStorage.getItem('activeSection') as SectionType;
        if (savedSection && ["whoami", "projects", "blogs", "contact"].includes(savedSection)) {
          setActiveSection(savedSection);
        }
      }
    };

    // Listen for storage events (when sessionStorage changes in other tabs/windows)
    window.addEventListener('storage', handleStorageChange);
    
    // Also listen for custom events for same-tab updates
    const handleCustomStorageChange = (e: CustomEvent) => {
      if (e.detail.key === 'activeSection' && !isBlogPost) {
        const newSection = e.detail.value as SectionType;
        if (["whoami", "projects", "blogs", "contact"].includes(newSection)) {
          setActiveSection(newSection);
        }
      }
    };
    
    window.addEventListener('sessionStorageChange', handleCustomStorageChange as EventListener);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('sessionStorageChange', handleCustomStorageChange as EventListener);
    };
  }, [isBlogPost]);
  
  const handleBackClick = () => {
    if (typeof window !== 'undefined') {
      // Set flags for returning from blog post
      sessionStorage.setItem('returnFromBlog', 'true');
      sessionStorage.setItem('activeSection', 'blogs');
      
      // Store the current blog slug to focus on it later
      const slug = pathname.split('/').pop();
      if (slug) {
        sessionStorage.setItem('focusedBlog', slug);
      }
      
      // Only show loading spinner briefly during navigation
      setIsLoading(true);
    }
  };

  const handleHomeClick = () => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 xl:px-8 2xl:px-12 py-4 xl:py-6 2xl:py-8">
          {isBlogPost ? (
            <Link 
              href="/"
              onClick={handleBackClick}
              className="inline-flex items-center gap-2 font-mono text-sm xl:text-base text-gray-500 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              ~/ Back to Home
            </Link>
          ) : (
            <div className="inline-flex items-center gap-2 font-mono text-sm xl:text-base text-gray-500">
              ~/
              <button
                onClick={handleHomeClick}
                className="underline hover:text-black transition-colors cursor-pointer"
              >
                home
              </button>
              / {getSectionDisplayName(activeSection)}
              <span className="animate-pulse">    █</span>
            </div>
          )}
        </div>
      </nav>
    </>
  );
} 