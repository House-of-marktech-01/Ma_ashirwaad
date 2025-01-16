import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <>
    <div className="text-center mb-0 border-4 rounded-2xl border-red-900 p-6 ">
    <h2 className="font-bold mb-6 text-9xl leading-tight text-red-900">Join Us</h2>


    <div className="flex justify-center space-x-8 mb-12 font-bold text-9xl leading-tight text-red-900 gap-52">
  <a href="#" className="hover:opacity-80 transition-opacity">
    <FaFacebook size={120} /> {/* Increase size to 120px for giant icons */}
  </a>
  <a href="#" className="hover:opacity-80 transition-opacity">
    <FaInstagram size={120} /> {/* Increase size to 120px for giant icons */}
  </a>
  <a href="#" className="hover:opacity-80 transition-opacity">
    <FaTwitter size={120} /> {/* Increase size to 120px for giant icons */}
  </a>
</div>

        </div>

        <footer className="bg-[#8B2121] text-white font-poppins">
  <div className="container mx-auto px-4 py-16 text-center">
    <div className="max-w-2xl mx-auto mb-16">
      <div className="mb-12">
        <div className="relative w-32 h-32 mx-auto mb-6 rounded-full">
          <img
            src="https://s3-alpha-sig.figma.com/img/db71/9f70/9f87dba3aa34aeb3283ebdc158c66ebd?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=C0P6xpemp5c3FvN1u-UKhCxcwURO0hl3NHxOAEWBg2tfE79Kd2NQ~x6xjbJDpJkVBKumDw4W0xKk-fjKO5i6wTcNmhguQhKtj-RokXcJthQtcQscejM8DFUtyj1vX6NJDH4JldDB6WZiKz9L-kaHh9Bh86l~X-14UwpXRuZEszSXJfZq1JEWquvBYAxRBSPc~Fi0rDKVItdSJZVjQ-aFGpiQL8zPVOoGW0nlHu9xinoSxgVvpRfC9ucJVXfJdU~dqs6O9oONXi6KzDj8R9DMulKzc5G-CEhsv~cV4gBB2rDz1ohrx~VZeOGxP8~k1dTxjGYDVlFKklGrxGxI7ve1eg__"
            alt="Newsletter"
            className="rounded-full w-32 h-32"
          />
        </div>

        <h2 className="text-4xl font-bold mb-4 tracking-tight">Stay Updated</h2>
        <p className="text-lg mb-8">
          Get the latest updates and exclusive content directly in your inbox
        </p>
      </div>

      <div className="relative max-w-xl mx-auto">
        <div className="relative flex items-center mb-4">
          <input
            type="email"
            placeholder="Enter your email address"
            className="w-full px-6 py-4 pr-16 text-lg rounded-full border-2 border-gray-300 bg-[#8B2121] text-white placeholder:text-gray-200
                      focus:outline-none focus:border-white focus:ring-2 focus:ring-white transition-all duration-300"
          />
          <button
            className="absolute right-2 bg-white text-[#8B2121] rounded-full 
                       hover:bg-gray-300 transition-colors duration-300 flex items-center 
                       justify-center w-12 h-12 shadow-md"
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>

    <div className="flex justify-center space-x-6 mt-16">
      <a href="#" className="hover:text-gray-300 transition-colors duration-300">
        <FaFacebook size={24} />
      </a>
      <a href="#" className="hover:text-gray-300 transition-colors duration-300">
        <FaInstagram size={24} />
      </a>
      <a href="#" className="hover:text-gray-300 transition-colors duration-300">
        <FaTwitter size={24} />
      </a>
    </div>
  </div>

  <div className="container mx-auto px-4 border-t-2 border-gray-300 py-8">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
      {/* Brand Info */}
      <motion.div className="text-center md:text-left" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
        <h2 className="text-2xl font-bold mb-4">Ma Ashirwad</h2>
        <p className="mb-4">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some.
        </p>
      </motion.div>

      {/* Help Links */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <h3 className="text-lg font-bold mb-4">Help</h3>
        <ul className="space-y-2">
          <li><Link to="/privacy-policy" className="hover:text-gray-300">Privacy Policy</Link></li>
          <li><Link to="/shipping" className="hover:text-gray-300">Shipping & Delivery</Link></li>
          <li><Link to="/refund" className="hover:text-gray-300">Refund Policy</Link></li>
          <li><Link to="/track-order" className="hover:text-gray-300">Track Your Order</Link></li>
          <li><Link to="/admin-panel" className="hover:text-gray-300">Admin Panel</Link></li>
        </ul>
      </motion.div>

      {/* Store Links */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
        <h3 className="text-lg font-bold mb-4">Store</h3>
        <ul className="space-y-2">
          <li><Link to="/men" className="hover:text-gray-300">Men Fashion</Link></li>
          <li><Link to="/women" className="hover:text-gray-300">Women Fashion</Link></li>
          <li><Link to="/accessories" className="hover:text-gray-300">Accessories</Link></li>
          <li><Link to="/sale" className="hover:text-gray-300">Sale</Link></li>
        </ul>
      </motion.div>

      {/* Support Links */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
        <h3 className="text-lg font-bold mb-4">Support</h3>
        <ul className="space-y-2">
          <li><Link to="/feedback" className="hover:text-gray-300">Feedback</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact us</Link></li>
          <li><Link to="/download" className="hover:text-gray-300">Download app</Link></li>
          <li><Link to="/terms" className="hover:text-gray-300">Terms & condition</Link></li>
        </ul>
      </motion.div>
    </div>

    {/* Bottom Bar */}
    <motion.div className="border-t border-gray-300 py-8 mt-8 text-center md:flex md:justify-between md:items-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.8 }}>
      <p className="text-sm mb-4 md:mb-0">
        © {new Date().getFullYear()} Maa Ashirwad. All rights reserved.
      </p>
      <p className="text-sm">
        Designed by{" "}
        <a href="https://www.houseofmarktech.com/" className="text-white hover:text-gray-300" target="_blank" rel="noopener noreferrer">
          House Of MarkTech
        </a>
      </p>
    </motion.div>
  </div>
</footer>

    </>
  );
}
