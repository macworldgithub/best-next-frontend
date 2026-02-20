import { useState } from "react";
import {
  Calculator,
  TrendingUp,
  ShieldCheck,
  Info,
  Loader2,
  DollarSign,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { BACKEND_URL } from "@/utils/config"; // adjust path if needed

interface LvrResponse {
  lvr: number;
  // tier?: string;   // if backend ever returns tier — currently it doesn't
}

const FinancePage = () => {
  const [vehicleValue, setVehicleValue] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [result, setResult] = useState<{ lvr: number; tier: string } | null>(
    null,
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getTier = (lvr: number): string => {
    if (lvr <= 100) return "preferred";
    if (lvr <= 130) return "acceptable";
    return "high_risk";
  };

  const tierStyles: Record<
    string,
    { color: string; label: string; bg: string }
  > = {
    preferred: {
      color: "text-green-600",
      label: "Preferred — Excellent position!",
      bg: "bg-green-100",
    },
    acceptable: {
      color: "text-blue-600",
      label: "Acceptable — May attract slightly higher rate",
      bg: "bg-blue-100",
    },
    high_risk: {
      color: "text-red-600",
      label: "High Risk — Consider increasing deposit or reducing loan",
      bg: "bg-red-100",
    },
  };

  const calculateLVR = async () => {
    setError(null);
    setResult(null);
    setLoading(true);

    const vv = parseFloat(vehicleValue) || 0;
    const la = parseFloat(loanAmount) || 0;

    if (vv <= 0) {
      setError("Please enter a valid vehicle value");
      setLoading(false);
      return;
    }
    if (la < 0) {
      setError("Loan amount cannot be negative");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${BACKEND_URL}lvr`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          vehicle_value: vv,
          loan_amount: la,
        }),
      });

      if (!response.ok) {
        throw new Error(`Server error (${response.status})`);
      }

      const data: LvrResponse = await response.json();

      const finalLvr = data.lvr ?? (la / vv) * 100;

      setResult({
        lvr: Math.round(finalLvr * 10) / 10,
        tier: getTier(finalLvr),
      });
    } catch (err) {
      console.error(err);
      setError("Could not connect to finance service. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16 pb-16 min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero */}
      <section className="hero-gradient py-16 md:py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Instant Finance Guidance
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Calculate Your <span className="text-gradient-amber">LVR</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            See your Loan-to-Value Ratio instantly — no credit check, no
            obligation.
          </p>
        </div>
      </section>

      {/* Calculator + Info */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            {/* Left - Form */}
            <div className="bg-card rounded-2xl shadow-lg border p-8">
              <h2 className="text-3xl font-bold mb-6">LVR Calculator</h2>
              <p className="text-muted-foreground mb-8">
                Enter the vehicle value and the loan amount you're considering.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Vehicle Value (AUD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="number"
                      value={vehicleValue}
                      onChange={(e) => setVehicleValue(e.target.value)}
                      placeholder="e.g. 45000"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Market value or purchase price of the vehicle
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Loan Amount (AUD)
                  </label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <input
                      type="number"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      placeholder="e.g. 38000"
                      className="w-full pl-10 pr-4 py-3 rounded-lg border bg-background focus:ring-2 focus:ring-primary outline-none"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-1.5">
                    Amount you plan to borrow (excluding deposit)
                  </p>
                </div>

                <Button
                  onClick={calculateLVR}
                  disabled={loading || !vehicleValue.trim()}
                  className="w-full h-12 text-lg font-semibold mt-4"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Calculating...
                    </>
                  ) : (
                    "Calculate LVR"
                  )}
                </Button>
              </div>

              {error && (
                <div className="mt-6 p-4 bg-destructive/10 text-destructive rounded-lg text-sm border border-destructive/30">
                  {error}
                </div>
              )}

              {result && (
                <div
                  className={`mt-8 p-6 rounded-xl ${tierStyles[result.tier].bg} border`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <p className="text-lg font-medium">
                      Your Loan-to-Value Ratio
                    </p>
                    <p
                      className={`text-3xl font-bold ${tierStyles[result.tier].color}`}
                    >
                      {result.lvr}%
                    </p>
                  </div>

                  <div className="w-full bg-white/50 h-2 rounded-full mb-4 overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        result.lvr <= 100
                          ? "bg-green-500"
                          : result.lvr <= 130
                            ? "bg-blue-500"
                            : "bg-red-500"
                      }`}
                      style={{ width: `${Math.min(result.lvr, 150)}%` }}
                    />
                  </div>

                  <p className={`font-medium ${tierStyles[result.tier].color}`}>
                    {tierStyles[result.tier].label}
                  </p>
                </div>
              )}
            </div>

            {/* Right - Info Cards */}
            <div className="space-y-6 self-start md:sticky md:top-24">
              {[
                {
                  icon: TrendingUp,
                  title: "Better Rates Possible",
                  desc: "Lower LVR usually means better interest rates and more lender options.",
                },
                {
                  icon: ShieldCheck,
                  title: "No Credit Check",
                  desc: "This is just an indicative guide — no impact on your credit score.",
                },
                {
                  icon: Calculator,
                  title: "LVR Formula",
                  desc: "LVR = (Loan Amount ÷ Vehicle Value) × 100. Aim for ≤ 100% for best outcomes.",
                },
                {
                  icon: Info,
                  title: "Indicative Only",
                  desc: "Final approval depends on income, expenses, credit history and lender policy.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-card rounded-2xl p-6 shadow-sm border flex gap-5"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1.5">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
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
