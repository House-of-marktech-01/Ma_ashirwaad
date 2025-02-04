import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import { Heart, Share2 } from "lucide-react";
import { addToCart } from "../Store/slices/cartSlice";
import { getProduct } from "../Store/slices/productSlice";
import downloadImage from "../assets/images/download.png";
import downloadImage2 from "../assets/images/download2.png";
import downloadImage3 from "../assets/images/download3.png";
import {
  addToWishlist,
  removeFromWishlist,
} from "../Store/slices/wishlistSlice";
import { addReview, getReviewsByProduct } from "../Store/slices/reviewSlice";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const dispatch = useDispatch();
  const { wishlist } = useSelector((state) => state.wishlist);
  const { currentProduct, loading: productLoading } = useSelector((state) => state.product);
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [userReview, setUserReview] = useState(null);

  const { productReviews, loading: reviewLoading } = useSelector((state) => state.review);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (id) {
      dispatch(getProduct(id));
      dispatch(getReviewsByProduct(id));
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (currentProduct) {
      setSelectedImage(currentProduct.images[0]);
      setSelectedSize(currentProduct.specifications?.size?.[0] || "");
      setSelectedColor(currentProduct.specifications?.color?.[0] || "");
    }
  }, [currentProduct]);

  useEffect(() => {
    if (productReviews && user) {
      const existingReview = productReviews.find(
        (review) => review.user?._id === user._id
      );
      setUserReview(existingReview);
    }
  }, [productReviews, user]);

  if (productLoading) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
  }

  if (!currentProduct) {
    return <div className="flex justify-center items-center min-h-screen">Product not found</div>;
  }

  const isInWishlist = wishlist.some((item) => item._id === currentProduct._id);

  const handleWishlist = () => {
    if (isInWishlist) {
      dispatch(removeFromWishlist({ id: currentProduct._id }));
    } else {
      dispatch(addToWishlist(currentProduct));
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color");
      return;
    }

    const cartItem = {
      product: {
        _id: currentProduct._id,
        name: currentProduct.name,
        price: currentProduct.price,
        originalPrice: currentProduct.originalPrice,
        images: currentProduct.images,
      },
      quantity,
      size: selectedSize,
      color: selectedColor,
    };

    dispatch(addToCart(cartItem))
      .unwrap()
      .then(() => {
        toast.success("Product added to cart successfully!");
      })
      .catch((error) => {
        toast.error("Failed to add to cart");
        console.error("Failed to add to cart:", error);
      });
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this ${currentProduct.name}!`;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
        );
        break;
      case "pinterest":
        window.open(
          `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`
        );
        break;
      default:
        navigator.clipboard.writeText(url);
        toast.success("Link copied to clipboard!");
    }
  };

  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    
    if (!user) {
      toast.error("Please login to submit a review");
      return;
    }

    const reviewData = {
      productId: id,
      rating: reviewRating,
      comment: reviewComment,
      isEdit: isEditing
    };

    try {
      await dispatch(addReview(reviewData)).unwrap();
      toast.success(isEditing ? "Review updated successfully!" : "Review submitted successfully!");
      
      setReviewComment("");
      setReviewRating(5);
      setIsEditing(false);
      setIsReviewModalOpen(false);

      dispatch(getReviewsByProduct(id));
    } catch (error) {
      console.error('Review Submission Error:', error);
      toast.error(error.message || "Failed to submit review");
    }
  };

  // Calculate review statistics
  const calculateReviewPercentages = (reviews) => {
    const total = reviews.length;
    const percentages = {
      5: 0,
      4: 0,
      3: 0,
      2: 0,
      1: 0
    };

    reviews.forEach(review => {
      if (percentages.hasOwnProperty(review.rating)) {
        percentages[review.rating]++;
      }
    });

    Object.keys(percentages).forEach(rating => {
      percentages[rating] = Math.round((percentages[rating] / total) * 100) || 0;
    });

    return percentages;
  };

  const reviewPercentages = calculateReviewPercentages(productReviews);

  return (
    <div className="max-w-screen-xl min-h-screen mx-auto px-4 py-4 pt-36 md:p-36 ">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 py-2 md:py-3">
        Home / {currentProduct.category?.name || 'Products'} / {currentProduct.name}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {/* Left side - Image Gallery */}
        <div className="space-y-2 md:space-y-4">
          <div className="aspect[3/4] w-full">
            <img
              src={selectedImage}
              alt={currentProduct.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="grid grid-cols-4 gap-2 mt-4 md:mt-10">
            {currentProduct.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index}`}
                className={`w-full aspect-[3/4] object-cover rounded-md cursor-pointer ${
                  selectedImage === img ? "ring-2 ring-black" : ""
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="space-y-4 md:space-y-6 mt-4 md:mt-10">
          {/* Product Header */}
          <div className="flex justify-between items-start mb-2 md:mb-5">
            <div>
              <h1 className="text-xl md:text-2xl font-medium">
                {currentProduct.name}
              </h1>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="text-lg md:text-xl">₹{currentProduct.price}</span>
                {currentProduct.originalPrice && (
                  <>
                    <span className="text-gray-500 line-through text-sm">
                      ₹{currentProduct.originalPrice}
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                      -{Math.round(((currentProduct.originalPrice - currentProduct.price) / currentProduct.originalPrice) * 100)}%
                    </span>
                  </>
                )}
              </div>
            </div>
            <button
              className="p-2"
              onClick={handleWishlist}
              aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
            >
              <Heart className={`w-5 h-5 md:w-6 md:h-6 ${isInWishlist ? "fill-current text-red-500" : ""}`} />
            </button>
          </div>

          {/* Rating Summary - Made more compact on mobile */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-3 h-3 md:w-4 md:h-4 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs md:text-sm text-gray-500">
              ({product.reviews} reviews)
            </span>
          </div>

          {/* Color Selection - Adjusted spacing */}
          <div className="space-y-1 md:space-y-2">
            <p className="font-medium">Color: {selectedColor}</p>
            <div className="flex gap-2">
              {product.specifications.color.map((color) => (
                <button
                  key={color}
                  onClick={() => handleColorSelect(color)}
                  className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-2 ${
                    selectedColor === color
                      ? "border-black"
                      : "border-transparent"
                  }`}
                  style={{
                    backgroundColor: color.toLowerCase(),
                    boxShadow:
                      selectedColor === color
                        ? "0 0 0 2px white, 0 0 0 4px black"
                        : "none",
                  }}
                  aria-label={`Select ${color} color`}
                />
              ))}
            </div>
          </div>

          {/* Size Selection - Made more compact on mobile */}
          <div className="space-y-1 md:space-y-2">
            <p className="font-medium">Size: {selectedSize}</p>
            <div className="flex gap-2">
              {product.specifications.size.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeSelect(size)}
                  className={`w-8 h-8 md:w-10 md:h-10 border rounded-md flex items-center justify-center ${
                    selectedSize === size
                      ? "border-2 border-black bg-gray-100"
                      : "border-gray-300 hover:border-black"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart - Full width on mobile */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <div className="flex border rounded-md w-full sm:w-auto">
              <button
                className="px-4 py-2 hover:bg-gray-100 flex-1 sm:flex-none"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4 py-2 border-x flex-1 sm:flex-none text-center">
                {quantity}
              </span>
              <button
                className="px-4 py-2 hover:bg-gray-100 flex-1 sm:flex-none"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
            <button
              className="flex-1 bg-red-700 text-white py-2 px-4 rounded"
              onClick={handleAddToCart}
            >
              Add to Bag
            </button>
            <button className="hidden sm:block border px-4 py-3 rounded">
              <Heart className="w-5 h-5" />
            </button>
          </div>

          {/* Delivery Information - Adjusted spacing */}
          <div className="space-y-2 md:space-y-4 border-t pt-4">
            <h3 className="font-medium">Get it on {product.deliveryTime}</h3>
            <p className="text-xs md:text-sm text-gray-600">
              Pay on delivery available
            </p>
            <p className="text-xs md:text-sm text-gray-600">
              Easy return & exchange available
              <button className="text-red-700 hover:underline ml-2">
                More Info.
              </button>
            </p>
          </div>

          {/* Share Options - Made more compact on mobile */}
          <div className="flex items-center gap-3 md:gap-4 border-t pt-4">
            <span className="text-sm md:text-base text-gray-600">Share:</span>
            <div className="flex gap-2">
              <button
                onClick={() => handleShare("copy")}
                className="p-1.5 md:p-2 hover:bg-gray-100 rounded-full"
              >
                <Share2 className="w-4 h-4 md:w-5 md:h-5" />
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="p-1.5 md:p-2 hover:bg-blue-100 rounded-full"
              >
                <FaFacebookF className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="p-1.5 md:p-2 hover:bg-blue-100 rounded-full"
              >
                <FaTwitter className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
              </button>
              <button
                onClick={() => handleShare("pinterest")}
                className="p-1.5 md:p-2 hover:bg-red-100 rounded-full"
              >
                <FaPinterest className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
              </button>
            </div>
          </div>

          {/* Payment Methods - Adjusted size for mobile */}
          <div className="flex mt-4 gap-4 md:gap-6">
            <img src={downloadImage} alt="Visa" className="h-4 md:h-6" />
            <img src={downloadImage2} alt="Mastercard" className="h-4 md:h-6" />
            <img src={downloadImage3} alt="PayPal" className="h-4 md:h-6" />
          </div>
        </div>
      </div>

      {/* Review Summary - Stack on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 border-t pt-6 md:pt-8">
        <div>
          <h3 className="font-medium mb-1 md:mb-2">Total Reviews</h3>
          <p className="text-xl md:text-2xl font-semibold">
            {product.reviews.toLocaleString()}
          </p>
        </div>
        <div>
          <h3 className="font-medium mb-1 md:mb-2">Average Rating</h3>
          <div>
  <label className="block text-sm font-medium mb-2">Rating</label>
  <div className="flex gap-2">
    {Array(5).fill(0).map((_, star) => ( // Use 'star' directly as the key
      <button
        key={star}  // Correct key here!
        type="button"
        onClick={() => setReviewRating(star + 1)} // Corrected: Set rating from 1 to 5
        className="focus:outline-none"
      >
        <FaStar
          className={`w-6 h-6 ${star + 1 <= reviewRating? "text-yellow-400": "text-gray-300"}`}
        />
      </button>
    ))}
  </div>
</div>
        </div>
        <div>
          <h3 className="font-medium mb-1 md:mb-2">Customer Reviews</h3>
          {Object.entries(reviewPercentages)
            .reverse()
            .map(([stars, percentage]) => (
              <div key={stars} className="flex items-center gap-2 mt-1">
                <span className="text-xs md:text-sm w-6 md:w-8">{stars}★</span>
                <div className="flex-1 bg-gray-200 h-1.5 md:h-2 rounded-full">
                  <div
                    className="bg-yellow-400 h-full rounded-full"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-xs md:text-sm text-gray-500 w-6 md:w-8">
                  {percentage}%
                </span>
              </div>
            ))}
        </div>
      </div>

      {/* Customer Reviews - Stack on mobile */}
      <div className="mt-6 md:mt-8">
        <div className="flex justify-between items-center mb-3 md:mb-4">
          <h2 className="text-lg font-medium">Customer Reviews</h2>
          {user && (
            <>
              {userReview ? (
                <button
                  onClick={handleEditReview}
                  className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
                >
                  Edit Your Review
                </button>
              ) : (
                <button
                  onClick={() => setIsReviewModalOpen(true)}
                  className="bg-red-700 text-white px-4 py-2 rounded text-sm"
                >
                  Write a Review
                </button>
              )}
            </>
          )}
        </div>

        {/* Review Modal */}
        {isReviewModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
              <h3 className="text-lg font-medium mb-4">
                {isEditing ? "Edit Your Review" : "Write a Review"}
              </h3>
              <form onSubmit={handleReviewSubmit} className="space-y-4">
                {/*... (review form fields)... */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Rating
                  </label>
                  <div className="flex gap-2">
                    {Array(5)
                      .fill(0)
                      .map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setReviewRating(star)}
                          className="focus:outline-none"
                        >
                          <FaStar
                            className={`w-6 h-6 ${
                              star <= reviewRating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          />
                        </button>
                      ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Comment
                  </label>
                  <textarea
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    className="w-full border rounded-md p-2 h-32"
                    placeholder="Write your review here..."
                    required
                  />
                </div>
                <div className="flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setIsReviewModalOpen(false);
                      setIsEditing(false);
                      setReviewComment(""); // Clear comment on cancel
                      setReviewRating(5); // Reset rating on cancel
                    }}
                    className="px-4 py-2 border rounded-md"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-red-700 text-white rounded-md"
                    disabled={loading}
                  >
                    {loading
                      ? "Submitting..."
                      : isEditing
                      ? "Update Review"
                      : "Submit Review"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Display user's review first if it exists */}
        {userReview && (
          <div className="mb-6">
            <h3 className="text-md font-medium mb-3">Your Review</h3>
            <div className="border p-3 md:p-4 rounded-lg bg-gray-50">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">{user.name}</p>
                  <div className="flex mt-1">
                    {[...Array(userReview.rating)].map((_, i) => (
                      <FaStar
                        key={i}
                        className="w-3 h-3 md:w-4 md:h-4 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-green-600">✓ Verified</span>
              </div>
              <p className="text-xs md:text-sm text-gray-600 mt-2">
                {userReview.comment}
              </p>
            </div>
          </div>
        )}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {productReviews
            .filter((review) => review.user?._id !== user?._id)
            .map((review, index) => (
              <div key={index} className="border p-3 md:p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">
                      {review.user?.name || "Anonymous"}
                    </p>
                    <div className="flex mt-1">
                      {[...Array(review.rating || 0)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="w-3 h-3 md:w-4 md:h-4 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  {review.verified && (
                    <span className="text-xs text-green-600">✓ Verified</span>
                  )}
                </div>
                <p className="text-xs md:text-sm text-gray-600 mt-2">
                  {review.comment || "No comment provided"}
                </p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
