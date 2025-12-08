import { Link } from "react-router-dom";
import { Heart, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-highlight flex items-center justify-center">
                <span className="text-highlight-foreground font-bold text-lg">M+</span>
              </div>
              <span className="font-bold text-xl">MENTORA PLUS</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed">
              Digitalna edukativna platforma za djecu sa smetnjama u razvoju, njihove roditelje i edukatore. 
              Podrška koja osnažuje.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Brzi linkovi</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-highlight transition-colors">
                  Početna
                </Link>
              </li>
              <li>
                <Link to="/programi" className="text-primary-foreground/80 hover:text-highlight transition-colors">
                  Programi
                </Link>
              </li>
              <li>
                <Link to="/o-nama" className="text-primary-foreground/80 hover:text-highlight transition-colors">
                  O nama
                </Link>
              </li>
              <li>
                <Link to="/o-nama#kontakt" className="text-primary-foreground/80 hover:text-highlight transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-5 h-5 text-highlight" />
                <a href="mailto:info@mentoraplus.com" className="hover:text-highlight transition-colors">
                  info@mentoraplus.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-5 h-5 text-highlight" />
                <a href="tel:+38761000000" className="hover:text-highlight transition-colors">
                  +387 61 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} MENTORA PLUS. Sva prava zadržana.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            Napravljeno sa <Heart className="w-4 h-4 text-highlight fill-highlight" /> za svako dijete
          </p>
        </div>
      </div>
    </footer>
  );
}
