import { Users, Target, Heart, Award } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", description: "We exist to simplify the car buying journey for every Australian — no jargon, no pressure, just smart guidance." },
  { icon: Heart, title: "Customer First", description: "Every conversation is personalized. We listen, understand your needs, and match you with the perfect car." },
  { icon: Users, title: "Inclusive", description: "We serve Australia's diverse communities with multi-language support in English, Mandarin, Arabic, Hindi and more." },
  { icon: Award, title: "Trusted Experts", description: "Our licensed brokers handle all the heavy lifting — finance, paperwork, and negotiation — so you don't have to." },
];

const team = [
  { name: "Shaun Mitchell", role: "Founder & CEO", bio: "20+ years in automotive finance, passionate about making car buying fair for everyone." },
  { name: "Priya Sharma", role: "Head of AI", bio: "Former fintech engineer building the conversational AI that powers our smart car matching." },
  { name: "David Chen", role: "Broker Lead", bio: "Licensed finance broker ensuring every customer gets the best deal possible." },
];

const AboutPage = () => {
  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="hero-gradient py-20">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground font-display mb-6">
            Changing How Australia <span className="text-gradient-amber">Buys Cars</span>
          </h1>
          <p className="text-lg text-secondary-foreground/60 max-w-2xl mx-auto">
            BestNextCar is an Australian car brokerage powered by AI, designed to make finding, financing, and buying your next vehicle effortless.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground font-display mb-4">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We started BestNextCar because buying a car in Australia shouldn't be stressful. Too many people face confusing financing, pushy salespeople, and endless research.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our AI-powered platform changes that. Through a simple text conversation, we guide you from "I need a car" to "I love my car" — matching your budget, preferences, and financing needs without the hassle.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 card-elevated">
              <div className="grid grid-cols-2 gap-6 text-center">
                {[
                  { number: "5,000+", label: "Happy Customers" },
                  { number: "1,200+", label: "5-Star Reviews" },
                  { number: "30+", label: "Lender Partners" },
                  { number: "24/7", label: "AI Availability" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-primary font-display">{stat.number}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-secondary-foreground font-display">Our Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((v) => (
              <div key={v.title} className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-6 text-center">
                <div className="w-14 h-14 rounded-xl bg-primary/15 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-secondary-foreground mb-2">{v.title}</h3>
                <p className="text-secondary-foreground/60 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-foreground font-display">Meet the Team</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-card rounded-2xl p-6 card-elevated text-center">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{member.name.charAt(0)}</span>
                </div>
                <h3 className="font-bold text-card-foreground">{member.name}</h3>
                <p className="text-primary text-sm mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
