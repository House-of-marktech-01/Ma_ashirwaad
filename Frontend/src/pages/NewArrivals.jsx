import { useState } from "react";
import { ShoppingCart, Eye } from "lucide-react";

const newArrivals = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$199.99",
    image: "https://via.placeholder.com/300",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: "$149.99",
    image: "https://via.placeholder.com/300",
    category: "Wearables",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: "$59.99",
    image: "https://via.placeholder.com/300",
    category: "Accessories",
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$89.99",
    image: "https://via.placeholder.com/300",
    category: "Audio",
  },
];

const NewArrivals = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
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
    <div className="bg-gray-100 min-h-screen py-12">
      {/* HeroCarousel can be added here if you want it on this page */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
        <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-8">
          New Arrivals
        </h1>
        {/* Coming Soon Section */}
        <div className="text-center my-20 py-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">
            Coming Soon
          </h1>
          <p className="text-xl text-white mt-4">
            Stay tuned for our upcoming products!
          </p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => (
            <div
              key={product.id}
              className="relative bg-white shadow-md rounded-lg overflow-hidden group transition-all transform hover:scale-105 hover:shadow-lg"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover transition-transform duration-500 ease-in-out transform group-hover:scale-105"
              />

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{product.category}</p>
                <p className="text-lg font-semibold text-gray-900 mt-2">{product.price}</p>
              </div>

              <div
                className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              >
                <button
                  className="bg-white text-black px-4 py-2 rounded-full shadow-md flex items-center gap-2 transition-transform transform hover:scale-95 hover:bg-gray-200"
                  onClick={() => toggleWishlist(product.id)}
                >
                  {wishlist.includes(product.id) ? (
                    <span className="text-red-500">❤️</span>
                  ) : (
                    <span className="text-gray-400">♡</span>
                  )}
                  View Details
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-full shadow-md flex items-center gap-2 transition-transform transform hover:scale-95 hover:bg-gray-800">
                  <ShoppingCart size={16} /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default NewArrivals;
