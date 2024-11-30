import React from 'react';

const Companies = () => {
  return (
    <div className="bg-white">
      <section id="companies" className="flex flex-col items-center px-8 py-12">
        <h1 className='text-purple-500 text-center font-semibold text-2xl mb-8 mt-20'>OUR COMPANIES</h1>
        <div className="grid grid-cols-1 gap-4 md:gap-8 md:grid-cols-2 sm:grid-cols-1">
          <div className="border-double border-purple-400 p-6 rounded-lg flex justify-center items-center w-48 h-48 md:w-72 md:h-72 lg:w-56 lg:h-56 shadow-2xl shadow-purple-300 transform hover:scale-105 transition-transform duration-300">
            <img src="bashala.jpg" alt="Bupaalan Logo" className="w-full h-full object-contain"/>
          </div>

          <div className="border-double border-purple-400 p-6 rounded-lg flex justify-center items-center w-48 h-48 md:w-72 md:h-72 lg:w-56 lg:h-56 shadow-2xl shadow-purple-300 transform hover:scale-105 transition-transform duration-300">
            <img src="bupaalan launchpad.jpg" alt="Bupaalan Launchpad" className="w-full h-full object-contain"/>
          </div>

          <div className="border-double border-purple-400 p-6 rounded-lg flex justify-center items-center w-48 h-48 md:w-72 md:h-72 lg:w-56 lg:h-56 shadow-2xl shadow-purple-300 transform hover:scale-105 transition-transform duration-300">
            <img src="Drutta.jpg" alt="Drutta" className="w-full h-full object-contain"/>
          </div>

          <div className="border-double border-purple-400 p-6 rounded-lg flex justify-center items-center w-48 h-48 md:w-72 md:h-72 lg:w-56 lg:h-56 shadow-2xl shadow-purple-300 transform hover:scale-105 transition-transform duration-300">
            <img src="Aasta.jpg" alt="Aasta" className="w-full h-full object-contain"/>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Companies;
