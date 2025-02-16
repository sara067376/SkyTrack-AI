import React from 'react'

const VisaRecommendatioSection = () => {
  return (
    <section id="VisaRecommendatioSection" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-5xl lg:text-6xl">
              Unlock Global Opportunities with Our AI-Powered Visa
              Recommendations
            </h1>
            <p className="md:text-md">
              Our AI-Powered Visa Recommendations feature simplifies your
              journey to working abroad. Get personalized visa guidance tailored
              to your unique career goals and destination.
            </p>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="SkyTrack AI placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisaRecommendatioSection
