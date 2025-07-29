import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Youtube, Brain, FileText, TrendingUp, Download } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Paste YouTube URL",
      description: "Simply paste any YouTube video URL into our secure input field. Our system supports all video formats and lengths.",
      icon: Youtube,
      color: "text-red-500",
      bgColor: "bg-red-500/10"
    },
    {
      number: "02", 
      title: "AI Processing",
      description: "Our advanced AI automatically downloads, transcribes, and analyzes the video content using cutting-edge machine learning models.",
      icon: Brain,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      number: "03",
      title: "Market Analysis",
      description: "Extract market insights, trends, and actionable intelligence from the transcribed content using our proprietary algorithms.",
      icon: TrendingUp,
      color: "text-green-500",
      bgColor: "bg-green-500/10"
    },
    {
      number: "04",
      title: "Get Your Report",
      description: "Download a comprehensive Excel report with detailed analysis, charts, and recommendations tailored to your needs.",
      icon: Download,
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-accent/20 text-accent">
            How It Works
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">From </span>
            <span className="text-accent">YouTube</span>
            <span className="text-foreground"> to </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process transforms any YouTube video into actionable market intelligence in just four simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div 
                className={`animate-fade-in ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex flex-col lg:flex items-center gap-8`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Content */}
                <div className="lg:w-1/2">
                  <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card">
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className={`w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center`}>
                            <step.icon className={`w-8 h-8 ${step.color}`} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <Badge variant="secondary" className="bg-primary/20 text-primary font-mono">
                              {step.number}
                            </Badge>
                            <h3 className="text-2xl font-bold">{step.title}</h3>
                          </div>
                          <p className="text-muted-foreground text-lg leading-relaxed">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Visual/Icon */}
                <div className="lg:w-1/2 flex justify-center">
                  <div className="relative">
                    <div className={`w-32 h-32 ${step.bgColor} rounded-3xl flex items-center justify-center hover:scale-110 transition-transform duration-300`}>
                      <step.icon className={`w-16 h-16 ${step.color}`} />
                    </div>
                    {/* Connecting line for desktop */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-full left-1/2 transform -translate-x-1/2 mt-4">
                        <ArrowRight className="w-6 h-6 text-primary animate-pulse" />
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Mobile connecting arrow */}
              {index < steps.length - 1 && (
                <div className="lg:hidden flex justify-center mt-6 mb-6">
                  <ArrowRight className="w-6 h-6 text-primary animate-pulse rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="bg-card/30 backdrop-blur-sm p-8 rounded-2xl border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of professionals who trust One Click Market for their analysis needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="border-2 hover:border-primary transition-all duration-300">
                <FileText className="w-5 h-5 mr-2" />
                View Sample Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;