import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons
import HeroCarousel from "../components/HeroCarousel";

const products = [
  {
    id: 1,
    name: "Men's Jacket",
    image: "https://example.com/mens-jacket.jpg",
    price: "$49.99",
    category: "Men",
  },
  {
    id: 2,
    name: "Men's Sneakers",
    image: "https://example.com/mens-sneakers.jpg",
    price: "$79.99",
    category: "Men",
  },
  {
    id: 3,
    name: "Women's Dress",
    image: "https://example.com/womens-dress.jpg",
    price: "$59.99",
    category: "Women",
  },
  {
    id: 4,
    name: "Women's Heels",
    image: "https://example.com/womens-heels.jpg",
    price: "$89.99",
    category: "Women",
  },
];

const ProductSection = ({ category, wishlist, toggleWishlist }) => {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-4 border-gray-800 pb-2">
        {category} Collection
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products
          .filter((product) => product.category === category)
          .map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative"
            >
              {/* Wishlist Button */}
              <button
                className="absolute top-4 right-4 text-2xl"
                onClick={() => toggleWishlist(product.id)}
              >
                {wishlist.includes(product.id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-400 hover:text-red-500 transition duration-300" />
                )}
              </button>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-md font-medium">
                  {product.price}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="mt-4 inline-block bg-gray-900 hover:bg-gray-700 text-white px-5 py-2 rounded-lg font-medium transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default function ShopPage() {
  const [wishlist, setWishlist] = useState([]);

  // Function to toggle wishlist
  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId)
        : [...prevWishlist, productId]
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen ">
      {/* HeroCarousel is now only rendered once here */}
      <div className="pt-24">
        <HeroCarousel />
      </div>

      {/* Men Section */}
      <ProductSection
        category="Men"
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />
      
      {/* Women Section */}
      <ProductSection
        category="Women"
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />
    </div>
  );
}
