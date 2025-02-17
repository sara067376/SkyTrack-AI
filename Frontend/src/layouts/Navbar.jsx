import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RxChevronDown, RxChevronRight } from "react-icons/rx";
import { Link } from "react-router-dom";
import {
  Globe,
  HelpCircle,
  SlidersHorizontal,
  Bell,
  BookOpen,
  User,
  Users,
  FileText,
  Newspaper,
  Briefcase,
  Lightbulb,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import logo1 from "../assets/logo1.png";
import logo from "../assets/logo.png";
import useMenuToggle from "../hooks/useMenuToggle";
import { Button } from "@mui/material";
import { FaUserPlus, FaSignInAlt, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const useActive = useMenuToggle();
  // Function to handle browse button click
  const handleBrowse = () => {
    dispatch(setSearchedQuery("")); // Clear search query
    setFilterJobs(allJobs); // Reset filter to show all jobs
  };
  return (
    <section
      id="navbar"
      className="relative z-[999] flex min-h-8 w-full items-center bg-background-primary px-[5%] py-0 md:min-h-10"
    >
      <div className=" relative mx-auto flex size-full max-w-full items-center justify-between">
        <Link to="#">
          <img
            src={logo}
            alt="Logo image"
            className="w-24 h-auto md:w-32 lg:w-40"
          />
        </Link>

        <div className="absolute top-0 right-0 hidden h-screen overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-24 pt-4 md:pb-0 lg:static lg:ml-6 lg:flex lg:h-auto lg:flex-1 lg:items-center lg:justify-between lg:border-none lg:bg-none lg:px-0 lg:pt-0">
          <div className="flex flex-col items-center lg:flex-row gap-4">
            <Link
              to="/JobSearch"
              className="flex flex-col items-center gap-1 text-md lg:text-base"
            >
              <Briefcase size={24} />
              <span className="text-center leading-tight">
                Filter <br /> Jobs
              </span>
            </Link>
            <Link
              to="/browse"
              className="flex flex-col items-center w-fit gap-1 text-md lg:text-base"
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
              to="#"
              className="flex flex-col items-center w-fit gap-1 text-md lg:text-base"
            >
              <Globe size={24} />
              <span className="text-center leading-tight">
                AI <br /> VisaAssist
              </span>
            </Link>
            <Link
              to="#"
              className="flex flex-col items-center w-fit gap-1 text-md lg:text-base"
            >
              <Sparkles size={24} /> {/* Change this icon as needed */}
              <span className="text-center leading-tight">
                AI <br /> JobAssist
              </span>
            </Link>

            <Link
              to="/Profile"
              className="flex flex-col items-center gap-1 text-md lg:text-base"
            >
              <User size={24} />
              <span className="text-center leading-tight">
                Profile <br /> Setup
              </span>
            </Link>
            <div
              onMouseEnter={useActive.openOnDesktopDropdownMenu}
              onMouseLeave={useActive.closeOnDesktopDropdownMenu}
            >
              <button
                className="relative flex w-full items-center justify-between whitespace-nowrap py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                onClick={useActive.openOnMobileDropdownMenu}
              >
                <span className="flex items-center gap-2 cursor-pointer">
                  {/* Thin vertical line */}
                  <div className="h-8 w-[1px] bg-gray-400"></div>
                  <SlidersHorizontal size={20} />
                  More Options
                </span>
                {/* Thin vertical line */}
                <div className="h-8 w-[1px] bg-gray-400"></div>
                <motion.span
                  animate={useActive.animateDropdownMenuIcon}
                  variants={{
                    rotated: { rotate: 180 },
                    initial: { rotate: 0 },
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <RxChevronDown />
                </motion.span>
              </button>
              <AnimatePresence>
                <motion.nav
                  variants={{
                    open: {
                      opacity: 1,
                      display: "block",
                      height: "var(--height-open, auto)",
                    },
                    close: {
                      opacity: 0,
                      display: "none",
                      height: "var(--height-close, 0)",
                    },
                  }}
                  animate={useActive.animateDropdownMenu}
                  initial="close"
                  exit="close"
                  transition={{ duration: 0.2 }}
                  className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden 
  bg-white/90 backdrop-blur-md shadow-lg lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                >
                  <div className="mx-auto flex size-full max-w-full items-center justify-between">
                    <div className="flex w-full flex-col lg:flex-row">
                      <div className="grid flex-1 auto-cols-fr grid-cols-1 gap-x-8 gap-y-6 py-4 md:grid-cols-3 md:gap-y-0 md:py-8 lg:pr-8">
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            Explore Opportunities
                          </h4>
                          <Link
                            to="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <Briefcase className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Job Listings</h5>
                              <p className="hidden text-sm md:block">
                                Find jobs tailored to your skills.
                              </p>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <Globe className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Visa Services</h5>
                              <p className="hidden text-sm md:block">
                                Get personalized visa recommendations.
                              </p>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <User className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                Profile Management
                              </h5>
                              <p className="hidden text-sm md:block">
                                Manage your professional profile easily.
                              </p>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <Bell className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Job Alerts</h5>
                              <p className="hidden text-sm md:block">
                                Stay updated with job notifications.
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            Resources & Tools
                          </h4>
                          <Link
                            to="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <BookOpen className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Career Guidance</h5>
                              <p className="hidden text-sm md:block">
                                Access valuable career resources.
                              </p>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <FileText className="size-6 text-primary" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">CV Builder</h5>
                              <p className="hidden text-sm md:block">
                                Create a professional CV in minutes.
                              </p>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <HelpCircle className="size-6 text-primary" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Help Center</h5>
                              <p className="hidden text-sm md:block">
                                Get assistance with any queries.
                              </p>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <Users className="size-6 text-primary" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">
                                User Testimonials
                              </h5>
                              <p className="hidden text-sm md:block">
                                Hear from our satisfied users.
                              </p>
                            </div>
                          </Link>
                        </div>
                        <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            Latest Articles
                          </h4>
                          <Link
                            to="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <FileText className="size-6 text-primary" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Blog Insights</h5>
                              <p className="hidden text-sm md:block">
                                Read our latest blog posts.
                              </p>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <Newspaper className="size-6 text-primary" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Post a Job </h5>
                              <p className="hidden text-sm md:block">
                                A number of users are waiting for job.
                              </p>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <Briefcase className="size-6 text-primary" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Success Stories</h5>
                              <p className="hidden text-sm md:block">
                                Inspire yourself with user success.
                              </p>
                            </div>
                          </Link>
                          <Link
                            to="#"
                            className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                          >
                            <div className="flex size-6 flex-col items-center justify-center">
                              <Lightbulb className="size-6 text-primary" />
                            </div>
                            <div className="flex flex-col items-start justify-center">
                              <h5 className="font-semibold">Tips & Tricks</h5>
                              <p className="hidden text-sm md:block">
                                Enhance your job search strategies.
                              </p>
                            </div>
                          </Link>
                        </div>
                      </div>
                      <div className="max-w-none relative mb-4 flex flex-1 p-6 md:max-w-[50rem] md:p-8 lg:mb-0 lg:max-w-xxs lg:py-8 lg:pl-8 lg:pr-0">
                        <div className="relative z-10 grid w-full grid-cols-1 grid-rows-[auto_max-content] gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            From Our Blog
                          </h4>
                          <div className="max-w-none grid w-full grid-cols-1 grid-rows-[auto_auto_auto_auto] items-start gap-y-2 md:block">
                            <Link to="#" className="flex flex-col py-2">
                              <div className="relative mb-3 w-full overflow-hidden pt-[56.25%]">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                  alt="Relume placeholder image 2"
                                  className="absolute inset-0 size-full object-cover"
                                />
                              </div>
                              <div className="mt-2 flex max-w-[18rem] flex-col justify-start md:mt-0">
                                <h5 className="mb-1 font-semibold">
                                  Job Market Tips
                                </h5>
                                <p className="text-sm">
                                  Essential advice for job seekers.
                                </p>
                                <div className="mt-2">
                                  <Button
                                    title="Read more"
                                    variant="text"
                                    size="small"
                                    className="text-sm underline"
                                  >
                                    Read more
                                  </Button>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="flex items-center">
                            <Button
                              title="See all articles"
                              variant="text" // MUI uses "text" instead of "link"
                              size="small" // Adjust size as needed
                              endIcon={<RxChevronRight />} // Correct way to add an icon
                            >
                              See all articles
                            </Button>
                          </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-auto top-0 min-w-full bg-background-secondary lg:min-w-[100vw]" />
                      </div>
                    </div>
                  </div>
                </motion.nav>
              </AnimatePresence>
            </div>
          </div>
          <div className="flex items-center gap-4">
            {/* Join Button with hover effect */}
            <Link to="/join">
              <Button
                title="Join"
                variant="secondary"
                size="sm"
                className="flex items-center gap-2 text-gray-800 shadow-md px-6 py-2 rounded-md transition-all duration-300 relative
                   hover:shadow-purple-500 hover:scale-105 hover:border hover:border-purple-400"
              >
                <FaUserPlus size={16} />
                Join
              </Button>
            </Link>

            {/* Login Button with oval text effect */}
            <Link to="/login">
              <Button
                title="Login"
                size="sm"
                className="flex items-center gap-2 text-gray-800 shadow-md px-6 py-2 rounded-md transition-all duration-300 relative
                   hover:shadow-cyan-500 hover:scale-105 hover:border hover:border-cyan-400"
              >
                <FaSignInAlt size={16} />
                <span className="px-3 py-1 border border-blue-400 rounded-full text-sm">
                  Sign In
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <button
          className="-mr-2 flex size-12 cursor-pointer flex-col items-center justify-center lg:hidden"
          onClick={useActive.toggleMobileMenu}
        >
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: 8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: -45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenu}
            variants={{
              open: { width: 0, transition: { duration: 0.1 } },
              closed: {
                width: "1.5rem",
                transition: { delay: 0.3, duration: 0.2 },
              },
            }}
          />
          <motion.span
            className="my-[3px] h-0.5 w-6 bg-black"
            animate={useActive.animateMobileMenuButtonSpan}
            variants={{
              open: { translateY: -8, transition: { delay: 0.1 } },
              rotatePhase: { rotate: 45, transition: { delay: 0.2 } },
              closed: {
                translateY: 0,
                rotate: 0,
                transition: { duration: 0.2 },
              },
            }}
          />
        </button>
      </div>
      <AnimatePresence>
        <motion.div
          variants={{ open: { height: "100dvh" }, close: { height: "auto" } }}
          animate={useActive.animateMobileMenu}
          initial="close"
          exit="close"
          className="absolute left-0 right-0 top-full w-full overflow-hidden lg:hidden"
          transition={{ duration: 0.4 }}
        >
          <motion.div
            variants={{ open: { y: 0 }, close: { y: "-100%" } }}
            animate={useActive.animateMobileMenu}
            initial="close"
            exit="close"
            transition={{ duration: 0.4 }}
            className="absolute left-0 right-0 top-0 block h-dvh overflow-auto border-b border-border-primary bg-background-primary px-[5%] pb-8 pt-4"
          >
<div className="flex flex-col items-center gap-1 text-md lg:text-base bg-cyan-100 p-6 rounded-xl shadow-lg w-full mx-auto mt-4  h-auto">
              
              <Link
              to="/JobSearch"
              className="flex flex-col items-center gap-1 text-md lg:text-base"
              >
              <Briefcase size={24} />
              <span>
                Filter Jobs
              </span>
            </Link>
            <Link
              to="/browse"
              className="flex flex-col items-center w-fit gap-1 text-md lg:text-base"
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
              to="#"
              className="flex flex-col items-center gap-1 text-md lg:text-base"
              >
              <Globe size={24} />
              <span >
                AI VisaAssist
              </span>
            </Link>
            <Link
              to="#"
              className="flex flex-col items-center w-fit gap-1 text-md lg:text-base"
            >
              <Sparkles size={24} /> {/* Change this icon as needed */}
              <span>
                AI JobAssist
              </span>
            </Link>

            <Link
              to="/Profile"
              className="flex flex-col items-center gap-1 text-md lg:text-base"
            >
              <User size={24} />
              <span>
                Profile Setup
              </span>
            </Link>

              <div>
                <div className="flex justify-center lg:justify-start">
                  <button
                    className="relative flex items-center justify-center py-3 text-md lg:w-auto lg:justify-start lg:gap-2 lg:px-4 lg:py-6 lg:text-base"
                    onClick={useActive.openOnMobileDropdownMenu}
                  >
                    <span className="flex items-center gap-2">
                      {/* Thin vertical line */}
                      <div className="h-8 w-[1px] bg-gray-400"></div>
                      <SlidersHorizontal size={20} /> More Options
                      {/* Thin vertical line */}
                      <div className="h-8 w-[1px] bg-gray-400"></div>
                    </span>

                    <motion.span
                      animate={useActive.animateDropdownMenuIcon}
                      variants={{
                        rotated: { rotate: 180 },
                        initial: { rotate: 0 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <RxChevronDown />
                    </motion.span>
                  </button>
                </div>

                <AnimatePresence>
                  <motion.nav
                    variants={{
                      open: {
                        opacity: 1,
                        display: "block",
                        height: "var(--height-open, auto)",
                      },
                      close: {
                        opacity: 0,
                        display: "none",
                        height: "var(--height-close, 0)",
                      },
                    }}
                    animate={useActive.animateDropdownMenu}
                    initial="close"
                    exit="close"
                    transition={{ duration: 0.2 }}
                    className="bottom-auto left-0 top-full w-full min-w-full max-w-full overflow-hidden bg-background-primary lg:absolute lg:w-screen lg:border-b lg:border-border-primary lg:px-[5%] lg:[--height-close:auto]"
                  >
                    <div className="mx-auto flex size-full max-w-full items-center justify-between">
                      <div className="flex w-full flex-col lg:flex-row">
                        <div className="grid flex-1 auto-cols-fr grid-cols-1 gap-x-8 gap-y-6 py-4 md:grid-cols-3 md:gap-y-0 md:py-8 lg:pr-8">
                          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                            <h4 className="text-sm font-semibold leading-[1.3]">
                              Explore Opportunities
                            </h4>
                            <Link
                              to="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <Briefcase className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Job Listings</h5>
                                <p className="hidden text-sm md:block">
                                  Find jobs tailored to your skills.
                                </p>
                              </div>
                            </Link>

                            <Link
                              to="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <Globe className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Visa Services</h5>
                                <p className="hidden text-sm md:block">
                                  Get personalized visa recommendations.
                                </p>
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <User className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">
                                  Profile Management
                                </h5>
                                <p className="hidden text-sm md:block">
                                  Manage your professional profile easily.
                                </p>
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <Bell className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Job Alerts</h5>
                                <p className="hidden text-sm md:block">
                                  Stay updated with job notifications.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                            <h4 className="text-sm font-semibold leading-[1.3]">
                              Resources & Tools
                            </h4>
                            <Link
                              to="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <BookOpen className="w-5 h-5 text-primary" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">
                                  Career Guidance
                                </h5>
                                <p className="hidden text-sm md:block">
                                  Access valuable career resources.
                                </p>
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <FileText className="size-6 text-primary" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">CV Builder</h5>
                                <p className="hidden text-sm md:block">
                                  Great Opportunity! Create a professional CV in
                                  a short time.
                                </p>
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <HelpCircle className="size-6 text-primary" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Help Center</h5>
                                <p className="hidden text-sm md:block">
                                  Get assistance with any queries.
                                </p>
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <Users className="size-6 text-primary" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">
                                  User Testimonials
                                </h5>
                                <p className="hidden text-sm md:block">
                                  Hear from our satisfied users.
                                </p>
                              </div>
                            </Link>
                          </div>
                          <div className="grid auto-cols-fr grid-cols-1 grid-rows-[max-content_max-content_max-content_max-content] gap-y-2 md:gap-y-4">
                            <h4 className="text-sm font-semibold leading-[1.3]">
                              Latest Articles
                            </h4>
                            <Link
                              to="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <FileText className="size-6 text-primary" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Blog Insights</h5>
                                <p className="hidden text-sm md:block">
                                  Read our latest blog posts.
                                </p>
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <Newspaper className="size-6 text-primary" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Post a Job</h5>
                                <p className="hidden text-sm md:block">
                                  A number of users are waiting for job.
                                </p>
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <Briefcase className="size-6 text-primary" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">
                                  Success Stories
                                </h5>
                                <p className="hidden text-sm md:block">
                                  Inspire yourself with user success.
                                </p>
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="grid w-full auto-cols-fr grid-cols-[max-content_1fr] items-start gap-x-3 py-2"
                            >
                              <div className="flex size-6 flex-col items-center justify-center">
                                <Lightbulb className="size-6 text-primary" />
                              </div>
                              <div className="flex flex-col items-start justify-center">
                                <h5 className="font-semibold">Tips & Tricks</h5>
                                <p className="hidden text-sm md:block">
                                  Enhance your job search strategies.
                                </p>
                              </div>
                            </Link>
                          </div>
                        </div>
                        <div className="relative z-10 grid w-full grid-cols-1 grid-rows-[auto_max-content] gap-y-4">
                          <h4 className="text-sm font-semibold leading-[1.3]">
                            From Our Blog
                          </h4>
                          <div className="max-w-none grid w-full grid-cols-1 grid-rows-[auto_auto_auto_auto] items-start gap-y-2 md:block">
                            <Link to="#" className="flex flex-col py-2">
                              <div className="relative mb-3 w-full overflow-hidden pt-[56.25%]">
                                <img
                                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                                  alt="Relume placeholder image 2"
                                  className="absolute inset-0 size-full object-cover"
                                />
                              </div>
                              <div className="mt-2 flex max-w-[18rem] flex-col justify-start md:mt-0">
                                <h5 className="mb-1 font-semibold">
                                  Job Market Tips
                                </h5>
                                <p className="text-sm">
                                  Essential advice for job seekers.
                                </p>
                                <div className="mt-2">
                                  <Button
                                    title="Read more"
                                    variant="text"
                                    size="small"
                                    className="text-sm underline"
                                  >
                                    Read more
                                  </Button>
                                </div>
                              </div>
                            </Link>
                          </div>
                          <div className="flex items-center">
                            <Button
                              title="See all articles"
                              variant="text" // Correct variant for a link-style button
                              size="small" // MUI only supports "small", "medium", "large"
                              endIcon={<RxChevronRight />} // Correct way to add an icon on the right
                            >
                              See all articles
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.nav>
                </AnimatePresence>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                {/* Join Button with hover effect */}
                <Link to="/join">
                  <Button
                    title="Join"
                    variant="secondary"
                    size="sm"
                    className="flex items-center gap-2 text-gray-800 shadow-md px-6 py-2 rounded-md transition-all duration-300 relative
                   hover:shadow-purple-500 hover:scale-105 hover:border hover:border-purple-400"
                  >
                    <FaUserPlus size={16} />
                    Join
                  </Button>
                </Link>

                {/* Login Button with oval text effect */}
                <Link to="/login">
                  <Button
                    title="Login"
                    size="sm"
                    className="flex items-center gap-2 text-gray-800 shadow-md px-6 py-2 rounded-md transition-all duration-300 relative
                   hover:shadow-cyan-500 hover:scale-105 hover:border hover:border-cyan-400"
                  >
                    <FaSignInAlt size={16} />
                    <span className="px-3 py-1 border border-blue-400 rounded-full text-sm">
                      Sign In
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Navbar;
