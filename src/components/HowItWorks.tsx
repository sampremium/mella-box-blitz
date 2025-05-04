import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Box, Users, Calendar, DollarSign } from 'lucide-react';
const HowItWorks = () => {
  const steps = [{
    icon: <Box className="w-10 h-10 text-gold" />,
    title: "Set Up The Mella Box",
    description: "We deliver and set up the cash cube at your event location, ensuring it's ready for immediate use."
  }, {
    icon: <DollarSign className="w-10 h-10 text-gold" />,
    title: "Load With Cash or Vouchers",
    description: "Fill the machine with approximately 200 'Mellas' (cash or vouchers) for optimal circulation during each session."
  }, {
    icon: <Users className="w-10 h-10 text-gold" />,
    title: "Engage Your Audience",
    description: "Participants step inside and grab as much as they can without reaching below their knees, creating excitement for everyone watching."
  }, {
    icon: <Calendar className="w-10 h-10 text-gold" />,
    title: "Create Memorable Moments",
    description: "Each participant spends 20-30 seconds inside, typically grabbing 20-35 'Mellas' while creating unforgettable entertainment."
  }];
  return <section id="how-it-works" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-gold text-2xl font-bold mb-2">HOW IT WORKS</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Turn Your Event Into An Attraction</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            The Mella Box creates an irresistible sight and sound of swirling money or prize vouchers, 
            making it the perfect attention-grabbing tool for any event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => <Card key={index} className="bg-gray-900 border-gray-800 overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gray-800 rounded-full">
                    {step.icon}
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-slate-300">{step.title}</h4>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>

        <div className="mt-16 bg-gray-900 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
              <img src="/lovable-uploads/fef7e639-6af8-4ee3-8148-3d4ba02756f3.png" alt="Mella Box Machine" className="rounded-lg w-full max-w-md mx-auto" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-3xl font-bold mb-4">The Game-Changer For Events</h3>
              <p className="text-gray-300 mb-4">
                There's only one rule: participants can't grab below their knees. This keeps contestants from just reaching down and grabbing cash off the floor.
              </p>
              <p className="text-gray-300 mb-4">
                The crowd will begin to laugh immediately as the participant inside the machine starts to struggle and stash the bills. Our recommendation is to insert approximately 200 'Mellas' into the machine for optimum circulation.
              </p>
              <p className="text-gray-300">
                With 200 'Mellas' in the machine, the participant will grab, on average, about 20 to 35 'Mellas' in 20 – 30 seconds inside the machine.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowItWorks;