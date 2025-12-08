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
  CheckCircle,
  Star,
  Clock,
  MessageCircle
} from "lucide-react";

const team = [
  {
    role: "Edukatori",
    icon: GraduationCap,
    description: "Stručnjaci sa iskustvom u radu sa djecom sa smetnjama u razvoju.",
    color: "primary"
  },
  {
    role: "Terapeuti",
    icon: Heart,
    description: "Licencirani terapeuti posvećeni podršci razvoja svakog djeteta.",
    color: "highlight"
  },
  {
    role: "Psiholozi",
    icon: Brain,
    description: "Stručnjaci za mentalno zdravlje i emocionalni razvoj.",
    color: "accent"
  },
  {
    role: "Roditelji",
    icon: Users,
    description: "Roditelji koji razumiju izazove i dijele svoja iskustva.",
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
      title: "Poruka uspješno poslana!",
      description: "Odgovorićemo vam u najkraćem mogućem roku.",
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
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">O nama</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
              Zašto je nastala{" "}
              <span className="text-gradient">MENTORA PLUS</span>?
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Vjerujemo da svako dijete zaslužuje priliku da uči, raste i ostvari 
              svoj puni potencijal u sigurnom i podržavajućem okruženju.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-card">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Naša priča</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
                Kako je sve počelo
              </h2>
              <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>
                  MENTORA PLUS je nastala iz duboke želje da pomognemo djeci sa smetnjama 
                  u razvoju i njihovim porodicama. Shvatili smo da postoji potreba za 
                  pristupačnom, kvalitetnom i empatičnom edukativnom platformom.
                </p>
                <p>
                  Naš tim stručnjaka - edukatora, terapeuta, psihologa i roditelja - 
                  udružio je snage kako bi stvorio prostor gdje se svako dijete osjeća 
                  prihvaćeno i podržano.
                </p>
                <p>
                  Vjerujemo da učenje treba biti zabavno, prilagođeno i sigurno. 
                  Zato smo osmislili programe koji poštuju tempo svakog djeteta i 
                  slave svaki korak naprijed.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="card-hover bg-primary/5 border-primary/20">
                <CardHeader className="text-center p-6">
                  <div className="w-16 h-16 bg-primary/15 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">Naša misija</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-6 pb-6">
                  <CardDescription className="text-center leading-relaxed">
                    Osnažiti svako dijete kroz prilagođeno učenje i podršku cijeloj porodici.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="card-hover bg-highlight/10 border-highlight/20">
                <CardHeader className="text-center p-6">
                  <div className="w-16 h-16 bg-highlight/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-8 h-8 text-highlight" />
                  </div>
                  <CardTitle className="text-lg">Naša vizija</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-6 pb-6">
                  <CardDescription className="text-center leading-relaxed">
                    Svijet u kojem svako dijete ima pristup kvalitetnoj edukaciji bez obzira na izazove.
                  </CardDescription>
                </CardContent>
              </Card>
              
              <Card className="card-hover bg-accent/10 border-accent/20 col-span-2">
                <CardHeader className="text-center p-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Star className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-lg">Dugoročni cilj</CardTitle>
                </CardHeader>
                <CardContent className="pt-0 px-6 pb-6">
                  <CardDescription className="text-center leading-relaxed">
                    Postati vodeća platforma za inkluzivno obrazovanje u regiji, 
                    pomažući hiljadama porodica na njihovom putu.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-section-light relative">
        <div className="absolute top-0 left-0 right-0 h-16 bg-card" style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }} />
        
        <div className="container-section pt-8">
          <div className="text-center mb-20">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Naš tim</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ko stoji iza MENTORA PLUS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Naš tim čine stručnjaci posvećeni podršci djece i porodica.
            </p>
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
        <div className="absolute top-0 left-0 right-0 h-16 bg-section-light" style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }} />
        
        <div className="container-section pt-8">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Kontakt</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Javite nam se
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Imate pitanja? Želite saznati više? Tu smo za vas.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">
                Zašto nas kontaktirati?
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-5 p-5 bg-muted/50 rounded-2xl">
                  <div className="w-14 h-14 bg-highlight/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-highlight" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Brz odgovor</h4>
                    <p className="text-muted-foreground leading-relaxed">Odgovaramo na upite u roku od 24 sata.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-5 bg-muted/50 rounded-2xl">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Puna podrška</h4>
                    <p className="text-muted-foreground leading-relaxed">Naš tim je tu da vam pomogne u svakom koraku.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-5 p-5 bg-muted/50 rounded-2xl">
                  <div className="w-14 h-14 bg-accent/15 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground text-lg mb-1">Stručna pomoć</h4>
                    <p className="text-muted-foreground leading-relaxed">Povezat ćemo vas sa pravim stručnjakom za vaše potrebe.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="shadow-hover bg-card">
              <CardHeader>
                <CardTitle className="text-2xl">Pošaljite upit</CardTitle>
                <CardDescription className="text-base">
                  Popunite formular ispod i javićemo vam se uskoro.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-foreground">
                      Ime i prezime
                    </label>
                    <Input
                      id="name"
                      placeholder="Vaše ime i prezime"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-14"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-foreground">
                      Email adresa
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="vasa@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-14"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-semibold text-foreground">
                      Poruka
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Opišite kako vam možemo pomoći..."
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
                      "Šaljem..."
                    ) : (
                      <>
                        Pošalji upit
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center pt-2">
                    Odgovaramo u najkraćem mogućem roku. Tu smo za vas.
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
