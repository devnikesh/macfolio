import { useState } from "react";
import { User, FolderGit2, Mail, Terminal, Globe } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface DockProps {
  onOpenWindow: (windowId: string) => void;
  openWindows: string[];
}

const dockItems = [
  { id: "about", icon: User, label: "About Me", color: "bg-gradient-to-br from-violet-500 to-purple-600" },
  { id: "projects", icon: FolderGit2, label: "Projects", color: "bg-gradient-to-br from-emerald-500 to-green-600" },
  { id: "contact", icon: Mail, label: "Contact", color: "bg-gradient-to-br from-amber-500 to-orange-600" },
  { id: "terminal", icon: Terminal, label: "Terminal", color: "bg-gradient-to-br from-slate-600 to-slate-800" },
  { id: "browser", icon: Globe, label: "Browser", color: "bg-gradient-to-br from-blue-500 to-cyan-600" },
];

export const Dock = ({ onOpenWindow, openWindows }: DockProps) => {
  const [bouncingIcon, setBouncingIcon] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setBouncingIcon(id);
    setTimeout(() => setBouncingIcon(null), 500);
    onOpenWindow(id);
  };

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40">
      <div className="dock">
        {dockItems.map((item) => (
          <Tooltip key={item.id}>
            <TooltipTrigger asChild>
              <button
                onClick={() => handleClick(item.id)}
                className={`dock-icon relative ${item.color} ${
                  bouncingIcon === item.id ? "animate-dock-bounce" : ""
                }`}
              >
                <item.icon className="w-7 h-7 text-white" />
                {openWindows.includes(item.id) && (
                  <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-foreground/60" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="top" className="bg-secondary border-border">
              <p>{item.label}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};
