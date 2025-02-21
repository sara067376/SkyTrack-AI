import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, Moon, Sun } from "lucide-react"; // Icons
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { Radio, RadioGroup, FormControlLabel, FormLabel } from "@mui/material";
import { SocialLogins } from "../layouts";

const Signup = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    role: "",
    file: null,
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!input.fullname) newErrors.fullname = "This field is required";
    if (!input.email) newErrors.email = "This field is required";
    if (!input.password) newErrors.password = "This field is required";
    if (!input.confirmPassword) newErrors.confirmPassword = "This field is required";
    if (input.password !== input.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form Submitted", input);
    }
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
      <div
        className={`p-10 rounded-3xl shadow-2xl max-w-md w-full transition-all border backdrop-blur-xl 
          ${
            darkMode
              ? "bg-gray-800/80 text-white border-gray-700 shadow-gray-900"
              : "bg-white/75 text-gray-900 border-gray-300 shadow-gray-500"
          }
        `}
      >
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

        <div className="flex flex-col items-center mb-4">
          <img src={logo} alt="SkyTrack AI Logo" className="h-24 w-auto brightness-110 contrast-125" />
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text mt-2">
            SkyTrack AI
          </h1>
        </div>
        <SocialLogins />

        <form onSubmit={submitHandler} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              name="fullname"
              value={input.fullname}
              onChange={changeEventHandler}
              className="w-full p-3 border rounded-lg"
              required
            />
            {errors.fullname && <p className="text-red-500 text-sm">{errors.fullname}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
              className="w-full p-3 border rounded-lg"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                value="candidate"
                control={<Radio sx={{ color: "#6366F1" }} />}
                label="candidate"
              />
              <FormControlLabel
                value="employer"
                control={<Radio sx={{ color: "#6366F1" }} />}
                label="Employer"
              />
            </RadioGroup>
            {errors.role && <p className="text-red-500 text-sm text-center">{errors.role}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={input.password}
              onChange={changeEventHandler}
              className="w-full p-3 border rounded-lg"
              required
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium">Confirm Password</label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={input.confirmPassword}
              onChange={changeEventHandler}
              onPaste={(e) => e.preventDefault()}
              className="w-full p-3 border rounded-lg"
              required
            />
            {errors.confirmPassword && <p className="text-red-800 text-sm">{errors.confirmPassword}</p>}
          </div>

          <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-lg font-bold shadow-md hover:opacity-90 transition">
            Sign Up
          </button>
          <p className="mt-4 text-center text-sm">
           Already have an account?{" "}
           <Link to="/login" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Login
           </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
