import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import { getWishlist } from "../Store/slices/wishlistSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const { wishlist, loading } = useSelector((state) => state.wishlist);
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(getWishlist());
  }, [dispatch]);

  const totalPages = Math.ceil(wishlist.length / itemsPerPage);

  const currentProducts = wishlist.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const menuItems = ["Remove"];

  if (!loading) {
    return (
      <div className="rounded shadow-md font-poppins pb-10">
        <div className="primaryColorBg rounded-t font-poppins text-white p-4 text-center">
          <h1 className="text-lg">Wishlist</h1>
        </div>
        <div className="text-center py-8">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="rounded shadow-md font-poppins pb-10">
        <div className="primaryColorBg rounded-t font-poppins text-white p-4 text-center">
          <h1 className="text-lg">Wishlist</h1>
        </div>

        {wishlist.length === 0 ? (
          <div className="text-center py-8">
            Your wishlist is empty
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-5 md:gap-x-7 gap-y-5 mt-8 sm:px-6 px-4">
            {currentProducts.map((product, index) => (
              <ProductCard 
                menuItems={menuItems} 
                key={product._id} 
                product={{
                  image: product.images[0],
                  title: product.name,
                  price: `Rs${product.price}`,
                  discount: product.originalPrice ? `Rs${product.originalPrice}` : null,
                  size: product.size,
                  sizes: product.specifications?.size || [],
                  quantity: 1
                }} 
              />
            ))}
          </div>
        )}
      </div>
      {wishlist.length > itemsPerPage && (
        <Pagination
          onPrevious={handlePrevious}
          onNext={handleNext}
          disablePrevious={currentPage === 1}
          disableNext={currentPage === totalPages}
        />
      )}
    </>
  );
};

export default WishList;