import { ReactNode } from "react";

interface DesktopIconProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
  selected?: boolean;
}

export const DesktopIcon = ({ icon, label, onClick, selected }: DesktopIconProps) => {
  return (
    <button
      className={`desktop-icon ${selected ? "selected" : ""}`}
      onClick={onClick}
      onDoubleClick={onClick}
    >
      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center shadow-lg">
        {icon}
      </div>
      <span className="text-xs text-center text-foreground/90 mt-1 max-w-[80px] truncate">
        {label}
      </span>
    </button>
  );
};
