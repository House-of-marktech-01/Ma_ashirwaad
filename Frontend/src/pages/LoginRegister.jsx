import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Sparkles,
  Lock,
  Mail,
  Eye,
  EyeOff,
  ShoppingBag,
  Star,
  // Hearts,
} from "lucide-react";

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

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      boxShadow: "0 5px 15px rgba(236, 72, 153, 0.3)",
    },
    tap: { scale: 0.98 },
  };

  return (
    <motion.div
      className="min-h-screen flex font-poppins"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      {/* Left side - Brand section */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 bg-gradient-to-b from-blue-950 via-blue-800 to-purple-800 p-12 flex-col justify-between"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center space-x-3">
          <Sparkles className="w-8 h-8 text-white" />
          <motion.span
            className="text-4xl font-bold text-white font-poppins"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Ma Ashirwaad
          </motion.span>
        </div>

        <div className="space-y-8">
          <motion.h2
            className="text-5xl font-semibold text-white font-poppins"
            whileHover={{ scale: 1.02 }}
          >
            Where Style Meets Tradition
          </motion.h2>
          <p className="text-blue-100 text-xl font-light">
            Discover our curated collection of timeless elegance and
            contemporary fashion.
          </p>

          <div className="flex flex-col space-y-6">
            {[
              {
                icon: <ShoppingBag className="w-6 h-6" />,
                text: "Exclusive Designer Collections",
              },
              {
                icon: <Star className="w-6 h-6" />,
                text: "Premium Quality Assurance",
              },
              {
                /* {
                icon: <Hearts className="w-6 h-6" />,
                text: "Handcrafted with Love",
              }, */
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center space-x-4 text-blue-100"
                whileHover={{ x: 10 }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                {item.icon}
                <span>{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="text-sm text-blue-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          © 2024 Ma Ashirwaad. All rights reserved.
        </motion.div>
      </motion.div>

      {/* Right side - Form section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 bg-gradient-to-b from-white to-blue-50">
        <motion.div
          className="w-full max-w-md space-y-8"
          variants={formVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="text-center"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 font-poppins">
              {isLogin ? "Welcome Back" : "Join Our Family"}
            </h2>
            <p className="mt-2 text-gray-600">
              {isLogin
                ? "Continue your fashion journey"
                : "Begin your style adventure"}
            </p>
          </motion.div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-50 text-red-700 rounded-lg text-sm flex items-center"
            >
              {error}
            </motion.div>
          )}

          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-green-50 text-green-700 rounded-lg text-sm flex items-center"
            >
              {success}
            </motion.div>
          )}

          <div className="space-y-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                </div>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-blue-500 transition-colors duration-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-blue-500 transition-colors duration-300" />
                  )}
                </button>
              </div>
            </motion.div>

            <motion.button
              onClick={isLogin ? handleLogin : handleRegister}
              className="w-full py-3 px-4 bg-blue-950 text-white font-medium rounded-lg flex items-center justify-center space-x-2"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Sparkles className="w-5 h-5" />
              <span>{isLogin ? "Sign In" : "Create Account"}</span>
            </motion.button>

            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-gray-600">
                {isLogin ? (
                  <span>
                    New to Ma Ashirwaad?{" "}
                    <button
                      onClick={() => {
                        setIsLogin(false);
                        resetStates();
                      }}
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
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
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
                    >
                      Sign in
                    </button>
                  </span>
                )}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoginRegister;
