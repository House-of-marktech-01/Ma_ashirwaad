import React, { useState } from "react";
import ProductCard from "../components/ProductCard";
import long_kurti from "../assets/images/long_kurti.png";
import Pagination from "../components/Pagination";
import CustomButton from "./../components/CustomButton";

const SavedAddress = () => {
  const addresses = [
    {
      name: "Aakash Mehta",
      addressLine1: "123 Sunshine Street",
      addressLine2: "Apt 4B, Galaxy Apartments",
      zipCode: "110001",
      city: "New Delhi",
      mobile: "9876543210",
      addressType: "Home",
    },
    {
      name: "Rahul Sharma",
      addressLine1: "456 Moonlight Avenue",
      addressLine2: "Flat 22, Star Residency",
      zipCode: "110002",
      city: "New Delhi",
      mobile: "9876543211",
      addressType: "Work",
    },
    {
      name: "Priya Singh",
      addressLine1: "789 Twilight Boulevard",
      addressLine2: "Villa 15, Horizon Villas",
      zipCode: "110003",
      city: "New Delhi",
      mobile: "9876543212",
      addressType: "Work",
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
    <div className="border flex flex-row justify-between fustat font-medium rounded-sm p-3 px-8 mb-5 shadow-md">
      <div className="flex flex-col gap-1">
        <div className="text-lg ">{address.name}</div>
        <div className="text-base">{address.addressLine1}</div>
        <div className="text-base">{address.addressLine2}</div>
        <div className="text-base">{address.zipCode}</div>
        <div className="text-base">{address.city}</div>
        <div className="text-base">Mobile: {address.mobile}</div>
      </div>

      <div className="flex flex-col justify-between items-end">
        <div className="flex  w-fit py-1 px-3 text-sm mr-0 rounded-full font-semibold bg-[#D9D9D9]">{address.addressType}</div>
        <div className="flex gap-4 ">
          <div>
            <CustomButton
              textCase="capitalize"
              text="Edit"
              borderColor="border-[#9A3131]"
              onClick={() => console.log("Learn More Clicked!")}
            />
          </div>
          <div>
            <CustomButton
              textCase="capitalize"
              text="Remove"
              borderColor="border-black"
              textColor="black"
              px="px-3"
              onClick={() => console.log("Learn More Clicked!")}
            />
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <>
      <div className="rounded shadow-md font-poppins pb-6">
        <div className="primaryColorBg rounded-t font-poppins text-white p-4 text-center">
          <h1 className="text-lg">Saved Address</h1>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-5 mt-8 px-6">
          {currentaddresses.map((product, index) => (
            <ProductCard menuItems={menuItems} key={index} product={product} />
          ))}
        </div> */}
        <div className=" mt-9 px-10">
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
