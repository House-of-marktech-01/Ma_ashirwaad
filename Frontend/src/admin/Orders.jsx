import { useState } from "react";
import {
  Search,
  Calendar,
  DollarSign,
  User,
  Package,
  Trash2,
  Filter,
} from "lucide-react";
import SidebarDashNavbar from "./SidebarDashNavbar";

const sampleOrders = [
  {
    id: 1,
    customer: { name: "Aarav Patel", email: "aarav@example.com" },
    orderDate: "2023-06-15",
    amount: 2499,
    status: "processing",
    items: [
      { name: "Embroidered Kurta", quantity: 1, price: 1499 },
      { name: "Silk Pajama", quantity: 1, price: 1000 },
    ],
  },
  {
    id: 2,
    customer: { name: "Diya Sharma", email: "diya@example.com" },
    orderDate: "2023-06-14",
    amount: 3998,
    status: "shipped",
    items: [{ name: "Designer Kurta Set", quantity: 2, price: 1999 }],
  },
  {
    id: 3,
    customer: { name: "Arjun Reddy", email: "arjun@example.com" },
    orderDate: "2023-06-13",
    amount: 5497,
    status: "delivered",
    items: [
      { name: "Wedding Kurta", quantity: 1, price: 3499 },
      { name: "Embroidered Sherwani", quantity: 1, price: 1998 },
    ],
  },
  {
    id: 4,
    customer: { name: "Ananya Desai", email: "ananya@example.com" },
    orderDate: "2023-06-12",
    amount: 999,
    status: "processing",
    items: [{ name: "Casual Kurta", quantity: 1, price: 999 }],
  },
  {
    id: 5,
    customer: { name: "Vikram Singh", email: "vikram@example.com" },
    orderDate: "2023-06-11",
    amount: 4497,
    status: "shipped",
    items: [
      { name: "Festive Kurta Set", quantity: 1, price: 2499 },
      { name: "Embroidered Nehru Jacket", quantity: 1, price: 1998 },
    ],
  },
];

const Orders = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteOrderModal, setShowDeleteOrderModal] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filters, setFilters] = useState({
    status: "all",
    dateRange: "all",
    amountRange: "all",
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const applyFilters = (order) => {
    let passes = true;

    if (filters.status !== "all") {
      passes = passes && order.status === filters.status;
    }

    if (filters.dateRange !== "all") {
      const today = new Date();
      const orderDate = new Date(order.orderDate);

      switch (filters.dateRange) {
        case "lastWeek":
          const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
          passes = passes && orderDate >= weekAgo && orderDate <= today;
          break;
        case "lastMonth":
          const monthAgo = new Date(
            today.getFullYear(),
            today.getMonth() - 1,
            today.getDate()
          );
          passes = passes && orderDate >= monthAgo && orderDate <= today;
          break;
        case "last3Months":
          const threeMonthsAgo = new Date(
            today.getFullYear(),
            today.getMonth() - 3,
            today.getDate()
          );
          passes = passes && orderDate >= threeMonthsAgo && orderDate <= today;
          break;
      }
    }

    if (filters.amountRange !== "all") {
      const amount = order.amount;
      switch (filters.amountRange) {
        case "under1000":
          passes = passes && amount < 1000;
          break;
        case "1000to5000":
          passes = passes && amount >= 1000 && amount <= 5000;
          break;
        case "above5000":
          passes = passes && amount > 5000;
          break;
      }
    }

    return passes;
  };

  const filteredOrders = sampleOrders.filter((order) => {
    const search = searchTerm.toLowerCase();
    const searchPasses =
      order.customer.name.toLowerCase().includes(search) ||
      order.customer.email.toLowerCase().includes(search) ||
      order.amount.toString().includes(search) ||
      order.status.toLowerCase().includes(search);

    return searchPasses && applyFilters(order);
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      status: "all",
      dateRange: "all",
      amountRange: "all",
    });
    setShowFilterModal(false);
  };

  const handleDeleteOrder = (orderId) => {
    // In a real application, you would call an API to delete the order
    console.log(`Deleting order ${orderId}`);
    setShowDeleteOrderModal(null);
  };

  return (
    <div className="font-poppins">
      <SidebarDashNavbar />
      <div className="max-w-7xl mx-auto space-y-6 min-h-screen p-4 md:p-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Orders
            </h1>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="search"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search by name, email or status..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <button
                onClick={() => setShowFilterModal(true)}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
                  Object.values(filters).some((value) => value !== "all")
                    ? "bg-blue-100 text-blue-700"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Orders List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            {filteredOrders.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No orders found
              </div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Customer
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order Date
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Amount
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50">
                      <td className="px-4 py-4">
                        <div className="flex items-center">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="h-5 w-5 text-gray-500" />
                          </div>
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {order.customer.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {order.customer.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm">
                          <div className="flex items-center text-gray-900">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(order.orderDate).toLocaleDateString()}
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="text-sm font-medium text-gray-900">
                          ₹{order.amount}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span
                          className={`inline-flex px-2 py-1 rounded-full text-xs font-medium
                          ${
                            order.status === "delivered"
                              ? "bg-green-100 text-green-800"
                              : order.status === "shipped"
                              ? "bg-blue-100 text-blue-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {order.status.charAt(0).toUpperCase() +
                            order.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => {
                              /* View order details */
                            }}
                            className="p-1 rounded-md hover:bg-gray-100"
                            title="View Order"
                          >
                            <Package className="h-5 w-5 text-gray-600" />
                          </button>
                          <button
                            onClick={() => setShowDeleteOrderModal(order.id)}
                            className="p-1 rounded-md hover:bg-gray-100"
                            title="Delete Order"
                          >
                            <Trash2 className="h-5 w-5 text-red-600" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

        {/* Delete Order Modal */}
        {showDeleteOrderModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="fixed inset-0 bg-black opacity-30"></div>
              <div className="relative bg-white rounded-lg p-6 max-w-sm w-full">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Delete Order
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Are you sure you want to delete this order? This action cannot
                  be undone.
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                    onClick={() => setShowDeleteOrderModal(null)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                    onClick={() => handleDeleteOrder(showDeleteOrderModal)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Modal */}
        {showFilterModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="fixed inset-0 bg-black opacity-30"></div>
              <div className="relative bg-white rounded-lg p-6 max-w-sm w-full">
                <h3 className="text-lg font-medium text-gray-900 mb-6">
                  Filter Orders
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select
                      value={filters.status}
                      onChange={(e) =>
                        handleFilterChange("status", e.target.value)
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="all">All Statuses</option>
                      <option value="processing">Processing</option>
                      <option value="shipped">Shipped</option>
                      <option value="delivered">Delivered</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date Range
                    </label>
                    <select
                      value={filters.dateRange}
                      onChange={(e) =>
                        handleFilterChange("dateRange", e.target.value)
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="all">All Dates</option>
                      <option value="lastWeek">Last Week</option>
                      <option value="lastMonth">Last Month</option>
                      <option value="last3Months">Last 3 Months</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Amount Range
                    </label>
                    <select
                      value={filters.amountRange}
                      onChange={(e) =>
                        handleFilterChange("amountRange", e.target.value)
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="all">All Amounts</option>
                      <option value="under1000">Under ₹1,000</option>
                      <option value="1000to5000">₹1,000 - ₹5,000</option>
                      <option value="above5000">Above ₹5,000</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                    onClick={clearFilters}
                  >
                    Clear All
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    onClick={() => setShowFilterModal(false)}
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
