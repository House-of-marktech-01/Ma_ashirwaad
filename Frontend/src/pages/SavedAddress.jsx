import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import long_kurti from "../assets/images/long_kurti.png";
import Pagination from "../components/Pagination";

const SavedAddress = () => {
  const addresses = [
    {
      name: "Aryan Khare",
      addressLine1: "123 Sunshine Street",
      addressLine2: "Apt 4B, Galaxy Apartments",
      zipCode: "110001",
      city: "New Delhi",
      mobile: "9876543210"
    },
    {
      name: "Rahul Sharma",
      addressLine1: "456 Moonlight Avenue",
      addressLine2: "Flat 22, Star Residency",
      zipCode: "110002",
      city: "New Delhi",
      mobile: "9876543211"
    },
    {
      name: "Priya Singh",
      addressLine1: "789 Twilight Boulevard",
      addressLine2: "Villa 15, Horizon Villas",
      zipCode: "110003",
      city: "New Delhi",
      mobile: "9876543212"
    },
  ];
  const menuItems = ["Remove"];
  const itemsPerPage = 2;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(addresses.length / itemsPerPage);

  const currentAddresses = addresses.slice(
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
  const AddressCard = ({ address }) => (
    <div className="border rounded-lg p-4 mb-4 shadow-md">
      <div className="text-lg font-semibold">{address.name}</div>
      <div className="text-sm">{address.addressLine1}</div>
      <div className="text-sm">{address.addressLine2}</div>
      <div className="text-sm">{address.zipCode}</div>
      <div className="text-sm">{address.city}</div>
      <div className="text-sm">Mobile: {address.mobile}</div>
      <div className="flex justify-between mt-4">
        <button className="text-red-500">EDIT</button>
        <button className="text-black border border-black rounded px-2">
          Remove
        </button>
      </div>
    </div>
  );
  return (
    <>
      <div className="rounded shadow-md font-poppins pb-10">
        <div className="primaryColorBg rounded-t font-poppins text-white p-4 text-center">
          <h1 className="text-lg">Saved Address</h1>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5 mt-8 px-6">
          {currentaddresses.map((product, index) => (
            <ProductCard menuItems={menuItems} key={index} product={product} />
          ))}
        </div> */}
        <div className=" mt-8 px-10">
          {currentAddresses.map((address, index) => (
            <AddressCard key={index} address={address} />
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

export default SavedAddress;
