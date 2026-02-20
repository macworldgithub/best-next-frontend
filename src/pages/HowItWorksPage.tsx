import { MessageSquare, Search, ShieldCheck, FileText, Handshake, QrCode } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const steps = [
  {
    icon: QrCode,
    number: "01",
    title: "Start a Conversation",
    description: "Scan our QR code, text 'START' to our number, or use the web chat widget. Our AI greets you and asks your preferred language.",
  },
  {
    icon: MessageSquare,
    number: "02",
    title: "Tell Us What You Need",
    description: "New or preowned? Budget range? Finance needed? Our AI asks simple questions to understand your perfect car.",
  },
  {
    icon: Search,
    number: "03",
    title: "Get Matched",
    description: "We search our partner network and present 4-8 vehicles matching your criteria with photos, specs, and pricing.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Finance Pre-Qualification",
    description: "If you need finance, our internal LVR algorithm provides instant indicative guidance — no credit score impact.",
  },
  {
    icon: FileText,
    number: "05",
    title: "Submit Documents",
    description: "Securely upload your ID, payslips, and bank statements through our encrypted upload link.",
  },
  {
    icon: Handshake,
    number: "06",
    title: "Broker Handoff",
    description: "Your pre-qualified lead is passed to a licensed broker who handles final approval, paperwork, and delivery.",
  },
];

const HowItWorksPage = () => {
  return (
    <div className="pt-16">
      <section className="hero-gradient py-20">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Process</p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground font-display mb-6">
            How <span className="text-gradient-amber">It Works</span>
          </h1>
          <p className="text-lg text-secondary-foreground/60 max-w-2xl mx-auto">
            From first text to driving home happy — our AI-powered journey makes car buying effortless.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex gap-6 items-start">
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-px h-16 bg-border mt-2" />
                  )}
                </div>
                <div className="bg-card rounded-2xl p-6 card-elevated flex-1">
                  <span className="text-primary font-bold text-sm">Step {step.number}</span>
                  <h3 className="text-xl font-bold text-card-foreground font-display mt-1 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/find-a-car">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-14 px-10 text-base glow-amber">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Resumable sessions */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-secondary-foreground font-display mb-4">Pick Up Where You Left Off</h2>
          <p className="text-secondary-foreground/60 max-w-xl mx-auto text-lg mb-8">
            Our AI remembers you. Come back anytime and continue your car search — no need to start over.
          </p>
          <div className="bg-secondary-foreground/5 border border-secondary-foreground/10 rounded-2xl p-8 max-w-lg mx-auto">
            <p className="text-secondary-foreground/80 italic text-lg">
              "Welcome back, Shaun! Last time we were looking at SUVs around $45k. Want to continue from there?"
            </p>
            <p className="text-primary text-sm mt-4 font-semibold">— BestNextCar AI Assistant</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorksPage;
