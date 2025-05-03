import React from 'react';
const Brands = () => {
  const brands = [{
    name: "Commercial Bank of Ethiopia",
    logo: "/lovable-uploads/c512e84b-410e-45a2-a1f4-6930575239d5.png",
    alt: "Commercial Bank of Ethiopia logo"
  }, {
    name: "Kacha Digital",
    logo: "/lovable-uploads/46d5ff30-4dfd-4710-8380-54fafb8c7989.png",
    alt: "Kacha Digital logo"
  }, {
    name: "Senq",
    logo: "/lovable-uploads/42aa9c4e-3520-4c9f-bb00-0338018cc753.png",
    alt: "Senq logo"
  }, {
    name: "Expo Ethiopia",
    logo: "/lovable-uploads/1764c16e-4636-42e7-b99c-ca08fee161d0.png",
    alt: "Expo Ethiopia logo"
  }];
  return <section className="py-16 bg-gray-950">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold mb-12">Trusted by Leading Brands</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {brands.map((brand, index) => <div key={index} className="w-40 h-40 flex items-center justify-center p-4 rounded-lg hover:scale-105 transition-transform bg-slate-50">
              <img src={brand.logo} alt={brand.alt} className="max-w-full max-h-full object-contain" />
            </div>)}
        </div>
      </div>
    </section>;
};
export default Brands;