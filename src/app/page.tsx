import { fetchPublishedPosts, getPost, Post } from "@/lib/notion";
import AsciiPortfolio from "@/components/ascii-portfolio";
import HomeClient from "@/components/home-client";

export const revalidate = 60;

const projects = [
  {
    title: "Photo Portfolio",
    description: "Personal photography showcase and portfolio website where users can buy physical prints of photos I have taken around the world",
    tech: ["JavaScript", "Portfolio", "Photography"],
    github: "https://github.com/graslowsnail/photo-port",
    live: "https://graslowsnail.com"
  },
  {
    title: "Enhanced MET Museum API",
    description: "Scraped 480k+ MET objects from the website to extract direct image URLs and richer artwork metadata missing from the official API. Stitched and cleaned the data into an improved dump, and built a backend with vector embeddings for semantic search.",
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
    title: "Over Employed(Godot game)",
    description: "Worked in a group to create a hectic fast paced game built with the Godot game engine. ",
    tech: ["GDScript", "Godot", "Fun"],
    github: "https://github.com/rknm-cell/over_employed",
    live: "https://tripple-p-games.itch.io/over-employed"
  }
];

async function getPosts(): Promise<Post[]> {
  const posts = await fetchPublishedPosts();
  const allPosts = await Promise.all(
    posts.results.map((post) => getPost(post.id))
  );
  return allPosts.filter((post): post is Post => post !== null);
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="space-y-6 py-4">
      {/* ASCII Hero Section */}
      <AsciiPortfolio />

      {/* Client Component with State Management */}
      <HomeClient posts={posts} projects={projects} />
    </div>
  );
}
