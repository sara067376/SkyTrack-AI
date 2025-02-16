import React from 'react'
import { FaGithub, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";


const SocialLogins = () => {
  return (
    
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border dark:border-gray-600 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition">
                <FcGoogle size={22} />
                <span>Continue with Google</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border border-gray-800 dark:border-gray-600 shadow-md bg-gray-900 text-white hover:bg-gray-800 dark:hover:bg-gray-700 transition">
                <FaGithub size={22} />
                <span>Continue with GitHub</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border border-blue-500 dark:border-blue-600 shadow-md bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-800 transition">
                <FaFacebook size={22} />
                <span>Continue with Facebook</span>
              </button>
              <button className="w-full flex items-center justify-center gap-2 p-3 rounded-lg border border-blue-700 dark:border-blue-600 shadow-md bg-blue-800 text-white hover:bg-blue-900 dark:hover:bg-blue-700 transition">
                <FaLinkedin size={22} />
                <span>Continue with LinkedIn</span>
              </button>
            </div>
  )
}

export default SocialLogins
