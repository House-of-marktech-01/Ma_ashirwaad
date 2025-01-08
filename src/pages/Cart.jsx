import React, { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Wireless Noise-Canceling Headphones",
      price: 299.99,
      image:
        "https://s3-alpha-sig.figma.com/img/936b/1557/31b6d01d5b50b07fa972374ca95ee810?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B2gSOuYsTahaGwtbLyKVluNPDchw7ukEd9dJK2BkkMnA08RKKv4HEt3m~ZQ5gotbrG4WrAAM4KJ16R4bAQ42fJKSxYNpYNW1X1Ft6MuR5vdJRA7LtxjVQxmZn5b5Plg3h-khXwHiXaqmcvgqPt9LDQTpeRVDb14aI9A0iEavzZiqgKRMuxgo6xvaPyOBF9olLJMrUvvVE1Ko2kf~RDSM7oL1kZ0M3efnzfb~eiaeZnIltbZLlWo6k0Xn9ee1WZLEC-FQtopghr6fEAdlkk2VdSPhkU6T5JiKdGL0hmycGgRxLlGCsiLvupW0CibzVgNue~3O-Rd7rQrpEkkyFW9rgw__",
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      price: 199.99,
      image:
        "https://s3-alpha-sig.figma.com/img/936b/1557/31b6d01d5b50b07fa972374ca95ee810?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B2gSOuYsTahaGwtbLyKVluNPDchw7ukEd9dJK2BkkMnA08RKKv4HEt3m~ZQ5gotbrG4WrAAM4KJ16R4bAQ42fJKSxYNpYNW1X1Ft6MuR5vdJRA7LtxjVQxmZn5b5Plg3h-khXwHiXaqmcvgqPt9LDQTpeRVDb14aI9A0iEavzZiqgKRMuxgo6xvaPyOBF9olLJMrUvvVE1Ko2kf~RDSM7oL1kZ0M3efnzfb~eiaeZnIltbZLlWo6k0Xn9ee1WZLEC-FQtopghr6fEAdlkk2VdSPhkU6T5JiKdGL0hmycGgRxLlGCsiLvupW0CibzVgNue~3O-Rd7rQrpEkkyFW9rgw__",
      quantity: 2,
    },
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
  const tax = subtotal * 0.08; // Assuming 8% tax
  const total = subtotal + tax;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-12">
          <ShoppingBag className="mx-auto h-12 w-12 text-gray-400" />
          <h2 className="mt-4 text-lg font-medium text-gray-900">
            Your cart is empty
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Start adding some items to your cart!
          </p>
          <div className="mt-6">
            <button className="bg-blue-800 text-white py-2 px-4 rounded-lg hover:bg-blue-950 transition-colors">
              Continue Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <ul className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <li key={item.id} className="p-6 flex items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div className="ml-4 flex-1">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-500">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="mt-2 flex items-center">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="text-gray-500 hover:text-gray-600"
                        >
                          <Minus size={20} />
                        </button>
                        <span className="mx-2 text-gray-700">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="text-gray-500 hover:text-gray-600"
                        >
                          <Plus size={20} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="ml-4 text-red-500 hover:text-red-600"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                    </div>
                    <div className="ml-4">
                      <p className="text-lg font-medium text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">
                Order Summary
              </h2>
              <div className="flow-root">
                <dl className="-my-4 text-sm divide-y divide-gray-200">
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Subtotal</dt>
                    <dd className="font-medium text-gray-900">
                      ${subtotal.toFixed(2)}
                    </dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-gray-600">Tax</dt>
                    <dd className="font-medium text-gray-900">
                      ${tax.toFixed(2)}
                    </dd>
                  </div>
                  <div className="py-4 flex items-center justify-between">
                    <dt className="text-base font-medium text-gray-900">
                      Order total
                    </dt>
                    <dd className="text-base font-medium text-gray-900">
                      ${total.toFixed(2)}
                    </dd>
                  </div>
                </dl>
              </div>
              <div className="mt-6">
                <button className="w-full bg-blue-800 text-white py-3 px-4 rounded-lg hover:bg-blue-950 transition-colors">
                  Proceed to Checkout
                </button>
              </div>
              <div className="mt-4">
                <button className="w-full bg-gray-200 text-gray-800 py-3 px-4 rounded-lg hover:bg-gray-300 transition-colors flex items-center justify-center">
                  <ArrowLeft size={20} className="mr-2" />
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
