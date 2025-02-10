import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons
import HeroCarousel from "../components/HeroCarousel";
import { getAllProducts } from '../Store/slices/productSlice'; // Import the action to fetch products
import { useDispatch, useSelector } from 'react-redux'; // Import useDispatch and useSelector
import { addToWishlist, getWishlist } from '../Store/slices/wishlistSlice'; // Import the action to add to wishlist
import { toast } from "react-toastify";

const ProductSection = ({
  wishlist,
  toggleWishlist,
  filterCategory,
  setFilterCategory,
}) => {
  const dispatch = useDispatch(); // Initialize dispatch
  let { products, loading, error } = useSelector((state) => state.product); // Get products from Redux store

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    dispatch(getAllProducts()); // Fetch all products on mount
  }, [dispatch]);

  // Filter products for Arts and Crafts category
  const filteredProducts = products.filter(
    (product) =>
      product.category.for === "Arts and Crafts" && // Filter by category
      (filterCategory === "All" || product.name.includes(filterCategory))
  );

  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="min-h-screen  md:w-max px-4 sm:px-8 mx-auto py-10">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-4 border-gray-800 pt-10">
        Decoration Collection
      </h2>

      {/* Filter Dropdown */}
      <div className="mb-6 flex gap-4">
        <select
          className="px-4 py-2 rounded-lg border border-red-900 bg-white text-red-900"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">All</option>
          {/* <option value="Loungewear">Loungewear</option>
          <option value="Nightsuits">Night Suits</option> */}
          {/* <option value="Hoodie">Hoodie</option>
          <option value="Jeans">Jeans</option>
          <option value="T-Shirt">T-Shirt</option> */}
        </select>
      </div>

      <div className="max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-900" />
          </div>
        ) : (
          paginatedProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative w-80"
            >
              {/* Wishlist Button */}
              <button
                className="absolute top-3 right-3 z-10 text-2xl bg-white rounded-full p-1.5"
                onClick={() => toggleWishlist(product.id)}
              >
                {wishlist.includes(product.id) ? (
                  <FaHeart className="text-red-500" />
                ) : (
                  <FaRegHeart className="text-gray-400 hover:text-red-500 transition duration-300" />
                )}
              </button>

              <div className="relative w-80 h-80">
                <img
                  src={product.image.main}
                  alt={product.name}
                  className="w-full h-full object-contain bg-gray-50"
                />
              </div>

              <div className="p-4 border-t">
                <h3 className="text-lg font-semibold text-center text-gray-900 truncate">
                  {product.name}
                </h3>
                <div className="flex justify-center gap-2 mt-1">
                  <p className="text-gray-500 line-through">₹{product.mrp}</p>
                  <p className="text-gray-900 font-medium">₹{product.retailPrice}</p>
                </div>
                <Link
                  to={`/product/${product._id}`}
                  className="mt-3 block bg-red-900 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300 text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Pagination Controls */}
      <div className="mt-6 text-center">
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-300 mx-2"
          >
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className="px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-700 transition duration-300 mx-2"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default function ArtsandCrafts() {
  const [wishlist, setWishlist] = useState([]);
  const [filterCategory, setFilterCategory] = useState("All");

  // Function to toggle wishlist
  const toggleWishlist = (productId) => {
    if (!productId) return;
    if(localStorage.getItem('token')===null){
      toast.error("Please login to add to wishlist")
      return;
    }
    const product = products.find(p => p._id === productId);
    dispatch(addToWishlist(product)); // Dispatch the thunk to add to wishlist
    dispatch(getWishlist()); // Fetch updated wishlist
    setWishlist((prevWishlist) =>
        prevWishlist.includes(productId)
            ? prevWishlist.filter((id) => id !== productId)
            : [...prevWishlist, productId]
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen mb-2 mt-0 pb-7">
      {/* HeroCarousel is now only rendered once here */}
      <div className="pt-24">
        <HeroCarousel />
      </div>

      {/* Women Section */}
      <ProductSection
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
