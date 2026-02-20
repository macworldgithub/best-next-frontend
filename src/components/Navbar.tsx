import { useState } from "react";
import { Car, Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Find a Car", href: "/find-a-car" },
    { label: "Finance", href: "/finance" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "About Us", href: "/about" },
    // { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-border/10">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <Car className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <span className="text-lg font-bold text-secondary-foreground">
              Best<span className="text-gradient-amber">Next</span>Car
            </span>
            <span className="block text-xs text-muted-foreground -mt-1">.com.au</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.href
                  ? "text-primary"
                  : "text-secondary-foreground/70 hover:text-primary"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:1300123456" className="flex items-center gap-2 text-sm text-secondary-foreground/70">
            <Phone className="w-4 h-4" />
            1300 123 456
          </a>
          <Link to="/find-a-car">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold glow-amber">
              Get My Deal
            </Button>
          </Link>
        </div>

        <button
          className="lg:hidden text-secondary-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-secondary border-t border-border/10 pb-6">
          <div className="container mx-auto flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className={`text-sm font-medium transition-colors ${
                  location.pathname === link.href
                    ? "text-primary"
                    : "text-secondary-foreground/70 hover:text-primary"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {/* <Link to="/find-a-car" onClick={() => setIsOpen(false)}>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full mt-2">
                Get My Deal
              </Button>
            </Link> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
