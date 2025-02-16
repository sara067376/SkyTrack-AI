import React from 'react'
import { RxChevronRight } from "react-icons/rx";
import { Button } from '@mui/material';
import { RefreshCw } from "lucide-react";
import { BadgeCheck } from "lucide-react";

const ProfileManagementSection = () => {
    return (
        <section id="ProfileManagementSection" className="px-[5%] py-16 md:py-24 lg:py-28">
            <div className="container">
                <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
                    <div>
                        <p className="mb-3 font-semibold md:mb-4">Manage</p>
                        <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                            Effortlessly Manage Your Professional Profile
                        </h1>
                        <p className="mb-6 md:mb-8 md:text-md">
                            Our Profile Management feature empowers you to create and update
                            your professional identity with ease. Showcase your skills,
                            experiences, and aspirations to attract global opportunities.
                        </p>
                        <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
                            <div>
                                <div className="mb-3 md:mb-4">
                                    <RefreshCw className="size-12 text-blue-500 transition-transform duration-300 hover:rotate-180 hover:text-blue-600" />
                                </div>
                                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl text-blue-700">
                                    Easy Updates
                                </h6>
                                <p>
                                    Update your profile anytime to reflect your latest
                                    achievements and career goals.
                                </p>
                            </div>
                            <div>
                                <div className="mb-3 md:mb-4">
                                    <BadgeCheck className="size-12 text-cyan-500 transition-transform duration-300 hover:scale-110 hover:text-purple-600" />
                                </div>
                                <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl text-cyan-700">
                                    Personal Branding
                                </h6>
                                <p>
                                    Craft a compelling profile that stands out to potential
                                    employers and recruiters.
                                </p>
                            </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-3 md:mt-4">
                            <button className="px-5 py-2 text-white bg-blue-600 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105 shadow-md">
                                Get Started
                            </button>
                            <button className="px-5 py-2 text-blue-600 bg-gray-100 rounded-lg transition-all duration-300 hover:bg-orange-100 hover:scale-105 shadow-md">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                            className="w-full object-cover"
                            alt="SkyTrack Ai placeholder image"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProfileManagementSection
