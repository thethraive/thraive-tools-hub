import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-16 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 via-background to-background -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-success/5 rounded-full blur-3xl -z-10" />
      
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight animate-fade-in">
          AI Tools.{" "}
          <span className="relative inline-block">
            Simplified
            <span className="absolute -bottom-2 left-0 right-0 h-3 bg-accent/30 -z-10" />
          </span>
          .
        </h1>
        
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          Curated by{" "}
          <span className="font-semibold text-foreground">Sumanth & Apoorva</span>{" "}
          from{" "}
          <a 
            href="https://instagram.com/thraive.in" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold text-foreground underline hover:no-underline"
          >
            @thraive.in
          </a>
        </p>
        
        <p 
          className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          Your go-to directory for the best AI tools across coding, design, video, and presentations
        </p>
        
        <div 
          className="animate-fade-in"
          style={{ animationDelay: "0.3s" }}
        >
          <Button 
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 font-semibold text-base px-8 py-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            <a href="#tools" className="flex items-center gap-2">
              Explore Tools
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
