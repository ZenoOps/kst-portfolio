import { AnimatedButton } from "./AnimatedButton";
import { SocialIcon } from "./SocialIcon";
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const ProfileSection = () => {
  return (
    <div className="relative z-10 flex flex-col items-center space-y-8 text-center max-w-2xl mx-auto">
      {/* Profile Image */}
      <div className="relative">
        <div className="profile-glow">
          <img
            src={profilePhoto}
            alt="Kyaw Soe Thet"
            className="w-48 h-48 rounded-full object-cover border-4 border-border/20 
                       shadow-2xl float animate-pulse-glow"
          />
        </div>
        
        {/* Floating particles around image */}
        <div className="absolute -inset-8 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/40 rounded-full animate-float"
              style={{
                top: `${20 + i * 10}%`,
                left: `${10 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Name and Title */}
      <div className="space-y-4">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary 
                       bg-clip-text text-transparent animate-gradient-shift gradient-shift">
          Kyaw Soe Thet
        </h1>
        
        <div className="relative">
          <p className="text-xl md:text-2xl text-muted-foreground font-medium tracking-wide">
            AWS DevOps Enthusiast & Sr. NOC
          </p>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 
                          w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent 
                          rounded-full animate-pulse" />
        </div>
      </div>

      {/* Social Links */}
      <div className="flex gap-6">
        <SocialIcon
          href="https://github.com/ZenoOps"
          icon={<Github size={24} />}
          label="GitHub"
        />
        <SocialIcon
          href="https://www.linkedin.com/in/kyaw-soe-thet"
          icon={<Linkedin size={24} />}
          label="LinkedIn"
        />
        <SocialIcon
          href="mailto:kyawsoe.thet27@gmail.com"
          icon={<Mail size={24} />}
          label="Email"
        />
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-8">
        <AnimatedButton variant="hero">
          <ExternalLink size={20} />
          AWS Builder Center Profile
        </AnimatedButton>
        
        <AnimatedButton variant="ghost">
          <Download size={20} />
          Download Resume
        </AnimatedButton>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 -right-20 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl animate-pulse" 
           style={{ animationDelay: '1s' }} />
    </div>
  );
};