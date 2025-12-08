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
  Star,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-illustration.png";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="gradient-hero min-h-[92vh] flex items-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-highlight/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container-section relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 bg-highlight/15 border border-highlight/30 text-foreground px-5 py-2.5 rounded-full text-sm font-semibold mb-8 animate-fade-up">
                <Sparkles className="w-4 h-4 text-highlight" />
                <span>Digitalna edukativna platforma</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.15] mb-8 animate-fade-up animation-delay-100">
                Podrška koja{" "}
                <span className="text-gradient">osnažuje</span>{" "}
                svako dijete.
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed animate-fade-up animation-delay-200">
                Digitalna edukativna platforma za djecu sa smetnjama u razvoju, 
                njihove roditelje i edukatore.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start animate-fade-up animation-delay-300">
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
            
            <div className="relative animate-fade-up animation-delay-400">
              <div className="relative rounded-4xl overflow-hidden shadow-hover">
                <img 
                  src={heroImage} 
                  alt="Djeca, roditelji i edukatori zajedno uče i rastu" 
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-3xl p-5 shadow-hover animate-float border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-highlight/20 rounded-2xl flex items-center justify-center">
                    <Heart className="w-7 h-7 text-highlight" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-foreground font-heading">500+</p>
                    <p className="text-sm text-muted-foreground font-medium">Sretnih porodica</p>
                  </div>
                </div>
              </div>
              {/* Second floating element */}
              <div className="absolute -top-4 -right-4 bg-accent/90 text-accent-foreground rounded-2xl p-4 shadow-card animate-float animation-delay-300">
                <CheckCircle className="w-8 h-8" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is MENTORA PLUS */}
      <section className="section-padding bg-card relative">
        <div className="container-section">
          <div className="text-center mb-20">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">O platformi</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Šta je MENTORA PLUS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sveobuhvatna platforma koja podržava cijelu porodicu na putu razvoja i učenja.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <Card className="card-hover text-center group bg-card">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 icon-container icon-container-primary rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Edukacija djece</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Prilagođeni programi učenja koji poštuju individualne potrebe svakog djeteta i 
                  potiču razvoj na zabavan i siguran način.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center group bg-card">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 icon-container icon-container-highlight rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-highlight" />
                </div>
                <CardTitle className="text-2xl">Podrška roditeljima</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Blog članci, resursi i savjeti koji pomažu roditeljima da se osjećaju 
                  podržano i osnaženo na svom putu.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center group bg-card">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 icon-container icon-container-accent rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-2xl">Resursi za edukatore</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Stručni materijali i alati za edukatore i terapeute koji rade sa 
                  djecom sa smetnjama u razvoju.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Who is it for - Light blue background */}
      <section className="section-padding bg-section-light relative">
        {/* Curved top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-card" style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }} />
        
        <div className="container-section pt-8">
          <div className="text-center mb-20">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Naša zajednica</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Kome je namijenjena platforma?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              MENTORA PLUS je dizajnirana za sve koji žele podržati razvoj djece.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <Card className="card-hover border-2 border-transparent hover:border-primary/20 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-secondary/40 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Baby className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-xl">Djeca sa smetnjama u razvoju</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Prilagođeni sadržaji koji poštuju tempo svakog djeteta i potiču razvoj 
                  kroz igru i zabavu.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2 border-transparent hover:border-highlight/30 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-12 h-12 text-highlight" />
                </div>
                <CardTitle className="text-xl">Roditelji</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Podrška, savjeti i zajednica koja razumije izazove i radosti roditeljstva.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2 border-transparent hover:border-accent/30 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="text-xl">Edukatori i terapeuti</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Profesionalni resursi i alati za one koji rade sa djecom svakodnevno.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-card relative">
        {/* Curved top */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-section-light" style={{ borderRadius: '0 0 50% 50% / 0 0 100% 100%' }} />
        
        <div className="container-section pt-8">
          <div className="text-center mb-20">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Blog</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Savjeti, podrška i znanje
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Pratite naš blog za korisne članke i savjete stručnjaka.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
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
            ].map((post, index) => {
              const colorClasses: Record<string, { bg: string; text: string; bar: string }> = {
                highlight: { bg: "bg-highlight/20", text: "text-highlight", bar: "bg-highlight" },
                primary: { bg: "bg-primary/10", text: "text-primary", bar: "bg-primary" },
                accent: { bg: "bg-accent/15", text: "text-accent", bar: "bg-accent" },
              };
              const colors = colorClasses[post.color];
              
              return (
                <Card key={index} className="card-hover overflow-hidden group bg-card">
                  <div className={`h-1.5 ${colors.bar}`} />
                  <CardHeader className="pb-4">
                    <div className={`w-14 h-14 ${colors.bg} rounded-2xl flex items-center justify-center mb-4`}>
                      <post.icon className={`w-7 h-7 ${colors.text}`} />
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors text-xl">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base mb-5 leading-relaxed">{post.description}</CardDescription>
                    <Button variant="link" className="p-0 h-auto font-semibold text-primary">
                      Pročitaj više <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/50">
        <div className="container-section">
          <div className="text-center mb-16">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Principi</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Naše vrijednosti
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Principi koji vode sve što radimo.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8">
            {[
              { icon: Heart, label: "Empatija", color: "text-highlight", bg: "bg-highlight/15" },
              { icon: Users, label: "Inkluzija", color: "text-primary", bg: "bg-primary/10" },
              { icon: Shield, label: "Sigurnost", color: "text-accent", bg: "bg-accent/15" },
              { icon: Sparkles, label: "Razvoj", color: "text-secondary", bg: "bg-secondary/30" },
              { icon: HandHeart, label: "Zajedništvo", color: "text-highlight", bg: "bg-highlight/15" },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 ${value.bg} rounded-3xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className={`w-10 h-10 ${value.color}`} />
                </div>
                <p className="font-bold text-foreground text-lg">{value.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-28 lg:py-36 bg-primary relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-highlight rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent rounded-full blur-3xl" />
        </div>
        
        <div className="container-section relative z-10 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-8 leading-tight max-w-4xl mx-auto">
            Zajedno gradimo sigurniju budućnost za svako dijete.
          </h2>
          <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Pridružite se našoj zajednici roditelja, edukatora i stručnjaka koji zajedno 
            stvaraju pozitivnu promjenu.
          </p>
          <Button variant="highlight" size="xl" asChild>
            <Link to="/o-nama#kontakt">
              Pridruži se zajednici
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
