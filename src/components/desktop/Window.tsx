import { useState, useRef, useEffect, ReactNode } from "react";

interface WindowProps {
  id: string;
  title: string;
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  onFocus: () => void;
  zIndex: number;
  defaultPosition?: { x: number; y: number };
  defaultSize?: { width: number; height: number };
}

export const Window = ({
  id,
  title,
  children,
  isOpen,
  onClose,
  onFocus,
  zIndex,
  defaultPosition = { x: 100, y: 80 },
  defaultSize = { width: 600, height: 450 },
}: WindowProps) => {
  const [position, setPosition] = useState(defaultPosition);
  const [size, setSize] = useState(defaultSize);
  const [isDragging, setIsDragging] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });
  const windowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragOffset.current.x,
          y: Math.max(28, e.clientY - dragOffset.current.y),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleTitleBarMouseDown = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest(".window-button")) return;
    setIsDragging(true);
    dragOffset.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
    onFocus();
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 200);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  if (!isOpen || isMinimized) return null;

  return (
    <div
      ref={windowRef}
      className={`window fixed ${isClosing ? "animate-window-close" : "animate-window-open"}`}
      style={{
        left: position.x,
        top: position.y,
        width: size.width,
        height: size.height,
        zIndex,
      }}
      onMouseDown={onFocus}
    >
      <div className="window-titlebar" onMouseDown={handleTitleBarMouseDown}>
        <div className="flex items-center gap-2">
          <button
            className="window-button window-button-close"
            onClick={handleClose}
          />
          <button
            className="window-button window-button-minimize"
            onClick={handleMinimize}
          />
          <button className="window-button window-button-maximize" />
        </div>
        <span className="flex-1 text-center text-sm text-muted-foreground">
          {title}
        </span>
        <div className="w-14" />
      </div>
      <div className="p-4 overflow-auto" style={{ height: `calc(100% - 48px)` }}>
        {children}
      </div>
    </div>
  );
};
