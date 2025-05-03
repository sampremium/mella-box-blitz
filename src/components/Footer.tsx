
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <img 
              src="/lovable-uploads/21f16f4c-112b-4e39-b489-0df72d0250bd.png" 
              alt="Mella Box Logo" 
              className="h-12 mb-4"
            />
            <p className="text-gray-400 max-w-md">
              Mella Box provides an unforgettable cash blowing machine experience for events, trade shows, and promotions.
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <h5 className="text-gold font-bold mb-4">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-gold transition-colors">How It Works</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-gold transition-colors">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-gold transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center md:flex md:justify-between md:items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {currentYear} Mella Box. All rights reserved.
          </p>
          
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gold transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
