import { Badge } from "@/components/ui/badge";

const skills = [
  { name: "React.js", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
  { name: "TypeScript", color: "bg-blue-600/20 text-blue-300 border-blue-600/30" },
  { name: "Node.js", color: "bg-green-500/20 text-green-400 border-green-500/30" },
  { name: "MongoDB", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" },
  { name: "Tailwind CSS", color: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30" },
  { name: "Vite", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
  { name: "Shadcn/ui", color: "bg-slate-500/20 text-slate-300 border-slate-500/30" },
  { name: "Git", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
];

export const AboutWindow = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-start gap-6">
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white shadow-lg">
          N
        </div>
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-foreground">Nikesh</h1>
          <p className="text-muted-foreground mt-1">Web Developer & BCA Student</p>
          <p className="text-sm text-muted-foreground mt-2">
            Currently learning backend development with Node.js & MongoDB
          </p>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-primary" />
          About Me
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          I'm a passionate web developer pursuing my Bachelor's in Computer Applications. 
          I specialize in building modern, responsive web applications using React and TypeScript. 
          Currently diving deep into backend development with Node.js and MongoDB to become a 
          full-stack developer.
        </p>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-projects" />
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill.name}
              variant="outline"
              className={`${skill.color} border transition-transform hover:scale-105`}
            >
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-semibold text-foreground flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-accent" />
          Education
        </h2>
        <div className="glass rounded-lg p-4">
          <p className="font-medium text-foreground">Bachelor of Computer Applications (BCA)</p>
          <p className="text-sm text-muted-foreground">Currently Pursuing</p>
        </div>
      </div>
    </div>
  );
};
