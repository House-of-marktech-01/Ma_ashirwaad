import { useState } from "react";
import {
  Package,
  DollarSign,
  ShoppingCart,
  Search,
  Edit2,
  Trash2,
} from "lucide-react";
import SidebarDashNavbar from "./SidebarDashNavbar";

const Dashboard = () => {
  // Sample data for kurtas
  const sampleKurtas = [
    {
      _id: "1",
      name: "Traditional Chikankari Kurta",
      category: "Men's Wear",
      price: 1499,
      stockQuantity: 50,
      size: ["S", "M", "L", "XL"],
      color: ["White", "Beige"],
      material: "Cotton",
      sales: 25,
    },
    {
      _id: "2",
      name: "Designer Silk Kurta",
      category: "Women's Wear",
      price: 2499,
      stockQuantity: 30,
      size: ["S", "M", "L"],
      color: ["Red", "Blue"],
      material: "Silk",
      sales: 15,
    },
  ];

  const [kurtas, setKurtas] = useState(sampleKurtas);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddKurtaForm, setShowAddKurtaForm] = useState(false);
  const [showEditKurtaForm, setShowEditKurtaForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedKurta, setSelectedKurta] = useState(null);

  const totalRevenue = kurtas.reduce(
    (acc, kurta) => acc + kurta.price * kurta.sales,
    0
  );
  const totalStock = kurtas.reduce(
    (acc, kurta) => acc + kurta.stockQuantity,
    0
  );
  const totalSales = kurtas.reduce((acc, kurta) => acc + kurta.sales, 0);

  const handleAddKurta = (e) => {
    e.preventDefault();
    setShowAddKurtaForm(false);
  };

  const handleEditKurta = (e) => {
    e.preventDefault();
    setShowEditKurtaForm(false);
  };

  const handleDeleteKurta = () => {
    setShowDeleteModal(false);
  };

  const filteredKurtas = kurtas.filter(
    (kurta) =>
      kurta.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      kurta.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      <SidebarDashNavbar />
      <div className="max-w-7xl mx-auto space-y-6 min-h-screen bg-gray-50 p-4 md:p-6">
        <div className="max-w-[1600px] mx-auto space-y-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 bg-white rounded-lg p-4 sm:p-6 shadow-sm">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Dashboard
              </h1>
            </div>

            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search kurtas..."
                  className="pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-gray-300 focus:ring-2 focus:ring-gray-100 outline-none w-full sm:w-64"
                />
              </div>
              <button
                onClick={() => setShowAddKurtaForm(true)}
                className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Add Kurta
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex flex-row items-center justify-between pb-2">
                <div className="text-gray-900 text-lg font-medium">
                  Total Revenue
                </div>
                <DollarSign className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">
                  ₹{totalRevenue.toLocaleString()}
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex flex-row items-center justify-between pb-2">
                <div className="text-gray-900 text-lg font-medium">
                  Total Stock
                </div>
                <Package className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalStock}</p>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="flex flex-row items-center justify-between pb-2">
                <div className="text-gray-900 text-lg font-medium">
                  Total Sales
                </div>
                <ShoppingCart className="h-5 w-5 text-gray-500" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{totalSales}</p>
              </div>
            </div>
          </div>

          {/* Kurta Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredKurtas.map((kurta) => (
              <div
                key={kurta._id}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-row items-start justify-between">
                  <div>
                    <div className="text-lg font-semibold text-gray-900">
                      {kurta.name}
                    </div>
                    <p className="text-gray-500 text-sm mt-1">
                      {kurta.category}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedKurta(kurta);
                        setShowEditKurtaForm(true);
                      }}
                      className="p-2 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Edit2 className="h-4 w-4 text-gray-600" />
                    </button>
                    <button
                      onClick={() => {
                        setSelectedKurta(kurta);
                        setShowDeleteModal(true);
                      }}
                      className="p-2 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </button>
                  </div>
                </div>
                <div>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500 text-sm">Price</p>
                      <p className="font-semibold text-gray-900">
                        ₹{kurta.price}
                      </p>
                    </div>
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-gray-500 text-sm">Stock</p>
                      <p className="font-semibold text-gray-900">
                        {kurta.stockQuantity}
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <p className="text-sm text-gray-500">
                      Sizes: {kurta.size.join(", ")}
                    </p>
                    <p className="text-sm text-gray-500">
                      Colors: {kurta.color.join(", ")}
                    </p>
                    <p className="text-sm text-gray-500">
                      Material: {kurta.material}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
