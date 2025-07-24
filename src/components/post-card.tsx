import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { useState } from "react";
import { Post, getWordCount } from "@/lib/notion";
import { calculateReadingTime } from "@/lib/utils";
import { Clock, Calendar } from "lucide-react";
import LoadingSpinner from "./loading-spinner";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const wordCount = post.content ? getWordCount(post.content) : 0;
  const readingTime = calculateReadingTime(wordCount);

  const handlePostClick = () => {
    if (typeof window !== 'undefined') {
      // Set flags for navigating to blog post
      sessionStorage.setItem('returnFromBlog', 'true');
      sessionStorage.setItem('activeSection', 'blogs');
      sessionStorage.setItem('focusedBlog', post.slug);
      setIsLoading(true);
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <Link href={`/posts/${post.slug}`} onClick={handlePostClick} className="block h-full">
        <div className="group h-full p-4 xl:p-6 2xl:p-8 transition-all duration-200 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 flex flex-col">
          <div className="space-y-4 flex-1 flex flex-col">
            {/* Cover Image */}
            {post.coverImage && (
              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
                {post.category && (
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 text-xs bg-white text-black border border-gray-200">
                      {post.category}
                    </span>
                  </div>
                )}
              </div>
            )}
            
            {/* Meta Information */}
            <div className="flex items-center gap-4 text-xs xl:text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3 w-3 xl:h-4 xl:w-4" />
                <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3 w-3 xl:h-4 xl:w-4" />
                <span>{readingTime}</span>
              </div>
            </div>
            
            {/* Title */}
            <h2 className="font-mono text-lg xl:text-xl 2xl:text-2xl font-semibold text-black group-hover:text-gray-700 transition-colors">
              {post.title}
            </h2>
            
            {/* Description - takes up remaining space */}
            <div className="flex-1">
              {post.description && (
                <p className="text-gray-600 text-sm xl:text-base 2xl:text-lg line-clamp-3 leading-relaxed">
                  {post.description}
                </p>
              )}
            </div>
            
            {/* Bottom content - Author and Tags */}
            <div className="space-y-3 mt-auto">
              {/* Author */}
              {post.author && (
                <p className="text-xs xl:text-sm text-gray-500">By {post.author}</p>
              )}
              
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 text-xs xl:text-sm bg-gray-100 text-gray-700 border border-gray-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
