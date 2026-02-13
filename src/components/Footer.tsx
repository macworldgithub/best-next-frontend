import { Car } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border/10 py-12">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Car className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-secondary-foreground">
                Best<span className="text-gradient-amber">Next</span>Car
              </span>
            </Link>
            <p className="text-secondary-foreground/50 text-sm leading-relaxed">
              Australia's smarter way to buy your next car with AI-powered guidance and expert brokers.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              {[
                { label: "About Us", to: "/about" },
                { label: "How It Works", to: "/how-it-works" },
                { label: "Privacy Policy", to: "/privacy" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4 text-sm">Services</h4>
            <ul className="space-y-2">
              {[
                { label: "Find a Car", to: "/find-a-car" },
                { label: "Finance Options", to: "/finance" },
                { label: "Trade-In", to: "/contact" },
                { label: "Insurance", to: "/contact" },
              ].map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-secondary-foreground mb-4 text-sm">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><a href="tel:1300123456" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">1300 123 456</a></li>
              <li><a href="mailto:info@bestnextcar.com.au" className="text-sm text-secondary-foreground/50 hover:text-primary transition-colors">info@bestnextcar.com.au</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-secondary-foreground/40">
            © 2026 BestNextCar.com.au. All rights reserved. ABN 00 000 000 000.
          </p>
          <p className="text-xs text-secondary-foreground/40 max-w-lg text-center md:text-right">
            Indicative guidance only — not formal pre-approval. Full responsible lending assessments by licensed brokers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
