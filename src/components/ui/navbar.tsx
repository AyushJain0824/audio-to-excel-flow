import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, TrendingUp } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3 group">
            <div className="relative">
              <img 
                src={logoImage} 
                alt="One Click Market" 
                className="w-10 h-10 transition-all duration-300 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                One Click Market
              </h1>
              <p className="text-xs text-muted-foreground hidden sm:block">AI-Powered Analysis</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors duration-200">
              Features
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors duration-200">
              How It Works
            </a>
            <a href="#pricing" className="text-foreground hover:text-primary transition-colors duration-200">
              Pricing
            </a>
            <Button variant="outline" size="sm" className="hover:shadow-glow transition-all duration-300">
              Login
            </Button>
            <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-foreground hover:text-primary transition-colors duration-200 py-2">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors duration-200 py-2">
                How It Works
              </a>
              <a href="#pricing" className="text-foreground hover:text-primary transition-colors duration-200 py-2">
                Pricing
              </a>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
                <Button className="w-full bg-gradient-primary">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;