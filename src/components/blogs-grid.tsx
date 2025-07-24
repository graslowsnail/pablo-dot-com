"use client"

import { useEffect, useRef } from "react";
import PostCard from "@/components/post-card"
import { Post } from "@/lib/notion"

interface BlogsGridProps {
  posts: Post[]
}

export default function BlogsGrid({ posts }: BlogsGridProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for focused blog and scroll to it
    const focusedBlog = sessionStorage.getItem('focusedBlog');
    if (focusedBlog) {
      setTimeout(() => {
        const focusedElement = document.querySelector(`[data-blog-slug="${focusedBlog}"]`);
        if (focusedElement) {
          focusedElement.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }, 100); // Small delay to ensure rendering is complete
      
      // Clear the focused blog after a short time
      setTimeout(() => {
        sessionStorage.removeItem('focusedBlog');
      }, 3000);
    }
  }, []);

  const focusedBlog = typeof window !== 'undefined' ? sessionStorage.getItem('focusedBlog') : null;

  return (
    <div className="max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto p-6 xl:p-8 2xl:p-12 space-y-8 xl:space-y-12">
      {/* Blog Posts Header */}
      <div className="space-y-6 xl:space-y-8">
        <h2 className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-black mb-6">BLOGS</h2>
        <p className="text-gray-600 text-sm xl:text-base 2xl:text-lg">
          My thoughts on tech, development, building things, and life.
        </p>
      </div>
      
      {/* Blog Posts Grid */}
      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-6 2xl:gap-8">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div 
              key={post.id} 
              data-blog-slug={post.slug}
              className={`h-full transition-all duration-1000 ${
                focusedBlog === post.slug 
                  ? 'ring-2 ring-black ring-offset-4' 
                  : ''
              }`}
            >
              <PostCard post={post} />
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-8">
            <div className="text-gray-500">No posts available yet</div>
            <div className="font-mono text-sm text-gray-400 mt-2">
              <span className="text-green-600">$ </span>
              Stay tuned for upcoming content
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 