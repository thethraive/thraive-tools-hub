import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-black">
            About{" "}
            <span className="relative inline-block">
              thrAIve
              <span className="absolute -bottom-1 left-0 right-0 h-2 bg-accent/30 -z-10" />
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We're <span className="font-semibold text-foreground">Sumanth & Apoorva</span>, 
            digital creators on a mission to simplify AI, tech, tools, news & websites for everyone.
          </p>
          
          <p className="text-muted-foreground max-w-xl mx-auto">
            Follow us for the latest AI tool discoveries, tech insights, and creative inspiration.
          </p>
          
          <Button
            asChild
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full font-semibold px-8"
          >
            <a
              href="https://instagram.com/thraive.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Instagram className="w-5 h-5" />
              Follow @thraive.in
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
