import { ParticleBackground } from "@/components/ParticleBackground";
import { ProfileSection } from "@/components/ProfileSection";
import { useEffect, useState } from "react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Main Content */}
      <div className={`
        flex min-h-screen items-center justify-center p-8
        transition-all duration-1000 ease-out
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}>
        {/* Glass morphism container */}
        <div className="glass rounded-3xl p-12 md:p-16 max-w-6xl w-full
                        shadow-2xl border border-border/20 relative overflow-hidden">
          
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 
                          rounded-3xl pointer-events-none" />
          
          {/* Animated border glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 
                          rounded-3xl opacity-30 animate-gradient-shift blur-sm -z-10" />
          
          <ProfileSection />
        </div>
      </div>

      {/* Ambient light effects */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full 
                        filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full 
                        filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
    </div>
  );
};

export default Index;
