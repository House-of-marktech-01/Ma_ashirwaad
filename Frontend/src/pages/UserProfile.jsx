import { useState } from "react";
import { Edit2, Mail, Phone, MapPin, Calendar, Package, Heart } from "lucide-react";
import { ChevronDown, ChevronUp } from 'lucide-react';


const UserProfile = () => {
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [wishlist, setWishlist] = useState([]);

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

  const InfoField = ({ icon, label, value }) => (
    <div className="flex items-center space-x-3 mb-4">
      {icon}
      <div>
        <dt className="text-sm font-medium text-gray-600">{label}</dt>
        <dd className="text-lg font-semibold text-gray-900">{value}</dd>
      </div>
    </div>
  );

  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 pt-32">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Hello, Vedang</h1>
      
      {/* Profile Navigation */}
      <div className="flex space-x-12 text-lg font-semibold text-gray-800 mb-6">
        <div className="relative group">
          <span className="cursor-pointer hover:text-gray-600">My Profile</span>
          <div className="absolute left-0 top-8 w-full h-1 bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-all duration-300"></div>
        </div>
        <div className="relative group">
          <span className="cursor-pointer hover:text-gray-600">Order Details</span>
          <div className="absolute left-0 top-8 w-full h-1 bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-all duration-300"></div>
        </div>
        <div className="relative group">
          <span className="cursor-pointer hover:text-gray-600">Wishlist</span>
          <div className="absolute left-0 top-8 w-full h-1 bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-all duration-300"></div>
        </div>
        <div className="relative group">
          <span className="cursor-pointer hover:text-gray-600">Saved Address</span>
          <div className="absolute left-0 top-8 w-full h-1 bg-gray-800 scale-x-0 group-hover:scale-x-100 transform transition-all duration-300"></div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">My Profile</h2>
        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-gray-800">{profileData.fullName}</h3>
            <button className="flex items-center space-x-2 bg-gray-800 text-white px-5 py-2 rounded-lg hover:bg-gray-900 transition duration-300">
              <Edit2 size={18} />
              <span>Edit Profile</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InfoField icon={<Mail className="text-gray-500" size={20} />} label="Email" value={profileData.emailId} />
            <InfoField icon={<Phone className="text-gray-500" size={20} />} label="Phone" value={profileData.phoneNumber} />
            <InfoField icon={<MapPin className="text-gray-500" size={20} />} label="Location" value={profileData.location} />
            <InfoField icon={<Calendar className="text-gray-500" size={20} />} label="Date of Birth" value={new Date(profileData.dateOfBirth).toLocaleDateString()} />
            <div className="md:col-span-2">
              <InfoField icon={<MapPin className="text-gray-500" size={20} />} label="Address" value={profileData.address} />
            </div>
          </div>
        </div>
      </div>

      {/* Orders Section */}
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
                <button onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)} className="text-gray-700 hover:text-gray-900">
                  {expandedOrder === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>
              <div className={`${expandedOrder === order.id ? "block" : "hidden"} mt-4}`}>
                <div className="flex items-center space-x-4">
                  <img src={order.image} alt="Product" className="w-24 h-24 object-cover rounded-lg" />
                  <p className="text-gray-600">{order.description}</p>
                  <button onClick={() => addToWishlist(order)} className="text-red-500 hover:text-red-700 transition">
                    <Heart size={22} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Wishlist Section */}
      {wishlist.length > 0 && (
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Wishlist</h2>
          <div className="space-y-4">
            {wishlist.map((item, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img src={item.image} alt="Product" className="w-16 h-16 object-cover rounded-lg" />
                  <p className="text-gray-600">{item.description}</p>
                </div>
                <button className="text-red-500 hover:text-red-700 transition">
                  <Heart size={22} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Saved Address Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Saved Address</h2>
        <div className="bg-white shadow-xl rounded-lg p-8">
          <p className="text-lg text-gray-600">{profileData.address}</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
