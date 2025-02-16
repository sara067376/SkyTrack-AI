import React from 'react';
import { Button } from '@mui/material'
import {Link } from 'react-router-dom'

const HeroSection = () => {
    return (
        <section id="herosection" className="px-[5%] py-6 md:py-10 lg:py-12">
            <div className="container">
                <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:gap-y-8 lg:grid-cols-2 lg:items-center">
                    <div>
                    <h1 className="mb-3 text-4xl font-bold md:mb-4 md:text-6xl lg:text-7xl bg-gradient-to-r from-blue-700  via-purple-600 to-cyan-300 text-transparent bg-clip-text">
  Unlock Your Global Career with SkyTrack AI
</h1>


                        <p className="text-sm md:text-base">
                            SkyTrack AI connects you with exciting job opportunities worldwide, tailored to your skills and aspirations. Get personalized job and visa recommendations to take the first step toward your dream career.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-3 md:mt-4">
                            <Link to="/join">
                            <button className="px-5 py-2 text-white bg-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-md">
                                Get Started
                            </button>
                            </Link>
                            <button className="px-5 py-2 text-blue-600 bg-gray-100 rounded-lg transition-all duration-300 hover:bg-orange-100 hover:scale-105 shadow-md">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                            className="w-full object-cover rounded-lg shadow-md"
                            alt="SkyTrack AI placeholder image"
                        />
                    </div>
                </div>
            </div>
        </section>


    )
}

export default HeroSection
