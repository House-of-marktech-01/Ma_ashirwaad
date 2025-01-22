import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa"; // Import heart icons
import HeroCarousel from "../components/HeroCarousel";

const products = [
  {
    id: 1,
    name: "Men's Jacket",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    price: "$49.99",
    category: "Women",
  },
  {
    id: 2,
    name: "Men's Sneakers",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    price: "$79.99",
    category: "Women",
  },
  {
    id: 3,
    name: "Men's Hoodie",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    price: "$59.99",
    category: "Women",
  },
  {
    id: 4,
    name: "Men's Jeans",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/x/u/g/free-blue-camelr-toomley-original-imahyzgrczujbszc.jpeg",
    price: "$69.99",
    category: "Women",
  },
  {
    id: 5,
    name: "Men's T-Shirt",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    price: "$29.99",
    category: "Women",
  },
  {
    id: 6,
    name: "Men's Coat",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    price: "$89.99",
    category: "Women",
  },
  {
    id: 7,
    name: "Women's Dress",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    price: "$99.99",
    category: "Women",
  },
  {
    id: 8,
    name: "Women's Skirt",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    price: "$39.99",
    category: "Women",
  },
  {
    id: 9,
    name: "Women's Blouse",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    price: "$49.99",
    category: "Women",
  },
  {
    id: 1,
    name: "Men's Jacket",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    price: "$49.99",
    category: "Women",
  },
  {
    id: 2,
    name: "Men's Sneakers",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    price: "$79.99",
    category: "Women",
  },
  {
    id: 3,
    name: "Men's Hoodie",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    price: "$59.99",
    category: "Women",
  },
  {
    id: 4,
    name: "Loungewear",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/w/r/s/free-red-single-dandiya-aakarshana-original-imah6hehd7wgz6wa.jpeg",
    price: "$69.99",
    category: "Women",
  },
  {
    id: 5,
    name: "Nightsuits",
    image:
      "https://img.fkcdn.com/image/xif0q/ethnic-set/f/g/a/xl-deals-toomley-original-imahyzfw4dkvdkwh.jpeg",
    price: "$29.99",
    category: "Women",
  },
  {
    id: 6,
    name: "Nightsuits",
    image:
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/q/p/z/free-red-single-dandiya-aakarshana-original-imah6hehcbxsp34w.jpeg",
    price: "$89.99",
    category: "Women",
  },
  {
    id: 7,
    name: "Nightsuits",
    image:
      "https://img.fkcdn.com/image/xif0q/ethnic-set/5/y/r/xl-deals-toomley-original-imahyzfw9s3hshzv.jpeg",
    price: "$99.99",
    category: "Women",
  },
];

const ProductSection = ({
  category,
  wishlist,
  toggleWishlist,
  filterCategory,
  setFilterCategory,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredProducts = products.filter(
    (product) =>
      product.category === category &&
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
        {category} Collection
      </h2>

      {/* Filter Dropdown */}
      <div className="mb-6 flex gap-4">
        <select
          className="px-4 py-2 rounded-lg border border-red-900 bg-white text-red-900 "
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">Night Dresses</option>
          <option value="Loungewear">Loungewear</option>
          <option value="Nightsuits">Night Suits</option>
          {/* <option value="Hoodie">Hoodie</option>
          <option value="Jeans">Jeans</option>
          <option value="T-Shirt">T-Shirt</option> */}
        </select>
        

        <select
          className="px-4 py-2 rounded-lg border  border-red-900 bg-white text-red-900"
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="All">Hair Accessories</option>
          <option value="Hairclips">Hair Clips</option>
          <option value="Clipcards">Clip Cards</option>
          <option value="Backclip">Back Clip</option>
          <option value="Hairbands">Hair Bands</option>
          <option value="Rings">Rings</option>
        </select>
      </div>

      <div className="max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {paginatedProducts.map((product) => (
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
              className="w-full h-[500px] object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-semibold text-center text-gray-900">
                {product.name}
              </h3>
              <p className="text-gray-600 text-md text-center font-medium">
                {product.price}
              </p>
              <div className="flex justify-center items-center">
                <Link
                  to={`/product/${product.id}`}
                  className="mt-4 inline-block bg-red-900 w-full hover:bg-gray-700 text-white px-5 py-2 rounded-lg font-medium transition duration-300 text-center"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
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

export default function Women() {
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
    <div className="bg-gray-100 min-h-screen mb-2 mt-0 pb-7">
      {/* HeroCarousel is now only rendered once here */}
      <div className="pt-24">
        <HeroCarousel />
      </div>

      {/* Women Section */}
      <ProductSection
        category="Women"
        wishlist={wishlist}
        toggleWishlist={toggleWishlist}
        filterCategory={filterCategory}
        setFilterCategory={setFilterCategory}
      />
    </div>
  );
}
