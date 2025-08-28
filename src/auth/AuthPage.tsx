import React, { useState } from "react";
import {
  Mail,
  Lock,
  User,
  Eye,
  EyeOff,
  ArrowRight,
  BookOpen,
} from "lucide-react";

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Form submitted:", formData, isLogin ? "login" : "signup");
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
    });
    setShowPassword(false);
    setShowConfirmPassword(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-gray-800 to-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 flex flex-col justify-center items-center p-8 text-center">
          <div className="mb-4">
            <img src="/images/bot2.png" alt="bot logo" height={180} width={180} className="mx-auto "/>
            <h1 className="text-5xl font-bold text-white mb-4">Echoes</h1>
            <p className="text-xl text-gray-300 mb-6 max-w-md">
              Where stories live forever and wisdom finds its voice
            </p>
          </div>

          <div className="space-y-6 text-left">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <BookOpen className="text-blue-400" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Discover Stories</h3>
                <p className="text-gray-400 text-sm">
                  Explore thousands of captivating tales
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-2xl">"</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Collect Quotes</h3>
                <p className="text-gray-400 text-sm">
                  Save and share meaningful words
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                <span className="text-blue-400 text-2xl">?</span>
              </div>
              <div>
                <h3 className="text-white font-semibold">Test Knowledge</h3>
                <p className="text-gray-400 text-sm">
                  Challenge yourself with trivia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-purple-500/10 rounded-full blur-xl" />
      </div>

      {/* Right Side - Auth Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-8 py-4">
        <div className="w-full max-w-md">
          {/* Mobile Header */}
          <div className="text-center mb-6 lg:hidden">
            <img src="/images/bot1.png" width={120} className="mx-auto" />
            <h1 className="text-3xl font-bold text-white">Echoes</h1>
          </div>

          {/* Auth Toggle */}
          <div className="bg-gray-800 rounded-2xl p-1 mb-6">
            <div className="grid grid-cols-2 gap-1">
              <button
                onClick={() => setIsLogin(true)}
                className={`py-3 px-4 rounded-xl font-medium transition-all ${
                  isLogin
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)}
                className={`py-3 px-4 rounded-xl font-medium transition-all ${
                  !isLogin
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Form Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">
              {isLogin ? "Welcome back!" : "Create your account"}
            </h2>
            <p className="text-gray-400">
              {isLogin
                ? "Enter your credentials to access your account"
                : "Join thousands of story lovers and wisdom seekers"}
            </p>
          </div>

          {/* Auth Form */}
          <div className="space-y-6">
            {/* Full Name - Only for Signup */}
            {!isLogin && (
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) =>
                      handleInputChange("fullName", e.target.value)
                    }
                    className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl border border-gray-700 focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                    required={!isLogin}
                  />
                </div>
              </div>
            )}

            {/* Email */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full bg-gray-800 text-white pl-10 pr-4 py-3 rounded-xl border border-gray-700 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="w-full bg-gray-800 text-white pl-10 pr-12 py-3 rounded-xl border border-gray-700 focus:border-blue-400 focus:outline-none transition-colors"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password - Only for Signup */}
            {!isLogin && (
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleInputChange("confirmPassword", e.target.value)
                    }
                    className="w-full bg-gray-800 text-white pl-10 pr-12 py-3 rounded-xl border border-gray-700 focus:border-blue-400 focus:outline-none transition-colors"
                    placeholder="Confirm your password"
                    required={!isLogin}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              </div>
            )}

            {/* Remember Me / Forgot Password - Only for Login */}
            {isLogin && (
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-gray-800 border border-gray-700 rounded focus:ring-blue-400 focus:ring-2"
                  />
                  <span className="ml-2 text-gray-300 text-sm">
                    Remember me
                  </span>
                </label>
                <button
                  type="button"
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Forgot password?
                </button>
              </div>
            )}

            {/* Terms & Conditions - Only for Signup */}
            {!isLogin && (
              <div className="flex items-start">
                <input
                  type="checkbox"
                  className="w-4 h-4 bg-gray-800 border border-gray-700 rounded focus:ring-blue-400 focus:ring-2 mt-1"
                  required={!isLogin}
                />
                <span className="ml-2 text-gray-400 text-sm">
                  I agree to the{" "}
                  <button
                    type="button"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button
                    type="button"
                    className="text-blue-400 hover:text-blue-300"
                  >
                    Privacy Policy
                  </button>
                </span>
              </div>
            )}

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-all flex items-center justify-center group"
            >
              {isLogin ? "Sign In" : "Create Account"}
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
          </div>

          {/* Social Login */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900 text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-xl font-medium transition-all flex items-center justify-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                Facebook
              </button>
            </div>
          </div>

          {/* Switch Auth Mode */}
          <div className="mt-8 text-center">
            <span className="text-gray-400">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
            </span>
            <button
              onClick={toggleAuthMode}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
