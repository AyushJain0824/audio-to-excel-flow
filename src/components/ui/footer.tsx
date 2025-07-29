import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Twitter, Github, Linkedin, TrendingUp } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoImage} alt="One Click Market" className="w-10 h-10" />
              <div>
                <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  One Click Market
                </h3>
                <p className="text-sm text-muted-foreground">AI-Powered Market Analysis</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transform YouTube content into actionable market insights with our advanced AI-powered analysis platform. 
              Fast, accurate, and secure.
            </p>
            <div className="flex space-x-3">
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="hover:bg-primary hover:text-primary-foreground transition-colors">
                <Linkedin className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#api" className="text-muted-foreground hover:text-primary transition-colors">
                  API Access
                </a>
              </li>
              <li>
                <div className="flex items-center space-x-2">
                  <a href="#integrations" className="text-muted-foreground hover:text-primary transition-colors">
                    Integrations
                  </a>
                  <Badge variant="secondary" className="text-xs">New</Badge>
                </div>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="text-muted-foreground hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-gradient-card p-6 rounded-xl border border-border/50 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0 text-center md:text-left">
              <h4 className="text-xl font-semibold mb-2 flex items-center justify-center md:justify-start">
                <TrendingUp className="w-5 h-5 mr-2 text-accent" />
                Stay Updated
              </h4>
              <p className="text-muted-foreground">
                Get the latest market insights and product updates delivered to your inbox
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 min-w-0 md:min-w-80">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-background border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all flex-1"
              />
              <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border">
          <div className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} One Click Market. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#privacy" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="text-muted-foreground hover:text-primary transition-colors">
              Cookie Policy
            </a>
            <Badge variant="outline" className="text-xs border-accent/20 text-accent">
              v2.1.0
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;