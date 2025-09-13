import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedButton } from "./AnimatedButton";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  className?: string;
}

export const ProjectCard = ({ 
  title, 
  description, 
  techStack, 
  liveUrl, 
  githubUrl,
  className 
}: ProjectCardProps) => {
  return (
    <Card className={cn(
      "group relative overflow-hidden border-border/20 bg-card/80 backdrop-blur-sm",
      "hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10",
      "hover:-translate-y-2 transform-gpu",
      className
    )}>
      {/* Animated gradient border */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
      
      <CardHeader className="relative z-10">
        <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <Badge 
              key={index} 
              variant="secondary" 
              className="text-xs hover:bg-primary/20 transition-colors duration-300
                         animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {tech}
            </Badge>
          ))}
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-3 pt-2">
          {liveUrl && (
            <AnimatedButton 
              variant="hero" 
              onClick={() => window.open(liveUrl, '_blank')}
              className="flex-1 text-sm"
            >
              <ExternalLink size={16} />
              View Project
            </AnimatedButton>
          )}
          {githubUrl && (
            <AnimatedButton 
              variant="hero" 
              onClick={() => window.open(githubUrl, '_blank')}
              className="flex-1 text-sm"
            >
              <Github size={16} />
              Source Code
            </AnimatedButton>
          )}
        </div>
      </CardContent>
    </Card>
  );
};