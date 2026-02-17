import { useState } from "react";
import { Mail, Github, Linkedin, Twitter, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com", color: "hover:text-foreground" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-blue-400" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com", color: "hover:text-sky-400" },
  { icon: Mail, label: "Email", href: "mailto:hello@nikesh.dev", color: "hover:text-amber-400" },
];

export const ContactWindow = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully!", {
      description: "I'll get back to you soon.",
      icon: <CheckCircle className="w-4 h-4" />,
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSending(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-xl font-semibold">Get in Touch</h2>
        <p className="text-muted-foreground">
          Have a project in mind? Let's work together!
        </p>
      </div>

      <div className="flex justify-center gap-4">
        {socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 rounded-xl bg-secondary/50 text-muted-foreground transition-all hover:scale-110 ${social.color}`}
          >
            <social.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Name</label>
            <Input
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="bg-secondary/50 border-border"
              required
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Email</label>
            <Input
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="bg-secondary/50 border-border"
              required
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Message</label>
          <Textarea
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="bg-secondary/50 border-border min-h-[100px] resize-none"
            required
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isSending}
        >
          {isSending ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              Send Message
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};
