import { Search, ShieldCheck, Handshake } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "1",
    title: "Search & Compare",
    description: "Browse a wide range of quality new and used cars. Our AI finds the best matches for your budget.",
  },
  {
    icon: ShieldCheck,
    number: "2",
    title: "Get Pre-Approved",
    description: "Apply online for quick finance approval with competitive rates. No credit score impact.",
  },
  {
    icon: Handshake,
    number: "3",
    title: "Buy with Confidence",
    description: "We handle all the details with our expert brokers, so you drive away happy.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Simple Process
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
            How It Works
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-card rounded-2xl p-8 text-center card-elevated group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                  {step.number}
                </span>
                <h3 className="text-lg font-bold text-card-foreground font-display">
                  {step.title}
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
