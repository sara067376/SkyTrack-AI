import React from 'react';

const GlobalOpportunities = () => {
  return (
    <section id="AIJobMatchSection4" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="mb-5 text-4xl font-bold leading-tight md:mb-6 md:text-5xl lg:text-6xl">
              Empowering professionals to connect with global opportunities through innovative technology.
            </h3>
            <p className="md:text-md">
              At SkyTrack AI, our mission is to bridge the gap between Pakistani talent and international job markets. 
              We envision a world where every professional can easily access opportunities that align with their skills and aspirations.
            </p>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-lg object-cover"
              alt="SkyTrack AI illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalOpportunities;
