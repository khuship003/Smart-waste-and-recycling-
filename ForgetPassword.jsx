import React from "react";
import { ArrowLeft, Lock, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";


const ForgetPassword = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-1/2 bg-green-100 flex flex-col justify-center items-center px-12 py-16">
        <div className="w-full max-w-md">
          {/* Back to Home */}
          <div className="absolute top-6 left-6 flex items-center text-sm text-black-1500 cursor-pointer">
          
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Home
          </div>

          {/* Logo */}
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
              <img 
              src="/LOGO.svg"
              alt="WasteZero Logo"   
              className="w-10 h-10"  
          />
            <h1 className="text-2xl font-bold text-green-700">WasteZero</h1>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold mb-2">Reset Your Password</h2>
          <p className="text-gray-700 mb-6">
            Enter your email address and we'll send you a link to reset your password
          </p>

          {/* Email Input */}
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 rounded-md border border-gray-300 mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
          />

          {/* Button */}
          <button
            onClick={() => navigate("/reset-password")}
            className="w-full bg-green-700 text-white py-3 rounded-md font-medium hover:bg-green-800 mb-6"
    >
              Send Reset Link
          </button>


          {/* Help Box */}
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mb-4">
            <div className="flex items-center font-semibold mb-2">
              <span className="mr-2">💡</span> Need Help?
            </div>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Make sure you’re using the email you signed up with</li>
              <li>Check your spam folder if you don’t see the email</li>
              <li>The reset link will expire in 1 hour</li>
            </ul>
          </div>

          {/* Sign Up */}
          <p className="text-sm text-center">
            Don’t have an account?{" "}
            <span className="text-green-700 font-medium cursor-pointer">Sign Up</span>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2 bg-green-300 flex flex-col justify-center items-center text-center px-8 py-12">
        {/* Circle Lock Icon */}
        <div className="bg-green-200 rounded-full p-6 mb-6">
          <Lock className="w-10 h-10 text-green-400" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-black-2500 mb-2">Secure Account Recovery</h2>
        <p className="text-gray-800 mb-8 max-w-md">
          We'll help you get back to managing waste responsibly in no time. Your account security
          is our priority.
        </p>

        {/* Cards */}
        <div className="flex gap-4">
          <div className="bg-green-200 rounded-xl p-4 w-40 flex flex-col items-center shadow-sm hover:shadow-md">
            <Lock className="w-6 h-6 mb-2 text-green-400" />
            <p className="font-medium text-black-900">Secure Process</p>
          </div>

          <div className="bg-green-200 rounded-xl p-4 w-40 flex flex-col items-center shadow-sm hover:shadow-md">
            <Zap className="w-6 h-6 mb-2 text-green-400" />
            <p className="font-medium text-black-900">Quick Reset</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
