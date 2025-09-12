import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface AnimatedButtonProps {
  children: ReactNode;
  variant?: "hero" | "ghost";
  onClick?: () => void;
  className?: string;
}

export const AnimatedButton = ({ 
  children, 
  variant = "hero", 
  onClick, 
  className 
}: AnimatedButtonProps) => {
  const baseClasses = "relative overflow-hidden group transition-all duration-500 transform";
  
  const variantClasses = {
    hero: "btn-hero text-lg font-semibold px-8 py-6 rounded-2xl",
    ghost: "btn-ghost text-base font-medium px-6 py-3 rounded-xl"
  };

  return (
    <Button
      onClick={onClick}
      className={cn(
        baseClasses,
        variantClasses[variant],
        className
      )}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
      </span>
      
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 
                      transform translate-x-[-100%] group-hover:translate-x-[100%] 
                      transition-transform duration-1000 ease-out" />
    </Button>
  );
};