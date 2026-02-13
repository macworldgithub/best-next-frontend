import { useState } from "react";
import { Calculator, TrendingUp, ShieldCheck, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const FinancePage = () => {
  const [vehicleValue, setVehicleValue] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [onCosts, setOnCosts] = useState("2000");
  const [result, setResult] = useState<{ lvr: number; tier: string } | null>(null);

  const calculateLVR = () => {
    const vv = parseFloat(vehicleValue) || 0;
    const dp = parseFloat(downPayment) || 0;
    const oc = parseFloat(onCosts) || 0;
    if (vv <= 0) return;
    const loanAmount = vv + oc - dp;
    const lvr = (loanAmount / vv) * 100;
    let tier = "preferred";
    if (lvr > 130) tier = "high_risk";
    else if (lvr > 100) tier = "acceptable";
    setResult({ lvr: Math.round(lvr * 10) / 10, tier });
  };

  const tierColors: Record<string, string> = {
    preferred: "text-green-500",
    acceptable: "text-primary",
    high_risk: "text-destructive",
  };

  const tierLabels: Record<string, string> = {
    preferred: "Preferred — Great position!",
    acceptable: "Acceptable — May need higher deposit",
    high_risk: "High Risk — Consider adjusting",
  };

  return (
    <div className="pt-24">
      <section className="hero-gradient py-20">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Finance Options</p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground font-display mb-6">
            Smart <span className="text-gradient-amber">Finance</span> Solutions
          </h1>
          <p className="text-lg text-secondary-foreground/60 max-w-2xl mx-auto">
            Get indicative financing guidance instantly with our LVR calculator. No credit checks, no impact on your score.
          </p>
        </div>
      </section>

      {/* LVR Calculator */}
      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-foreground font-display mb-4">LVR Calculator</h2>
              <p className="text-muted-foreground mb-8">
                Loan-to-Value Ratio helps you understand your financing position. Enter details below for instant guidance.
              </p>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Vehicle Value ($)</label>
                  <input
                    type="number"
                    value={vehicleValue}
                    onChange={(e) => setVehicleValue(e.target.value)}
                    placeholder="e.g. 35000"
                    className="w-full h-12 px-4 rounded-lg border border-input bg-card text-card-foreground focus:ring-2 focus:ring-ring outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">Down Payment ($)</label>
                  <input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(e.target.value)}
                    placeholder="e.g. 5000"
                    className="w-full h-12 px-4 rounded-lg border border-input bg-card text-card-foreground focus:ring-2 focus:ring-ring outline-none"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground block mb-2">On-Road Costs ($)</label>
                  <input
                    type="number"
                    value={onCosts}
                    onChange={(e) => setOnCosts(e.target.value)}
                    placeholder="e.g. 2000"
                    className="w-full h-12 px-4 rounded-lg border border-input bg-card text-card-foreground focus:ring-2 focus:ring-ring outline-none"
                  />
                </div>
                <Button onClick={calculateLVR} className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 glow-amber">
                  Calculate LVR
                </Button>
              </div>

              {result && (
                <div className="mt-6 bg-card rounded-2xl p-6 card-elevated">
                  <p className="text-sm text-muted-foreground mb-1">Your LVR</p>
                  <p className={`text-4xl font-bold font-display ${tierColors[result.tier]}`}>
                    {result.lvr}%
                  </p>
                  <p className={`text-sm font-medium mt-1 ${tierColors[result.tier]}`}>
                    {tierLabels[result.tier]}
                  </p>
                </div>
              )}
            </div>

            {/* Info cards */}
            <div className="space-y-6">
              {[
                { icon: TrendingUp, title: "Competitive Rates", desc: "We compare 30+ lenders to find the lowest rates for your situation." },
                { icon: ShieldCheck, title: "No Credit Impact", desc: "Our LVR check is internal — it never touches your credit file." },
                { icon: Calculator, title: "How LVR Works", desc: "LVR = (Loan Amount ÷ Vehicle Value) × 100. Below 100% is ideal, 100–130% is acceptable, above 130% may need adjustment." },
                { icon: Info, title: "Indicative Only", desc: "This is guidance, not formal pre-approval. Full serviceability assessments are completed by our licensed brokers." },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-2xl p-6 card-elevated flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground mb-1">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancePage;
