import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const ProductCard = ({ product }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-blue-100">
    <div className="relative">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-50/20 to-transparent"></div>
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-base md:text-lg mb-2 hover:text-blue-600 transition-colors duration-300">
        {product.name}
      </h3>
      <p className="text-gray-600 text-sm md:text-base">{product.price}</p>
    </div>
  </div>
);

const ProductGrid = ({ title = "", products = [] }) => {
  const [startIndex, setStartIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const getItemsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return itemsPerView.mobile;
      if (window.innerWidth < 1024) return itemsPerView.tablet;
      return itemsPerView.desktop;
    }
    return itemsPerView.desktop;
  };

  const [currentItemsPerView, setCurrentItemsPerView] = useState(getItemsPerView());

  if (!products || products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-4 md:py-8">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-blue-950 text-left mb-2 md:mb-4 py-4 md:py-8">
          {title}
        </h1>
        <div className="text-center text-gray-500">No products available</div>
      </div>
    );
  }

  const nextSlide = () => {
    setStartIndex((prev) => Math.min(prev + 1, products.length - currentItemsPerView));
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
    setStartIndex(0);
  };

  return (
    <div className="py-4 md:py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 px-4 md:px-8 lg:px-32">
        <h1 className="text-2xl md:text-3xl lg:text-5xl text-blue-950 py-4 md:py-8">
          {title}
          <span className="block h-1 w-16 md:w-24 bg-gradient-to-r from-blue-200 to-blue-400 mt-2"></span>
        </h1>

        {products.length > currentItemsPerView && (
          <button
            onClick={toggleExpand}
            className="mt-2 md:mt-0 bg-white hover:bg-blue-50 text-blue-600 font-semibold py-2 px-4 border border-blue-200 rounded shadow flex items-center transition-colors duration-300 text-sm md:text-base"
          >
            {expanded ? (
              <>
                Show Less <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                View All <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </button>
        )}
      </div>

      {!expanded ? (
        <div className="relative bg-blue-800 p-4 md:p-8 lg:px-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {products
              .slice(startIndex, startIndex + currentItemsPerView)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          {products.length > currentItemsPerView && (
            <>
              <button
                onClick={prevSlide}
                className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 bg-white p-1 md:p-2 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 ${
                  startIndex === 0 ? "opacity-0" : "opacity-100"
                }`}
                disabled={startIndex === 0}
              >
                <ChevronLeft className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
              </button>

              <button
                onClick={nextSlide}
                className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 bg-white p-1 md:p-2 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300 ${
                  startIndex >= products.length - currentItemsPerView
                    ? "opacity-0"
                    : "opacity-100"
                }`}
                disabled={startIndex >= products.length - currentItemsPerView}
              >
                <ChevronRight className="h-4 w-4 md:h-6 md:w-6 text-blue-600" />
              </button>
            </>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 p-4 md:p-8 lg:px-32 bg-blue-800 ">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
