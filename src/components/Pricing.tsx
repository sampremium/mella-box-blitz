
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      name: "STARTER",
      price: "$300",
      duration: "3 Hours",
      description: "Perfect for smaller events and short promotions",
      features: [
        "3-hour machine rental",
        "Setup and breakdown included",
        "Brief staff training",
        "Standard branding options",
        "Local delivery"
      ]
    },
    {
      name: "PREMIUM",
      price: "$500",
      duration: "6 Hours",
      description: "Ideal for medium-sized events with greater exposure",
      features: [
        "6-hour machine rental",
        "Setup and breakdown included", 
        "Comprehensive staff training",
        "Enhanced branding options",
        "Local delivery",
        "Technical support during event"
      ],
      featured: true
    },
    {
      name: "ULTIMATE",
      price: "$900",
      duration: "Full Day (12hrs)",
      description: "Complete solution for large events and maximum impact",
      features: [
        "12-hour machine rental",
        "Setup and breakdown included",
        "Expert staff training",
        "Premium branding options",
        "Extended delivery range",
        "On-site technical support",
        "Post-event analytics"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold text-2xl font-bold mb-2">PRICING PLANS</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Experience</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Select the perfect package for your event needs. All plans include delivery, 
            setup, and everything you need for a successful Mella Box experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-gray-900 rounded-lg overflow-hidden transition-transform hover:transform hover:scale-105 ${
                plan.featured ? 'border-2 border-gold relative' : 'border border-gray-800'
              }`}
            >
              {plan.featured && (
                <div className="bg-gold text-black py-1 px-4 font-bold absolute top-0 right-0 transform translate-x-[30%] translate-y-[-0%] rotate-45">
                  POPULAR
                </div>
              )}
              <div className="p-8">
                <h4 className="text-xl font-bold mb-2">{plan.name}</h4>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400 ml-2 mb-1">/ {plan.duration}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 text-gold mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  asChild
                  className={`w-full ${
                    plan.featured 
                      ? 'bg-gold hover:bg-darkGold text-black' 
                      : 'bg-transparent border border-gold text-gold hover:bg-gold hover:text-black'
                  }`}
                >
                  <a href="#contact">Book Now</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
