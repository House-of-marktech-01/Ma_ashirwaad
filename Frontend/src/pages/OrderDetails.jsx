import React from "react";
import ProductCard from "../components/ProductCard";

const Card = ({ product }) => {
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

  const statusStyles = {
    "Delivery by": "text-gray-500",
    Delivered: "bg-gray-100 text-gray-400",
    "Out for delivery": "text-green-600 ",
    Cancelled: "text-red-600 bg-red-100",
  };

  return (
    <div
      className={`border rounded-lg p-4 ${
        status === "Delivered" || status === "Cancelled"
          ? "opacity-50"
          : "opacity-100"
      } ${statusStyles[status]?.split(" ")[1]}`}
    >
      <div className="flex gap-4">
        <img
          src={image}
          alt={title}
          className="w-24 h-32 object-cover rounded-lg"
        />
        <div>
          <h3 className="text-lg font-semibold">{title}</h3>
          <div className="flex items-center gap-2">
            <p className="text-lg font-semibold">{price}</p>
            <p className="line-through text-gray-400">{discount}</p>
            <span className="bg-red-100 text-red-600 px-2 py-1 text-xs rounded">
              -50%
            </span>
          </div>
          <p className="mt-2">Size: {size}</p>
          <p>Qty: {quantity}</p>
          {/* {deliveryDate && <p className="mt-2">{deliveryDate}</p>} */}
          <div
            className={`mt-2 py-1 rounded ${
              statusStyles[status]?.split(" ")[1]
            }`}
          >
            {status}
          </div>
        </div>
        <div className="ml-auto">
          <button className="px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded">
            Cancel
          </button>
          <button className="px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded">
            Return
          </button>
          <button className="px-2 py-1 text-sm text-gray-500 hover:bg-gray-100 rounded">
            Rate
          </button>
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ onPrevious, onNext }) => (
  <div className="flex gap-4 mt-8 justify-center">
    <button
      className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
      onClick={onPrevious}
    >
      Previous
    </button>
    <button
      className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:bg-gray-300"
      onClick={onNext}
    >
      Next
    </button>
  </div>
);

const OrderDetails = () => {
  const products = [
    {
      image: "path-to-image",
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      quantity: 2,
      status: "Delivery by 15 Jan",
      // deliveryDate: "Delivery by 15 Jan",
    },
    {
      image: "path-to-image",
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      quantity: 2,
      status: "Out for delivery",
    },
    {
      image: "path-to-image",
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      quantity: 2,
      status: "Delivered",
    },
    {
      image: "path-to-image",
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      quantity: 2,
      status: "Cancelled",
    },
  ];

  return (
    <>
      <div className="rounded shadow-md font-poppins pb-14">
        <div className="primaryColorBg rounded-t font-poppins text-white p-4 text-center">
          <h1 className="text-lg">Order Details</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5 mt-8 px-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Pagination
        onPrevious={() => console.log("Previous clicked")}
        onNext={() => console.log("Next clicked")}
      />
    </>
  );
};

export default OrderDetails;
