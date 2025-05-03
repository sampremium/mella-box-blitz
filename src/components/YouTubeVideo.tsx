
import React from 'react';

const YouTubeVideo = () => {
  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-gold text-2xl font-bold mb-2">SEE IT IN ACTION</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Watch The Mella Box Experience</h3>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="w-full md:w-1/2 lg:w-2/5">
            <p className="text-lg text-gray-300 mb-6">
              Witness the excitement and energy that the Mella Box brings to events. 
              Our cash cube creates an unforgettable experience that draws crowds and 
              keeps your brand at the center of attention.
            </p>
            <p className="text-lg text-gray-300">
              Each participant gets 20-30 seconds inside the Mella Box to grab as 
              much as they can, creating memorable moments and attracting attention 
              to your booth or event space.
            </p>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/3 max-w-xs mx-auto">
            <div className="relative pb-[177.77%] h-0 bg-black rounded-lg overflow-hidden shadow-xl border-2 border-gold">
              <iframe 
                src="https://www.youtube.com/embed/YFjWt53ccUM" 
                title="Mella Box in Action" 
                className="absolute top-0 left-0 w-full h-full" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeVideo;
