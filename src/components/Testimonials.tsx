
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      quote: "The Mella Box was the highlight of our trade show. It attracted twice as many visitors to our booth compared to last year.",
      name: "Sarah Johnson",
      title: "Marketing Director, Kacha Digital",
    },
    {
      quote: "Our customers couldn't get enough of the Mella Box experience. The engagement levels were through the roof!",
      name: "Michael Chen",
      title: "Event Coordinator, Commercial Bank of Ethiopia",
    },
    {
      quote: "The team at Mella Box provided exceptional service. Setup was quick and the machine worked flawlessly throughout our all-day event.",
      name: "Abebe Kebede",
      title: "Event Manager, Senq Expo",
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-gold text-2xl font-bold text-center mb-2">TESTIMONIALS</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-center mb-16">What Our Clients Say</h3>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="bg-gray-900 border-gray-800 p-8 md:p-12">
                    <div className="text-center">
                      <blockquote className="text-xl md:text-2xl italic mb-8 text-gray-300">
                        "{testimonial.quote}"
                      </blockquote>
                      <p className="font-bold text-lg text-gold">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.title}</p>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              aria-label="Previous testimonial"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-gold' : 'bg-gray-600'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 text-white"
              aria-label="Next testimonial"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
