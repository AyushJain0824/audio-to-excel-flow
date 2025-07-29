import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, TrendingUp, BarChart3, Zap, Youtube } from "lucide-react";

const HeroSection = () => {
  const [currentCount, setCurrentCount] = useState(0);
  const [ytUrl, setYtUrl] = useState("");

  // Animated counter for hero stats
  useEffect(() => {
    const target = 10000;
    const increment = target / 100;
    const timer = setInterval(() => {
      setCurrentCount(prev => {
        if (prev < target) {
          return Math.min(prev + increment, target);
        }
        clearInterval(timer);
        return target;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">Transform</span>
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow-pulse">
                YouTube Content
              </span>
              <br />
              <span className="text-foreground">Into Market</span>{" "}
              <span className="text-accent">Insights</span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              One click to download, transcribe, analyze, and generate comprehensive 
              <span className="text-accent font-semibold"> market analysis reports</span> from any YouTube video.
            </p>
          </div>

          {/* Stats Row */}
          <div className="animate-fade-in mb-12" style={{ animationDelay: '0.4s' }}>
            <div className="flex justify-center items-center space-x-8 md:space-x-16">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {Math.floor(currentCount).toLocaleString()}+
                </div>
                <div className="text-sm text-muted-foreground">Videos Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-accent">99.9%</div>
                <div className="text-sm text-muted-foreground">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">5min</div>
                <div className="text-sm text-muted-foreground">Avg. Process</div>
              </div>
            </div>
          </div>

          {/* YouTube URL Input */}
          <div className="animate-fade-in-scale mb-12" style={{ animationDelay: '0.6s' }}>
            <div className="max-w-2xl mx-auto">
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-border shadow-card">
                <div className="flex items-center space-x-3 mb-4">
                  <Youtube className="w-6 h-6 text-red-500" />
                  <span className="text-lg font-semibold">Start Your Analysis</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      type="url"
                      placeholder="Paste YouTube URL here..."
                      value={ytUrl}
                      onChange={(e) => setYtUrl(e.target.value)}
                      className="h-12 text-lg bg-background/50 border-2 border-border focus:border-primary transition-all duration-300"
                    />
                  </div>
                  <Button 
                    size="lg" 
                    className="h-12 px-8 bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105 font-semibold"
                  >
                    <Zap className="w-5 h-5 mr-2" />
                    Analyze Now
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3 text-center">
                  Free trial • No credit card required • Results in minutes
                </p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="px-8 py-4 text-lg bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Start Free Analysis
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-2 hover:border-primary hover:shadow-glow transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="animate-fade-in mt-16" style={{ animationDelay: '1s' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Smart Analysis</h3>
                <p className="text-muted-foreground">AI-powered market insights extraction from video content</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Detailed Reports</h3>
                <p className="text-muted-foreground">Comprehensive Excel reports with actionable insights</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-muted-foreground">Get results in minutes, not hours or days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;