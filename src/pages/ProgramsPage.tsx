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
      { icon: Users, label: "Problemi iz svakodnevnog života" },
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
      { icon: Globe, label: "Internet i društvene mreže" },
    ]
  },
];

const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
  highlight: { bg: "bg-highlight/20", text: "text-highlight", border: "border-highlight/30" },
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
  accent: { bg: "bg-accent/20", text: "text-accent", border: "border-accent/30" },
  secondary: { bg: "bg-secondary", text: "text-secondary-foreground", border: "border-secondary" },
};

export default function ProgramsPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 gradient-hero">
        <div className="container-section">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Šta djeca uče na{" "}
              <span className="text-gradient">MENTORA PLUS</span>{" "}
              platformi?
            </h1>
            <p className="text-lg text-muted-foreground">
              Naši programi su pažljivo osmišljeni da podrže cjelokupni razvoj djeteta 
              kroz prilagođene i zabavne aktivnosti.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-24 bg-card">
        <div className="container-section">
          <div className="grid gap-8">
            {programs.map((program, index) => {
              const colors = colorClasses[program.color];
              return (
                <Card 
                  key={program.id} 
                  className={`card-hover border-2 ${colors.border} overflow-hidden`}
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <CardHeader className="md:col-span-1 flex flex-col items-center justify-center text-center p-8">
                      <div className={`w-20 h-20 ${colors.bg} rounded-3xl flex items-center justify-center mb-4`}>
                        <program.icon className={`w-10 h-10 ${colors.text}`} />
                      </div>
                      <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                      <CardDescription className="text-base">
                        {program.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="md:col-span-2 p-8 bg-muted/30">
                      <h3 className="font-semibold text-foreground mb-6">Teme koje pokrivamo:</h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                        {program.topics.map((topic, topicIndex) => (
                          <div 
                            key={topicIndex}
                            className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft hover:shadow-card transition-all group"
                          >
                            <div className={`w-10 h-10 ${colors.bg} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                              <topic.icon className={`w-5 h-5 ${colors.text}`} />
                            </div>
                            <span className="font-medium text-foreground text-sm">{topic.label}</span>
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
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="container-section relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-accent-foreground mb-6">
            Želite saznati više o našim programima?
          </h2>
          <p className="text-lg text-accent-foreground/80 max-w-2xl mx-auto mb-8">
            Kontaktirajte nas za detaljnije informacije o programima i kako možemo 
            pomoći vašem djetetu da napreduje.
          </p>
          <Button variant="highlight" size="xl" asChild>
            <Link to="/o-nama#kontakt">
              Kontaktiraj nas
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
