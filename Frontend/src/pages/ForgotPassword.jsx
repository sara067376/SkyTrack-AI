import { useState } from "react";
import { Mail, ArrowLeft } from "lucide-react"; // Icons
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500 transition-colors">
      {/* Container */}
      <div className="p-8 rounded-2xl shadow-xl max-w-md w-full border backdrop-blur-xl bg-white/80 text-gray-900">
        {/* Back to Login */}
        <div className="mb-4">
          <Link to="/login" className="flex items-center text-blue-600 hover:underline">
            <ArrowLeft size={18} className="mr-2" />
            Back to Login
          </Link>
        </div>

        {/* Header */}
        <h1 className="text-3xl font-extrabold text-center text-blue-600">Forgot Password?</h1>
        <p className="text-center text-gray-600 mt-2">
          Enter your email to receive a password reset link.
        </p>

        {/* Email Input */}
        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <div className="flex items-center bg-white border border-blue-400 rounded-lg overflow-hidden">
              <span className="px-3 text-blue-600">
                <Mail size={22} />
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full p-3 bg-transparent text-gray-900 placeholder-gray-600 focus:ring-2 focus:ring-blue-400 outline-none"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-700 text-white py-3 rounded-lg font-bold shadow-md hover:opacity-90 transition"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
