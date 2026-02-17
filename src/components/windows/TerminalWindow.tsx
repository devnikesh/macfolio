import { useState, useEffect, useRef } from "react";

const commands: Record<string, string> = {
  help: `Available commands:
  about     - Display info about me
  skills    - List my technical skills
  projects  - Show my projects
  contact   - Get my contact info
  clear     - Clear terminal
  neofetch  - System info (just for fun)`,
  
  about: `╭─────────────────────────────────────╮
│  Nikesh - Web Developer            │
│  BCA Student | Full-Stack Learner  │
╰─────────────────────────────────────╯

Currently focused on:
• Building modern web apps with React
• Learning backend with Node.js & MongoDB
• Creating beautiful UIs with Tailwind CSS`,

  skills: `Frontend:
  ├── React.js ████████████████░░ 85%
  ├── TypeScript ██████████████░░░░ 75%
  ├── Tailwind ████████████████░░ 85%
  └── Vite ██████████████░░░░ 75%

Backend (Learning):
  ├── Node.js ██████████░░░░░░░░ 50%
  ├── MongoDB ████████░░░░░░░░░░ 40%
  └── Express ██████████░░░░░░░░ 50%`,

  projects: `┌──────────────────────────────────────┐
│ 📁 Portfolio Website                 │
│    React + TypeScript + Tailwind     │
├──────────────────────────────────────┤
│ 📁 Task Manager API                  │
│    Node.js + Express + MongoDB       │
├──────────────────────────────────────┤
│ 📁 E-Commerce Dashboard              │
│    React + Chart.js + Shadcn         │
└──────────────────────────────────────┘`,

  contact: `📧 Email:    hello@nikesh.dev
🐙 GitHub:   github.com/nikesh
💼 LinkedIn: linkedin.com/in/nikesh
🐦 Twitter:  twitter.com/nikesh`,

  neofetch: `
        .:'                    nikesh@portfolio
    __ :'__                    ────────────────
 .'  \`  \`-'.                   OS: macOS-inspired Web UI
:          :                   Host: Browser v1.0
:          :                   Kernel: React 18.3.1
:          :                   Shell: TypeScript
 \`._    _.'                    Resolution: Responsive
    \`--'                       Theme: Dark Mode
                               Terminal: Custom CSS
                               CPU: Your imagination
                               Memory: Infinite possibilities`,
};

interface Line {
  type: "input" | "output";
  content: string;
}

export const TerminalWindow = () => {
  const [lines, setLines] = useState<Line[]>([
    { type: "output", content: 'Welcome to Nikesh\'s Terminal! Type "help" for commands.' },
  ]);
  const [currentInput, setCurrentInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === "clear") {
      setLines([]);
      return;
    }

    const output = commands[trimmedCmd] || `Command not found: ${trimmedCmd}. Type "help" for available commands.`;
    
    setLines((prev) => [
      ...prev,
      { type: "input", content: cmd },
      { type: "output", content: output },
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentInput.trim()) return;

    handleCommand(currentInput);
    setCommandHistory((prev) => [currentInput, ...prev]);
    setCurrentInput("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput("");
      }
    }
  };

  return (
    <div
      ref={terminalRef}
      className="h-full bg-background/50 font-mono text-sm overflow-auto"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="p-2 space-y-1">
        {lines.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line.type === "input" ? (
              <span>
                <span className="text-green-400">nikesh</span>
                <span className="text-muted-foreground">@</span>
                <span className="text-blue-400">portfolio</span>
                <span className="text-muted-foreground"> $ </span>
                <span className="text-foreground">{line.content}</span>
              </span>
            ) : (
              <span className="text-muted-foreground">{line.content}</span>
            )}
          </div>
        ))}
        <form onSubmit={handleSubmit} className="flex items-center">
          <span className="text-green-400">nikesh</span>
          <span className="text-muted-foreground">@</span>
          <span className="text-blue-400">portfolio</span>
          <span className="text-muted-foreground"> $ </span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-foreground caret-primary"
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};
