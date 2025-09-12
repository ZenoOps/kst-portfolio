import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SocialIconProps {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
}

export const SocialIcon = ({ href, icon, label, className }: SocialIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "social-icon p-4 rounded-2xl border border-border/20",
        "hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary",
        "group relative z-10",
        className
      )}
    >
      <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      
      {/* Tooltip */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 
                      bg-card text-card-foreground px-3 py-1 rounded-lg text-sm
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300
                      pointer-events-none z-20">
        {label}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 
                        border-4 border-transparent border-t-card" />
      </div>
    </a>
  );
};