import React from 'react'
import { Button } from "@mui/material";
import { FaUserPlus, FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarLoginSignupbuttons = () => {
  return (
    <div className="flex items-start pt-0 gap-4">
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
  )
}

export default NavbarLoginSignupbuttons
