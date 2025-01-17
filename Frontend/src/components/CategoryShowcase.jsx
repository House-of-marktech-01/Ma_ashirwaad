import { useState } from "react";
import { X } from "lucide-react";
import { WiStars } from "react-icons/wi";

const CategoryShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

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
    <div className="bg-gray-50 w-full min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
  {/* Header Section - Responsive text sizes */}
  <div className="text-center mb-8 sm:mb-12">
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-sans flex items-center justify-center gap-2 text-black">
      <WiStars className="text-[#8B2121] sm:text-2xl lg:text-6xl font-extrabold" />
      <span>Fashion Of Your Sense</span>
      <WiStars className="text-[#8B2121] sm:text-2xl lg:text-6xl font-extrabold" />
    </h1>
  </div>

        {/* Categories Grid - Responsive grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onClick={() => setSelectedCategory(category)}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image - Responsive heights */}
              <div className="aspect-[3/4] w-full">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Product Details - Responsive padding */}
              <div className="p-3 sm:p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {category.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-base sm:text-lg font-semibold text-emerald-700">
                    {category.price}
                  </span>
                  <div className="flex gap-1 sm:gap-2">
                    {category.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal - Responsive sizing and padding */}
        {selectedCategory && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div 
              className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b">
                <h3 className="text-xl sm:text-2xl font-serif text-emerald-900">
                  {selectedCategory.name}
                </h3>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {/* Left Column - Image */}
                  <div className="aspect-[3/4] w-full">
                    <img
                      src={selectedCategory.image}
                      alt={selectedCategory.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  {/* Right Column - Details */}
                  <div className="space-y-4">
                    <h4 className="text-xl sm:text-2xl font-medium">
                      {selectedCategory.name}
                    </h4>
                    <p className="text-gray-600">
                      {selectedCategory.description}
                    </p>
                    <span className="block text-lg font-semibold text-emerald-700">
                      {selectedCategory.price}
                    </span>
                    <div>
                      <h5 className="text-lg font-medium mb-2">Available Colors</h5>
                      <div className="flex gap-3">
                        {selectedCategory.colors.map((color, index) => (
                          <div
                            key={index}
                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full"
                            style={{ backgroundColor: color }}
                          />
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
  );
};

export default CategoryShowcase;