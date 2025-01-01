import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategoryCircle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const clothingCategories = [
    {
      name: "Nighty",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/9833/9833994.png"
          alt="Nighty"
          className="w-16 h-16 md:w-24 md:h-24" // Increased icon size
        />
      ),
    },
    {
      name: "Kurti",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/9833/9833994.png"
          alt="Kurti"
          className="w-16 h-16 md:w-24 md:h-24"
        />
      ),
    },
    {
      name: "Woollen",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/9833/9833994.png"
          alt="Woollen"
          className="w-16 h-16 md:w-24 md:h-24"
        />
      ),
    },
    {
      name: "Kurta",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/9833/9833994.png"
          alt="Kurta"
          className="w-16 h-16 md:w-24 md:h-24"
        />
      ),
    },
    {
      name: "Saree",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/9833/9833994.png"
          alt="Saree"
          className="w-16 h-16 md:w-24 md:h-24"
        />
      ),
    },
    {
      name: "Lehenga",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/9833/9833994.png"
          alt="Lehenga"
          className="w-16 h-16 md:w-24 md:h-24"
        />
      ),
    },
    {
      name: "Palazzo",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/9833/9833994.png"
          alt="Palazzo"
          className="w-16 h-16 md:w-24 md:h-24"
        />
      ),
    },
    {
      name: "Dupatta",
      icon: (
        <img
          src="https://cdn-icons-png.flaticon.com/512/9833/9833994.png"
          alt="Dupatta"
          className="w-16 h-16 md:w-24 md:h-24"
        />
      ),
    },
  ];

  const itemsToShow = {
    sm: 2,
    md: 3,
    lg: 4,
  };

  const getItemsToShow = () => {
    if (window.innerWidth < 640) return itemsToShow.sm;
    if (window.innerWidth < 1024) return itemsToShow.md;
    return itemsToShow.lg;
  };

  const maxIndex = clothingCategories.length - getItemsToShow();

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="relative w-full bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 md:py-16 m">
      <div className="max-w-8xl mx-auto px-4 md:px-6">
        {/* <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12 text-gray-800 tracking-wide">
          Explore Our Collections
        </h2> */}

        <div className="flex items-center justify-center gap-2 md:gap-8 w-full">
          <button
            onClick={prevSlide}
            className={`p-2 md:p-4 rounded-full shadow-xl bg-white hover:bg-blue-50 transition-all duration-300 ${
              currentIndex === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-110 hover:shadow-2xl"
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 text-gray-700" />
          </button>

          <div className="flex gap-4 md:gap-12">
            {clothingCategories
              .slice(currentIndex, currentIndex + getItemsToShow())
              .map((category, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center transform hover:scale-110 transition-transform duration-500"
                >
                  <div className="w-32 h-32 md:w-56 md:h-56 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer bg-white group relative">
                    {/* Decorative border with gradient and animation */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-800 via-purple-500 to-blue-700 animate-spin-slow"></div>
                    {/* Inner white background */}
                    <div className="absolute inset-1 rounded-full bg-white"></div>
                    {/* Content */}
                    <div className="relative transform group-hover:rotate-6 transition-transform duration-300">
                      {category.icon}
                    </div>
                  </div>
                  <span className="mt-3 md:mt-6 text-sm md:text-2xl font-semibold text-gray-800 tracking-wide">
                    {category.name}
                  </span>
                </div>
              ))}
          </div>

          <button
            onClick={nextSlide}
            className={`p-2 md:p-4 rounded-full shadow-xl bg-white hover:bg-blue-50 transition-all duration-300 ${
              currentIndex === maxIndex
                ? "opacity-50 cursor-not-allowed"
                : "hover:scale-110 hover:shadow-2xl"
            }`}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="w-6 h-6 md:w-10 md:h-10 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCircle;
