import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-900  font-poppins">
      <div className="container mx-auto px-4 py-16 text-center bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-2xl mx-auto mb-16">
          <div className="mb-12">
            <div className="relative w-32 h-32  mx-auto mb-6 rounded-full">
              <img
                src="https://s3-alpha-sig.figma.com/img/db71/9f70/9f87dba3aa34aeb3283ebdc158c66ebd?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qPK0mDd6YPggifpnsGPelfhQZ138DKyjaC~fW7hJAnVPJes0SriByqejtKFUi~oY97MTk8UPIYWeAolfpYD1qOgGdAZnXpTqpnPEbyJyUmkNDAv-RyusKrpuXbAbmCmRd8-DNcSLaBwb0nSVo5PtPccPlVCQERuLknaIupEmy5EDPEWfLe~SEPDIoPve~SJs3B09Xu5I2oBUmLp4is46HoC553IfYWwdv8qThctkLtghMlfrlGO4BZvUU~V09M6ien3tSMAx8zA8g9fyVklYd5sxEInfC9I1d150VcPA6IiXdP6IZUO8UWi8xRY4zeQG7VqmK902OvmsIxU2UgaCIQ__"
                alt="Newsletter"
                className="rounded-full w-32 h-32 "
              />
            </div>

            <h2 className="text-4xl font-bold mb-4 text-[#323232] tracking-tight">
              Stay Updated
            </h2>
            <p className="text-gray-900 text-lg mb-8">
              Get the latest updates and exclusive content directly in your
              inbox
            </p>
          </div>

          <div className="relative max-w-xl mx-auto">
            <div className="relative flex items-center mb-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-6 py-4 pr-16 text-lg rounded-full border-2 border-gray-200 
                         focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 
                         transition-all duration-300 placeholder:text-gray-400"
              />
              <button
                className="absolute right-2 bg-black text-white rounded-full 
                             hover:bg-black transition-colors duration-300 flex items-center 
                             justify-center w-12 h-12 shadow-md"
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center space-x-6 mt-16">
          <a
            href="#"
            className="text-black hover:text-gray-500 transition-colors duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-500 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-500 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
        </div>
      </div>

      <div className="container mx-auto px-4 border-t-2 border-gray-200 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Info */}
          <motion.div
            className="text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4 text-black">Ma Ashirwad</h2>
            <p className="text-gray-900 mb-4">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some.
            </p>
          </motion.div>

          {/* Help Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold mb-4 text-gray-900">Help</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-gray-900 hover:text-blue-500"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/shipping"
                  className="text-gray-900 hover:text-blue-500"
                >
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="text-gray-900 hover:text-blue-500"
                >
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/track-order"
                  className="text-gray-900 hover:text-blue-500"
                >
                  Track Your Order
                </Link>
              </li>{" "}
              <li>
                <Link
                  to="/admin-panel"
                  className="text-gray-900 hover:text-blue-500"
                >
                  Admin Panel
                </Link>
              </li>{" "}
            </ul>
          </motion.div>

          {/* Store Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-lg font-bold mb-4 text-gray-900">Store</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/men" className="text-gray-900 hover:text-blue-500">
                  Men Fashion
                </Link>
              </li>
              <li>
                <Link to="/women" className="text-gray-900 hover:text-blue-500">
                  Women Fashion
                </Link>
              </li>
              <li>
                <Link
                  to="/accessories"
                  className="text-gray-900 hover:text-blue-500"
                >
                  Accessories
                </Link>
              </li>
              <li>
                <Link to="/sale" className="text-gray-900 hover:text-blue-500">
                  Sale
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-lg font-bold mb-4 text-gray-900">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/feedback"
                  className="text-gray-900 hover:text-blue-500"
                >
                  Feedback
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-900 hover:text-blue-500"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <Link
                  to="/download"
                  className="text-gray-900 hover:text-blue-500"
                >
                  Download app
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-900 hover:text-blue-500">
                  Terms & condition
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-gray-200 py-8 mt-8 text-center md:flex md:justify-between md:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-900 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Maa Ashirwad. All rights reserved.
          </p>
          <p className="text-gray-900 text-sm">
            Designed by{" "}
            <a
              href="https://www.houseofmarktech.com/"
              className="text-blue-500 hover:text-blue-700"
              target="_blank"
              rel="noopener noreferrer"
            >
              House Of MarkTech
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
