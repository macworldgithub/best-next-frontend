import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="hero-gradient rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "radial-gradient(circle at 30% 50%, hsl(36 100% 50% / 0.3), transparent 50%)",
          }} />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground font-display mb-4">
              Ready to Find Your{" "}
              <span className="text-gradient-amber">Perfect Car?</span>
            </h2>
            <p className="text-secondary-foreground/60 max-w-xl mx-auto mb-8 text-lg">
              Start a conversation with our AI assistant today. Text 'START' to our number or scan the QR code.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-8 text-base glow-amber">
                Get My Deal Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 h-14 px-8 text-base">
                Text 'START' to 0400 000 000
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
