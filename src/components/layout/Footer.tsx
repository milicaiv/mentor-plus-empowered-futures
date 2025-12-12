import { Link } from "react-router-dom";
import { Heart, Mail, Phone } from "lucide-react";
const logo = "/images/mentora-plus-logo.png";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-section py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="MENTORA PLUS Logo" 
                className="h-14 w-auto bg-white rounded-2xl p-1.5"
              />
              <span className="font-bold text-2xl font-heading">MENTORA PLUS</span>
            </Link>
            <p className="text-primary-foreground/80 max-w-md leading-relaxed text-lg mb-6">
              A digital educational platform for children with developmental disabilities, their parents, and educators.
            </p>
            <p className="text-highlight font-semibold text-lg italic">
              "Support that empowers."
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-heading">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-highlight transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight" />
                  Home
                </Link>
              </li>
              <li>
                <Link to="/programi" className="text-primary-foreground/80 hover:text-highlight transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight" />
                  Programs
                </Link>
              </li>
              <li>
                <Link to="/o-nama" className="text-primary-foreground/80 hover:text-highlight transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/o-nama#kontakt" className="text-primary-foreground/80 hover:text-highlight transition-colors text-base flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6 font-heading">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-xl bg-highlight/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-highlight" />
                </div>
                <a href="mailto:info@mentoraplus.com" className="hover:text-highlight transition-colors">
                  info@mentoraplus.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80">
                <div className="w-10 h-10 rounded-xl bg-highlight/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-highlight" />
                </div>
                <a href="tel:+38761000000" className="hover:text-highlight transition-colors">
                  +387 61 000 000
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-base">
            © {new Date().getFullYear()} MENTORA PLUS – Support that empowers.
          </p>
          <p className="text-primary-foreground/60 text-base flex items-center gap-2">
            Made with <Heart className="w-5 h-5 text-highlight fill-highlight animate-pulse-gentle" /> for every child
          </p>
        </div>
      </div>
    </footer>
  );
}
