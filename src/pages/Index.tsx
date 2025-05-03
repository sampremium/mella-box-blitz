
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import HowItWorks from '@/components/HowItWorks';
import YouTubeVideo from '@/components/YouTubeVideo';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Brands />
      <HowItWorks />
      <YouTubeVideo />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
