import heroPhones from "@/assets/hero-phones.png";
import { Shield, Smartphone, Globe, Lock, ArrowRight, ChevronDown, Coins, Wallet, BarChart3 } from "lucide-react";

const TrustWalletShield = () => (
  <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(210 100% 50%), hsl(160 80% 45%))" }}>
    <Shield className="w-5 h-5 text-primary-foreground" />
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <div className="flex items-center gap-2">
          <TrustWalletShield />
          <span className="text-xl font-bold text-foreground">Trust Wallet</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <span className="text-muted-foreground text-sm font-medium cursor-default">Features</span>
          <span className="text-muted-foreground text-sm font-medium cursor-default">Security</span>
          <span className="text-muted-foreground text-sm font-medium cursor-default">About</span>
        </div>
        <button className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-semibold cursor-default">
          Download
        </button>
        <button className="md:hidden text-foreground">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-20 pt-12 md:pt-20 pb-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.1] tracking-tight text-foreground mb-6">
              True crypto ownership.{" "}
              <span className="trust-gradient-text">Powerful Web3</span>{" "}
              experiences
            </h1>
            <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0 mb-8">
              Unlock the power of your cryptocurrency assets and explore the world of Web3 with Trust Wallet.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <button className="flex items-center gap-3 border border-border rounded-2xl px-6 py-3 cursor-default hover:bg-muted transition-colors">
                <Smartphone className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Download</div>
                  <div className="text-sm font-semibold text-foreground">Mobile App</div>
                </div>
              </button>
              <button className="flex items-center gap-3 border border-border rounded-2xl px-6 py-3 cursor-default hover:bg-muted transition-colors">
                <Globe className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Download</div>
                  <div className="text-sm font-semibold text-foreground">Extension</div>
                </div>
              </button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <img
              src={heroPhones}
              alt="Trust Wallet app showing crypto portfolio on smartphones"
              width={800}
              height={700}
              className="w-full max-w-lg animate-float"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Trusted by</p>
              <p className="text-3xl md:text-4xl font-black text-foreground">100M+</p>
              <p className="text-muted-foreground text-sm mt-1">Users worldwide</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Founded in</p>
              <p className="text-3xl md:text-4xl font-black text-foreground">2017</p>
              <p className="text-muted-foreground text-sm mt-1">Years of experience</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Independently</p>
              <p className="text-3xl md:text-4xl font-black text-foreground">Audited</p>
              <p className="text-muted-foreground text-sm mt-1">Security verified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              One wallet for all your crypto
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Buy, sell, swap, and earn crypto all in one place. Simple, secure, and powerful.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Wallet,
                title: "Buy & Sell Crypto",
                description: "Purchase crypto with your credit card, bank transfer, or Apple Pay. Sell it just as easily."
              },
              {
                icon: Coins,
                title: "Swap & Trade",
                description: "Exchange one crypto for another instantly with the best rates from decentralized exchanges."
              },
              {
                icon: BarChart3,
                title: "Earn Rewards",
                description: "Stake your crypto and earn passive income. Track your portfolio and market trends in real-time."
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-20 px-6 md:px-12 lg:px-20 bg-muted">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: "linear-gradient(135deg, hsl(210 100% 50%), hsl(160 80% 45%))" }}>
              <Lock className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
              Your keys, your crypto
            </h2>
            <p className="text-muted-foreground text-lg mb-6 max-w-lg">
              Trust Wallet is a self-custody wallet — only you have access to your private keys and funds. We never store or have access to your data.
            </p>
            <ul className="space-y-4">
              {["Private keys stored locally on your device", "Open source and independently audited", "Encrypted backup and recovery options"].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-background border border-border flex items-center justify-center">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, hsl(210 100% 50% / 0.1), hsl(160 80% 45% / 0.1))" }}>
                <Shield className="w-20 h-20 md:w-28 md:h-28 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-12 lg:px-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-foreground mb-4">
            Get started with Trust Wallet
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Join millions of users who trust us with their crypto. Available on iOS, Android, and as a browser extension.
          </p>
          <button className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-base font-semibold cursor-default">
            Download Trust Wallet
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground py-12 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <TrustWalletShield />
              <span className="text-xl font-bold text-background">Trust Wallet</span>
            </div>
            <div className="flex gap-8">
              <span className="text-background/60 text-sm cursor-default">Privacy Policy</span>
              <span className="text-background/60 text-sm cursor-default">Terms of Service</span>
              <span className="text-background/60 text-sm cursor-default">Support</span>
            </div>
          </div>
          <div className="border-t border-background/10 mt-8 pt-8 text-center">
            <p className="text-background/40 text-sm">© 2024 Trust Wallet. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
