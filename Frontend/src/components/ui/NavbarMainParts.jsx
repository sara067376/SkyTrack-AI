import React from 'react'
import { Globe,User,Blend,Target} from "lucide-react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


const NavbarMainParts = () => {
  const handleBrowse = () => {
    dispatch(setSearchedQuery("")); // Clear search query
    setFilterJobs(allJobs); // Reset filter to show all jobs
  };
  return (
    <div className="flex flex-col items-center lg:flex-row gap-0 lg:gap-1 ">
<Link
    to="/JobSearch"
    className="flex flex-col items-center gap-1 text-md lg:text-base px-1 py-0.5"
  >
    <Blend size={24} />
    <span className="text-center leading-tight">
    Filter Jobs <br /> that Fits
    </span>
  </Link>
  <Link
    to="/browse"
    className="flex flex-col items-center w-fit gap-1 text-md lg:text-base px-1 py-0.5"
  >
    <button
      onClick={handleBrowse}
      className="bg-gradient-to-r from-purple-600 via-blue-500 to-cyan-400 text-white px-6 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
    >
      <FaSearch size={24} />
      <span className="text-center leading-tight mt-1">
        Browse <br /> Jobs
      </span>
    </button>
  </Link>
  <Link
    to="/AIVisaAssist"
    className="flex flex-col items-center w-fit gap-1 text-md lg:text-base px-1 py-0.5"
  >
    <Globe size={24} />
    <span className="text-center leading-tight">
      AI-Powered <br />Visa <br /> Recommendations
    </span>
  </Link>
  <Link
    to="/AIJobAssist"
    className="flex flex-col items-center w-fit gap-1 text-md lg:text-base px-1 py-0.5"
  >
    <Target size={24} /> {/* Change this icon as needed */}
    <span className="text-center leading-tight">
      AI-Powered <br /> Job <br /> Recommendations
    </span>
  </Link>

  <Link
    to="/Profile"
    className="flex flex-col items-center gap-1 text-md lg:text-base px-1 py-0.5"
  >
    <User size={24} />
    <span className="text-center leading-tight">
      Profile <br /> Setup & <br /> Management
    </span>
  </Link>
      
    </div>
  )
}

export default NavbarMainParts
