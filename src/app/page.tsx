import { fetchPublishedPosts, getPost, Post } from "@/lib/notion";
import AsciiPortfolio from "@/components/ascii-portfolio";
import HomeClient from "@/components/home-client";

const projects = [
  {
    title: "Enhanced MET Museum API",
    description: "484K+ museum objects with direct image URLs. Alternative to official MET API.",
    tech: ["JavaScript", "API", "Data Processing"],
    github: "https://github.com/graslowsnail/metmuseum-api-dump-enhanced",
    live: null
  },
  {
    title: "X-Rain Inventory Tracker",
    description: "Inventory management system built for X-Rain Irrigation company.",
    tech: ["JavaScript", "Frontend", "Business App"],
    github: "https://github.com/graslowsnail/Inventory-tracker-xrain",
    live: null
  },
  {
    title: "Photo Portfolio",
    description: "Personal photography showcase and portfolio website.",
    tech: ["JavaScript", "Portfolio", "Photography"],
    github: "https://github.com/graslowsnail/photo-port",
    live: "https://graslowsnail.com"
  },
  {
    title: "Password Generator",
    description: "Secure password generator with customizable parameters.",
    tech: ["JavaScript", "Security", "Utility"],
    github: "https://github.com/graslowsnail/Password-Generator",
    live: null
  }
];

async function getPosts(): Promise<Post[]> {
  const posts = await fetchPublishedPosts();
  const allPosts = await Promise.all(
    posts.results.map((post) => getPost(post.id))
  );
  return allPosts.filter((post): post is Post => post !== null).slice(0, 3); // Only show 3 latest posts
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="space-y-12 py-4">
      {/* ASCII Hero Section */}
      <AsciiPortfolio />

      {/* Client Component with State Management */}
      <HomeClient posts={posts} projects={projects} />
    </div>
  );
}
