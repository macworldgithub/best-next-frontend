import { useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="pt-16">
      <section className="hero-gradient py-20">
        <div className="container mx-auto text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground font-display mb-6">
            Contact <span className="text-gradient-amber">Us</span>
          </h1>
          <p className="text-lg text-secondary-foreground/60 max-w-2xl mx-auto">
            Have questions? Our team is here to help. Reach out and we'll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-2xl p-8 card-elevated">
              <h2 className="text-2xl font-bold text-card-foreground font-display mb-6">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-card-foreground block mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground block mb-2">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none"
                    placeholder="04XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground block mb-2">Message</label>
                  <textarea
                    required
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none resize-none"
                    placeholder="How can we help?"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold h-12 glow-amber">
                  <Send className="w-4 h-4 mr-2" /> Send Message
                </Button>
              </form>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                { icon: Phone, title: "Phone", detail: "1300 123 456", sub: "Mon–Fri 8am–6pm AEST" },
                { icon: Mail, title: "Email", detail: "info@bestnextcar.com.au", sub: "We respond within 24 hours" },
                { icon: MapPin, title: "Location", detail: "Sydney, Australia", sub: "Serving all of Australia" },
                { icon: Clock, title: "AI Chat", detail: "Available 24/7", sub: "Text 'START' to 0400 000 000" },
              ].map((item) => (
                <div key={item.title} className="bg-card rounded-2xl p-6 card-elevated flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-card-foreground">{item.title}</h3>
                    <p className="text-foreground font-medium">{item.detail}</p>
                    <p className="text-muted-foreground text-sm">{item.sub}</p>
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

export default ContactPage;
