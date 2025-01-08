import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CategoryCircle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);

  const categories = [
    {
      name: "Long Kurti",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Short Kurti",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Saree",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Gown",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Woollen",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Long Kurti",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Short Kurti",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Saree",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Gown",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Woollen",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsToShow(1);
      } else if (window.innerWidth < 768) {
        setItemsToShow(2);
      } else if (window.innerWidth < 1024) {
        setItemsToShow(3);
      } else {
        setItemsToShow(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, categories.length - itemsToShow);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] bg-white py-6 sm:py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-center mb-6 sm:mb-8 md:mb-12">Category</h2>

        {/* Categories Container */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          <button
            onClick={prevSlide}
            className={`p-1 sm:p-2 rounded-full shadow-md hover:shadow-lg transition-all ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>

          <div className="flex gap-2 sm:gap-4 md:gap-6">
            {categories
              .slice(currentIndex, currentIndex + itemsToShow)
              .map((category, index) => (
                <div
                  key={index}
                  className="group relative h-[20vh] sm:h-[25vh] md:h-[30vh] aspect-square rounded-lg shadow-lg sm:shadow-xl md:shadow-2xl shadow-black/20"
                >
                  {/* Image */}
                  <div className="w-full h-full rounded-xl overflow-hidden bg-white">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover rounded-full p-1 sm:p-1.5 md:p-2"
                    />
                  </div>

                  {/* Text Band */}
                  <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 bg-gray-200/80 py-1 sm:py-1.5 md:py-2 px-2 sm:px-3 md:px-4">
                    <h3 className="text-center text-gray-900 font-medium text-xs sm:text-sm md:text-base">
                      {category.name}
                    </h3>
                  </div>
                </div>
              ))}
          </div>

          <button
            onClick={nextSlide}
            className={`p-1 sm:p-2 rounded-full shadow-md hover:shadow-lg transition-all ${
              currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={currentIndex === maxIndex}
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-gray-700" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCircle;
