
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const moneyContainerRef = useRef<HTMLDivElement>(null);
  const [currentText, setCurrentText] = useState("trade shows");
  const phrases = ["trade shows", "promotions", "events"];
  
  // Text rotation effect
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % phrases.length;
      setCurrentText(phrases[index]);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Money animation effect
  useEffect(() => {
    if (!moneyContainerRef.current) return;
    
    const container = moneyContainerRef.current;
    const containerWidth = container.offsetWidth;
    
    const createMoneyElement = () => {
      const money = document.createElement('div');
      money.className = 'money animate-float-money';
      
      // Random position and timing
      const left = Math.random() * containerWidth;
      const delay = Math.random() * 2;
      const duration = 2 + Math.random() * 2;
      
      money.style.left = `${left}px`;
      money.style.animationDelay = `${delay}s`;
      money.style.animationDuration = `${duration}s`;
      
      container.appendChild(money);
      
      // Remove the element after animation completes
      setTimeout(() => {
        money.remove();
      }, duration * 1000);
    };
    
    // Create initial money elements
    for (let i = 0; i < 10; i++) {
      setTimeout(() => createMoneyElement(), i * 200);
    }
    
    // Continue creating money elements
    const interval = setInterval(() => {
      createMoneyElement();
    }, 500);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Money animation container */}
      <div ref={moneyContainerRef} className="money-animation-container"></div>
      
      <div className="container mx-auto z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-gold">Mella Box</span>
          <br />
          <span className="leading-tight">The Ultimate Event Attraction</span>
        </h1>
        
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300">
          Perfect for <span className="text-gold font-semibold">{currentText}</span> that demand attention.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-gold hover:bg-darkGold text-black text-lg px-8 py-6">
            <a href="#pricing">See Pricing</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-gold text-gold hover:bg-gold hover:text-black text-lg px-8 py-6">
            <a href="#how-it-works">Learn More</a>
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#how-it-works" className="flex flex-col items-center text-sm text-gray-400 hover:text-gold">
          <span className="mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
