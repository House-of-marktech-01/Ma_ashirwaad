import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Briefcase, Lock, Mail, Eye, EyeOff } from "lucide-react";

const LoginRegister = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Sample user data
  const sampleUsers = [{ email: "demo@example.com", password: "password123" }];

  const resetStates = () => {
    setEmail("");
    setPassword("");
    setError("");
    setSuccess("");
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    const user = sampleUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      setSuccess("Login successful! Redirecting...");
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        navigate("/");
      }, 1500);
    } else {
      setError("Invalid email or password");
    }
  };

  const handleRegister = () => {
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    const userExists = sampleUsers.find((u) => u.email === email);

    if (userExists) {
      setError("Email already registered");
      return;
    }

    sampleUsers.push({ email, password });
    setSuccess("Registration successful! Please login.");
    setTimeout(() => {
      setIsLogin(true);
      resetStates();
    }, 2000);
  };

  return (
    <div className="min-h-screen flex font-poppins">
      {/* Left side - Brand section */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-b from-cyan-900 to-blue-900 p-12 flex-col justify-between">
        <div className="flex items-center space-x-3">
          {/* <span className="text-3xl font-bold text-white">मां आशीर्वाद</span> */}
          <span className="text-4xl font-bold text-white">Ma Ashirwaad</span>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-semibold  text-white">
            Embrace Tradition with Elegant Kurtas
          </h2>
          <p className="text-blue-100 text-lg">
            Discover our exquisite collection of handcrafted kurtas that blend
            traditional aesthetics with modern comfort. Each piece tells a story
            of Indian craftsmanship.
          </p>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <p className="text-blue-100">Handcrafted Premium Quality</p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <p className="text-blue-100">
                Traditional Designs & Modern Comfort
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
              <p className="text-blue-100">Authentic Indian Craftsmanship</p>
            </div>
          </div>
        </div>
        <div className="text-sm text-blue-100">
          © 2024 Ma Ashirwaad. All rights reserved.
        </div>
      </div>

      {/* Right side - Form section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gray-50">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 lg:hidden mb-6">
              <Briefcase className="w-8 h-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">
                BusinessPro
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {isLogin ? "Welcome back" : "Create your account"}
            </h2>
            <p className="mt-2 text-gray-600">
              {isLogin
                ? "Sign in to access your dashboard"
                : "Start your journey..."}
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-100 text-red-700 rounded-lg text-sm flex items-center">
              {error}
            </div>
          )}

          {success && (
            <div className="p-3 bg-green-100 text-green-700 rounded-lg text-sm flex items-center">
              {success}
            </div>
          )}

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            <button
              onClick={isLogin ? handleLogin : handleRegister}
              className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200 ease-in-out flex items-center justify-center space-x-2"
            >
              <span>{isLogin ? "Sign In" : "Create Account"}</span>
            </button>

            <div className="text-center">
              <p className="text-sm text-gray-600">
                {isLogin ? (
                  <span>
                    New to BusinessPro?{" "}
                    <button
                      onClick={() => {
                        setIsLogin(false);
                        resetStates();
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Create an account
                    </button>
                  </span>
                ) : (
                  <span>
                    Already have an account?{" "}
                    <button
                      onClick={() => {
                        setIsLogin(true);
                        resetStates();
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Sign in
                    </button>
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
