import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/mentora-plus-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programi" },
  { name: "About Us", href: "/o-nama" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-nav">
      <nav className="container-section flex items-center justify-between py-4 lg:py-5" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="MENTORA PLUS Logo" 
              className="h-12 w-auto group-hover:scale-105 transition-transform duration-300"
            />
            <span className="font-bold text-xl text-primary font-heading tracking-tight">MENTORA PLUS</span>
          </Link>
        </div>
        
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-xl p-3 text-foreground hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-10">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-base font-semibold transition-all duration-300 hover:text-primary relative py-2 px-1",
                location.pathname === item.href
                  ? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-highlight after:rounded-full"
                  : "text-muted-foreground hover:-translate-y-0.5"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
        
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button variant="highlight" asChild>
            <Link to="/o-nama#kontakt">Contact</Link>
          </Button>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={cn("lg:hidden", mobileMenuOpen ? "block" : "hidden")}>
        <div className="fixed inset-0 z-50 bg-foreground/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-card px-6 py-6 sm:max-w-sm shadow-hover">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
              <img 
                src={logo} 
                alt="MENTORA PLUS Logo" 
                className="h-12 w-auto"
              />
              <span className="font-bold text-xl text-primary font-heading">MENTORA PLUS</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-xl p-3 text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-border/50">
              <div className="space-y-2 py-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "-mx-3 block rounded-2xl px-5 py-4 text-lg font-semibold leading-7 transition-all duration-200",
                      location.pathname === item.href
                        ? "text-primary bg-muted"
                        : "text-foreground hover:bg-muted"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-8">
                <Button variant="highlight" className="w-full" size="lg" asChild>
                  <Link to="/o-nama#kontakt" onClick={() => setMobileMenuOpen(false)}>
                    Contact
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
