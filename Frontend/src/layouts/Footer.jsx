import React, { useState } from "react";
import { useForm } from "react-hook-form";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo from "../assets/logo.png";
import logo1 from "../assets/logo1.png";
import { Link } from 'react-router-dom'
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";



const Footer = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };
  return (
    <div>
      <footer id="footer" className="px-[5%] py-12 md:py-18 lg:py-20">
        <div className="container">
          <div className="lg:flex lg:items-start lg:justify-between">
            <div className="rb-6 mb-6 lg:mb-0">
              <h1 className="font-semibold md:text-md">Subscribe to Updates</h1>
              <p>Stay informed about job opportunities and resources.</p>
            </div>
            <div className="max-w-md lg:min-w-[25rem]">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-y-4 md:gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                {/* Email Input */}
                <input
                  id="email"
                  type="email"
                  placeholder="Your Email Here"
                  autoComplete="email"
                  {...register("email", { required: "Email is required", pattern: /^\S+@\S+\.\S+$/ })}
                  className="w-full max-w-md px-3 py-2 border border-gray-700 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

                {/* Submit Button */}
                <button type="submit" className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600">
                  Join
                </button>
              </form>
              <p className="text-xs">
                By subscribing, you accept our Privacy Policy.
              </p>
            </div>
          </div>
          <div className="py-12 md:py-18 lg:py-20">
            <div className="h-px w-full bg-black" />
          </div>
          <div className="rb-12 mb-12 grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 md:mb-18 md:gap-y-12 lg:mb-20 lg:grid-cols-6">
            <Link
              to="#"
              className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
            >
              <img
                src={logo}
                alt="Logo image"
              />
            </Link>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Quick Links</h2>
              <ul>
                <li className="py-2 text-sm">
                  <Link to="/" className="flex items-center gap-3">
                    Home Page
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Job Search
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Profile Setup
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    CV Builder
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Job Alerts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Resources Hub</h2>
              <ul>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Support Center
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Follow Us
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Facebook Page
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Twitter Feed
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    LinkedIn Profile
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Contact Us</h2>
              <ul>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Email Support
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Live Chat
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    FAQ Section
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Feedback Form
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Community Forum
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Legal Info</h2>
              <ul>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Privacy Policy
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Terms of Use
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Cookie Policy
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    User Rights
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Language Options
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Connect With Us</h2>
              <ul>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Follow on Instagram
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Join Our Newsletter
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    User Agreement
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Accessibility Statement
                  </Link>
                </li>
                <li className="py-2 text-sm">
                  <Link to="#" className="flex items-center gap-3">
                    Site Map
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="h-px w-full bg-black" />

          <div className="flex flex-col-reverse items-start pb-4 pt-6 text-sm md:justify-start md:pb-0 md:pt-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Logo on the left */}
            <Link to="#" className="mb-2 sm:mb-0">
              <img
                src={logo3}
                alt="Logo image"
                className="w-20 h-auto sm:w-24 md:w-28"
              />
            </Link>
            <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
              <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
                <p className="mt-8 md:mt-0">
                  © 2024 SkyTrack AI. All rights reserved.
                </p>
                <Link to="#" className="flex items-center gap-3 underline">
                  Privacy Policy
                </Link>
                <Link to="#" className="flex items-center gap-3 underline">
                  Terms of service
                </Link>
                <Link to="#" className="flex items-center gap-3 underline">
                  Cookie Settings
                </Link>
              </div>
            </div>
            <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
              <Link to="#" className="text-blue-600 hover:text-blue-800">
                <BiLogoFacebookCircle className="size-6" />
              </Link>
              <Link to="#" className="text-pink-500 hover:text-pink-700">
                <BiLogoInstagram className="size-6" />
              </Link>
              <Link to="#" className="text-black hover:text-gray-700">
                <FaXTwitter className="size-6 p-0.5" />
              </Link>
              <Link to="#" className="text-blue-700 hover:text-blue-900">
                <BiLogoLinkedinSquare className="size-6" />
              </Link>
              <Link to="#" className="text-red-600 hover:text-red-800">
                <BiLogoYoutube className="size-6" />
              </Link>
            </div>

          </div>



        </div>
      </footer>

    </div>
  )
}

export default Footer

