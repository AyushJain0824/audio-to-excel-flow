import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, BarChart3, FileSpreadsheet, Zap, Shield, Clock, Users } from "lucide-react";

const FeaturesSection = () => {
  const mainFeatures = [
    {
      icon: Download,
      title: "YouTube Audio Download",
      description: "Automatically download high-quality audio from any YouTube video with our advanced extraction technology.",
      badge: "Step 1"
    },
    {
      icon: FileText,
      title: "AI Transcription",
      description: "Convert audio to accurate text using state-of-the-art speech recognition powered by OpenAI Whisper.",
      badge: "Step 2"
    },
    {
      icon: BarChart3,
      title: "Market Analysis",
      description: "Extract valuable market insights and trends from transcribed content using advanced NLP algorithms.",
      badge: "Step 3"
    },
    {
      icon: FileSpreadsheet,
      title: "Excel Reports",
      description: "Generate comprehensive, user-specific Excel reports with actionable market intelligence and visualizations.",
      badge: "Step 4"
    }
  ];

  const additionalFeatures = [
    {
      icon: Zap,
      title: "Lightning Fast Processing",
      description: "Complete analysis pipeline in under 5 minutes"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data is encrypted and never shared with third parties"
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Process videos anytime with our cloud infrastructure"
    },
    {
      icon: Users,
      title: "Multi-User Support",
      description: "Individual accounts with personal history tracking"
    }
  ];

  return (
    <section id="features" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm border-primary/20 text-primary">
            Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Complete </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">Analysis Pipeline</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform any YouTube video into actionable market insights with our four-step automated process
          </p>
        </div>

        {/* Main Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {mainFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="animate-fade-in group" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-2">
                <CardHeader className="text-center pb-4">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <Badge variant="secondary" className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Process Flow Arrow */}
        <div className="flex justify-center mb-20 animate-fade-in">
          <div className="hidden lg:flex items-center space-x-4 text-muted-foreground">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">1</div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">2</div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">3</div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent"></div>
            <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">4</div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">
            <span className="text-foreground">Why Choose </span>
            <span className="text-accent">One Click Market?</span>
          </h3>
          <p className="text-lg text-muted-foreground">
            Built for professionals who need fast, accurate, and actionable market intelligence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div 
              key={index} 
              className="animate-fade-in group text-center" 
              style={{ animationDelay: `${0.5 + index * 0.1}s` }}
            >
              <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-card hover:-translate-y-1">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;