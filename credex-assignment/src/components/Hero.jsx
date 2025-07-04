import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Sell Your Software Licenses with Ease</h1>
        <p className="text-lg md:text-xl mb-8">Unlock the value of your unused software licenses in just a few clicks.</p>
        <a
          href="#contact"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition duration-300"
        >
          Get a Quote
        </a>
      </div>
    </section>
  );
};

export default Hero;