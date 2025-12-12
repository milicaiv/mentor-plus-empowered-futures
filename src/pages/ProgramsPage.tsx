import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { 
  Heart, 
  MessageCircle, 
  Brain, 
  Smile,
  Languages,
  Globe,
  Calculator,
  Shield,
  ArrowRight,
  Leaf,
  Users,
  Clock,
  MapPin,
  Microscope,
  Wifi,
  Car
} from "lucide-react";
import illustrationChildLearning from "@/assets/illustration-child-learning.png";

const programs = [
  {
    id: "me-myself",
    title: "Me & Myself",
    icon: Heart,
    color: "highlight",
    description: "Emotional awareness, behavior, self-confidence, and healthy daily habits.",
    topics: [
      { icon: Smile, label: "Emotions" },
      { icon: Users, label: "Behavior" },
      { icon: Brain, label: "Self-Confidence" },
      { icon: Heart, label: "Healthy Habits" },
    ]
  },
  {
    id: "languages",
    title: "Languages",
    icon: Languages,
    color: "primary",
    description: "Serbian and English language basics, communication, and speech development.",
    topics: [
      { icon: MessageCircle, label: "Serbian" },
      { icon: Globe, label: "English" },
      { icon: MessageCircle, label: "Communication" },
    ]
  },
  {
    id: "environment",
    title: "Environment",
    icon: Leaf,
    color: "accent",
    description: "Nature, society, history, geography, and basic biology — explained in a child-friendly way.",
    topics: [
      { icon: Leaf, label: "Nature" },
      { icon: Users, label: "Society" },
      { icon: Clock, label: "History" },
      { icon: MapPin, label: "Geography" },
      { icon: Microscope, label: "Biology" },
    ]
  },
  {
    id: "mathematics",
    title: "Mathematics",
    icon: Calculator,
    color: "secondary",
    description: "Numbers, logic, everyday problem-solving, and thinking skills.",
    topics: [
      { icon: Calculator, label: "Numbers" },
      { icon: Brain, label: "Logic" },
      { icon: Brain, label: "Thinking" },
      { icon: Users, label: "Everyday Problems" },
    ]
  },
  {
    id: "safety",
    title: "Safety",
    icon: Shield,
    color: "highlight",
    description: "Everyday safety, traffic safety, digital safety, and responsible internet use.",
    topics: [
      { icon: Shield, label: "Everyday Safety" },
      { icon: Car, label: "Traffic" },
      { icon: Wifi, label: "Digital Safety" },
      { icon: Globe, label: "Internet Use" },
    ]
  },
];

const colorClasses: Record<string, { bg: string; bgLight: string; text: string; border: string }> = {
  highlight: { bg: "bg-highlight/20", bgLight: "bg-highlight/10", text: "text-highlight", border: "border-highlight/30" },
  primary: { bg: "bg-primary/15", bgLight: "bg-primary/5", text: "text-primary", border: "border-primary/20" },
  accent: { bg: "bg-accent/20", bgLight: "bg-accent/10", text: "text-accent", border: "border-accent/30" },
  secondary: { bg: "bg-secondary/40", bgLight: "bg-secondary/20", text: "text-secondary-foreground", border: "border-secondary/50" },
};

export default function ProgramsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 lg:py-32 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-72 h-72 bg-secondary/15 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-section relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Educational Programs</span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
                What Children Learn on the{" "}
                <span className="text-gradient">MENTORA PLUS</span>{" "}
                Platform
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Our programs are carefully designed to support the overall development of every child 
                through adapted and engaging activities.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <img 
                src={illustrationChildLearning} 
                alt="Child learning through play" 
                className="w-full max-w-sm rounded-3xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="grid gap-10">
            {programs.map((program, index) => {
              const colors = colorClasses[program.color];
              return (
                <Card 
                  key={program.id} 
                  className={`card-hover border-2 ${colors.border} overflow-hidden bg-card`}
                >
                  <div className="grid md:grid-cols-3 gap-0">
                    <CardHeader className="md:col-span-1 flex flex-col items-center justify-center text-center p-10 border-b md:border-b-0 md:border-r border-border/30">
                      <div className={`w-24 h-24 ${colors.bg} rounded-3xl flex items-center justify-center mb-6`}>
                        <program.icon className={`w-12 h-12 ${colors.text}`} />
                      </div>
                      <CardTitle className="text-2xl mb-3">{program.title}</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="md:col-span-2 p-10 bg-muted/30">
                      <h3 className="font-bold text-foreground text-lg mb-8">Topics we cover:</h3>
                      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                        {program.topics.map((topic, topicIndex) => (
                          <div 
                            key={topicIndex}
                            className="flex items-center gap-3 bg-card p-4 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group hover:-translate-y-0.5 min-w-0"
                          >
                            <div className={`w-10 h-10 flex-shrink-0 ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <topic.icon className={`w-5 h-5 ${colors.text}`} />
                            </div>
                            <span className="font-medium text-foreground text-sm truncate">{topic.label}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
          
          {/* Trust line */}
          <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
              Every program is designed with care, responsibility, and child-centered development.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 lg:py-36 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container-section relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent-foreground mb-8 leading-tight max-w-3xl mx-auto">
            Want to learn more about our programs?
          </h2>
          <p className="text-lg lg:text-xl text-accent-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Contact us for more detailed information about our programs and how we can 
            help your child thrive.
          </p>
          <Button variant="highlight" size="xl" asChild>
            <Link to="/o-nama#kontakt">
              Contact Us
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
