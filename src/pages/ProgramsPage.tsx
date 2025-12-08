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

const programs = [
  {
    id: "ti-i-ja",
    title: "Ti i Ja",
    icon: Heart,
    color: "highlight",
    description: "Emocionalni i socijalni razvoj kroz razumijevanje sebe i drugih.",
    topics: [
      { icon: Smile, label: "Emocije" },
      { icon: Users, label: "Ponašanje" },
      { icon: Brain, label: "Samopouzdanje" },
      { icon: Heart, label: "Zdrave navike" },
    ]
  },
  {
    id: "jezici",
    title: "Jezici",
    icon: Languages,
    color: "primary",
    description: "Razvoj jezičkih vještina i komunikacije na maternjem i stranom jeziku.",
    topics: [
      { icon: MessageCircle, label: "Srpski" },
      { icon: Globe, label: "Engleski" },
      { icon: MessageCircle, label: "Govor i komunikacija" },
    ]
  },
  {
    id: "okolina",
    title: "Okolina",
    icon: Leaf,
    color: "accent",
    description: "Upoznavanje svijeta oko nas kroz prirodu, društvo i istoriju.",
    topics: [
      { icon: Leaf, label: "Priroda" },
      { icon: Users, label: "Društvo" },
      { icon: Clock, label: "Istorija" },
      { icon: MapPin, label: "Geografija" },
      { icon: Microscope, label: "Biologija" },
    ]
  },
  {
    id: "matematika",
    title: "Matematika",
    icon: Calculator,
    color: "secondary",
    description: "Razvoj logičkog mišljenja i matematičkih vještina kroz praktične primjere.",
    topics: [
      { icon: Calculator, label: "Brojevi" },
      { icon: Brain, label: "Logika" },
      { icon: Brain, label: "Razmišljanje" },
      { icon: Users, label: "Svakodnevni problemi" },
    ]
  },
  {
    id: "sigurnost",
    title: "Sigurnost",
    icon: Shield,
    color: "highlight",
    description: "Učenje o sigurnosti u svakodnevnom životu i digitalnom svijetu.",
    topics: [
      { icon: Shield, label: "Svakodnevna sigurnost" },
      { icon: Car, label: "Saobraćaj" },
      { icon: Wifi, label: "Digitalna sigurnost" },
      { icon: Globe, label: "Internet i mreže" },
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
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Edukativni programi</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Šta djeca uče na{" "}
              <span className="text-gradient">MENTORA PLUS</span>{" "}
              platformi?
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Naši programi su pažljivo osmišljeni da podrže cjelokupni razvoj djeteta 
              kroz prilagođene i zabavne aktivnosti.
            </p>
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
                      <h3 className="font-bold text-foreground text-lg mb-8">Teme koje pokrivamo:</h3>
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {program.topics.map((topic, topicIndex) => (
                          <div 
                            key={topicIndex}
                            className="flex items-center gap-4 bg-card p-5 rounded-2xl shadow-soft hover:shadow-card transition-all duration-300 group hover:-translate-y-0.5"
                          >
                            <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <topic.icon className={`w-6 h-6 ${colors.text}`} />
                            </div>
                            <span className="font-semibold text-foreground">{topic.label}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
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
            Želite saznati više o našim programima?
          </h2>
          <p className="text-lg lg:text-xl text-accent-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Kontaktirajte nas za detaljnije informacije o programima i kako možemo 
            pomoći vašem djetetu da napreduje.
          </p>
          <Button variant="highlight" size="xl" asChild>
            <Link to="/o-nama#kontakt">
              Kontaktiraj nas
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
