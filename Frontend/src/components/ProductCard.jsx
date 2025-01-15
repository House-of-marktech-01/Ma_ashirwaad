import React, { useState } from "react";
import { MoreHorizontal, XCircle, RotateCw, Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    image,
    title,
    price,
    discount,
    size,
    quantity,
    status,
    deliveryDate,
  } = product;

  const bgStyles = {
    // "Delivery by": "text-gray-500",
    Delivered: "bg-[#ECEAEA] opacity-50",
    // "Out for delivery": "black",
    Cancelled: " bg-red-100",
  };
  const colorStyles = {
    "Delivery by": "text-gray-500",
    Delivered: "text-gray-400",
    "Out for delivery": "text-green-600",
    Cancelled: "text-red-600",
  };

  return (
    <div
      className={`border rounded-lg p-4 ${
        status === "Delivered" || status === "Cancelled"
          ? "opacity-100"
          : "opacity-100"
      } ${bgStyles[status]}`}
    >
      <div className="flex gap-4">
        <img
          src={image}
          alt={title}
          className="w-24 h-32 object-cover rounded-lg"
        />

        <div className="flex-1">
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center gap-2">
            <p className="text-lg mt-4 font-semibold">{price}</p>
            <p className="line-through mt-4 text-gray-400">{discount}</p>
            <span className="bg-red-100 mt-4 text-red-600 px-2 py-1 text-xs rounded">
              -50%
            </span>
          </div>
          <p className="mt-2">Size: {size}</p>
          <p>Qty: {quantity}</p>
          {/* {deliveryDate && <p className="mt-2">{deliveryDate}</p>} */}
          <div
            className={`mt-2 py-1 rounded font-medium ${
              colorStyles[status]
            }`}
          >
            {status}
          </div>
        </div>

        <div className="relative">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <MoreHorizontal className="w-6 h-6" />
          </button>

          {isMenuOpen && (
            <div className="absolute right-0 mt-2 bg-white shadow-lg rounded-md text-sm border z-10">
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100">
                <XCircle className="w-4 h-4 text-red-500" />
                Cancel
              </button>
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100">
                <RotateCw className="w-4 h-4 text-blue-500" />
                Return
              </button>
              <button className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100">
                <Star className="w-4 h-4 text-yellow-500" />
                Rate
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
