
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <a href="/" className="flex items-center">
              <img 
                src="/lovable-uploads/7c6274cd-4d02-4c59-9385-9fdb2eb031c8.png" 
                alt="Ping Up Logo" 
                className="h-8 md:h-10 mb-3" 
              />
            </a>
            <p className="mt-4 text-muted-foreground">
              Smart financial solutions for your future.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="/services/investment" className="text-muted-foreground hover:text-pingup-pink">Investment Management</a></li>
              <li><a href="/services/retirement" className="text-muted-foreground hover:text-pingup-pink">Retirement Planning</a></li>
              <li><a href="/services/tax" className="text-muted-foreground hover:text-pingup-pink">Tax Strategy</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-muted-foreground hover:text-pingup-pink">About Us</a></li>
              <li><a href="/resources" className="text-muted-foreground hover:text-pingup-pink">Resource Center</a></li>
              <li><a href="/careers" className="text-muted-foreground hover:text-pingup-pink">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-muted-foreground hover:text-pingup-pink">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-pingup-pink">Terms of Service</a></li>
              <li><a href="/security" className="text-muted-foreground hover:text-pingup-pink">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Ping Up. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-pingup-pink">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-pingup-pink">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-pingup-pink">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
