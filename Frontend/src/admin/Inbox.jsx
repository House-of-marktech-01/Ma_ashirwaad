import { useState } from "react";
import {
  Search,
  Calendar,
  Mail,
  User,
  MessageSquare,
  Trash2,
  Filter,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import SidebarDashNavbar from "./SidebarDashNavbar";
import { motion, AnimatePresence } from "framer-motion";

const sampleMessages = [
  {
    id: 1,
    sender: { name: "Aarav Patel", email: "aarav@example.com" },
    date: "2023-06-15",
    subject: "Product Inquiry",
    message:
      "I'm interested in your new kurta collection. Can you provide more details?",
    type: "inquiry",
    status: "unread",
  },
  {
    id: 2,
    sender: { name: "Diya Sharma", email: "diya@example.com" },
    date: "2023-06-14",
    subject: "Order Status",
    message: "Could you please update me on the status of my order #12345?",
    type: "support",
    status: "read",
  },
  {
    id: 3,
    sender: { name: "Arjun Reddy", email: "arjun@example.com" },
    date: "2023-06-13",
    subject: "Feedback",
    message:
      "I recently purchased a kurta set and I'm very impressed with the quality!",
    type: "feedback",
    status: "unread",
  },
  {
    id: 4,
    sender: { name: "Ananya Desai", email: "ananya@example.com" },
    date: "2023-06-12",
    subject: "Return Request",
    message:
      "I'd like to return the casual kurta I ordered. It doesn't fit well.",
    type: "support",
    status: "read",
  },
  {
    id: 5,
    sender: { name: "Vikram Singh", email: "vikram@example.com" },
    date: "2023-06-11",
    subject: "Collaboration Proposal",
    message:
      "I'm a fashion blogger and I'd love to collaborate with your brand.",
    type: "inquiry",
    status: "unread",
  },
];

const Inbox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteMessageModal, setShowDeleteMessageModal] = useState(null);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [expandedMessage, setExpandedMessage] = useState(null);
  const [filters, setFilters] = useState({
    type: "all",
    status: "all",
    dateRange: "all",
  });

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const applyFilters = (message) => {
    let passes = true;

    if (filters.type !== "all") {
      passes = passes && message.type === filters.type;
    }

    if (filters.status !== "all") {
      passes = passes && message.status === filters.status;
    }

    if (filters.dateRange !== "all") {
      const today = new Date();
      const messageDate = new Date(message.date);

      switch (filters.dateRange) {
        case "lastWeek": {
          const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
          passes = passes && messageDate >= weekAgo && messageDate <= today;
          break;
        }
        case "lastMonth": {
          const monthAgo = new Date(
            today.getFullYear(),
            today.getMonth() - 1,
            today.getDate()
          );
          passes = passes && messageDate >= monthAgo && messageDate <= today;
          break;
        }
        case "last3Months": {
          const threeMonthsAgo = new Date(
            today.getFullYear(),
            today.getMonth() - 3,
            today.getDate()
          );
          passes =
            passes && messageDate >= threeMonthsAgo && messageDate <= today;
          break;
        }
      }
    }

    return passes;
  };

  const filteredMessages = sampleMessages.filter((message) => {
    const search = searchTerm.toLowerCase();
    const searchPasses =
      message.sender.name.toLowerCase().includes(search) ||
      message.sender.email.toLowerCase().includes(search) ||
      message.subject.toLowerCase().includes(search) ||
      message.type.toLowerCase().includes(search);

    return searchPasses && applyFilters(message);
  });

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: "all",
      status: "all",
      dateRange: "all",
    });
    setShowFilterModal(false);
  };

  const handleDeleteMessage = (messageId) => {
    console.log(`Deleting message ${messageId}`);
    setShowDeleteMessageModal(null);
  };

  const toggleExpandMessage = (messageId) => {
    setExpandedMessage(expandedMessage === messageId ? null : messageId);
  };

  return (
    <div className="font-poppins bg-gray-50">
      <SidebarDashNavbar />
      <div className="max-w-7xl mx-auto space-y-6 min-h-screen p-4 md:p-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-4 md:p-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
              Inbox
            </h1>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="search"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="Search by name, email or subject..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border focus:ring-2 focus:ring-blue-500"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>

              <button
                onClick={() => setShowFilterModal(true)}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg ${
                  Object.values(filters).some((value) => value !== "all")
                    ? "bg-blue-400 text-blue-700"
                    : "bg-blue-950 text-white hover:bg-blue-950"
                }`}
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            {filteredMessages.length === 0 ? (
              <div className="p-8 text-center text-gray-500">
                No messages found
              </div>
            ) : (
              <div className="divide-y divide-gray-200">
                {filteredMessages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="hover:bg-gray-50"
                  >
                    <div
                      className="p-4 cursor-pointer"
                      onClick={() => toggleExpandMessage(message.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            <User className="h-5 w-5 text-gray-500" />
                          </div>
                          <div>
                            <h3 className="text-sm font-medium text-gray-900">
                              {message.sender.name}
                            </h3>
                            <p className="text-sm text-gray-500">
                              {message.sender.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-4">
                          <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs font-medium
                            ${
                              message.type === "inquiry"
                                ? "bg-blue-400 text-blue-800"
                                : message.type === "support"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {message.type.charAt(0).toUpperCase() +
                              message.type.slice(1)}
                          </span>
                          <span
                            className={`inline-flex px-2 py-1 rounded-full text-xs font-medium
                            ${
                              message.status === "unread"
                                ? "bg-red-100 text-red-800"
                                : "bg-gray-100 text-gray-800"
                            }`}
                          >
                            {message.status.charAt(0).toUpperCase() +
                              message.status.slice(1)}
                          </span>
                          {expandedMessage === message.id ? (
                            <ChevronUp className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                      <div className="mt-2">
                        <h4 className="text-sm font-medium text-gray-900">
                          {message.subject}
                        </h4>
                        {/* <p className="text-sm text-gray-500 truncate">
                          {message.message}
                        </p> */}
                      </div>
                    </div>
                    <AnimatePresence>
                      {expandedMessage === message.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="px-4 pb-4"
                        >
                          <div className="bg-gray-100 p-4 rounded-lg">
                            <p className="text-sm text-gray-700 whitespace-pre-wrap">
                              {message.message}
                            </p>
                          </div>
                          <div className="mt-4 flex justify-end space-x-2">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                /* View message details */
                              }}
                              className="px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-400 rounded-md transition-colors duration-200"
                            >
                              Reply
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowDeleteMessageModal(message.id);
                              }}
                              className="px-3 py-1 text-sm font-medium text-red-600 hover:bg-red-100 rounded-md transition-colors duration-200"
                            >
                              Delete
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Delete Message Modal */}
        {showDeleteMessageModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen px-4">
              <div className="fixed inset-0 bg-black opacity-30"></div>
              <div className="relative bg-white rounded-lg p-6 max-w-sm w-full">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Delete Message
                </h3>
                <p className="text-sm text-gray-500 mb-6">
                  Are you sure you want to delete this message? This action
                  cannot be undone.
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                    onClick={() => setShowDeleteMessageModal(null)}
                  >
                    Cancel
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                    onClick={() => handleDeleteMessage(showDeleteMessageModal)}
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
                  Filter Messages
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Type
                    </label>
                    <select
                      value={filters.type}
                      onChange={(e) =>
                        handleFilterChange("type", e.target.value)
                      }
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="all">All Types</option>
                      <option value="inquiry">Inquiry</option>
                      <option value="support">Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

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
                      <option value="read">Read</option>
                      <option value="unread">Unread</option>
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
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                    onClick={clearFilters}
                  >
                    Clear All
                  </button>
                  <button
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-950 rounded-md hover:bg-blue-950"
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

export default Inbox;
