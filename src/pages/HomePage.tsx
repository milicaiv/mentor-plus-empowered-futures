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
import heroBackground from "@/assets/hero-background.png";

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section with Background Illustration */}
      <section className="min-h-[92vh] flex items-center relative overflow-hidden">
        {/* Hero Background Image */}
        <div className="absolute inset-0">
          <img 
            src={heroBackground} 
            alt="" 
            className="w-full h-full object-cover object-center"
            aria-hidden="true"
          />
          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
        </div>
        
        {/* Decorative floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-highlight/10 rounded-full blur-3xl animate-float-slow" />
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" />
        </div>
        
        <div className="container-section relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 bg-card/80 backdrop-blur-sm border border-highlight/30 text-foreground px-5 py-2.5 rounded-full text-sm font-semibold mb-8 animate-fade-up shadow-soft">
              <Sparkles className="w-4 h-4 text-highlight" />
              <span>Digital Educational Platform</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-8 animate-fade-up animation-delay-100">
              Support that{" "}
              <span className="text-gradient">empowers</span>{" "}
              every child.
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed animate-fade-up animation-delay-200">
              A modern educational platform for children with developmental disabilities, 
              created to support learning, emotional growth, and family confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 animate-fade-up animation-delay-300">
              <Button variant="hero" size="xl" asChild>
                <Link to="/programi">
                  Explore the Platform
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/o-nama#kontakt">Contact Us</Link>
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-8 mt-14 animate-fade-up animation-delay-400">
              <div className="flex items-center gap-3 bg-card/70 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-soft">
                <div className="w-12 h-12 bg-highlight/20 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-highlight" />
                </div>
                <div>
                  <p className="font-bold text-xl text-foreground font-heading">500+</p>
                  <p className="text-sm text-muted-foreground">Happy Families</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-card/70 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-soft">
                <div className="w-12 h-12 bg-accent/15 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-bold text-xl text-foreground font-heading">5</p>
                  <p className="text-sm text-muted-foreground">Learning Programs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is MENTORA PLUS */}
      <section className="section-padding bg-card relative">
        <div className="container-section">
          <div className="text-center mb-20">
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">About the Platform</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              What is MENTORA PLUS?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A comprehensive platform supporting the whole family on their journey of development and learning.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <Card className="card-hover text-center group bg-card">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 icon-container icon-container-primary rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
                <CardTitle className="text-2xl">Personalized Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Structured educational content adapted to each child's needs and abilities, 
                  encouraging development in a fun and safe way.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center group bg-card">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 icon-container icon-container-highlight rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-highlight" />
                </div>
                <CardTitle className="text-2xl">Parental Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  Educational blogs, expert advice, and emotional guidance for families 
                  to feel supported and empowered on their journey.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-hover text-center group bg-card">
              <CardHeader className="pb-4">
                <div className="w-20 h-20 icon-container icon-container-accent rounded-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <GraduationCap className="w-10 h-10 text-accent" />
                </div>
                <CardTitle className="text-2xl">Professional Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  A platform built for collaboration between parents, educators, and therapists 
                  working with children with developmental disabilities.
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
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Our Community</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Who is MENTORA PLUS for?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              MENTORA PLUS is designed for everyone who wants to support children's development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            <Card className="card-hover border-2 border-transparent hover:border-primary/20 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-secondary/40 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Baby className="w-12 h-12 text-primary" />
                </div>
                <CardTitle className="text-xl">For Children</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  A safe digital space for learning, emotional development, and confidence building 
                  that respects each child's pace.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2 border-transparent hover:border-highlight/30 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-highlight/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-12 h-12 text-highlight" />
                </div>
                <CardTitle className="text-xl">For Parents</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Support, understanding, and reliable educational guidance for families 
                  navigating the challenges and joys of parenting.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-2 border-transparent hover:border-accent/30 bg-card">
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 bg-accent/15 rounded-full flex items-center justify-center mx-auto mb-6">
                  <GraduationCap className="w-12 h-12 text-accent" />
                </div>
                <CardTitle className="text-xl">For Educators</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-base leading-relaxed">
                  Tools and resources that strengthen inclusive teaching for those 
                  who work with children every day.
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
              Knowledge, Support & Understanding for Parents
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Follow our blog for helpful articles and expert advice.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                title: "Understanding Emotional Development",
                description: "How to recognize and support your child's emotional needs through different stages of development.",
                icon: Heart,
                color: "highlight"
              },
              {
                title: "Daily Learning Challenges",
                description: "Practical tips for everyday situations and how to stay calm during stressful moments.",
                icon: HandHeart,
                color: "primary"
              },
              {
                title: "Building Routines with Confidence",
                description: "Strategies and techniques that help children with learning difficulties to thrive.",
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
                      Read the Blog <ArrowRight className="w-4 h-4 ml-1" />
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
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">Principles</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Every child deserves dignity, understanding, and a chance to grow with confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 lg:gap-8">
            {[
              { icon: Heart, label: "Empathy", color: "text-highlight", bg: "bg-highlight/15" },
              { icon: Users, label: "Inclusion", color: "text-primary", bg: "bg-primary/10" },
              { icon: Shield, label: "Safety", color: "text-accent", bg: "bg-accent/15" },
              { icon: Sparkles, label: "Growth", color: "text-secondary", bg: "bg-secondary/30" },
              { icon: HandHeart, label: "Community", color: "text-highlight", bg: "bg-highlight/15" },
              { icon: Star, label: "Trust", color: "text-primary", bg: "bg-primary/10" },
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
            Together, we build safer paths for every child.
          </h2>
          <p className="text-lg lg:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-12 leading-relaxed">
            Join our community of parents, educators, and professionals who are 
            creating positive change together.
          </p>
          <Button variant="highlight" size="xl" asChild>
            <Link to="/o-nama#kontakt">
              Join Our Community
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
