import { fetchPublishedPosts, getPost, Post } from "@/lib/notion";
import PostCard from "@/components/post-card";
import { ProjectsCarousel } from "@/components/projects-carousel";
import { Github, Linkedin, Instagram, ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

async function getPosts(): Promise<Post[]> {
  const posts = await fetchPublishedPosts();
  const allPosts = await Promise.all(
    posts.results.map((post) => getPost(post.id))
  );
  return allPosts.filter((post): post is Post => post !== null).slice(0, 3); // Only show 3 latest posts
}

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

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
          Hey, I'm Pablo.
        </h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
          I build things.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Brooklyn-based developer who loves creating — from code to cars to photos. 
          I'm passionate about building software that makes a difference.
        </p>
      </section>

      {/* Digital Footprint */}
      <section className="flex flex-col md:flex-row justify-center space-y-3 md:space-y-0 md:space-x-6">
        <Button variant="outline" size="sm" className="md:text-base md:px-6 md:py-3" asChild>
          <a href="https://github.com/graslowsnail" target="_blank" rel="noopener noreferrer">
            <Github className="w-4 h-4 mr-2 md:w-5 md:h-5" />
            GitHub
          </a>
        </Button>
        <Button variant="outline" size="sm" className="md:text-base md:px-6 md:py-3" asChild>
          <a href="https://www.linkedin.com/in/pablo-ramirez-5589b7260/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-4 h-4 mr-2 md:w-5 md:h-5" />
            LinkedIn
          </a>
        </Button>
        <Button variant="outline" size="sm" className="md:text-base md:px-6 md:py-3" asChild>
          <a href="https://www.instagram.com/graslowsnail/" target="_blank" rel="noopener noreferrer">
            <Instagram className="w-4 h-4 mr-2 md:w-5 md:h-5" />
            Photography
          </a>
        </Button>
        <Button variant="outline" size="sm" className="md:text-base md:px-6 md:py-3" asChild>
          <a href="https://graslowsnail.com" target="_blank" rel="noopener noreferrer">
            <ExternalLink className="w-4 h-4 mr-2 md:w-5 md:h-5" />
            Portfolio
          </a>
        </Button>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">
            A selection of things I've built and shipped
          </p>
        </div>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {project.title}
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                    {project.live && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Carousel */}
        <ProjectsCarousel projects={projects} />
      </section>

      {/* Latest Blog Posts */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-4">Latest Posts</h2>
            <p className="text-muted-foreground">
              My thoughts on tech, development, and building things
            </p>
          </div>
          <Button variant="outline" asChild>
            <Link href="/posts">
              View All Posts
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
