import { useState } from "react";
import { AnimatedButton } from "./AnimatedButton";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent! ✨",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm border-border/20 
                     hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
      <CardHeader className="text-center space-y-4">
        <div className="flex items-center justify-center gap-2">
          <Mail className="w-6 h-6 text-primary animate-bounce" />
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent 
                                bg-clip-text text-transparent">
            Get In Touch
          </CardTitle>
        </div>
        <p className="text-muted-foreground">
          Have a question or want to connect? Send me a message!
        </p>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-border/30 focus:border-primary/50 transition-colors duration-300"
                placeholder="Your name"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-border/30 focus:border-primary/50 transition-colors duration-300"
                placeholder="your.email@example.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Message
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="border-border/30 focus:border-primary/50 transition-colors duration-300 resize-none"
              placeholder="Tell me about your project or just say hello..."
            />
          </div>
          
          <AnimatedButton 
            variant="hero" 
            className="w-full"
            onClick={() => {}}
          >
            <Send size={20} className={isSubmitting ? "animate-bounce" : ""} />
            {isSubmitting ? "Sending..." : "Send Message"}
          </AnimatedButton>
        </form>
      </CardContent>
    </Card>
  );
};