import React from 'react';

const PartnersSection = () => {
  const partners = [
    { name: "illy", logo: "/src/assets/images/msedge_FiZ7LIa4fe.png" },
    { name: "mulliri", logo: "/src/assets/images/msedge_gjq2xWkQxw.png" },
    { name: "Pati's", logo: "/src/assets/images/msedge_5BkT5E0NIl.png" },
    { name: "Aleur", logo: "/src/assets/images/msedge_9BLK6xBE9k.png" },
    { name: "FRÍO", logo: "/src/assets/images/msedge_iQ3kGLH1vG.png" },
    { name: "Genco", logo: "/src/assets/images/msedge_3S4z8k6Rna.png" },
    { name: "The Waldorf Hilton", logo: "/src/assets/images/msedge_4GC9KrGDwb.png" },
    { name: "good days", logo: "/src/assets/images/msedge_a1iiPpWktY.png" },
    { name: "AMOR PERFECTO", logo: "/src/assets/images/msedge_e7fM2hZXxN.png" },
    { name: "% ARABICA", logo: "/src/assets/images/msedge_87eP355fIS.png" },
    { name: "SOCIAL", logo: "/src/assets/images/msedge_QbX5QFaw3g.png" },
    { name: "Toastio", logo: "/src/assets/images/msedge_0n3irlk7lU-removebg-preview.png" }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gray-400 text-sm uppercase tracking-wider mb-4">// CLIENTS</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="block text-gray-400">PROUD</span>
            <span className="block">PARTNERS</span>
            <span className="block text-gray-400">EXCELLENCE</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trusted by leading cafés and hospitality brands who value quality, innovation, and expert support.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-6 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-colors duration-300 min-h-[120px]"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="max-w-full max-h-16 object-contain filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        {/* Bottom decorative elements */}
        <div className="flex justify-center items-center space-x-8">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-3 h-3 bg-white rounded-full"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;

