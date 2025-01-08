import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { PieChart, User, Inbox, Ticket, LogOut } from "lucide-react"; // Importing icons from Lucide React
import toast from "react-hot-toast";

const navLinks = [
  { to: "/admin-panel/dashboard", icon: PieChart, label: "Dashboard" },
  { to: "/admin-panel/orders", icon: Ticket, label: "Orders" },
  { to: "/admin-panel/users", icon: User, label: "Users" },
  { to: "/admin-panel/inbox", icon: Inbox, label: "Inbox" },
];

const SidebarDashNavbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
    setTimeout(() => {
      navigate("/");
    }, 600);
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg h-[10vh] overflow-x-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo and Title */}
          <div className="flex items-center pr-12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1Uq1enZ_ZR0Hc4F_g0jH2aT39Us3rwd0JC8tz3TMDMpGg7ywOrLkh6Id-q2h0GWIfGXs&usqp=CAU"
              alt="Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
            />
            <h1 className="ml-3 text-lg sm:text-xl font-semibold">
              Admin Panel
            </h1>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex flex-col items-center justify-center px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeLink === link.to
                    ? "bg-gray-800 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <link.icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
                <span className="mt-1 text-xs sm:text-sm">{link.label}</span>
              </Link>
            ))}
            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex flex-col items-center justify-center px-3 py-2 rounded-md text-sm font-medium text-red-400 hover:bg-red-900 hover:text-red-300 transition-all duration-200"
            >
              <LogOut className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
              <span className="mt-1 text-xs sm:text-sm">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarDashNavbar;
