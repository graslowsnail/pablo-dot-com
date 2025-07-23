"use client"

import PostCard from "@/components/post-card"
import { Post } from "@/lib/notion"

interface BlogsGridProps {
  posts: Post[]
}

export default function BlogsGrid({ posts }: BlogsGridProps) {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Blog Posts Header */}
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-black mb-6">LATEST POSTS</h2>
        <p className="text-gray-600">
          My thoughts on tech, development, and building things
        </p>
      </div>
      
      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard key={post.id} post={post} />
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