import React from 'react'
import { RxChevronRight } from "react-icons/rx";
import { Button } from '@mui/material';
import { Briefcase, Search, Globe} from "lucide-react"; // Lucide icons


const ServicesSection = () => {
    return (
        <section id="ServicesSection" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
                    <div className="mx-auto w-full max-w-lg">
                        <h2 className="text-4xl font-bold leading-[1.2] md:text-5xl lg:text-6xl bg-gradient-to-r from-blue-600 via-purple-500 to-cyan-300 text-transparent bg-clip-text">
                            Discover Global Opportunities with SkyTrack AI: Your Career Awaits!
                        </h2>

                    </div>
                </div>

                <div className="grid grid-cols-1 items-start justify-center gap-y-12 md:grid-cols-3 md:gap-x-8 md:gap-y-16 lg:gap-x-12">
                    {/* Job & Visa Solutions */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-5 md:mb-6">
                            <Briefcase className="size-14 text-blue-500 transition-transform duration-300 hover:scale-105 hover:text-blue-600" />
                        </div>
                        <h3 className="mb-5 text-xl font-semibold md:mb-6 md:text-2xl text-blue-700/80">
                            Connecting You to Jobs and Visa Solutions Worldwide
                        </h3>
                        <p className="text-gray-600">
                            SkyTrack AI simplifies your job search by leveraging advanced AI technology to match you with global opportunities.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <button className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-300">
                                Explore <RxChevronRight className="ml-1 size-5" />
                            </button>
                        </div>
                    </div>

                    {/* AI-Powered Job Recommendations */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-5 md:mb-6">
                            <Search className="size-14 text-purple-500 transition-transform duration-300 hover:scale-105 hover:text-purple-600" />
                        </div>
                        <h3 className="mb-5 text-xl font-semibold md:mb-6 md:text-2xl text-purple-700/80">
                            AI-Powered Job Recommendations Tailored Just for You
                        </h3>
                        <p className="text-gray-600">
                            Receive personalized job recommendations that align with your skills and aspirations.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <button className="flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-300">
                                Get Started <RxChevronRight className="ml-1 size-5" />
                            </button>
                        </div>
                    </div>

                    {/* Visa Recommendations */}
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-5 md:mb-6">
                            <Globe className="size-14 text-cyan-500 transition-transform duration-300 hover:scale-105 hover:text-cyan-600" />
                        </div>
                        <h3 className="mb-5 text-xl font-semibold md:mb-6 md:text-2xl text-cyan-700/80">
                            AI Powered Visa Recommendations to Help You Work Abroad Effortlessly
                        </h3>
                        <p className="text-gray-600">
                            Our platform provides visa guidance to ensure a smooth transition to your new job.
                        </p>
                        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                            <button className="flex items-center text-cyan-600 hover:text-cyan-800 transition-colors duration-300">
                                Learn More <RxChevronRight className="ml-1 size-5" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default ServicesSection
