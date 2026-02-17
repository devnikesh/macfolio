import { ArrowLeft, ArrowRight, RotateCw, Lock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const bookmarks = [
  { name: "GitHub", url: "github.com/nikesh" },
  { name: "LinkedIn", url: "linkedin.com/in/nikesh" },
  { name: "Portfolio", url: "nikesh.dev" },
];

export const BrowserWindow = () => {
  return (
    <div className="h-full flex flex-col">
      {/* Browser toolbar */}
      <div className="flex items-center gap-2 p-2 bg-secondary/30 border-b border-border">
        <div className="flex items-center gap-1">
          <button className="p-1.5 rounded hover:bg-secondary text-muted-foreground">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-secondary text-muted-foreground">
            <ArrowRight className="w-4 h-4" />
          </button>
          <button className="p-1.5 rounded hover:bg-secondary text-muted-foreground">
            <RotateCw className="w-4 h-4" />
          </button>
        </div>
        
        <div className="flex-1 flex items-center gap-2 px-3 py-1.5 bg-secondary/50 rounded-lg">
          <Lock className="w-3.5 h-3.5 text-green-400" />
          <span className="text-sm text-muted-foreground">nikesh.dev</span>
        </div>
        
        <button className="p-1.5 rounded hover:bg-secondary text-muted-foreground">
          <Star className="w-4 h-4" />
        </button>
      </div>

      {/* Bookmarks bar */}
      <div className="flex items-center gap-2 px-2 py-1.5 bg-secondary/20 border-b border-border">
        {bookmarks.map((bookmark) => (
          <Badge
            key={bookmark.name}
            variant="secondary"
            className="cursor-pointer hover:bg-secondary text-xs"
          >
            {bookmark.name}
          </Badge>
        ))}
      </div>

      {/* Browser content */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-background to-secondary/30">
        <div className="text-center space-y-6 animate-fade-in">
          <div className="w-32 h-32 mx-auto rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl animate-float">
            <span className="text-6xl font-bold text-white">N</span>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">nikesh.dev</h1>
            <p className="text-muted-foreground mt-2">Web Developer Portfolio</p>
          </div>
          <div className="flex justify-center gap-4">
            <Badge className="bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 cursor-pointer">
              View Projects
            </Badge>
            <Badge className="bg-accent/20 text-accent border-accent/30 hover:bg-accent/30 cursor-pointer">
              Contact Me
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};
