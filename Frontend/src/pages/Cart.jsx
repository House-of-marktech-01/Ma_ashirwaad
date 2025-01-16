import React, { useState } from "react";
import { Trash2, Plus, Minus, ChevronDown } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Yellow Long Kurti",
      price: 15.5,
      originalPrice: 31,
      image:
        "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
      quantity: 2,
      size: "M",
      deliveryDate: "15 Jan",
    },
    {
      id: 2,
      name: "Yellow Long Kurti",
      price: 15.5,
      originalPrice: 31,
      image:
        "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
      quantity: 2,
      size: "M",
      deliveryDate: "15 Jan",
    },
    // ... more items
  ]);

  const updateQuantity = (id, newQuantity) => {
    setCartItems(
      cartItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, newQuantity) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const discount = cartItems.reduce(
    (sum, item) => sum + (item.originalPrice - item.price) * item.quantity,
    0
  );
  const shipping = 31; // Replace with actual shipping cost
  const total = subtotal + shipping; // No tax in the example

  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Women</a>
          </li>
          <li>
            <a>Yellow Short Kurti</a>
          </li>
          <li>Cart</li>
        </ul>
      </div>

      {/* Delivery Address */}
      <div className="flex items-center justify-between mb-6 mt-10">
        <p className="text-gray-700">
          Deliver to: Aryan Khare, 485001 <br />
          Gurgaon, Sector 46, Lavender Society, B flat, B-9
        </p>
        <button className="text-blue-500 hover:underline">
          Change Address
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-4 flex items-start">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="text-lg">₹{item.price}</span>
                    <span className="text-gray-500 line-through text-sm ml-2">
                      ₹{item.originalPrice}
                    </span>
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm ml-2">
                      -50%
                    </span>
                  </div>
                  <div className="mt-2">
                    <p className="text-sm text-gray-600">Size: {item.size}</p>
                    <div className="flex items-center mt-1">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-3 text-gray-700">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">
                      Delivery by {item.deliveryDate}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Summary */}
        <div className="md:col-span-1">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-4">
              Payment Process
            </h2>
            <div className="flow-root">
              <dl className="-my-4 text-sm divide-y divide-gray-200">
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Total MRP</dt>
                  <dd className="font-medium text-gray-900">
                    ₹
                    {cartItems
                      .reduce(
                        (sum, item) =>
                          sum + item.originalPrice * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Discount on MRP</dt>
                  <dd className="font-medium text-gray-900">
                    ₹{discount.toFixed(2)}
                  </dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Shipping Price</dt>
                  <dd className="font-medium text-gray-900">₹{shipping}</dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Coupon Discount</dt>
                  <dd className="font-medium text-gray-900">
                    <button className="text-blue-500 hover:underline">
                      Apply?
                    </button>
                  </dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">
                    Total Amount
                  </dt>
                  <dd className="text-base font-medium text-gray-900">
                    ₹{total.toFixed(2)}
                  </dd>
                </div>
              </dl>
            </div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg transition-colors mt-6">
              Place Order
            </button>

            {/* Payment Options - Accordion */}
            <div className="mt-4">
              <div
                onClick={() => toggleAccordion(1)}
                className="flex justify-between items-center cursor-pointer py-2 border-b"
              >
                <span className="font-medium">Cash on delivery</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 1 ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openAccordion === 1 && (
                <div className="py-2">
                  {/* Content for Cash on delivery */}
                  <p className="text-sm text-gray-600">
                    Pay for your order when it's delivered to your doorstep.
                  </p>
                </div>
              )}

              <div
                onClick={() => toggleAccordion(2)}
                className="flex justify-between items-center cursor-pointer py-2 border-b"
              >
                <span className="font-medium">Pay Now Via UPI</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 2 ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openAccordion === 2 && (
                <div className="py-2">
                  {/* Content for Pay Now Via UPI */}
                  <p className="text-sm text-gray-600">
                    Scan the QR code with your UPI app to make a secure payment.
                  </p>
                </div>
              )}

              <div
                onClick={() => toggleAccordion(3)}
                className="flex justify-between items-center cursor-pointer py-2"
              >
                <span className="font-medium">Pay Now Via Cards</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    openAccordion === 3 ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openAccordion === 3 && (
                <div className="py-2">
                  {/* Content for Pay Now Via Cards */}
                  <p className="text-sm text-gray-600">
                    Enter your card details to complete the payment securely.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;