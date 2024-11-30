import React from 'react';

const About = () => {
  return (
    <div className="bg-white">
      {/* About Us Section */}
      <section id="about-us" className="flex flex-col md:flex-row items-center px-10 py-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mt-0 text-black">About us</h2>
          <p className="text-black mt-2">
            Finira Group of Companies is a Conglomerate. Our vision is to top in all the industries with innovation and technology. Luxury and Comfort is our first priority that’s what our tag line says “Lux refined cozy.”
          </p>
          <h3 className="text-2xl font-semibold mt-6 text-black">Vision</h3>
          <p className="text-black">
            To redefine industry standards by delivering luxury, innovation, and exceptional customer satisfaction across diverse sectors.
          </p>
          <h3 className="text-2xl font-semibold mt-6 text-black">Mission</h3>
          <p className="text-black">
            Creating a unique and cozy workspace culture that fosters innovation and excellence, ensuring unparalleled customer satisfaction in every field we operate.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="border-double border-purple-600 p-6 rounded-lg flex justify-center items-center w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 shadow-2xl shadow-purple-500 transform hover:scale-105 transition-transform duration-300">
            <img
              src="Finira Logo.png"alt="Finira Logo" className="w-full h-full object-contain"/>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
