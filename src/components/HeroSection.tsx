import { useState } from "react";
import { CheckCircle2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-car.jpg";

const budgetOptions = ["$15k", "$30k", "$45k", "$60k+"];

const HeroSection = () => {
  const [selectedBudget, setSelectedBudget] = useState<string | null>(null);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 hero-gradient" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/70 to-transparent" />

      <div className="container mx-auto relative z-10 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-up">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-4">
              Australia's Smarter Car Buying Experience
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
              Find Your Next Car{" "}
              <span className="text-gradient-amber">the Smart Way</span>
            </h1>
            <p className="text-lg text-secondary-foreground/70 mb-8 max-w-lg">
              AI-powered car finding, fast finance approval, and hassle-free buying — all from a quick conversation.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              {["Check Eligibility in Minutes", "Compare Best Financing Options", "Drive Home Happy"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-secondary-foreground/80">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-secondary-foreground/60 text-sm">1200+ Five Star Reviews</span>
            </div>
          </div>

          {/* Right - Budget card */}
          <div className="animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="bg-card rounded-2xl p-8 card-elevated max-w-md mx-auto lg:ml-auto">
              <h2 className="text-xl font-bold text-card-foreground mb-2 font-display">
                Pre-Qualify for Your Next Car!
              </h2>
              <p className="text-muted-foreground text-sm mb-6">
                No impact on your credit score
              </p>

              <div className="mb-6">
                <label className="text-sm font-medium text-card-foreground mb-3 block">
                  What's your budget?
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {budgetOptions.map((budget) => (
                    <button
                      key={budget}
                      onClick={() => setSelectedBudget(budget)}
                      className={`py-3 px-2 rounded-lg border text-sm font-medium transition-all ${
                        selectedBudget === budget
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border text-card-foreground hover:border-primary/50"
                      }`}
                    >
                      {budget}
                    </button>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 text-base glow-amber">
                Check Eligibility
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                🔒 Instant online approval — no impact to your credit score
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
