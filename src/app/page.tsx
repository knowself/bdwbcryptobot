import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
      
      <div className="w-full max-w-7xl mx-auto space-y-12 relative z-10">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-8 py-12">
          <div className="flex-1 space-y-6">
            <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2">
              Internal Platform • Buffett-Inspired
            </div>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              <span className="text-primary">BDWB Crypto Bot:</span> Where Data Meets Buffett's Wisdom
            </h1>
            <p className="text-xl text-muted-foreground">
              Transforming the chaos of crypto markets into rational, value-based decisions—one trade at a time.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                href="/dashboard" 
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M9 9h.01" /><path d="M15 9h.01" /><path d="M9 15h.01" /><path d="M15 15h.01" /></svg>
                View Dashboard
              </Link>
              <Link 
                href="/market" 
                className="px-6 py-3 border border-primary text-primary rounded-md hover:bg-primary/10 transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
                Analyze Market
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden">
              {/* Animated chart lines in background */}
              <div className="absolute inset-0 opacity-20">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,50 Q25,25 50,50 T100,50" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-primary animate-pulse" />
                  <path d="M0,60 Q20,40 40,60 T80,50 T100,60" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-green-500 animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <path d="M0,40 Q30,70 60,40 T100,40" stroke="currentColor" fill="none" strokeWidth="0.5" className="text-blue-500 animate-pulse" style={{ animationDelay: '1s' }} />
                </svg>
              </div>
              
              {/* Circular pulse animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3/4 h-3/4 rounded-full bg-primary/10 animate-pulse"></div>
                <div className="w-1/2 h-1/2 rounded-full bg-primary/20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              {/* Logo */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="text-6xl font-bold text-primary mb-2">BDWB</div>
                <div className="text-sm text-primary/80 tracking-widest">CRYPTO BOT</div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-green-500/30 animate-bounce" style={{ animationDuration: '3s' }}></div>
              <div className="absolute bottom-5 left-5 w-6 h-6 rounded-full bg-blue-500/30 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-12 bg-card rounded-xl p-8 shadow-md relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-40 h-40 bg-primary/10 rounded-full"></div>
          <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-primary/10 rounded-full"></div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-1 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">Our Mission</h2>
            <p className="text-xl text-center max-w-3xl mx-auto">
              To apply Warren Buffett's timeless investment principles to the crypto market, 
              creating a rational framework for value investing in a speculative world.
            </p>
          </div>
        </section>

        {/* Value Proposition Cards */}
        <section className="py-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold mb-2">Why Our Work Matters</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Our approach brings structure and reason to the volatile world of cryptocurrency</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary text-3xl">🔍</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Finding Value in Chaos</h3>
              <p className="text-muted-foreground">
                While others chase hype, we identify genuine value using data-driven metrics and fundamental analysis.
              </p>
              <div className="mt-4 w-8 h-1 bg-primary/50 rounded-full group-hover:w-12 transition-all"></div>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary text-3xl">📊</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Emotion-Free Trading</h3>
              <p className="text-muted-foreground">
                Our system removes emotional decision-making, applying Buffett's principles systematically when others panic.
              </p>
              <div className="mt-4 w-8 h-1 bg-primary/50 rounded-full group-hover:w-12 transition-all"></div>
            </div>
            
            <div className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 group">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="text-primary text-3xl">💰</div>
              </div>
              <h3 className="text-xl font-bold mb-2">Blood in the Streets Strategy</h3>
              <p className="text-muted-foreground">
                We capitalize on market fear, deploying capital strategically during panic to capture maximum value.
              </p>
              <div className="mt-4 w-8 h-1 bg-primary/50 rounded-full group-hover:w-12 transition-all"></div>
            </div>
          </div>
        </section>

        {/* Key Metrics */}
        <section className="py-12 bg-card rounded-xl p-8 shadow-md relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,70 L10,65 L20,80 L30,60 L40,50 L50,60 L60,45 L70,55 L80,40 L90,55 L100,30" stroke="currentColor" fill="none" strokeWidth="1" className="text-primary" />
            </svg>
          </div>
          
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-1 bg-primary rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold mb-8 text-center">Impact Metrics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center bg-background/50 p-4 rounded-lg backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="m22 8-6 6"/><path d="M16 2H2v14h14V2Z"/><path d="M22 16v6h-6"/></svg>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">78%</div>
                <p className="text-muted-foreground">Win Rate on Value-Based Entries</p>
              </div>
              
              <div className="text-center bg-background/50 p-4 rounded-lg backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">3.2x</div>
                <p className="text-muted-foreground">Average Return on Panic Buys</p>
              </div>
              
              <div className="text-center bg-background/50 p-4 rounded-lg backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M12 2v20"/><path d="m17 5-5-3-5 3"/><path d="m17 19-5 3-5-3"/></svg>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">12.5%</div>
                <p className="text-muted-foreground">Yield Generation</p>
              </div>
              
              <div className="text-center bg-background/50 p-4 rounded-lg backdrop-blur-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                <p className="text-muted-foreground">Market Monitoring</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-12 text-center relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Make Data-Driven Decisions?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Explore our dashboard to see real-time market analysis and trading opportunities based on Buffett's principles.
            </p>
            <Link 
              href="/dashboard" 
              className="px-8 py-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-lg group inline-flex items-center gap-2"
            >
              Start Analyzing
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Link>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-12 bg-muted rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-4 left-4 text-8xl text-primary">"</div>
            <div className="absolute bottom-4 right-4 text-8xl text-primary">"</div>
          </div>
          
          <div className="relative z-10">
            <blockquote className="text-2xl italic text-center max-w-4xl mx-auto">
              "Be fearful when others are greedy, and greedy when others are fearful."
              <footer className="text-right text-primary mt-4 font-semibold">— Warren Buffett</footer>
            </blockquote>
          </div>
        </section>
        
        {/* Footer with Copyright */}
        <footer className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} BDWB Crypto Bot. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
