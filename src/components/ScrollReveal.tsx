import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right" | "scale";
  delay?: number;
  duration?: number;
  className?: string;
}

export const ScrollReveal = ({ 
  children, 
  direction = "up", 
  delay = 0, 
  duration = 600,
  className 
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getTransform = () => {
    if (isVisible) return "translate3d(0, 0, 0) scale(1)";
    
    switch (direction) {
      case "up": return "translate3d(0, 50px, 0) scale(1)";
      case "down": return "translate3d(0, -50px, 0) scale(1)";
      case "left": return "translate3d(50px, 0, 0) scale(1)";
      case "right": return "translate3d(-50px, 0, 0) scale(1)";
      case "scale": return "translate3d(0, 0, 0) scale(0.9)";
      default: return "translate3d(0, 50px, 0) scale(1)";
    }
  };

  return (
    <div
      ref={ref}
      className={cn("transform transition-all ease-out", className)}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
};