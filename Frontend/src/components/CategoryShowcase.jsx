import { useState } from "react";
import {
  ChevronRight,
  X,
  ArrowRight,
  Heart,
  Share2,
  Bookmark,
} from "lucide-react";

const CategoryShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Traditional Kurtas",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      description:
        "Discover our exquisite collection of traditional kurtas, featuring timeless designs and intricate craftsmanship that celebrates heritage.",
      subcategories: ["Wedding", "Festival", "Casual", "Party Wear"],
      featured: ["Chikan", "Lucknowi", "Jaipuri", "Block Print"],
      stats: {
        items: "120+",
        designers: "25",
        newArrivals: "15",
      },
    },
    {
      id: 2,
      name: "Modern Fusion",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      description:
        "Contemporary styles that blend traditional aesthetics with modern sensibilities, perfect for the fashion-forward gentleman.",
      subcategories: ["Indo-Western", "Asymmetric", "Designer", "Casual"],
      featured: ["Short Kurtas", "Kurta Sets", "Printed", "Embroidered"],
      stats: {
        items: "85+",
        designers: "18",
        newArrivals: "12",
      },
    },
    {
      id: 3,
      name: "Occasion Wear",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      description:
        "Elevate your special moments with our carefully curated collection of luxurious occasion wear kurtas.",
      subcategories: ["Wedding", "Reception", "Sangeet", "Festival"],
      featured: ["Silk", "Brocade", "Velvet", "Designer"],
      stats: {
        items: "95+",
        designers: "20",
        newArrivals: "8",
      },
    },
    {
      id: 4,
      name: "Daily Wear",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      description:
        "Comfortable, stylish, and versatile kurtas designed for everyday elegance and effortless sophistication.",
      subcategories: ["Cotton", "Linen", "Casual", "Office Wear"],
      featured: ["Plain", "Printed", "Stripes", "Textured"],
      stats: {
        items: "150+",
        designers: "15",
        newArrivals: "20",
      },
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 bg-blue-950 bg-clip-text text-transparent">
              Explore Our Collections
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Discover our curated selection of finest ethnic wear, crafted for
              every occasion
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {categories.map((category) => (
              <div
                key={category.id}
                onMouseEnter={() => setHoveredCategory(category.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                onClick={() => setSelectedCategory(category)}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                {/* Card Content */}
                <div className="relative h-[60vh] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform transition-transform duration-500">
                    <h3 className="text-2xl font-serif text-white mb-2">
                      {category.name}
                    </h3>
                    <p className="text-gray-200 text-sm mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      {category.description}
                    </p>

                    {/* Stats */}
                    <div className="flex justify-between items-center text-white text-sm opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <span>{category.stats.items} Items</span>
                      <span>{category.stats.designers} Designers</span>
                      <span>{category.stats.newArrivals} New</span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedCategory && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <div
                className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-auto shadow-2xl transform transition-all duration-500"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-6 border-b">
                  <h3 className="text-2xl font-serif text-emerald-900">
                    {selectedCategory.name}
                  </h3>
                  <div className="flex items-center gap-4">
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Heart className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Share2 className="w-5 h-5 text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                      <Bookmark className="w-5 h-5 text-gray-600" />
                    </button>
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-2"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <div className="relative rounded-xl overflow-hidden shadow-lg">
                        <img
                          src={selectedCategory.image}
                          alt={selectedCategory.name}
                          className="w-full h-[500px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      </div>
                      <p className="mt-6 text-gray-600 leading-relaxed">
                        {selectedCategory.description}
                      </p>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Subcategories */}
                      <div>
                        <h4 className="text-xl font-medium mb-4">
                          Browse by Style
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {selectedCategory.subcategories.map((sub, idx) => (
                            <button
                              key={idx}
                              className="px-6 py-4 text-left rounded-xl border-2 hover:border-emerald-600 hover:bg-emerald-50 transition-all duration-300 group"
                            >
                              <span className="text-gray-900 group-hover:text-emerald-700 transition-colors">
                                {sub}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Featured Items */}
                      <div>
                        <h4 className="text-xl font-medium mb-4">
                          Featured Designs
                        </h4>
                        <div className="grid grid-cols-2 gap-4">
                          {selectedCategory.featured.map((item, idx) => (
                            <button
                              key={idx}
                              className="px-6 py-4 text-left rounded-xl border-2 hover:border-emerald-600 hover:bg-emerald-50 transition-all duration-300 group"
                            >
                              <span className="text-gray-900 group-hover:text-emerald-700 transition-colors">
                                {item}
                              </span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="text-center p-4 rounded-xl bg-emerald-50">
                          <div className="text-2xl font-bold text-emerald-700">
                            {selectedCategory.stats.items}
                          </div>
                          <div className="text-sm text-emerald-600">Items</div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-emerald-50">
                          <div className="text-2xl font-bold text-emerald-700">
                            {selectedCategory.stats.designers}
                          </div>
                          <div className="text-sm text-emerald-600">
                            Designers
                          </div>
                        </div>
                        <div className="text-center p-4 rounded-xl bg-emerald-50">
                          <div className="text-2xl font-bold text-emerald-700">
                            {selectedCategory.stats.newArrivals}
                          </div>
                          <div className="text-sm text-emerald-600">
                            New Arrivals
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-6 border-t bg-gray-50">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="w-full py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors text-lg font-medium flex items-center justify-center gap-2"
                  >
                    <span>Browse All {selectedCategory.name}</span>
                    <ArrowRight className="w-5 h-5" />
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

export default CategoryShowcase;
