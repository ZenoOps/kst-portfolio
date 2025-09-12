import { cn } from "@/lib/utils";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  highlights: string[];
  isActive?: boolean;
  className?: string;
}

export const TimelineItem = ({ 
  year, 
  title, 
  description, 
  highlights, 
  isActive,
  className 
}: TimelineItemProps) => {
  return (
    <div className={cn(
      "group relative flex gap-6 pb-8 transition-all duration-500",
      className
    )}>
      {/* Timeline line and dot */}
      <div className="relative flex flex-col items-center">
        <div className={cn(
          "w-4 h-4 rounded-full border-2 transition-all duration-500 z-10",
          isActive 
            ? "bg-primary border-primary shadow-lg shadow-primary/50 scale-125" 
            : "bg-background border-border/30 group-hover:border-primary/50 group-hover:scale-110"
        )}>
          {isActive && (
            <div className="absolute inset-1 bg-primary rounded-full animate-pulse" />
          )}
        </div>
        <div className="w-px h-full bg-border/30 group-hover:bg-primary/30 transition-colors duration-500" />
      </div>
      
      {/* Content */}
      <div className="flex-1 space-y-3 group-hover:translate-x-2 transition-transform duration-500">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
            {year}
          </span>
        </div>
        
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <ul className="space-y-1">
          {highlights.map((highlight, index) => (
            <li 
              key={index}
              className="flex items-start gap-2 text-sm text-muted-foreground
                         animate-fade-in opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};