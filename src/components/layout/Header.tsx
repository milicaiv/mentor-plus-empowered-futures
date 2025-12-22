import {Link, useLocation} from "react-router-dom";
import {useEffect, useMemo, useState} from "react";
import {createPortal} from "react-dom";
import {Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button";
import {cn} from "@/lib/utils";
import logo from "@/assets/logo-min.png";

const navigation = [
  {name: "Home", href: "/"},
  {name: "Programs", href: "/programi"},
  {name: "About Us", href: "/o-nama"},
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => setMobileMenuOpen(false);
  const openMobile = () => setMobileMenuOpen(true);

  // Zatvori meni kad se promijeni ruta
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock scroll kad je meni otvoren
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mobileMenuOpen]);

  const mobileMenuPortal = useMemo(() => {
    if (typeof document === "undefined") return null;
    if (!mobileMenuOpen) return null;

    return createPortal(
      <div className="lg:hidden">
        {/* Overlay */}
        <div
          className="fixed inset-0 z-[100] bg-foreground/20 backdrop-blur-sm"
          onClick={closeMobile}
          aria-hidden="true"
        />

        {/* Panel (auto visina, ne zauzima cijeli ekran) */}
        <div
          className={cn(
            "fixed right-4 top-4 z-[101]",
            "w-[min(92vw,22rem)]",
            "max-h-[calc(100vh-2rem)] overflow-y-auto",
            "rounded-2xl bg-card px-6 py-6 shadow-hover",
            "ring-1 ring-border/50"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="-m-1.5 p-1.5 flex items-center gap-3"
              onClick={closeMobile}
            >
              <img
                src={logo}
                alt="MENTORA PLUS Logo"
                className="h-12 w-auto"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
              <span className="font-bold text-lg text-primary font-heading">
                MENTORA PLUS
              </span>
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-xl p-3 text-foreground hover:bg-muted transition-colors"
              onClick={closeMobile}
              aria-label="Close menu"
            >
              <X className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>

          <div className="mt-6">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block rounded-2xl px-5 py-4 text-lg font-semibold leading-7 transition-all duration-200",
                    location.pathname === item.href
                      ? "text-primary bg-muted"
                      : "text-foreground hover:bg-muted"
                  )}
                  onClick={closeMobile}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-4">
              <Button variant="highlight" className="w-full" size="lg" asChild>
                <Link to="/o-nama#kontakt" onClick={closeMobile}>
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>,
      document.body
    );
  }, [mobileMenuOpen, location.pathname]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-nav">
        <nav
          className="container-section flex items-center justify-between py-4 lg:py-3.5"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
              <img
                src={logo}
                alt="MENTORA PLUS Logo"
                className="h-14 lg:h-16 w-auto group-hover:scale-105 transition-transform duration-300"
                loading="eager"
                fetchPriority="high"
                decoding="sync"
              />
              <span className="font-bold text-xl text-primary font-heading tracking-tight">
                MENTORA PLUS
              </span>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-xl p-3 text-foreground hover:bg-muted transition-colors"
              onClick={openMobile}
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>

          {/* Desktop nav */}
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

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Button variant="highlight" asChild>
              <Link to="/o-nama#kontakt">Contact</Link>
            </Button>
          </div>
        </nav>
      </header>

      {/* Mobile menu via portal */}
      {mobileMenuPortal}
    </>
  );
}