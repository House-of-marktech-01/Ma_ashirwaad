import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Dummy product data
const allProducts = [
  {
    id: 1,
    name: "Product 1",
    price: "₹1,499",
    image: "https://via.placeholder.com/200/200?text=Product+1",
  },
  {
    id: 2,
    name: "Product 2",
    price: "₹2,249",
    image: "https://via.placeholder.com/200/200?text=Product+2",
  },
  {
    id: 3,
    name: "Product 3",
    price: "₹3,299",
    image: "https://via.placeholder.com/200/200?text=Product+3",
  },
  {
    id: 4,
    name: "Product 4",
    price: "₹4,149",
    image: "https://via.placeholder.com/200/200?text=Product+4",
  },
  {
    id: 5,
    name: "Product 5",
    price: "₹5,099",
    image: "https://via.placeholder.com/200/200?text=Product+5",
  },
  {
    id: 6,
    name: "Product 6",
    price: "₹6,049",
    image: "https://via.placeholder.com/200/200?text=Product+6",
  },
  {
    id: 7,
    name: "Product 7",
    price: "₹6,999",
    image: "https://via.placeholder.com/200/200?text=Product+7",
  },
  {
    id: 8,
    name: "Product 8",
    price: "₹7,949",
    image: "https://via.placeholder.com/200/200?text=Product+8",
  },
];

export default function Products() {
  const [startIndex, setStartIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const itemsPerView = 4;

  const nextSlide = () => {
    setStartIndex((prev) =>
      Math.min(prev + 1, allProducts.length - itemsPerView)
    );
  };

  const prevSlide = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
    setStartIndex(0);
  };

  const ProductCard = ({ product }) => (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 ">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600">{product.price}</p>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-5xl text-[#3D390F]  text-left mb-4 py-8">
        Our Products
      </h1>

      {!expanded ? (
        // Slider view
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {allProducts
              .slice(startIndex, startIndex + itemsPerView)
              .map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-opacity duration-300 ${
              startIndex === 0 ? "opacity-0" : "opacity-100"
            }`}
            disabled={startIndex === 0}
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-opacity duration-300 ${
              startIndex >= allProducts.length - itemsPerView
                ? "opacity-0"
                : "opacity-100"
            }`}
            disabled={startIndex >= allProducts.length - itemsPerView}
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>
        </div>
      ) : (
        // Expanded grid view
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* View All / Show Less button */}
      <div className="mt-8 flex justify-center">
        <button
          onClick={toggleExpand}
          className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow flex items-center transition-colors duration-300"
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
      </div>
    </div>
  );
}
