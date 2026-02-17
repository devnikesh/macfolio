import { useState, useEffect } from "react";
import { Apple, Wifi, Battery, Search } from "lucide-react";

export const MenuBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="menubar fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center gap-4">
        <Apple className="w-4 h-4" />
        <span className="font-semibold">Nikesh</span>
        <span className="text-muted-foreground">About</span>
        <span className="text-muted-foreground">Projects</span>
        <span className="text-muted-foreground">Contact</span>
      </div>
      <div className="flex items-center gap-3">
        <Search className="w-4 h-4 text-muted-foreground" />
        <Wifi className="w-4 h-4 text-muted-foreground" />
        <Battery className="w-4 h-4 text-muted-foreground" />
        <span className="text-muted-foreground">{formatDate(time)}</span>
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
};
