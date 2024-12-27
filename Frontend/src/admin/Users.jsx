import { useState } from "react";
import {
  Search,
  Trash2,
  ShoppingBag,
  Mail,
  Phone,
  Clock,
  MapPin,
} from "lucide-react";
import toast from "react-hot-toast";
import SidebarDashNavbar from "./SidebarDashNavbar";

const Users = () => {
  // Sample e-commerce customer data
  const sampleUsers = [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya.sharma@email.com",
      phone: "+91 98765 43210",
      totalOrders: 12,
      totalSpent: 24500,
      lastPurchase: "2024-03-15",
      status: "active",
      location: "Mumbai, Maharashtra",
      memberSince: "2023-08-01",
    },
    {
      id: 2,
      name: "Rahul Patel",
      email: "rahul.patel@email.com",
      phone: "+91 87654 32109",
      totalOrders: 8,
      totalSpent: 15800,
      lastPurchase: "2024-03-10",
      status: "active",
      location: "Delhi, NCR",
      memberSince: "2023-09-15",
    },
    {
      id: 3,
      name: "Anjali Desai",
      email: "anjali.d@email.com",
      phone: "+91 76543 21098",
      totalOrders: 5,
      totalSpent: 8900,
      lastPurchase: "2024-02-28",
      status: "inactive",
      location: "Ahmedabad, Gujarat",
      memberSince: "2023-11-20",
    },
  ];

  const [users, setUsers] = useState(sampleUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(null);

  const handleDeleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
    toast.success("Customer removed successfully");
    setShowDeleteModal(null);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <SidebarDashNavbar />

      <div className="max-w-7xl mx-auto space-y-6 min-h-screen  p-4 md:p-6">
        <div className="max-w-[1600px] mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Customer Management
              </h1>
              <p className="text-gray-500 mt-1">
                Manage your store customers and their information
              </p>
            </div>
            <div className="relative w-full lg:w-96">
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search customers..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 bg-white"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Users Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 sm:p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center">
                      <ShoppingBag className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">
                        {user.name}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          user.status === "active"
                            ? "bg-green-50 text-green-700"
                            : "bg-gray-100 text-gray-700"
                        }`}
                      >
                        {user.status === "active"
                          ? "Active Customer"
                          : "Inactive"}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowDeleteModal(user.id)}
                    className="p-2 rounded-lg hover:bg-red-50 text-red-500 transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-500">Total Orders</p>
                    <p className="font-semibold text-gray-900">
                      {user.totalOrders}
                    </p>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-3">
                    <p className="text-sm text-gray-500">Total Spent</p>
                    <p className="font-semibold text-gray-900">
                      ₹{user.totalSpent.toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Mail className="h-4 w-4" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span className="text-sm">{user.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{user.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">
                      Member since{" "}
                      {new Date(user.memberSince).toLocaleDateString()}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Delete Modal */}
          {showDeleteModal && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-500 bg-opacity-75 flex items-center justify-center">
              <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Remove Customer
                </h3>
                <p className="text-gray-500 mb-4">
                  Are you sure you want to remove this customer? This action
                  cannot be undone.
                </p>
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowDeleteModal(null)}
                    className="flex-1 px-4 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDeleteUser(showDeleteModal)}
                    className="flex-1 px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
