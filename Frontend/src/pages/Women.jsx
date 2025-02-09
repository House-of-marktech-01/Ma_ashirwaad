import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Heart } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
import { getAllProducts } from '../Store/slices/productSlice';

const ProductCard = ({ product, isWishlisted, onWishlistToggle }) => {
  if (!product) return null;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl relative w-80">
      <button
        onClick={() => onWishlistToggle(product._id)}
        className="absolute top-3 right-3 z-10 text-2xl bg-white rounded-full p-1.5"
      >
        <Heart 
          className={`w-6 h-6 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400 hover:text-red-500'}`}
        />
      </button>

      <div className="relative w-80 h-80">
        <img
          src={product.image?.main || '/placeholder-image.jpg'}
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
        <div className="mt-2 text-sm text-center">
          <p>Available Sizes: {product.attributes?.size.join(", ")}</p>
          <p>Colors: 
          <span className=""> {/* Align buttons to the left */}
              {product?.attributes?.color.map((color) => (
                  <button
                    key={color}
                    className={`w-4 h-4 md:w-6 md:h-6 rounded-full border-2 ${ // Adjusted size
                      color.toLowerCase() === 'white' ? 'border-gray-400' : 'border-transparent'
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      position: 'relative'
                    }}
                    aria-label={`Select ${color} color`}
                  >
                  </button>
                ))}
            </span>
          </p>
        </div>
        <Link
          to={`/product/${product._id}`}
          className="mt-3 block bg-red-900 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition duration-300 text-center"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default function Women() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);
console.log(products)
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    dispatch(getAllProducts());  // Fetch all products on mount
  }, [dispatch]);

  const toggleWishlist = (productId) => {
    if (!productId) return;
    setWishlist((prevWishlist) =>
      prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId)
        : [...prevWishlist, productId]
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen mb-2 mt-0 pb-7">
      <div className="pt-24">
        <HeroCarousel />
      </div>

      <div className="min-h-screen max-w-7xl px-4 sm:px-8 mx-auto py-10">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-b-4 border-gray-800 pt-10">
          Women's Collection
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-900" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {products?.map((product) => (
              <ProductCard
                key={product?._id}
                product={product}
                isWishlisted={wishlist.includes(product?._id)}
                onWishlistToggle={toggleWishlist}
              />
            ))}
          </div>
        )}

        {error && (
          <div className="text-red-500 text-center mt-4">
            Error: {error.message}
          </div>
        )}
      </div>
    </div>
  );
}
