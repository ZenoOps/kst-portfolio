import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  category: string;
  skills: string[];
  color: "orange" | "cyan" | "green" | "purple" | "blue";
  className?: string;
}

const colorVariants = {
  orange: "border-orange-500/30 bg-orange-500/5 hover:bg-orange-500/10",
  cyan: "border-cyan-500/30 bg-cyan-500/5 hover:bg-cyan-500/10", 
  green: "border-green-500/30 bg-green-500/5 hover:bg-green-500/10",
  purple: "border-purple-500/30 bg-purple-500/5 hover:bg-purple-500/10",
  blue: "border-blue-500/30 bg-blue-500/5 hover:bg-blue-500/10"
};

export const SkillCard = ({ category, skills, color, className }: SkillCardProps) => {
  return (
    <div className={cn(
      "group relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-500",
      "hover:scale-105 hover:shadow-2xl transform-gpu",
      colorVariants[color],
      className
    )}>
      {/* Animated glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"
           style={{ backgroundColor: `var(--${color}-500)`, opacity: '0.1' }} />
      
      <h3 className="text-lg font-bold mb-4 text-foreground group-hover:scale-110 transition-transform duration-300">
        {category}
      </h3>
      
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <Badge 
            key={index}
            variant="outline" 
            className="w-full justify-start text-sm py-2 px-3 border-border/30
                       hover:border-primary/50 hover:bg-primary/10 transition-all duration-300
                       animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};