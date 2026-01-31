import { Instagram, Heart } from "lucide-react";
import logo from "@/assets/thraive-logo.jpg";

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img 
              src={logo} 
              alt="thrAIve" 
              className="h-8 w-auto"
            />
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </a>
            <a 
              href="#tools" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Tools
            </a>
            <a 
              href="#about" 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a 
              href="https://instagram.com/thraive.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
          
          <a
            href="https://instagram.com/thraive.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Instagram className="w-5 h-5" />
            <span className="text-sm">@thraive.ai</span>
          </a>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            © 2026 thrAIve | Curated with{" "}
            <Heart className="w-4 h-4 text-highlight fill-highlight" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
