import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import long_kurti from "../assets/images/long_kurti.png";
import Pagination from "../components/Pagination";

const OrderDetails = () => {
  const products = [
    {
      image: long_kurti,
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      sizes: ["S", "M", "L", "XL"],
      quantity: 2,
      status: "Delivery by 15 Jan",
      // deliveryDate: "Delivery by 15 Jan",
    },
    {
      image: long_kurti,
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      sizes: ["S", "M", "L", "XL"],
      quantity: 2,
      status: "Out for delivery",
    },
    {
      image: long_kurti,
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      sizes: ["S", "M", "L", "XL"],
      quantity: 2,
      status: "Delivered",
    },
    {
      image: long_kurti,
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      sizes: ["S", "M", "L", "XL"],
      quantity: 2,
      status: "Cancelled",
    },
    {
      image: long_kurti,
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      sizes: ["S", "M", "L", "XL"],
      quantity: 2,
      status: "Delivered",
    },
    {
      image: long_kurti,
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      sizes: ["S", "M", "L", "XL"],
      quantity: 2,
      status: "Cancelled",
    },
    {
      image: long_kurti,
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      sizes: ["S", "M", "L", "XL"],
      quantity: 2,
      status: "Delivery by 15 Jan",
      // deliveryDate: "Delivery by 15 Jan",
    },
    {
      image: long_kurti,
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      sizes: ["S", "M", "L", "XL"],
      quantity: 2,
      status: "Out for delivery",
    },
    {
      image: long_kurti,
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      sizes: ["S", "M", "L", "XL"],
      quantity: 2,
      status: "Delivery by 15 Jan",
      // deliveryDate: "Delivery by 15 Jan",
    },
    {
      image: long_kurti,
      title: "Yellow Long Kurti",
      price: "Rs15.50",
      discount: "Rs31.00",
      size: "M",
      sizes: ["S", "M", "L", "XL"],
      quantity: 2,
      status: "Out for delivery",
    },
  ];
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const currentProducts = products.slice(
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
  const menuItems = ["Cancel", "Return", "Rate"];
  return (
    <>
      <div className="rounded shadow-md font-poppins pb-10">
        <div className="primaryColorBg rounded-t font-poppins text-white p-4 text-center">
          <h1 className="text-lg">Order Details</h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 md:gap-x-7 gap-y-5 mt-8  sm:px-6 px-4">
          {currentProducts.map((product, index) => (
            <ProductCard  key={index} product={product} menuItems={menuItems} />
          ))}
        </div>
      </div>
      <Pagination
        onPrevious={handlePrevious}
        onNext={handleNext}
        disablePrevious={currentPage === 1}
        disableNext={currentPage === totalPages}
      />
    </>
  );
};

export default OrderDetails;
