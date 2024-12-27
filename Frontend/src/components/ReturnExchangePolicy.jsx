import { useState } from "react";
// import { Card } from "@/components/ui/card";

const ReturnExchangePolicy = () => {
  const [formData, setFormData] = useState({
    orderNumber: "",
    emailOrMobile: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="max-w-5xl mx-auto px-8 py-12 pt-32">
     

      {/* Main Content */}
      <div className="mb-16">
        <h1 className="text-4xl font-serif mb-8">Return And Exchange Policy</h1>

        <div className="space-y-6 text-gray-700">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate.
          </p>
        </div>
      </div>

      {/* Return Form Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-serif mb-8 text-center">
          Return And Exchange
        </h2>

        <div className="max-w-md mx-auto p-8 shadow-lg bg-white border-2 border-gray-300 rounded-lg">
          <div className="text-center mb-8 space-y-4">
            <p className="font-medium">
              Return/Exchange your product in just a few clicks.
            </p>
            <p className="text-sm text-gray-500">
              Please Note: A Reverse shipment fee of Rs 100 will be deducted
              when creating returns.
            </p>
            <p className="text-sm text-gray-500">
              Please read our return and exchange policies before proceeding.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="orderNumber"
                placeholder="Order Number"
                value={formData.orderNumber}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <div>
              <input
                type="text"
                name="emailOrMobile"
                placeholder="Email or Mobile Number"
                value={formData.emailOrMobile}
                onChange={handleChange}
                className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors"
            >
              Continue
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReturnExchangePolicy;
