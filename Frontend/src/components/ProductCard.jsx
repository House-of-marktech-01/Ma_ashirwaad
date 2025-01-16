import React, { useEffect, useRef, useState } from "react";
import { MoreHorizontal, ChevronLeft, ChevronRight } from "lucide-react";

const ProductCard = ({ product, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef();
  
  const {
    image,
    title,
    price,
    discount,
    size,
    quantity,
    status,
    deliveryDate,
    sizes,
  } = product;
  console.log(menuItems);
  const bgStyles = {
    // "Delivery by": "text-gray-500",
    Delivered: "bg-[#ECEAEA] opacity-60",
    // "Out for delivery": "black",
    Cancelled: " bg-red-100",
  };
  const colorStyles = {
    "Delivery by": "text-gray-500",
    // Delivered: "text-gray-400",
    "Out for delivery": "text-green-600",
    Cancelled: "text-red-600",
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };


  return (
    <div
      className={`border rounded-lg p-4 ${
        status === "Delivered" || status === "Cancelled"
          ? "opacity-100"
          : "opacity-100"
      } ${bgStyles[status]}`}
    >
      <div className="flex  gap-7">
        <div className="w-40 min-w-20">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full rounded-lg"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-xl fustat   font-bold">{title}</h3>
          <div className="flex mt-3 items-center gap-3">
            <p className="text-lg lato font-semibold">{price}</p>
            <p className="line-through lato  text-gray-500 text-[0.95rem]">
              {discount}
            </p>
            <span className="bg-black text-white lato px-[6px] py-1 text-xs rounded-sm">
              -50%
            </span>
          </div>

          <div className="flex fustat gap-4 mt-4">
            <div className="flex items-center border  px-[6px] py-[2px] text-black bg-[#D9D9D9]">
              <span className="font-bold">Size :</span>
              <select
                className="bg-transparent focus:outline-none font-bold"
                defaultValue={size}
              >
                {sizes.map((s, index) => (
                  <option key={index} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 border px-[6px] text-black pr-5 bg-[#D9D9D9]">
              <span className="font-bold text-black">Qty :</span>
              <span className="font-bold">{quantity}</span>
            </div>
          </div>
          {/* {deliveryDate && <p className="mt-2">{deliveryDate}</p>} */}
          {status && (
            <div
              className={`mt-4 py-1 rounded fustat font-bold text-[1.1rem] ${colorStyles[status]}`}
            >
              {status}
            </div>
          )}
        </div>

        <div className="relative" ref={menuRef}>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={toggleMenu}
          >
            <MoreHorizontal className="w-6 h-6" />
          </button>

          {isMenuOpen && (
            <div className="absolute  bg-white shadow-lg rounded-md border-1 border-gray-600 text-sm fustat border opacity-100">
              {menuItems &&
                menuItems.map((item, index) => (
                
                    <button
                      key={index}
                      className="flex items-center gap-2 w-full text-left px-3 font-semibold py-[5px] hover:bg-gray-100 border-b-[1px] border-gray-500"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item}
                    </button>
                  
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
