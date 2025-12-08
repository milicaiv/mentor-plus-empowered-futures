import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout } from "@/components/layout/Layout";
import { 
  BookOpen, 
  Users, 
  GraduationCap, 
  Baby, 
  Heart, 
  Shield, 
  Sparkles, 
  HandHeart,
  ArrowRight,
  Star
} from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero min-h-[90vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-64 h-64 bg-highlight rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/30 rounded-full blur-3xl" />
        </div>
        
        <div className="container-section relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-up">
              <div className="inline-flex items-center gap-2 bg-highlight/20 text-highlight-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-highlight" />
                <span>Digitalna edukativna platforma</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
                Podrška koja{" "}
                <span className="text-gradient">osnažuje</span>{" "}
                svako dijete.
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
                Digitalna edukativna platforma za djecu sa smetnjama u razvoju, 
                njihove roditelje i edukatore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/programi">
                    Saznaj više
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="lg" asChild>
                  <Link to="/o-nama#kontakt">Kontaktiraj nas</Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-up animation-delay-200">
              <div className="relative rounded-3xl overflow-hidden shadow-hover">
                <img 
                  src={heroImage} 
                  alt="Djeca, roditelji i edukatori zajedno uče i rastu" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl p-4 shadow-card animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-highlight/20 rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-highlight" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">500+</p>
                    <p className="text-sm text-muted-foreground">Sretnih porodica</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is MENTORA PLUS */}
      <section className="py-24 bg-card">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Šta je MENTORA PLUS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sveobuhvatna platforma koja podržava cijelu porodicu na putu razvoja i učenja.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <CardTitle>Edukacija djece</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Prilagođeni programi učenja koji poštuju individualne potrebe svakog djeteta i 
                  potiču razvoj na zabavan i siguran način.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-highlight/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-highlight/30 transition-colors">
                  <Users className="w-8 h-8 text-highlight" />
                </div>
                <CardTitle>Podrška roditeljima</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Blog članci, resursi i savjeti koji pomažu roditeljima da se osjećaju 
                  podržano i osnaženo na svom putu.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center group">
              <CardHeader>
                <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors">
                  <GraduationCap className="w-8 h-8 text-accent" />
                </div>
                <CardTitle>Resursi za edukatore</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Stručni materijali i alati za edukatore i terapeute koji rade sa 
                  djecom sa smetnjama u razvoju.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-24 bg-background">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Kome je namijenjena platforma?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MENTORA PLUS je dizajnirana za sve koji žele podržati razvoj djece.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="card-hover border-2 border-transparent hover:border-primary/20">
              <CardHeader>
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Baby className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-center">Djeca sa smetnjama u razvoju</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Prilagođeni sadržaji koji poštuju tempo svakog djeteta i potiču razvoj 
                  kroz igru i zabavu.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2 border-transparent hover:border-highlight/30">
              <CardHeader>
                <div className="w-20 h-20 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-highlight" />
                </div>
                <CardTitle className="text-center">Roditelji</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Podrška, savjeti i zajednica koja razumije izazove i radosti roditeljstva.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2 border-transparent hover:border-accent/30">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-center">Edukatori i terapeuti</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base">
                  Profesionalni resursi i alati za one koji rade sa djecom svakodnevno.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-muted/50">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Savjeti, podrška i znanje za roditelje
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Pratite naš blog za korisne članke i savjete stručnjaka.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Emocionalni razvoj djeteta",
                description: "Kako prepoznati i podržati emocionalne potrebe vašeg djeteta kroz različite faze razvoja.",
                icon: Heart,
                color: "highlight"
              },
              {
                title: "Izazovi roditeljstva",
                description: "Praktični savjeti za svakodnevne situacije i kako ostati smiren u stresnim momentima.",
                icon: HandHeart,
                color: "primary"
              },
              {
                title: "Teškoće u učenju",
                description: "Strategije i tehnike koje pomažu djeci sa teškoćama u učenju da napreduju.",
                icon: Star,
                color: "accent"
              }
            ].map((post, index) => (
              <Card key={index} className="card-hover overflow-hidden group">
                <div className={`h-2 bg-${post.color}`} />
                <CardHeader>
                  <div className={`w-12 h-12 bg-${post.color}/20 rounded-xl flex items-center justify-center mb-4`}>
                    <post.icon className={`w-6 h-6 text-${post.color}`} />
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">{post.description}</CardDescription>
                  <Button variant="link" className="p-0 h-auto font-semibold">
                    Pročitaj više <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-card">
        <div className="container-section">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Naše vrijednosti
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Principi koji vode sve što radimo.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {[
              { icon: Heart, label: "Empatija", color: "text-highlight" },
              { icon: Users, label: "Inkluzija", color: "text-primary" },
              { icon: Shield, label: "Sigurnost", color: "text-accent" },
              { icon: Sparkles, label: "Razvoj", color: "text-secondary" },
              { icon: HandHeart, label: "Zajedništvo", color: "text-highlight" },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className={`w-8 h-8 ${value.color}`} />
                </div>
                <p className="font-semibold text-foreground">{value.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container-section relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Zajedno gradimo sigurniju budućnost za svako dijete.
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Pridružite se našoj zajednici roditelja, edukatora i stručnjaka koji zajedno 
            stvaraju pozitivnu promjenu.
          </p>
          <Button variant="highlight" size="xl" asChild>
            <Link to="/o-nama#kontakt">
              Pridruži se zajednici
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
