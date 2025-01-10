import { useState } from "react";

const CategoryShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Traditional Kurtas",
      image:
        "https://img.fkcdn.com/image/xif0q/night-dress-nighty/v/y/w/l-blue-double-dandiya-aakarshana-original-imah6heghrtyk96n.jpeg",
      description:
        "Discover our exquisite collection of traditional kurtas, featuring timeless designs and intricate craftsmanship that celebrates heritage.",
      price: "$45",
      colors: ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#D32F2F"],
    },
    {
      id: 2,
      name: "Modern Fusion",
      image:
        "https://img.fkcdn.com/image/xif0q/night-dress-nighty/2/g/p/free-red-single-dandiya-aakarshana-original-imah6hehdnekxwvq.jpeg",
      description:
        "Contemporary styles that blend traditional aesthetics with modern sensibilities, perfect for the fashion-forward gentleman.",
      price: "$60",
      colors: ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#D32F2F"],
    },
    {
      id: 3,
      name: "Occasion Wear",
      image:
        "https://img.fkcdn.com/image/xif0q/night-dress-nighty/x/u/g/free-blue-camelr-toomley-original-imahyzgrczujbszc.jpeg",
      description:
        "Elevate your special moments with our carefully curated collection of luxurious occasion wear kurtas.",
      price: "$75",
      colors: ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#D32F2F"],
    },
    {
      id: 4,
      name: "Daily Wear",
      image:
        "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
      description:
        "Comfortable, stylish, and versatile kurtas designed for everyday elegance and effortless sophistication.",
      price: "$30",
      colors: ["#FF5733", "#33FF57", "#3357FF", "#FFC300", "#D32F2F"],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4 bg-blue-950 bg-clip-text text-transparent">
              Fashion Of Your Sense
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
                onClick={() => setSelectedCategory(category)}
                className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
              >
                {/* Product Card Content */}
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-[500px] object-cover"
                  />

                  {/* Product Details */}
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{category.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      {/* Price */}
                      <span className="text-lg font-semibold text-emerald-700">
                        {category.price}
                      </span>

                      {/* Colors */}
                      <div className="flex space-x-2">
                        {category.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 rounded-full"
                            style={{ backgroundColor: color }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
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
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors ml-2"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <img
                        src={selectedCategory.image}
                        alt={selectedCategory.name}
                        className="w-full h-[500px] object-cover"
                      />
                    </div>

                    {/* Right Column */}
                    <div>
                      <h4 className="text-2xl font-medium mb-4">
                        {selectedCategory.name}
                      </h4>
                      <p className="text-gray-600 mb-4">
                        {selectedCategory.description}
                      </p>
                      <span className="text-lg font-semibold text-emerald-700">
                        {selectedCategory.price}
                      </span>
                      <div className="mt-4">
                        <h5 className="text-xl font-medium mb-2">Available Colors</h5>
                        <div className="flex space-x-2">
                          {selectedCategory.colors.map((color, index) => (
                            <div
                              key={index}
                              className="w-8 h-8 rounded-full"
                              style={{ backgroundColor: color }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
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
