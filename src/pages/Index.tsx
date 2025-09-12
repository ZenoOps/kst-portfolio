import { ParticleBackground } from "@/components/ParticleBackground";
import { ProfileSection } from "@/components/ProfileSection";
import { ProjectCard } from "@/components/ProjectCard";
import { SkillCard } from "@/components/SkillCard";
import { TimelineItem } from "@/components/TimelineItem";
import { ContactForm } from "@/components/ContactForm";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Award, Trophy, Star, Briefcase } from "lucide-react";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const projects = [
    {
      title: "Portfolio in the Cloud",
      description: "This project showcases my personal portfolio, built with HTML, CSS, and hosted on AWS Amplify. Our DevOps team also offers the easiest way to host a web application with minimal cost and effort.",
      techStack: ["HTML", "CSS", "AWS Amplify", "DevOps", "Web Hosting"],
      liveUrl: "https://portfolio.example.com",
      githubUrl: "https://github.com/portfolio"
    },
    {
      title: "CI/CD on AWS",
      description: "Building a complete pipeline on AWS with CodePipeline. A deployment of CI/CD pipeline by using the AWS services with traditional approaches that eliminates the build and deployment process of containerized applications whenever the workload triggered the pipeline.",
      techStack: ["AWS CodePipeline", "CI/CD", "Docker", "AWS Services", "DevOps"],
      liveUrl: "https://cicd.example.com",
      githubUrl: "https://github.com/cicd-aws"
    }
  ];

  const skillCategories = [
    {
      category: "Networking",
      skills: ["CCNA", "Mikrotik", "Network LINUX"],
      color: "orange" as const
    },
    {
      category: "Programming & Scripting",
      skills: ["Scripting", "Bash", "Shell Scripting"],
      color: "cyan" as const
    },
    {
      category: "Databases",
      skills: ["RDS", "DynamoDB", "ElastiCache"],
      color: "green" as const
    },
    {
      category: "Containerization",
      skills: ["Docker", "ECS", "EKS"],
      color: "purple" as const
    },
    {
      category: "VoIP",
      skills: ["SIP", "RTP", "GSL SIM", "AWS Code Commit"],
      color: "blue" as const
    },
    {
      category: "AWS Dev-TOOLS",
      skills: ["CloudFormation", "CloudWatch", "CloudTrail", "CloudSystem", "AWS Config"],
      color: "orange" as const
    },
    {
      category: "IaC",
      skills: ["CloudFormation", "Terraform", "Ansible"],
      color: "cyan" as const
    },
    {
      category: "Management Tools",
      skills: ["CloudWatch", "CloudTrail", "AWS Config"],
      color: "green" as const
    },
    {
      category: "Security",
      skills: ["IAM", "Cognito", "KMS"],
      color: "purple" as const
    },
    {
      category: "AWS Networking",
      skills: ["VPC", "Route53", "CloudFront"],
      color: "blue" as const
    }
  ];

  const timelineData = [
    {
      year: "2024",
      title: "Started Networking Journey",
      description: "Where my journey in the IT field began by studying for the CompTIA Network+ certification. This foundational step sparked my interest in networking concepts and technologies, laying the groundwork for my future career in network operations and cloud computing.",
      highlights: [
        "CompTIA Network+ certification studies",
        "Foundational networking concepts",
        "Network protocols and technologies"
      ],
      isActive: true
    },
    {
      year: "2023",
      title: "Junior Network Operations Center Engineer", 
      description: "Joined as a Junior NOC Engineer, responsible for overall operation processes between internal teams and maintaining network stability.",
      highlights: [
        "Monitor network performance and troubleshoot issues",
        "Assign technical standard defect to be resolved and escalated to Tier II Support",
        "Maintained the network infrastructure"
      ]
    },
    {
      year: "2022",
      title: "Senior Network Operations Center Engineer",
      description: "Promoted to Senior NOC, leading a team to ensure the stability and performance of network operations and the infrastructure.",
      highlights: [
        "Lead and managed network backup to ensure consistent and efficient",
        "Troubleshooted complex network incidents to ensure 99.9% system reliability",
        "Optimized network performance to ensure fewer errors and downtime in the infrastructure"
      ]
    }
  ];

  const certifications = [
    { name: "AWS Cloud Practitioner", icon: Award },
    { name: "Linux Certified Candidate", icon: Trophy },
    { name: "AWS Cloud-Cloud Practitioner", icon: Star },
    { name: "Automation with Ansible", icon: Briefcase }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Hero Section */}
      <section className={`
        flex min-h-screen items-center justify-center p-8
        transition-all duration-1000 ease-out
        ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
      `}>
        <div className="glass rounded-3xl p-12 md:p-16 max-w-6xl w-full
                        shadow-2xl border border-border/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 
                          rounded-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 
                          rounded-3xl opacity-30 animate-gradient-shift blur-sm -z-10" />
          <ProfileSection />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto space-y-12">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 
                          bg-gradient-to-r from-primary via-accent to-primary 
                          bg-clip-text text-transparent">
              Projects
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} delay={index * 200} direction="up">
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-8 bg-background/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 
                          bg-gradient-to-r from-primary via-accent to-primary 
                          bg-clip-text text-transparent">
              Timeline / Career Journey
            </h2>
          </ScrollReveal>
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <ScrollReveal key={index} delay={index * 300} direction="left">
                <TimelineItem {...item} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 
                          bg-gradient-to-r from-primary via-accent to-primary 
                          bg-clip-text text-transparent">
              Skills
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {skillCategories.map((skill, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="scale">
                <SkillCard {...skill} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-8 bg-background/50">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 
                          bg-gradient-to-r from-primary via-accent to-primary 
                          bg-clip-text text-transparent">
              Certifications & Awards
            </h2>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => {
              const IconComponent = cert.icon;
              return (
                <ScrollReveal key={index} delay={index * 150} direction="up">
                  <Card className="group text-center p-8 bg-card/80 backdrop-blur-sm border-border/20 
                                  hover:border-primary/30 transition-all duration-500 hover:shadow-2xl 
                                  hover:shadow-primary/10 hover:-translate-y-2 transform-gpu">
                    <CardContent className="space-y-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center 
                                      group-hover:bg-primary/20 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors duration-300">
                        {cert.name}
                      </h3>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal direction="up">
            <ContactForm />
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 text-center border-t border-border/20">
        <ScrollReveal>
          <p className="text-muted-foreground">
            © 2024 Kyaw Soe Thet. Built on AWS
          </p>
        </ScrollReveal>
      </footer>

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
