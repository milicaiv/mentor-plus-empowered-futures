import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";
import { 
  Heart, 
  Target, 
  Eye,
  Users,
  GraduationCap,
  Brain,
  Send,
  Star,
  Clock,
  MessageCircle
} from "lucide-react";
import illustrationEducatorChild from "@/assets/illustration-educator-child.png";
import illustrationCommunity from "@/assets/illustration-community.png";

const team = [
  {
    role: "Educators",
    icon: GraduationCap,
    description: "Professionals with experience working with children with developmental disabilities.",
    color: "primary"
  },
  {
    role: "Therapists",
    icon: Heart,
    description: "Licensed therapists dedicated to supporting every child's development.",
    color: "highlight"
  },
  {
    role: "Psychologists",
    icon: Brain,
    description: "Mental health experts specializing in emotional development.",
    color: "accent"
  },
  {
    role: "Parents",
    icon: Users,
    description: "Parents who understand the challenges and share their experiences.",
    color: "secondary"
  },
];

export default function AboutPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We will respond as soon as possible.",
    });
    
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container-section relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">About Us</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Why{" "}
              <span className="text-gradient">MENTORA PLUS</span>{" "}
              Exists
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              We believe that every child deserves the opportunity to learn, grow, and 
              reach their full potential in a safe and supportive environment.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Story</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                How It All Started
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  MENTORA PLUS was created from a deep belief that every child deserves 
                  more understanding, more patience, and more opportunities.
                </p>
                <p>
                  We believe that true support comes from community — from parents, educators, 
                  therapists, and children growing together.
                </p>
                <p>
                  Our mission is to provide a safe digital place where learning, emotional growth, 
                  and human connection meet.
                </p>
              </div>
              
              <div className="mt-8">
                <img 
                  src={illustrationEducatorChild} 
                  alt="Educator guiding a child through learning" 
                  className="w-full max-w-md rounded-3xl shadow-soft"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-hover bg-primary/5 border-primary/20">
                <CardHeader className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-6 pb-6">
                  <CardDescription className="text-center leading-relaxed">
                    Empower every child through adapted learning and support for the whole family.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="card-hover bg-highlight/10 border-highlight/20">
                <CardHeader className="text-center p-6">
                  <div className="w-16 h-16 bg-highlight/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-highlight" />
                  </div>
                  <CardTitle className="text-lg">Our Vision</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-6 pb-6">
                  <CardDescription className="text-center leading-relaxed">
                    A world where every child has access to quality education regardless of challenges.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="card-hover bg-accent/10 border-accent/20 col-span-2">
                <CardHeader className="text-center p-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Long-Term Goal</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-6 pb-6">
                  <CardDescription className="text-center leading-relaxed">
                    Become the leading platform for inclusive education in the region, 
                    helping thousands of families on their journey.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-section-light relative">
        
        <div className="container-section pt-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="flex justify-center order-2 lg:order-1">
              <img 
                src={illustrationCommunity} 
                alt="Community of parents, educators, and children" 
                className="w-full max-w-sm rounded-3xl shadow-soft"
              />
            </div>
            <div className="text-center lg:text-left order-1 lg:order-2">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Team</span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Who Is Behind MENTORA PLUS?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform is built by parents, educators, therapists, and professionals 
                who understand the real challenges families face every day.
              </p>
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => {
              const colorClasses: Record<string, { bg: string; text: string }> = {
                primary: { bg: "bg-primary/10", text: "text-primary" },
                highlight: { bg: "bg-highlight/20", text: "text-highlight" },
                accent: { bg: "bg-accent/15", text: "text-accent" },
                secondary: { bg: "bg-secondary/40", text: "text-secondary-foreground" },
              };
              const colors = colorClasses[member.color];
              
              return (
                <Card key={index} className="card-hover text-center bg-card">
                  <CardHeader className="pb-4">
                    <div className={`w-24 h-24 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <member.icon className={`w-12 h-12 ${colors.text}`} />
                    </div>
                    <CardTitle className="text-xl">{member.role}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{member.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="section-padding bg-card relative scroll-mt-24">
        
        <div className="container-section pt-8">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Contact</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Get in Touch With Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have questions? Want to learn more? We are here for you.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Why Contact Us?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5 p-5 bg-muted/50 rounded-2xl">
                  <div className="w-14 h-14 bg-highlight/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-highlight" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Fast Response</h4>
                    <p className="text-muted-foreground leading-relaxed">We respond to inquiries within 24 hours.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-5 bg-muted/50 rounded-2xl">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Full Support</h4>
                    <p className="text-muted-foreground leading-relaxed">Our team is here to help you every step of the way.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-5 bg-muted/50 rounded-2xl">
                  <div className="w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Expert Help</h4>
                    <p className="text-muted-foreground leading-relaxed">We will connect you with the right expert for your needs.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-hover bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send Message</CardTitle>
                <CardDescription className="text-base">
                  Fill out the form below and we will get back to you soon.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-14"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Describe how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={5}
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    variant="highlight" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center pt-2">
                    We respond as soon as possible. You are not alone — we are here for you.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}
