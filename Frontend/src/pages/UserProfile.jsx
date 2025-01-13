import { useState } from "react";
import { Edit2, Mail, Phone, MapPin, Calendar, Package, Heart } from "lucide-react";
import { ChevronDown, ChevronUp } from 'lucide-react';

const UserProfile = () => {
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [wishlist, setWishlist] = useState([]); // State to manage wishlist items
  const [activeSection, setActiveSection] = useState("profile");

  const [products] = useState([
    { id: 1, name: "Wireless Headphones", description: "Noise-canceling headphones", price: "$120", imageUrl: "https://source.unsplash.com/100x100/?headphones" },
    { id: 2, name: "Smart Watch", description: "Track your fitness goals", price: "$200", imageUrl: "https://source.unsplash.com/100x100/?smartwatch" },
    { id: 3, name: "Bluetooth Speaker", description: "Portable speaker for all your music needs", price: "$60", imageUrl: "https://source.unsplash.com/100x100/?speaker" },
  ]);

  const profileData = {
    fullName: "Vedang Rane",
    emailId: "vedang.rane@email.com",
    phoneNumber: "+1 (555) 123-4567",
    gender: "Male",
    dateOfBirth: "1992-04-15",
    location: "Mumbai, India",
    alternatePhone: "+1 (555) 987-6543",
    address: "123 Tech Park Avenue, Suite 456, Mumbai, India",
  };

  const orders = [
    {
      id: 1,
      status: "Delivered",
      image: "https://source.unsplash.com/100x100/?headphones,tech",
      description: "Wireless Noise-Canceling Headphones - Black",
      orderDate: "2024-03-15",
    },
    {
      id: 2,
      status: "In Transit",
      image: "https://source.unsplash.com/100x100/?smartwatch,tech",
      description: "Smart Fitness Watch - Premium Edition",
      orderDate: "2024-03-20",
    },
  ];

  const savedAddresses = [
    "123 Tech Park Avenue, Suite 456, Mumbai, India",
    "456 City Center, New York, USA",
  ];

  // Add or remove item from wishlist
  const toggleWishlist = (item) => {
    if (wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
      setWishlist(wishlist.filter((wishlistItem) => wishlistItem.id !== item.id));
    } else {
      setWishlist([...wishlist, item]);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 pt-32">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Hello, Vedang</h1>
      
      {/* Navigation */}
      <div className="flex space-x-12 text-lg font-semibold text-gray-800 mb-6">
        {[ 
          { name: "My Profile", section: "profile" }, 
          { name: "Order Details", section: "orders" },
          { name: "Wishlist", section: "wishlist" }, 
          { name: "Saved Address", section: "address" },
        ].map((item) => (
          <div key={item.section} className="relative group">
            <span
              className={`cursor-pointer hover:text-gray-600 ${activeSection === item.section ? "text-gray-600" : ""}`}
              onClick={() => setActiveSection(item.section)}
            >
              {item.name}
            </span>
          </div>
        ))}
      </div>

      {/* Profile Section */}
      {activeSection === "profile" && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">My Profile</h2>
          <div className="bg-white shadow-xl rounded-lg p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-800">{profileData.fullName}</h3>
              <button className="flex items-center space-x-2 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition duration-300">
                <Edit2 size={18} />
                <span>Edit Profile</span>
              </button>
            </div>
            <p className="text-lg text-gray-600">{profileData.address}</p>
          </div>
        </div>
      )}

      {/* Orders Section */}
      {activeSection === "orders" && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Order Details</h2>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Package className="h-6 w-6 text-gray-500" />
                    <span className={`${order.status === "Delivered" ? "text-green-600" : "text-blue-600"}`}>
                      {order.status}
                    </span>
                    <span className="text-sm text-gray-500">Ordered on {new Date(order.orderDate).toLocaleDateString()}</span>
                  </div>
                  <button onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}>
                    {expandedOrder === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                </div>
                {expandedOrder === order.id && (
                  <div className="mt-4 flex items-center space-x-4">
                    <img src={order.image} alt="Product" className="w-24 h-24 object-cover rounded-lg" />
                    <p className="text-gray-600">{order.description}</p>
                    <button onClick={() => toggleWishlist(order)} className="text-red-500 hover:text-red-700 transition">
                      <Heart size={22} className={`${wishlist.some((wishlistItem) => wishlistItem.id === order.id) ? "text-red-700" : ""}`} />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Products Section */}
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-6">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-semibold text-gray-800">{product.price}</p>
            <button
              onClick={() => toggleWishlist(product)}
              className="mt-4 text-red-500 hover:text-red-700 transition duration-300"
            >
              <Heart size={24} className={`${wishlist.some(item => item.id === product.id) ? "text-red-700" : "text-gray-500"}`} />
              {wishlist.some(item => item.id === product.id) ? "Remove from Wishlist" : "Add to Wishlist"}
            </button>
          </div>
        ))}
      </div>

      {/* My Wishlist Section */}
      <h2 className="text-3xl font-semibold mt-12 mb-6 text-gray-900">My Wishlist</h2>
      {wishlist.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4">
          {wishlist.map((item) => (
            <div key={item.id} className="bg-white shadow-lg rounded-lg p-6 flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
              <button
                onClick={() => toggleWishlist(item)}
                className="text-red-500 hover:text-red-700 transition duration-300"
              >
                <Heart size={24} className="text-red-500" />
                Remove from Wishlist
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Saved Address Section */}
      {activeSection === "address" && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Saved Addresses</h2>
          <div className="space-y-4">
            {savedAddresses.map((address, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center">
                  <p className="text-gray-600">{address}</p>
                  <button className="text-blue-500 hover:text-blue-700 transition duration-300">
                    <MapPin size={20} />
                    <span>Set as default</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
