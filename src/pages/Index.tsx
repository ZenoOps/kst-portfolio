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
      description: "This project showcases my personal portfolio, built with HTML, CSS, and hosted on AWS Amplify. Out of others AWS Amplify offers the easiest way to host a web application with minimal configuration.",
      techStack: ["HTML", "CSS", "AWS Amplify", "Route 53", "Lambda", "SNS"],
      liveUrl: "https://kyawsoethet.com",
      githubUrl: "https://github.com/ZenoOps/my-aws-builder-challenge-website"
    },
    {
      title: "CI/CD on AWS",
      description: "A deployment of a CI/CD pipeline by using the AWS service with traditional approach. It automated the build and deployment process of containerized applications whenever the webhook triggered the pipeline.",
      techStack: ["AWS CodePipeline", "CodeBuild", "ECS", "CloudFormation", "Docker"],
      liveUrl: "https://github.com/ZenoOps/CI-CD_lab",
      githubUrl: "https://github.com/ZenoOps/CI-CD_lab"
    }
  ];

  const skillCategories = [
    {
      category: "Networking",
      skills: ["CCNA", "CCNP", "Mikrotik", "Huawei U2000"],
      color: "orange" as const
    },
    {
      category: "Programming & Scripting",
      skills: ["Python", "Shell Scripting"],
      color: "cyan" as const
    },
    {
      category: "Databases",
      skills: ["RDS", "DynamoDB", "ElastiCache"],
      color: "green" as const
    },
    {
      category: "Containerization",
      skills: ["Docker", "ECS"],
      color: "purple" as const
    },
    {
      category: "VCS",
      skills: ["Git", "GitHub", "GitLab", "AWS Code Commit"],
      color: "blue" as const
    },
    {
      category: "AWS Dev Tools",
      skills: ["CodeCommit", "CodeBuild", "CodeDeploy", "CodePipeline", "Elastic Beanstalk"],
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
      skills: ["VPC", "CloudFront", "Route 53"],
      color: "blue" as const
    }
  ];

  const timelineData = [
    {
      year: "2021",
      title: "Started Networking Journey",
      description: "Began my journey in the IT and Networking field by studying for the CompTIA Network+ certification. This foundational step sparked my interest in networking concepts and technologies, laying the groundwork for my future career in network operations and cloud computing.",
      highlights: [
        "CompTIA Network+ certification studies",
        "Foundational networking concepts",
        "Network protocols and technologies"
      ]
    },
    {
      year: "2022",
      title: "Junior Network Operations Center Engineer", 
      description: "Joined an ISP as a Junior NOC Engineer, responsible for smooth operation processes between internal teams and monitoring the network stability.",
      highlights: [
        "Assigned customer complaint tickets to the relevant LSP and FE teams",
        "Documented incidents and performed network analysis for reporting and further network optimizations",
        "Monitored the network infrastructure"
      ]
    },
    {
      year: "2023",
      title: "Senior Network Operations Center Engineer",
      description: "Promoted to Senior NOC, leading a team to ensure the stability and performance of network operations and the infrastructure.",
      highlights: [
        "Troubleshot and resolved network incidents to minimize downtime and impact",
        "Worked with cross teams for seamless operations and problem-solving",
        "Monitored network performance to ensure there were no intermittent performances in the infrastructure",
        "Documented incident reports and provided network status to Manager and Chief Technology Officer",
        "Trained and mentored junior NOC engineers to enhance team skills"
      ]
    },
    {
      year: "2025",
      title: "AWS re/Start Program Graduate",
      description: "Graduating from the AWS re/Start program was a transformative experience to expand my skills set. Over several months, I immersed myself in cloud fundamentals, hands-on labs, and real-world projects, collaborating with passionate peers and expert instructors. The program not only boosted my technical skills but also gave me the confidence to tackle new challenges and pursue a career in the cloud industry.",
      highlights: [
        "Cloud fundamentals and hands-on labs",
        "Real-world AWS projects and collaboration",
        "Enhanced technical skills and confidence"
      ],
      isActive: true
    },
    {
      year: "2025",
      title: "Freelancing and Learning",
      description: "Driven by a passion for Cloud and DevOps, I enjoy designing scalable cloud solutions, automating workflows, solving real-world problems and actively seeking out opportunities to collaborate on freelance projects that challenge me to learn and grow.",
      highlights: [
        "Designing scalable cloud solutions",
        "Automating workflows and solving real-world problems",
        "Collaborating on challenging freelance projects"
      ]
    }
  ];

  const certifications = [
    { 
      name: "AWS Cloud Practitioner", 
      icon: Award,
      url: "https://www.credly.com/badges/eff8b4dd-42ef-4d81-a48c-2c3973f041d0/public_url",
      image: "https://images.credly.com/size/680x680/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
    },
    { 
      name: "AWS re/Start Graduate", 
      icon: Trophy,
      url: "https://www.credly.com/badges/9be95740-840d-4497-a959-37621354d1c5/public_url",
      image: "https://images.credly.com/size/680x680/images/44e2c252-5d19-4574-9646-005f7225bf53/image.png"
    },
    { 
      name: "AWS Cloud Quest Practitioner", 
      icon: Star,
      url: "https://www.credly.com/badges/d3025ad1-67e4-4e17-9faf-55f499e5a4d0/public_url",
      image: "https://images.credly.com/size/680x680/images/2784d0d8-327c-406f-971e-9f0e15097003/image.png"
    },
    { 
      name: "Automation with Ansible", 
      icon: Briefcase,
      url: "/LabEx-Ansible.png",
      image: "/LabEx-Ansible.png"
    }
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
                  <a 
                    href={cert.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className="text-center p-8 bg-card/80 backdrop-blur-sm border-border/20 
                                    hover:border-primary/30 transition-all duration-500 hover:shadow-2xl 
                                    hover:shadow-primary/10 hover:-translate-y-2 transform-gpu">
                      <CardContent className="space-y-4">
                        {cert.image ? (
                          <div className="mx-auto w-16 h-16 rounded-2xl overflow-hidden">
                            <img 
                              src={cert.image} 
                              alt={cert.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                        ) : (
                          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center 
                                          group-hover:bg-primary/20 transition-colors duration-300">
                            <IconComponent className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        )}
                        <h3 className="font-semibold text-sm leading-tight group-hover:text-primary transition-colors duration-300">
                          {cert.name}
                        </h3>
                      </CardContent>
                    </Card>
                  </a>
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
