import { useState } from "react";
import {
  Package,
  ChevronDown,
  ChevronUp,
  Edit2,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Heart,
} from "lucide-react";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    orderNumber: "",
    emailOrMobile: "",
  });

  const [expandedOrder, setExpandedOrder] = useState(null);
  const [wishlist, setWishlist] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addToWishlist = (item) => {
    setWishlist([...wishlist, item]);
  };

  const profileData = {
    fullName: "Sarah Johnson",
    emailId: "sarah.johnson@email.com",
    phoneNumber: "+1 (555) 123-4567",
    gender: "Female",
    dateOfBirth: "1992-04-15",
    location: "San Francisco, CA",
    alternatePhone: "+1 (555) 987-6543",
    address: "123 Tech Park Avenue, Suite 456, San Francisco, CA 94105",
  };

  const orders = [
    {
      id: 1,
      status: "Delivered",
      image:
        "https://source.unsplash.com/100x100/?headphones,tech",
      description: "Wireless Noise-Canceling Headphones - Black",
      orderDate: "2024-03-15",
    },
    {
      id: 2,
      status: "In Transit",
      image:
        "https://source.unsplash.com/100x100/?smartwatch,tech",
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

  return (
    <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-12 pt-32">
      {/* Profile Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-6 text-gray-900">My Profile</h1>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">{profileData.fullName}</h2>
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
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Recent Orders</h2>

        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Package className="h-6 w-6 text-gray-500" />
                  <span className={`font-medium ${order.status === "Delivered" ? "text-green-600" : "text-blue-600"}`}>
                    {order.status}
                  </span>
                  <span className="text-sm text-gray-500">Ordered on {new Date(order.orderDate).toLocaleDateString()}</span>
                </div>
                <button onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)} className="text-gray-700 hover:text-gray-900">
                  {expandedOrder === order.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
              </div>

              <div className={`${expandedOrder === order.id ? "block" : "hidden"} mt-4`}>
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
    </div>
  );
};

export default UserProfile;
