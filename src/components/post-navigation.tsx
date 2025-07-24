"use client"

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LoadingSpinner from "./loading-spinner";

export default function PostNavigation() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  
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
      setIsLoading(true);
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto px-6 xl:px-8 2xl:px-12 py-4 xl:py-6 2xl:py-8">
          <Link 
            href="/"
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 font-mono text-sm xl:text-base text-gray-500 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            ~/ Back to Home
          </Link>
        </div>
      </nav>
    </>
  );
} 