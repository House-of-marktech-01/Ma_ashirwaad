import { useState } from "react";
import { ChevronDown, Star } from "lucide-react";

const Heading = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showWhatsNew, setShowWhatsNew] = useState(false);

  const categories = [
    "Casual Kurtas",
    "Festive Collection",
    "Wedding Collection",
    "Designer Kurtas",
    "Traditional Wear",
  ];

  const starProduct = {
    name: "Embroidered Wedding Kurta",
    price: "₹4,999",
    tag: "New Arrival",
  };

  return (
    <div className="relative w-full">
      <div className="min-h-[40vh] bg-gradient-to-b from-gray-50 to-white flex flex-col items-center justify-center px-4 py-8">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-8 text-gray-900 text-center">
          Ma Ashirwad
        </h1>

        {/* Buttons Container */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 md:gap-16 lg:gap-64 pt-4 md:pt-8 w-full justify-center">
          {/* Categories Button */}
          <div className="relative">
            <button
              onMouseEnter={() => setShowCategories(true)}
              onMouseLeave={() => setShowCategories(false)}
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 bg-white text-gray-800 underline w-full sm:w-auto"
            >
              Categories
              <ChevronDown className="w-4 h-4" />
            </button>

            {/* Categories Dropdown */}
            {showCategories && (
              <div
                className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100"
                onMouseEnter={() => setShowCategories(true)}
                onMouseLeave={() => setShowCategories(false)}
              >
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* What's New Button */}
          <div className="relative">
            <button
              onMouseEnter={() => setShowWhatsNew(true)}
              onMouseLeave={() => setShowWhatsNew(false)}
              className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2 bg-white text-gray-800 underline w-full sm:w-auto"
            >
              What's New
              <Star className="w-4 h-4" />
            </button>

            {/* What's New Dropdown */}
            {showWhatsNew && (
              <div
                className="absolute top-full right-0 mt-2 w-64 bg-white rounded-lg shadow-lg p-4 z-50 border border-gray-100"
                onMouseEnter={() => setShowWhatsNew(true)}
                onMouseLeave={() => setShowWhatsNew(false)}
              >
                <div className="text-gray-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm sm:text-base">
                      {starProduct.name}
                    </span>
                    <span className="bg-amber-50 text-amber-800 text-xs px-2 py-1 rounded-full border border-amber-100">
                      {starProduct.tag}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {starProduct.price}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heading;
