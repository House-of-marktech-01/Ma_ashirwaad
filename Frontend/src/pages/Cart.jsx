import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2, Plus, Minus, ChevronDown } from "lucide-react";
import { getCart, updateCart } from "../Store/slices/cartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  // Fix the selector to handle undefined state
  const cartState = useSelector((state) => state.cart) || {};
  const { cart, loading } = cartState;
  const [openAccordion, setOpenAccordion] = React.useState(null);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  const handleUpdateQuantity = (productId, quantity, action) => {
    dispatch(updateCart({ productId, quantity, action }));
  };

  const handleRemoveItem = (productId) => {
    dispatch(updateCart({ productId, quantity: 1, action: 'remove' }));
  };

  const toggleAccordion = (id) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  // Loading state
  if (loading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 flex items-center justify-center ">
        <div className="text-lg">Loading your cart...</div>
      </div>
    );
  }

  // Empty or invalid cart state
  if (!cart?.products?.length) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12 pt-44 flex flex-col items-center space-y-8">
        {/* Cart Icon */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 animate-pulse opacity-40 blur-2xl"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-600 to-indigo-500 blur-lg opacity-20"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-24 h-24 text-indigo-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-3 9h16M9 21a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
        </div>
  
        {/* Headline */}
        <h2 className="text-4xl font-extrabold text-gray-800">
          Your Cart is Empty
        </h2>
  
        {/* Description */}
        <p className="text-gray-600 max-w-lg text-center text-lg">
          Looks like you haven’t added anything yet. Start shopping and fill your cart with amazing products and deals!
        </p>
  
        {/* CTA Button */}
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-transform">
          Explore Products
        </button>
      </div>
    );
  }
  
  

  // Calculate totals only if we have valid cart data
  const subtotal = cart.products.reduce(
    (sum, item) => sum + (item.product?.price || 0) * (item.quantity || 0),
    0
  );
  const shipping = 31;
  const total = subtotal + shipping;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-44">
      <div className="text-sm breadcrumbs">
        <ul>
          <li><a>Home</a></li>
          <li><a>Cart</a></li>
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.products.map((item) => (
            <div key={item.product?._id || item._id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="p-4 flex items-start">
                <img
                  src={item.product?.images?.[0]}
                  alt={item.product?.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-medium text-gray-900">
                    {item.product?.name}
                  </h3>
                  <div className="flex items-center mt-1">
                    <span className="text-lg">₹{item.product?.price}</span>
                    {item.product?.originalPrice && (
                      <>
                        <span className="text-gray-500 line-through text-sm ml-2">
                          ₹{item.product.originalPrice}
                        </span>
                        <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-sm ml-2">
                          {Math.round((1 - (item.product.price / item.product.originalPrice)) * 100)}%
                        </span>
                      </>
                    )}
                  </div>
                  <div className="mt-2">
                    {item.size && <p className="text-sm text-gray-600">Size: {item.size}</p>}
                    <div className="flex items-center mt-1">
                      <button
                        onClick={() => handleUpdateQuantity(item.product._id, 1, 'decrease')}
                        className="border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100"
                      >
                        <Minus size={16} />
                      </button>
                      <span className="mx-3 text-gray-700">{item.quantity}</span>
                      <button
                        onClick={() => handleUpdateQuantity(item.product._id, 1, 'add')}
                        className="border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-100"
                      >
                        <Plus size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.product._id)}
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
              Payment Summary
            </h2>
            <div className="flow-root">
              <dl className="-my-4 text-sm divide-y divide-gray-200">
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Subtotal</dt>
                  <dd className="font-medium text-gray-900">₹{subtotal.toFixed(2)}</dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-gray-600">Shipping</dt>
                  <dd className="font-medium text-gray-900">₹{shipping}</dd>
                </div>
                <div className="py-4 flex items-center justify-between">
                  <dt className="text-base font-medium text-gray-900">Total</dt>
                  <dd className="text-base font-medium text-gray-900">₹{total.toFixed(2)}</dd>
                </div>
              </dl>
            </div>
            <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-lg transition-colors mt-6">
              Proceed to Checkout
            </button>

            {/* Payment Options */}
            <div className="mt-4">
              {['Cash on delivery', 'Pay Now Via UPI', 'Pay Now Via Cards'].map((option, index) => (
                <div key={index}>
                  <div
                    onClick={() => toggleAccordion(index)}
                    className="flex justify-between items-center cursor-pointer py-2 border-b"
                  >
                    <span className="font-medium">{option}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        openAccordion === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                  {openAccordion === index && (
                    <div className="py-2">
                      <p className="text-sm text-gray-600">
                        {option === 'Cash on delivery'
                          ? 'Pay when your order is delivered.'
                          : option === 'Pay Now Via UPI'
                          ? 'Make instant payment using UPI.'
                          : 'Pay securely using your credit/debit card.'}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;