
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Calendar, Phone, Mail, Box } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // In a real application, you would handle form submission to send data to a backend
    toast({
      title: "Form submitted!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    e.currentTarget.reset();
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-gold" />,
      title: "Phone",
      info: "+251-919-894-706",
    },
    {
      icon: <Mail className="w-5 h-5 text-gold" />,
      title: "Email",
      info: "samuel.degefa.hundie@gmail.com",
    },
    {
      icon: <Calendar className="w-5 h-5 text-gold" />,
      title: "Availability",
      info: "Book 2 weeks in advance",
    },
    {
      icon: <Box className="w-5 h-5 text-gold" />,
      title: "Service Area",
      info: "Local & Surrounding Areas",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold text-2xl font-bold mb-2">CONTACT US</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Ready To Make Your Event Unforgettable?</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Fill out the form below, and we'll help you create an unforgettable event experience 
            with the Mella Box cash cube attraction.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/5">
            <div className="bg-gray-900 p-8 rounded-lg h-full">
              <h4 className="text-2xl font-bold mb-6">Get In Touch</h4>
              
              <div className="space-y-8">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex">
                    <div className="mr-4 mt-1">
                      {item.icon}
                    </div>
                    <div>
                      <h5 className="font-bold mb-1">{item.title}</h5>
                      <p className="text-gray-400">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h5 className="font-bold mb-4">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gold transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gold transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-gold transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-3/5">
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your Name" 
                    required 
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your Email" 
                    required 
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone</label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="Your Phone" 
                    required 
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
                <div>
                  <label htmlFor="event-date" className="block mb-2 font-medium">Event Date</label>
                  <Input 
                    id="event-date" 
                    type="date" 
                    required 
                    className="bg-gray-800 border-gray-700"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="package" className="block mb-2 font-medium">Package</label>
                <select 
                  id="package" 
                  className="w-full rounded-md bg-gray-800 border-gray-700 p-2"
                  required
                >
                  <option value="">Select a package</option>
                  <option value="starter">Starter (3 Hours - $300)</option>
                  <option value="premium">Premium (6 Hours - $500)</option>
                  <option value="ultimate">Ultimate (Full Day - $900)</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">Event Details</label>
                <Textarea 
                  id="message" 
                  placeholder="Tell us about your event..." 
                  className="bg-gray-800 border-gray-700"
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="bg-gold hover:bg-darkGold text-black w-full py-6 text-lg"
              >
                Send Inquiry
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
