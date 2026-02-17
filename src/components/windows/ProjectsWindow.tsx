import { ExternalLink, Github, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    name: "Portfolio Website",
    description: "This interactive macOS-style portfolio built with React, TypeScript, and Tailwind CSS",
    tags: ["React", "TypeScript", "Tailwind"],
    stars: 12,
    link: "#",
    github: "#",
  },
  {
    id: 2,
    name: "IELTS Battleground Arena",
    description: "IELTS Battle Arena is a full-stack competitive learning platform that gamifies IELTS exam preparation. Users can practise across five core skill categories — Vocabulary, Grammar, Reading, Writing, and Listening — through timed challenges and structured practice sessions, or go head-to-head against other players in real-time battles powered by WebSockets.",
    tags: ["React", "TypeScript", "TanStack Query", "Zod", "Node.js", "Express", "WebSockets", "MongoDB", "Mongoose", "TailwindCSS", "Framer Motion"],
    stars: 8,
    link: "#",
    github: "#",
  },
  {
    id: 3,
    name: "E-Commerce Dashboard",
    description: "Admin dashboard for e-commerce with analytics and inventory management",
    tags: ["React", "Chart.js", "Shadcn"],
    stars: 15,
    link: "#",
    github: "#",
  },
  {
    id: 4,
    name: "Chat Application",
    description: "Real-time chat app with Socket.io and MongoDB for message persistence",
    tags: ["Socket.io", "Node.js", "React"],
    stars: 20,
    link: "#",
    github: "#",
  },
];

export const ProjectsWindow = () => {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">My Projects</h2>
        <span className="text-sm text-muted-foreground">{projects.length} repositories</span>
      </div>
      
      <div className="grid gap-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="glass rounded-lg p-4 hover:bg-secondary/50 transition-colors animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-foreground hover:text-primary transition-colors cursor-pointer">
                  {project.name}
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs bg-secondary/80"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 ml-4">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">{project.stars}</span>
                </div>
                <a
                  href={project.github}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={project.link}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
