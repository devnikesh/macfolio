import { useState, useCallback } from "react";
import { FileText, FolderOpen } from "lucide-react";
import { MenuBar } from "@/components/desktop/MenuBar";
import { Dock } from "@/components/desktop/Dock";
import { Window } from "@/components/desktop/Window";
import { DesktopIcon } from "@/components/desktop/DesktopIcon";
import { AboutWindow } from "@/components/windows/AboutWindow";
import { ProjectsWindow } from "@/components/windows/ProjectsWindow";
import { ContactWindow } from "@/components/windows/ContactWindow";
import { TerminalWindow } from "@/components/windows/TerminalWindow";
import { BrowserWindow } from "@/components/windows/BrowserWindow";

interface WindowState {
  id: string;
  isOpen: boolean;
  zIndex: number;
}

const windowConfigs = {
  about: {
    title: "About Me",
    defaultPosition: { x: 120, y: 100 },
    defaultSize: { width: 650, height: 600 },
  },
  projects: {
    title: "Projects",
    defaultPosition: { x: 200, y: 120 },
    defaultSize: { width: 750, height: 680 },
  },
  contact: {
    title: "Contact",
    defaultPosition: { x: 280, y: 140 },
    defaultSize: { width: 450, height: 500 },
  },
  terminal: {
    title: "Terminal — nikesh@portfolio",
    defaultPosition: { x: 150, y: 130 },
    defaultSize: { width: 600, height: 400 },
  },
  browser: {
    title: "Safari — nikesh.dev",
    defaultPosition: { x: 180, y: 90 },
    defaultSize: { width: 700, height: 500 },
  },
};

const Index = () => {
  const [windows, setWindows] = useState<WindowState[]>([
    { id: "about", isOpen: false, zIndex: 1 },
    { id: "projects", isOpen: false, zIndex: 1 },
    { id: "contact", isOpen: false, zIndex: 1 },
    { id: "terminal", isOpen: false, zIndex: 1 },
    { id: "browser", isOpen: false, zIndex: 1 },
  ]);
  const [maxZIndex, setMaxZIndex] = useState(1);

  const openWindow = useCallback((id: string) => {
    setMaxZIndex((prev) => prev + 1);
    setWindows((prev) =>
      prev.map((w) =>
        w.id === id ? { ...w, isOpen: true, zIndex: maxZIndex + 1 } : w
      )
    );
  }, [maxZIndex]);

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w))
    );
  }, []);

  const focusWindow = useCallback((id: string) => {
    setMaxZIndex((prev) => prev + 1);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: maxZIndex + 1 } : w))
    );
  }, [maxZIndex]);

  const openWindows = windows.filter((w) => w.isOpen).map((w) => w.id);

  const renderWindowContent = (id: string) => {
    switch (id) {
      case "about":
        return <AboutWindow />;
      case "projects":
        return <ProjectsWindow />;
      case "contact":
        return <ContactWindow />;
      case "terminal":
        return <TerminalWindow />;
      case "browser":
        return <BrowserWindow />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden desktop-bg select-none">
      <MenuBar />

      {/* Desktop Icons */}
      <div className="absolute top-10 right-4 flex flex-col gap-2 pt-4">
        <DesktopIcon
          icon={<FileText className="w-8 h-8 text-muted-foreground" />}
          label="Resume.pdf"
          onClick={() => openWindow("about")}
        />
        <DesktopIcon
          icon={<FolderOpen className="w-8 h-8 text-blue-400" />}
          label="Projects"
          onClick={() => openWindow("projects")}
        />
      </div>

      {/* Windows */}
      {windows.map((windowState) => {
        const config = windowConfigs[windowState.id as keyof typeof windowConfigs];
        return (
          <Window
            key={windowState.id}
            id={windowState.id}
            title={config.title}
            isOpen={windowState.isOpen}
            onClose={() => closeWindow(windowState.id)}
            onFocus={() => focusWindow(windowState.id)}
            zIndex={windowState.zIndex}
            defaultPosition={config.defaultPosition}
            defaultSize={config.defaultSize}
          >
            {renderWindowContent(windowState.id)}
          </Window>
        );
      })}

      <Dock onOpenWindow={openWindow} openWindows={openWindows} />
    </div>
  );
};

export default Index;
