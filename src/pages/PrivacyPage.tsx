const PrivacyPage = () => {
  return (
    <div className="pt-24">
      <section className="hero-gradient py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground font-display mb-6">
            Privacy <span className="text-gradient-amber">Policy</span>
          </h1>
          <p className="text-lg text-secondary-foreground/60">Last updated: February 2026</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-3xl">
          <div className="prose prose-lg max-w-none">
            {[
              {
                title: "1. Information We Collect",
                content: "We collect personal information you provide during conversations with our AI assistant, including your name, phone number, email address, vehicle preferences, budget information, and financial details for financing assessments. We also collect usage data and device information when you visit our website.",
              },
              {
                title: "2. How We Use Your Information",
                content: "Your information is used to match you with suitable vehicles, provide indicative financing guidance through our LVR calculator, facilitate communication between you and our brokers, and improve our services. We never sell your personal information to third parties.",
              },
              {
                title: "3. Australian Privacy Principles",
                content: "BestNextCar complies with the Australian Privacy Principles (APPs) under the Privacy Act 1988 (Cth). We handle your personal information in accordance with these principles, ensuring transparency, security, and your right to access and correct your data.",
              },
              {
                title: "4. Data Security",
                content: "We implement industry-standard encryption and security measures to protect your personal information. All data is stored on Australian-hosted servers. Documents uploaded through our secure portal are encrypted in transit and at rest.",
              },
              {
                title: "5. Finance Information Disclaimer",
                content: "The LVR calculations and financing guidance provided through our platform are indicative only and do not constitute formal pre-approval or financial advice. Full responsible lending assessments, including serviceability checks, are conducted by our licensed brokers in accordance with the National Consumer Credit Protection Act (NCCP).",
              },
              {
                title: "6. Your Rights",
                content: "You have the right to access, correct, or request deletion of your personal information at any time. You may also opt out of marketing communications. To exercise these rights, contact us at privacy@bestnextcar.com.au.",
              },
              {
                title: "7. Contact Us",
                content: "For privacy-related inquiries, please contact our Privacy Officer at privacy@bestnextcar.com.au or call 1300 123 456.",
              },
            ].map((section) => (
              <div key={section.title} className="mb-8">
                <h2 className="text-xl font-bold text-foreground font-display mb-3">{section.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
