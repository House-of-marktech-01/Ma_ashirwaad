import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Menu, Search, User, Heart, ShoppingBag } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../Store/slices/authSlice.js";

export default function Navbar() {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const cartState = useSelector((state) => state.cart);
  const wishlistState = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const navigate = useNavigate();

  const cartItemsCount = cartState?.cart?.products?.length || 0;

  const wishlistItemsCount = wishlistState?.cart?.products?.length || 0;

  // Handle cart notification
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  // Listen for cart changes
  useEffect(() => {
    setShowNotification(true);
  }, [cartItemsCount]);

  useEffect(() => {
    setShowNotification(true);
  }, [wishlistItemsCount]);

  const handleLogout = () => {
    dispatch(logout());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?query=${searchQuery}`);
      setSearchQuery("");
    }
  };

  return (
    <nav className="fixed w-full z-50 font-sans">
      {/* Notification Toast */}
      {showNotification && cartItemsCount > 0 && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-all duration-500 ease-in-out">
          Item added to cart successfully!
        </div>
      )}

{showNotification && wishlistItemsCount > 0 && (
        <div className="fixed top-20 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-all duration-500 ease-in-out">
          Item added to wishlist successfully!
        </div>
      )}

      {/* Announcement Bar */}
      <div className="bg-[#9A3131] py-2 text-white text-center text-sm">
        Buy 20% Off
      </div>

      {/* Main Navbar */}
      <div className="bg-black text-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="flex flex-col items-center">
            {/* Top Row - Logo, Search, and Icons */}
            <div className="w-full flex items-center justify-between py-4">
              {/* ... Logo section remains the same ... */}
              <div className="w-1/3">
                <Link to="/" className="text-4xl text-left font-bold text-white">
                  LOGO
                </Link>
              </div>

              {/* ... Search Bar remains the same ... */}
              <form onSubmit={handleSearch} className="hidden md:block w-1/3">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search Products and Categories"
                    className="w-full pl-10 pr-4 py-2 rounded-md bg-white text-black focus:outline-none text-sm"
                  />
                </div>
              </form>

              {/* Updated Icons Section */}
              <div className="w-1/3 hidden md:flex items-center justify-end gap-4">
                {isAuthenticated ? (
                  <>
                    <Link to="/profile">
                      <User className="h-5 w-5 cursor-pointer hover:text-gray-300 transition-colors" />
                    </Link>
                    <Link to="/wishlist">
                      <Heart className="h-5 w-5 cursor-pointer hover:text-gray-300 transition-colors" />
                      {wishlistItemsCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                          {wishlistItemsCount}
                        </span>
                      )}
                    </Link>
                    <Link to="/cart" className="relative">
                      <ShoppingBag className="h-5 w-5 cursor-pointer hover:text-gray-300 transition-colors" />
                      {cartItemsCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                          {cartItemsCount}
                        </span>
                      )}
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="bg-white text-black py-1 px-3 rounded-md hover:bg-gray-300 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link to="/login">
                    <button className="bg-white text-black py-1 px-3 rounded-md hover:bg-gray-300 transition">
                      Login
                    </button>
                  </Link>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden text-white"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* ... Navigation Links remain the same ... */}
            <div className="hidden md:flex justify-center w-full pb-3">
              <div className="w-1/3 flex items-center justify-between">
                <Link to="/" className="text-sm text-white hover:text-gray-300 transition-colors">
                  Home
                </Link>
                <Link to="/women" className="text-sm text-white hover:text-gray-300 transition-colors">
                  Fashion
                </Link>
                <Link to="/artsandcrafts" className="text-sm text-white hover:text-gray-300 transition-colors">
                  Decoration
                </Link>
                <Link to="/shop" className="text-sm text-white hover:text-gray-300 transition-colors">
                  Shop
                </Link>
                <Link to="/new-arrival" className="text-sm text-white hover:text-gray-300 transition-colors">
                  New Arrival
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Updated Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-800">
            <div className="px-4 py-3 space-y-3">
              <form onSubmit={handleSearch} className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Products and Categories"
                  className="w-full pl-10 pr-4 py-2 rounded-full bg-white text-black text-sm"
                />
              </form>

              <div className="flex justify-start gap-4">
                {isAuthenticated ? (
                  <>
                    <Link to="/profile" className="text-white hover:text-gray-300">
                      <User className="h-5 w-5" />
                    </Link>
                    <Link to="/wishlist" className="text-white hover:text-gray-300">
                      <Heart className="h-5 w-5" />
                    </Link>
                    <Link to="/cart" className="text-white hover:text-gray-300 relative">
                      <ShoppingBag className="h-5 w-5" />
                      {cartItemsCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                          {cartItemsCount}
                        </span>
                      )}
                    </Link>
                  </>
                ) : (
                  <Link to="/login" className="text-white hover:text-gray-300">
                    Login
                  </Link>
                )}
              </div>

              {/* ... Mobile menu links remain the same ... */}
              <div className="flex flex-col space-y-2 mt-4">
                <Link to="/" className="text-sm text-white hover:text-gray-300 transition-colors">
                  Home
                </Link>
                <Link to="/women" className="text-sm text-white hover:text-gray-300 transition-colors">
                  Women
                </Link>
                <Link to="/artsandcrafts" className="text-sm text-white hover:text-gray-300 transition-colors">
                  Arts and Crafts
                </Link>
                <Link to="/shop" className="text-sm text-white hover:text-gray-300 transition-colors">
                  Shop
                </Link>
                <Link to="/new-arrival" className="text-sm text-white hover:text-gray-300 transition-colors">
                  New Arrival
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}