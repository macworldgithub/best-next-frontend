import { MessageSquare, Globe, Calculator, Clock, Shield, Users } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "AI Chat Assistant",
    description: "Get personalized car recommendations through our smart conversational AI via SMS or WhatsApp.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "We speak your language — English, Mandarin, Arabic, Hindi and more for Australia's diverse community.",
  },
  {
    icon: Calculator,
    title: "Smart Finance Calculator",
    description: "Our internal LVR algorithm provides instant indicative financing guidance without credit checks.",
  },
  {
    icon: Clock,
    title: "Fast Approvals",
    description: "Quick and easy online approval process — hear back within hours, not days.",
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "Your data is encrypted and handled in compliance with Australian Privacy Principles.",
  },
  {
    icon: Users,
    title: "Expert Brokers",
    description: "Pre-qualified leads are seamlessly handed to licensed brokers for final approval.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Why Choose Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-foreground font-display">
            Everything You Need
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6 hover:bg-secondary-foreground/10 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center mb-4 group-hover:bg-primary/25 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-secondary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-foreground/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
