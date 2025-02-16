import React from 'react'
import { RxChevronRight } from "react-icons/rx";
import { Button } from '@mui/material';
import { TrendingUp } from "lucide-react";
import { UserCheck } from "lucide-react";

const AIJobMatchSection = () => {
  return (
    <div>
        <section id="AIJobMatchSection" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Discover</p>
            <h1 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
              Unlock Your Career Potential with AI
            </h1>
            <p className="mb-6 md:mb-8 md:text-md">
              Our AI-Powered Job Recommendations feature connects you with
              tailored job opportunities. Experience a smarter way to job
              search, designed just for you.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
              <div className="mb-3 md:mb-4">
    <UserCheck className="size-12 text-cyan-500 transition-transform duration-300 hover:scale-110 hover:text-cyan-600" />
  </div>
  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl text-cyan-700">
    Personalized Matches
  </h6>
                <p>
                  Receive job suggestions that align with your skills and career
                  goals.
                </p>
              </div>
              <div>
              <div className="mb-3 md:mb-4">
    <TrendingUp className="size-12 text-blue-500 transition-transform duration-300 hover:scale-110 hover:text-blue-600" />
  </div>
  <h6 className="mb-3 text-md font-bold leading-[1.4] md:mb-4 md:text-xl text-blue-700">
    Stay Ahead
  </h6>
                <p>
                  Get notified about opportunities before they hit the
                  mainstream job boards.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn" variant="secondary">
                Learn
              </Button>
              <Button
                title="Explore"
                variant="text"
                size="small"
                endIcon={<RxChevronRight />}
              >
                Explore
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
      
    </div>
  )
}

export default AIJobMatchSection
