import  { useState } from "react";
import {
  Package,
  ChevronDown,
  ChevronUp,
  Edit2,
  MapPin,
  Phone,
  Mail,
  Calendar,
} from "lucide-react";

const UserProfile = () => {
  const [formData, setFormData] = useState({
    orderNumber: "",
    emailOrMobile: "",
  });

  const [expandedOrder, setExpandedOrder] = useState(null);

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

  // Sample profile data
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

  // Sample order data with more realistic examples
  const orders = [
    {
      id: 1,
      status: "Delivered",
      image: "https://s3-alpha-sig.figma.com/img/936b/1557/31b6d01d5b50b07fa972374ca95ee810?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B2gSOuYsTahaGwtbLyKVluNPDchw7ukEd9dJK2BkkMnA08RKKv4HEt3m~ZQ5gotbrG4WrAAM4KJ16R4bAQ42fJKSxYNpYNW1X1Ft6MuR5vdJRA7LtxjVQxmZn5b5Plg3h-khXwHiXaqmcvgqPt9LDQTpeRVDb14aI9A0iEavzZiqgKRMuxgo6xvaPyOBF9olLJMrUvvVE1Ko2kf~RDSM7oL1kZ0M3efnzfb~eiaeZnIltbZLlWo6k0Xn9ee1WZLEC-FQtopghr6fEAdlkk2VdSPhkU6T5JiKdGL0hmycGgRxLlGCsiLvupW0CibzVgNue~3O-Rd7rQrpEkkyFW9rgw__",
      description: "Wireless Noise-Canceling Headphones - Black",
      orderDate: "2024-03-15",
    },
    {
      id: 2,
      status: "In Transit",
      image: "https://s3-alpha-sig.figma.com/img/936b/1557/31b6d01d5b50b07fa972374ca95ee810?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B2gSOuYsTahaGwtbLyKVluNPDchw7ukEd9dJK2BkkMnA08RKKv4HEt3m~ZQ5gotbrG4WrAAM4KJ16R4bAQ42fJKSxYNpYNW1X1Ft6MuR5vdJRA7LtxjVQxmZn5b5Plg3h-khXwHiXaqmcvgqPt9LDQTpeRVDb14aI9A0iEavzZiqgKRMuxgo6xvaPyOBF9olLJMrUvvVE1Ko2kf~RDSM7oL1kZ0M3efnzfb~eiaeZnIltbZLlWo6k0Xn9ee1WZLEC-FQtopghr6fEAdlkk2VdSPhkU6T5JiKdGL0hmycGgRxLlGCsiLvupW0CibzVgNue~3O-Rd7rQrpEkkyFW9rgw__",
      description: "Smart Fitness Watch - Premium Edition",
      orderDate: "2024-03-20",
    },
  ];

  const InfoField = ({ icon, label, value }) => (
    <div className="flex items-center space-x-2 mb-4">
      {icon}
      <div>
        <dt className="text-sm font-medium text-gray-500">{label}</dt>
        <dd className="text-base text-gray-900">{value}</dd>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">
      {/* Profile Section */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">My Profile</h1>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="md:col-span-2 flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold text-gray-800">
                {profileData.fullName}
              </h2>
              <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors">
                <Edit2 size={18} />
                <span>Edit Profile</span>
              </button>
            </div>
            <InfoField
              icon={<Mail className="text-gray-400" size={20} />}
              label="Email"
              value={profileData.emailId}
            />
            <InfoField
              icon={<Phone className="text-gray-400" size={20} />}
              label="Phone"
              value={profileData.phoneNumber}
            />
            <InfoField
              icon={<MapPin className="text-gray-400" size={20} />}
              label="Location"
              value={profileData.location}
            />
            <InfoField
              icon={<Calendar className="text-gray-400" size={20} />}
              label="Date of Birth"
              value={new Date(profileData.dateOfBirth).toLocaleDateString()}
            />
            <div className="md:col-span-2">
              <InfoField
                icon={<MapPin className="text-gray-400" size={20} />}
                label="Address"
                value={profileData.address}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Recent Orders</h2>

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <Package className="h-6 w-6 text-gray-500" />
                    <span
                      className={`font-medium ${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : "text-blue-600"
                      }`}
                    >
                      {order.status}
                    </span>
                    <span className="text-sm text-gray-500">
                      Ordered on{" "}
                      {new Date(order.orderDate).toLocaleDateString()}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      setExpandedOrder(
                        expandedOrder === order.id ? null : order.id
                      )
                    }
                    className="flex items-center space-x-2 text-black hover:text-blue-600 transition-colors"
                  >
                    <span>
                      {expandedOrder === order.id
                        ? "Hide Details"
                        : "View Details"}
                    </span>
                    {expandedOrder === order.id ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                </div>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    expandedOrder === order.id
                      ? "max-h-96 opacity-100"
                      : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <div className="flex items-center space-x-4 mt-4">
                    <img
                      src={order.image}
                      alt="Product"
                      className="w-24 h-24 object-cover rounded"
                    />
                    <p className="text-gray-600 flex-1">{order.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Return and Exchange Section */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Return and Exchange
        </h2>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10">
            <div className="mb-8 space-y-4">
              <p className="font-medium text-gray-700">
                Return or exchange your product in just a few clicks.
              </p>
              <p className="text-sm text-gray-500">
                Please Note: A reverse shipment fee of $10 will be deducted when
                creating returns.
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
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <input
                  type="text"
                  name="emailOrMobile"
                  placeholder="Email or Mobile Number"
                  value={formData.emailOrMobile}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-3 px-6 rounded-lg  transition-colors"
              >
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
