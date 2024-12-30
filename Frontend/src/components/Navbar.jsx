import { useState, useEffect } from "react";
import { Menu, X, Search, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const announcements = [
    "🎉 Special Offer: Get 20% off on all new arrivals!",
    "🚚 Free shipping on orders above ₹999",
    "⚡ Flash Sale: Buy 1 Get 1 Free on selected items",
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-md shadow-lg z-50 font-poppins">
      <div className="bg-blue-950 py-2 text-gray-100 h-[5vh]">
        <div className="relative flex ">
          {announcements.map((text, index) => (
            <div
              key={index}
              className="absolute w-full lg:pl-44 transition-all duration-500 transform"
              style={{
                opacity: currentIndex === index ? 1 : 0,
                transform: `translateY(${(index - currentIndex) * 100}%)`,
              }}
            >
              {text}
            </div>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <Link to="/" className="flex items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Uq1enZ_ZR0Hc4F_g0jH2aT39Us3rwd0JC8tz3TMDMpGg7ywOrLkh6Id-q2h0GWIfGXs&usqp=CAU"
                alt="Logo"
                className="h-16 w-16 rounded-full"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-10 text-lg justify-center flex-grow">
            <Link to="/explore-products" className="relative group font-medium">
              <span className="hover:text-blue-600 transition-colors duration-300">
                Explore Products
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link to="/blog" className="relative group font-medium">
              <span className="hover:text-blue-600 transition-colors duration-300">
                Blog
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link to="/about" className="relative group font-medium">
              <span className="hover:text-blue-600 transition-colors duration-300">
                About Us
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
            <Link to="/contact" className="relative group font-medium">
              <span className="hover:text-blue-600 transition-colors duration-300">
                Contact Us
              </span>
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-950 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            <div className="relative group">
              <Search className="h-6 w-6 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
              <div className="absolute top-full mt-2 right-0 hidden group-hover:block">
                <div className="bg-white/95 backdrop-blur-md shadow-lg border border-blue-200 p-4 rounded-lg transform transition-all duration-300">
                  <input
                    type="text"
                    className="w-64 px-4 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all duration-300"
                    placeholder="Search kurtas..."
                  />
                </div>
              </div>
            </div>

            <div className="relative group">
              <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
              <div className="absolute top-full mt-2 right-0 hidden group-hover:block">
                <div className="bg-white/95 backdrop-blur-md shadow-lg border border-blue-200 p-4 rounded-lg w-64 transform transition-all duration-300">
                  <h3 className="text-lg font-medium mb-2">Cart</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between">
                      <span>Kurta - Red Silk</span>
                      <span>₹1500</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Kurta - Green Casual</span>
                      <span>₹1200</span>
                    </li>
                  </ul>
                  <div className="border-t border-blue-200 mt-3 pt-2 flex justify-between font-medium">
                    <span>Total</span>
                    <span>₹2700</span>
                  </div>
                  <Link
                    to="/cart"
                    className="block mt-3 text-center py-2 px-4 bg-blue-800 text-white rounded-lg hover:bg-blue-950 transition-colors duration-300"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <User className="h-6 w-6 cursor-pointer hover:text-blue-600 transition-colors duration-300" />
              <div className="absolute top-full mt-2 right-0 hidden group-hover:block">
                <div className="bg-white/95 backdrop-blur-md shadow-lg border border-blue-200 p-4 rounded-lg w-64 transform transition-all duration-300">
                  <h3 className="text-lg font-medium mb-2">Profile</h3>
                  <p className="text-sm text-gray-600">Name: John Doe</p>
                  <p className="text-sm text-gray-600">
                    Email: john@example.com
                  </p>
                  <Link
                    to="/profile"
                    className="block mt-3 text-center py-2 px-4 bg-blue-800 text-white rounded-lg hover:bg-blue-950 transition-colors duration-300"
                  >
                    Manage Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <Link
                to="/login-register"
                className="block text-center py-2 px-4 bg-blue-950 text-white rounded-full hover:bg-blue-950 transition-colors duration-300"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full hover:bg-blue-400 transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-6 py-6 space-y-4 bg-white/95 backdrop-blur-md shadow-lg">
            <Link
              to="/new-arrivals"
              className="block py-2 text-lg font-medium hover:text-blue-600 transition-colors duration-300"
            >
              New Arrivals
            </Link>
            <Link
              to="/blog"
              className="block py-2 text-lg font-medium hover:text-blue-600 transition-colors duration-300"
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="block py-2 text-lg font-medium hover:text-blue-600 transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-lg font-medium hover:text-blue-600 transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
