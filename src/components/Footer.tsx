
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="section-container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <a href="/" className="font-bold text-2xl text-pingup-purple">
              pingup
            </a>
            <p className="mt-4 text-muted-foreground">
              Meaningful connections made simple.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-pingup-purple">Features</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-pingup-purple">Pricing</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-pingup-purple">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-pingup-purple">About Us</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-pingup-purple">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-pingup-purple">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-pingup-purple">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-pingup-purple">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-pingup-purple">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center sm:text-left flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Pingup. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-muted-foreground hover:text-pingup-purple">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-pingup-purple">
              Instagram
            </a>
            <a href="#" className="text-muted-foreground hover:text-pingup-purple">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
