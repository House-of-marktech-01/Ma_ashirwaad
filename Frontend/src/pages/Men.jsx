import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import HeroCarousel from "../components/HeroCarousel";

const products = [
  { id: 1, name: "Men's Jacket", image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg", price: "$49.99", category: "Women" },
  { id: 2, name: "Men's Sneakers", image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg", price: "$79.99", category: "Women" },
  { id: 3, name: "Men's Hoodie", image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg", price: "$59.99", category: "Women" },
  { id: 4, name: "Men's Jeans", image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/x/u/g/free-blue-camelr-toomley-original-imahyzgrczujbszc.jpeg", price: "$69.99", category: "Women" },
  { id: 5, name: "Men's T-Shirt", image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg", price: "$29.99", category: "Women" },
];

const ProductSection = ({ category, wishlist, toggleWishlist }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  // Filter products by category
  const filteredProducts = products.filter((product) => product.category === category);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Get products for the current page
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="max-w-7xl mx-auto py-10 px-6">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-4 border-gray-800 pb-2">
        {category} Collection
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative">
            <button className="absolute top-4 right-4 text-2xl" onClick={() => toggleWishlist(product.id)}>
              {wishlist.includes(product.id) ? <FaHeart className="text-red-500" /> : <FaRegHeart className="text-gray-400 hover:text-red-500 transition duration-300" />}
            </button>

            <img src={product.image} alt={product.name} className="w-full h-[500px] object-cover" />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-center text-gray-900">{product.name}</h3>
              <p className="text-gray-600 text-md text-center font-medium">{product.price}</p>
              <div className="flex justify-center items-center">
                <Link to={`/product/${product.id}`} className="mt-4 inline-block bg-red-900 w-full hover:bg-gray-700 text-white px-5 py-2 rounded-lg font-medium transition duration-300 text-center">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-6 space-x-4">
          <button className={`px-4 py-2 rounded-lg ${currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-gray-900 text-white hover:bg-gray-700"}`} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
            Previous
          </button>

          {[...Array(totalPages).keys()].map((num) => (
            <button key={num + 1} className={`px-4 py-2 rounded-lg ${currentPage === num + 1 ? "bg-red-900 text-white" : "bg-gray-200 text-gray-900 hover:bg-gray-400"}`} onClick={() => setCurrentPage(num + 1)}>
              {num + 1}
            </button>
          ))}

          <button className={`px-4 py-2 rounded-lg ${currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-gray-900 text-white hover:bg-gray-700"}`} onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default function Men() {
  const [wishlist, setWishlist] = useState([]);

  // Function to toggle wishlist
  const toggleWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId) ? prevWishlist.filter((id) => id !== productId) : [...prevWishlist, productId]
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen py-12 mb-2 mt-0 pb-7">
      <div className="pt-24">
        <HeroCarousel />
      </div>
      
      {/* Men Section */}
      <ProductSection
        category="Women"
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
      />
    </div>
  );
}
