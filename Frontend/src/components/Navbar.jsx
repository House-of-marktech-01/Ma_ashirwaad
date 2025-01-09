import { useState } from "react";
import { Menu, Search, User, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 font-sans">
      <div className="bg-[#9A3131] py-1 sm:py-2 text-white text-center text-sm sm:text-base">
        Buy 20% Off
      </div>

      <div className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="text-xl sm:text-2xl font-bold text-white">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Uq1enZ_ZR0Hc4F_g0jH2aT39Us3rwd0JC8tz3TMDMpGg7ywOrLkh6Id-q2h0GWIfGXs&usqp=CAU"
                alt="Logo"
                className="h-12 sm:h-16 w-auto object-contain rounded-full"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
              <Link
                to="/"
                className="text-sm lg:text-base text-white hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/women"
                className="text-sm lg:text-base text-white hover:text-gray-300 transition-colors"
              >
                Women
              </Link>
              <Link
                to="/men"
                className="text-sm lg:text-base text-white hover:text-gray-300 transition-colors"
              >
                Men
              </Link>
              <Link
                to="/shop"
                className="text-sm lg:text-base text-white hover:text-gray-300 transition-colors"
              >
                Shop
              </Link>
              <Link
                to="/new-arrival"
                className="text-sm lg:text-base text-white hover:text-gray-300 transition-colors"
              >
                New arrival
              </Link>
            </div>

            {/* Search Bar */}
            <div className="hidden md:block max-w-md w-full mx-4 lg:mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Products and Categories"
                  className="w-full px-3 lg:px-4 py-1.5 lg:py-2 rounded-full bg-white text-black focus:outline-none text-sm lg:text-base"
                />
                <Search className="absolute right-3 top-1.5 lg:top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Icons */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              <Link to='/profile'>
              <User className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-gray-300 transition-colors" />
              </Link>
              <Heart className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-gray-300 transition-colors" />
              <ShoppingBag className="h-5 w-5 lg:h-6 lg:w-6 cursor-pointer hover:text-gray-300 transition-colors" />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white p-2"
            >
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-4 py-3 space-y-3 sm:space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Products and Categories"
                  className="w-full px-3 py-1.5 rounded-full bg-white text-black text-sm"
                />
                <Search className="absolute right-3 top-1.5 h-5 w-5 text-gray-400" />
              </div>

              <div className="flex justify-center space-x-6">
                <User className="h-5 w-5 sm:h-6 sm:w-6" />
                <Heart className="h-5 w-5 sm:h-6 sm:w-6" />
                <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>

              <div className="flex flex-col space-y-3 sm:space-y-4">
                <Link
                  to="/"
                  className="text-sm sm:text-base text-white hover:text-gray-300 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/women"
                  className="text-sm sm:text-base text-white hover:text-gray-300 transition-colors"
                >
                  Women
                </Link>
                <Link
                  to="/men"
                  className="text-sm sm:text-base text-white hover:text-gray-300 transition-colors"
                >
                  Men
                </Link>
                <Link
                  to="/shop"
                  className="text-sm sm:text-base text-white hover:text-gray-300 transition-colors"
                >
                  Shop
                </Link>
                <Link
                  to="/new-arrival"
                  className="text-sm sm:text-base text-white hover:text-gray-300 transition-colors"
                >
                  New arrival
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
