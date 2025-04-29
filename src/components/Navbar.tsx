
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 bg-white bg-opacity-95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="font-bold text-2xl text-pingup-purple">
              WealthPilot
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-foreground hover:text-pingup-purple transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-foreground hover:text-pingup-purple transition-colors">
              Services
            </a>
            <a href="#about" className="text-foreground hover:text-pingup-purple transition-colors">
              About
            </a>
            <a href="/resources" className="text-foreground hover:text-pingup-purple transition-colors">
              Resources
            </a>
            <Button className="pingup-button">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="text-foreground focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#how-it-works" 
                className="text-foreground hover:text-pingup-purple transition-colors px-2 py-1"
                onClick={toggleMenu}
              >
                How It Works
              </a>
              <a 
                href="#features" 
                className="text-foreground hover:text-pingup-purple transition-colors px-2 py-1"
                onClick={toggleMenu}
              >
                Services
              </a>
              <a 
                href="#about" 
                className="text-foreground hover:text-pingup-purple transition-colors px-2 py-1"
                onClick={toggleMenu}
              >
                About
              </a>
              <a 
                href="/resources" 
                className="text-foreground hover:text-pingup-purple transition-colors px-2 py-1"
                onClick={toggleMenu}
              >
                Resources
              </a>
              <Button className="pingup-button w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
