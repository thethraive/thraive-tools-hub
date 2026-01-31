import { Instagram } from "lucide-react";
import logo from "@/assets/thraive-logo.jpg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img 
            src={logo} 
            alt="thrAIve" 
            className="h-8 w-auto"
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#tools" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Tools
          </a>
          <a 
            href="#about" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="#testimonials" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Testimonials
          </a>
        </nav>

        <a 
          href="https://instagram.com/thraive.ai" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
        >
          <Instagram className="w-5 h-5" />
          <span className="hidden sm:inline">@thraive.ai</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
