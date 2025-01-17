import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaFacebookF, FaTwitter, FaPinterest } from "react-icons/fa";
import { Heart, Share2 } from "lucide-react";
import downloadImage from "../assets/images/download.png";
import downloadImage2 from "../assets/images/download2.png";
import downloadImage3 from "../assets/images/download3.png";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: "1",
    name: "Yellow Long Kurti",
    price: 1550.5,
    originalPrice: 2000,
    images: [
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
      "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    ],
    description: "A beautiful traditional kurti with intricate designs.",
    specifications: {
      material: "Cotton",
      color: ["Yellow", "Green", "Pink"],
      size: ["S", "M", "L", "XL"],
    },
    rating: 4.0,
    reviews: 10000,
    deliveryTime: "Fri, 7 Dec",
    customerReviews: [
      {
        name: "Aryan K.",
        rating: 4,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        verified: true,
      },
      {
        name: "Aryan K.",
        rating: 4,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        verified: true,
      },
      {
        name: "Aryan K.",
        rating: 4,
        comment:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        verified: true,
      },
    ],
    relatedProducts: [
      {
        id: "2",
        name: "Hosiery Fit & Flare Printed Kurti",
        price: 1100,
        image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/2/g/p/free-red-single-dandiya-aakarshana-original-imah6hehdnekxwvq.jpeg",
      },
      {
        id: "3",
        name: "Hosiery Fit & Flare Printed Kurti",
        price: 1100,
        image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/2/g/p/free-red-single-dandiya-aakarshana-original-imah6hehdnekxwvq.jpeg",
      },
      {
        id: "4",
        name: "Hosiery Fit & Flare Printed Kurti",
        price: 1100,
        image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/2/g/p/free-red-single-dandiya-aakarshana-original-imah6hehdnekxwvq.jpeg",
      },
      {
        id: "5",
        name: "Hosiery Fit & Flare Printed Kurti",
        price: 1100,
        image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/2/g/p/free-red-single-dandiya-aakarshana-original-imah6hehdnekxwvq.jpeg",
      },
    ],
  };

  const reviewPercentages = {
    5: 65,
    4: 20,
    3: 10,
    2: 3,
    1: 2,
  };

  useEffect(() => {
    if (product) {
      setSelectedImage(product.images[0]);
      setSelectedSize(product.specifications.size[0]);
      setSelectedColor(product.specifications.color[0]);
    }
  }, []);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = `Check out this ${product.name}!`;

    switch (platform) {
      case "facebook":
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=<span class="math-inline">\{url\}&text\=</span>{text}`
        );
        break;
      case "pinterest":
        window.open(
          `https://pinterest.com/pin/create/button/?url=<span class="math-inline">\{url\}&description\=</span>{text}`
        );
        break;
      default:
        navigator.clipboard.writeText(url);
    }
  };

  return (
    <>
      <div className="max-w-screen-xl mx-auto px-4 p-36 ">
        {/* Breadcrumb - Reduced padding and margin */}
        <div className="text-sm text-gray-500 py-3 ">
          Home / Women / Yellow Short Kurti
        </div>

        {/* Main Content - Adjusted top spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {/* Left side - Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] w-full">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            
            <div className="grid grid-cols-4 gap-2 mt-10">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  className={`w-full aspect-[3/4] object-cover rounded-md cursor-pointer 
                      ${selectedImage === img ? "ring-2 ring-black" : ""}`}
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Right side - Product Details */}
          <div className="space-y-6 mt-10">
            <div className="flex justify-between items-start mb-5">
              <div>
                <h1 className="text-2xl font-medium">{product.name}</h1>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xl">₹{product.price}</span>
                  <span className="text-gray-500 line-through text-sm">
                    ₹{product.originalPrice}
                  </span>
                  <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm">
                    -50%
                  </span>
                </div>
              </div>
              <button>
                <Heart className="w-6 h-6" />
              </button>
            </div>

            {/* Rating Summary */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>

            {/* Color Selection */}
            <div className="space-y-2">
              <p className="font-medium">Color: {selectedColor}</p>
              <div className="flex gap-2">
                {product.specifications.color.map((color) => (
                  <button
                    key={color}
                    onClick={() => handleColorSelect(color)}
                    className={`w-8 h-8 rounded-full border-2 ${
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

            {/* Size Selection */}
            <div className="space-y-2">
              <p className="font-medium">Size: {selectedSize}</p>
              <div className="flex gap-2">
                {product.specifications.size.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`w-10 h-10 border rounded-md flex items-center justify-center
                      ${
                        selectedSize === size
                          ? "border-2 border-black bg-gray-100"
                          : "border-gray-300 hover:border-black"
                      }`}
                    // aria-label={`Select size ${size}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex gap-4">
              <div className="flex border rounded-md">
                <button
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  className="px-4 py-2 hover:bg-gray-100"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </button>
              </div>
              <button className="flex-1 bg-red-700 text-white py-2 px-4 rounded">
                Add to Bag
              </button>
              <button className="border px-4 py-3 rounded">
                <Heart className="w-5 h-5" />
              </button>
            </div>

            {/* Delivery Information */}
            <div className="space-y-4 border-t pt-4">
              <h3 className="font-medium">Get it on {product.deliveryTime}</h3>
              <p className="text-sm text-gray-600">Pay on delivery available</p>
              <p className="text-sm text-gray-600">
                Easy return & exchange available
                <button className="text-red-700 hover:underline ml-2">
                  More Info.
                </button>
              </p>
            </div>

            {/* Share Options */}
            <div className="flex items-center gap-4 border-t pt-4">
              <span className="text-gray-600">Share:</span>
              <button
                onClick={() => handleShare("copy")}
                className="p-2 hover:bg-gray-100 rounded-full"
              >
                <Share2 className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleShare("facebook")}
                className="p-2 hover:bg-blue-100 rounded-full"
              >
                <FaFacebookF className="w-5 h-5 text-blue-600" />
              </button>
              <button
                onClick={() => handleShare("twitter")}
                className="p-2 hover:bg-blue-100 rounded-full"
              >
                <FaTwitter className="w-5 h-5 text-blue-400" />
              </button>
              <button
                onClick={() => handleShare("pinterest")}
                className="p-2 hover:bg-red-100 rounded-full"
              >
                <FaPinterest className="w-5 h-5 text-red-600" />
              </button>
            </div>

            {/* Payment Methods */}
            <div className="flex mt-4 size-32 gap-6 max-h-[15]">
              <img src={downloadImage} alt="Visa" className="h-6" />
              <img src={downloadImage2} alt="Mastercard" className="h-6" />
              <img src={downloadImage3} alt="PayPal" className="h-6" />
            </div>
          </div>
        </div>

        {/* Review Summary */}
        <div className="grid grid-cols-3 gap-8 mt-12 border-t pt-8">
          <div>
            <h3 className="font-medium mb-2">Total Reviews</h3>
            <p className="text-2xl font-semibold">
              {product.reviews.toLocaleString()}
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-2">Average Rating</h3>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-semibold">{product.rating}</p>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Customer Reviews</h3>
            {Object.entries(reviewPercentages)
              .reverse()
              .map(([stars, percentage]) => (
                <div key={stars} className="flex items-center gap-2 mt-1">
                  <span className="text-sm w-8">{stars}★</span>
                  <div className="flex-1 bg-gray-200 h-2 rounded-full">
                    <div
                      className="bg-yellow-400 h-full rounded-full"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-sm text-gray-500 w-8">
                    {percentage}%
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Customer Reviews */}
        <div className="mt-8">
          <h2 className="text-lg font-medium mb-4">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.customerReviews.map((review, index) => (
              <div key={index} className="border p-4 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-medium">{review.name}</p>
                    <div className="flex mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <FaStar key={i} className="w-4 h-4 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  {review.verified && (
                    <span className="text-xs text-green-600">✓ Verified</span>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <h2 className="text-lg font-medium mb-4">View Similar</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.relatedProducts.map((item, index) => (
              <div key={index} className="space-y-2">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full aspect-[3/4] object-cover rounded-lg"
                />
                <h3 className="text-sm font-medium">{item.name}</h3>
                <p className="text-sm">₹{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
