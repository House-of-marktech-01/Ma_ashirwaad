import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons
import HeroCarousel from "../components/HeroCarousel";

const products = [
  {
    id: 1,
    name: "Men's Jacket",
    image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    price: "$49.99",
    category: "Men",
  },
  {
    id: 2,
    name: "Men's Sneakers",
    image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/q/9/i/l-blue-double-dandiya-aakarshana-original-imah6hegtyzpeure.jpeg",
    price: "$79.99",
    category: "Men",
  },
  {
    id: 3,
    name: "Men's Hoodie",
    image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/v/y/c/l-blue-double-dandiya-aakarshana-original-imah6heghhnb3utn.jpeg",
    price: "$59.99",
    category: "Men",
  },
  {
    id: 4,
    name: "Men's Jeans",
    image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/c/1/g/l-blue-double-dandiya-aakarshana-original-imah6hegcfghhhzg.jpeg",
    price: "$69.99",
    category: "Men",
  },
  {
    id: 5,
    name: "Men's T-Shirt",
    image: "https://example.com/mens-tshirt.jpg",
    price: "$29.99",
    category: "Men",
  },
];

const ProductSection = ({ category, wishlist, toggleWishlist, filterCategory, setFilterCategory }) => {
  const [visibleCount, setVisibleCount] = useState(4);
  
  const filteredProducts = products.filter(
    (product) => product.category === category && (filterCategory === "All" || product.name.includes(filterCategory))
  );

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b-2 border-gray-800 pb-2">
        {category} Collection
      </h2>

      {/* Filter Dropdown */}
      <div className="mb-6">
        <select
          className="px-4 py-2 rounded-lg border bg-white text-gray-900"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Jacket">Jacket</option>
          <option value="Sneakers">Sneakers</option>
          <option value="Hoodie">Hoodie</option>
          <option value="Jeans">Jeans</option>
          <option value="T-Shirt">T-Shirt</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border border-gray-300"
          >
            {/* Wishlist Button */}
            <button
              className="absolute top-4 right-4 text-xl"
              onClick={() => toggleWishlist(product.id)}
            >
              {wishlist.includes(product.id) ? (
                <FaHeart className="text-red-500" />
              ) : (
                <FaRegHeart className="text-gray-400 hover:text-red-500 transition duration-300" />
              )}
            </button>

            {/* Image */}
            <div className="relative h-[300px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600 text-md font-medium">{product.price}</p>
              <Link
                to={`/product/${product.id}`}
                className="mt-4 inline-block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-medium transition duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View More / View Less Buttons */}
      {filteredProducts.length > 4 && (
        <div className="mt-6 text-center">
          {visibleCount < filteredProducts.length ? (
            <button
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              View More
            </button>
          ) : (
            <button
              onClick={() => setVisibleCount(4)}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
              View Less
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default function Men() {
  const [wishlist, setWishlist] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");

  // Function to toggle wishlist
  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId)
        : [...prevWishlist, productId]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* HeroCarousel */}
      <div className="pt-24">
        <HeroCarousel />
      </div>

      {/* Men Section */}
      <ProductSection
        category="Men"
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
