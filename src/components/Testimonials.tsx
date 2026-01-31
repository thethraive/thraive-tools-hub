import { MessageSquare } from "lucide-react";

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            What People Say
          </h2>
        </div>

        <div className="relative">
          {/* Decorative gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-success/5 to-highlight/5 rounded-3xl -z-10" />
          
          <div className="border border-border rounded-3xl p-12 md:p-16 text-center bg-card/50 backdrop-blur-sm">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary mb-6">
              <MessageSquare className="w-8 h-8 text-muted-foreground" />
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
              Coming Soon
            </h3>
            
            <p className="text-muted-foreground max-w-md mx-auto">
              We're collecting testimonials from our amazing community. 
              Check back soon to see what people are saying about thrAIve!
            </p>
            
            <div className="mt-8 flex justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="w-2 h-2 rounded-full bg-success animate-pulse" style={{ animationDelay: "0.2s" }} />
              <span className="w-2 h-2 rounded-full bg-highlight animate-pulse" style={{ animationDelay: "0.4s" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
