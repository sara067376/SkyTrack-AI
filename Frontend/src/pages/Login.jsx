import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Moon, Sun } from "lucide-react"; // Icons
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { SocialLogins } from "../layouts";

const Login = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [errors, setErrors] = useState({});

const submitHandler = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!input.email) newErrors.email = "Email is required";
    if (!input.password) newErrors.password = "Password is required";
    if (!input.role) newErrors.role = "Please select a role";

    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
    }

    console.log("Form Submitted", input);
};


  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-colors relative ${
        darkMode ? "bg-gray-900" : "bg-blue-500"
      }`}
      style={{
        backgroundImage: `url("/bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Glassmorphic Container */}
      <div
        className={`p-10 rounded-3xl shadow-2xl max-w-md w-full transition-all border backdrop-blur-xl 
          ${
            darkMode
              ? "bg-gray-800/80 text-white border-gray-700 shadow-gray-900"
              : "bg-white/75 text-gray-900 border-gray-300 shadow-gray-500"
          }
        `}
      >
        {/* Theme Toggle - Top Right */}
        <div className="flex justify-end">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full transition bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {darkMode ? (
              <Sun className="text-yellow-400" size={22} />
            ) : (
              <Moon className="text-blue-400" size={22} />
            )}
          </button>
        </div>

        {/* Logo & App Name - Centered */}
        <div className="flex flex-col items-center mb-4">
          <img
            src={logo}
            alt="SkyTrack AI Logo"
            className="h-24 w-auto brightness-110 contrast-125"
          />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mt-2">
            SkyTrack AI
          </h1>
        </div>

        {/* Social Login Options */}
        <SocialLogins />

        <div className="my-5 flex items-center">
          <hr className="w-full border-gray-300 dark:border-gray-600" />
          <span className="px-3 text-gray-600 dark:text-gray-400 text-sm">
            or
          </span>
          <hr className="w-full border-gray-300 dark:border-gray-600" />
        </div>

        <form onSubmit={submitHandler} className="mt-6 space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <div className="flex items-center bg-white/40 dark:bg-gray-700 border border-blue-400 dark:border-gray-500 rounded-lg overflow-hidden">
              <span className="px-3 text-blue-600 dark:text-gray-300">
                <Mail size={22} />
              </span>
              <input
                type="email"
                value={input.email}
                name="email"
                onChange={changeEventHandler}
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Password Input with Show/Hide Feature */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <div className="flex items-center bg-white/40 dark:bg-gray-700 border border-purple-400 dark:border-gray-500 rounded-lg overflow-hidden relative">
              <span className="px-3 text-purple-600 dark:text-gray-300">
                <Lock size={22} />
              </span>
              <input
                type={showPassword ? "text" : "password"}
                value={input.password}
                name="password"
                onChange={changeEventHandler}
                placeholder="Enter your password"
                className="w-full p-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-600 dark:placeholder-gray-400 focus:ring-2 focus:ring-purple-400 outline-none"
                autoComplete="off"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-400"
              >
                {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="flex items-center justify-between">
          <p className="font-semibold text-lg">Role</p>
            <RadioGroup
              row
              value={input.role}
              onChange={(e) => setInput({ ...input, role: e.target.value })}
              className="my-3 flex justify-center gap-4"
            >
              <FormControlLabel
                value="Candidate"
                control={<Radio sx={{ color: "#6366F1" }} />}
                label="Candidate"
              />
              <FormControlLabel
                value="employer"
                control={<Radio sx={{ color: "#6366F1" }} />}
                label="Employer"
              />
            </RadioGroup>
            {errors.role && <p className="text-red-500 text-sm text-center">{errors.role}</p>}
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              className="text-blue-700 dark:text-blue-500 hover:underline text-sm font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-lg font-bold shadow-md hover:opacity-90 transition"
          >
            Login
          </button>

          {/* Sign Up Option */}
          <p className="mt-4 text-center text-sm">
            Don't have an account?{" "}
            <Link
              to="/join"
              className="text-purple-600 dark:text-purple-400 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
