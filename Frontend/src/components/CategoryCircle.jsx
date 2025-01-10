import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategoryCircle = () => {
  const scrollContainer = useRef(null);

  const categories = [
    { name: "Long Kurti", image: "https://via.placeholder.com/150" },
    { name: "Short Kurti", image: "https://via.placeholder.com/150" },
    { name: "Saree", image: "https://via.placeholder.com/150" },
    { name: "Gown", image: "https://via.placeholder.com/150" },
    { name: "Woollen", image: "https://via.placeholder.com/150" },
    { name: "Jeans", image: "https://via.placeholder.com/150" },
    { name: "T-Shirt", image: "https://via.placeholder.com/150" },
    { name: "Jacket", image: "https://via.placeholder.com/150" },
    { name: "Dress", image: "https://via.placeholder.com/150" },
    { name: "Coat", image: "https://via.placeholder.com/150" },
  ];

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 relative">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center mb-6">Categories</h2>

        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        {/* Scrollable Categories Container */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-auto space-x-4 px-10 scrollbar-hide"
          style={{ scrollBehavior: "smooth", scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[140px] sm:min-w-[160px] p-4 shadow-lg bg-white rounded-lg transition hover:scale-105"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-md"
              />
              <h3 className="text-gray-900 font-medium mt-2">{category.name}</h3>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-3 bg-gray-200 hover:bg-gray-300 rounded-full shadow-md"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default CategoryCircle;
