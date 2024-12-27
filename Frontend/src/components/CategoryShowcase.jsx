import { useState } from "react";
import { ChevronRight, X } from "lucide-react";

const CategoryShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Traditional Kurtas",
      image:
        "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/09/Mandarin-Kurta-10.jpg",
      description: "Classic designs with timeless appeal",
      subcategories: ["Wedding", "Festival", "Casual", "Party Wear"],
      featured: ["Chikan", "Lucknowi", "Jaipuri", "Block Print"],
    },
    {
      id: 2,
      name: "Modern Fusion",
      image:
        "https://i.pinimg.com/originals/02/84/c7/0284c7b61010c95f91f65f44a907e97f.jpg",
      description: "Contemporary styles for the modern gentleman",
      subcategories: ["Indo-Western", "Asymmetric", "Designer", "Casual"],
      featured: ["Short Kurtas", "Kurta Sets", "Printed", "Embroidered"],
    },
    {
      id: 3,
      name: "Occasion Wear",
      image:
        "https://1.bp.blogspot.com/--Rkg54Nwako/VzCVtvVypZI/AAAAAAAAAeA/J2Gc3_Dlz98BGXYvQBSlZgRLhN-BzYDlACLcB/s1600/Bonanza-Latest-Shalwaar-Kameez-Winter-collection-for-Men-5.jpg",
      description: "Perfect for special moments",
      subcategories: ["Wedding", "Reception", "Sangeet", "Festival"],
      featured: ["Silk", "Brocade", "Velvet", "Designer"],
    },
    {
      id: 4,
      name: "Daily Wear",
      image:
        "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/09/Mandarin-Kurta-10.jpg",
      description: "Comfortable and stylish everyday options",
      subcategories: ["Cotton", "Linen", "Casual", "Office Wear"],
      featured: ["Plain", "Printed", "Stripes", "Textured"],
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 my-6 md:my-12 relative">
      <h1 className="text-3xl md:text-5xl font-bold font-serif text-center p-4 md:p-8 mb-4 md:mb-8">
        Explore Our Collections
      </h1>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            onClick={() => setSelectedCategory(category)}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-lg shadow-md h-[40vh] sm:h-[45vh] md:h-[50vh]">
              {/* Image Container */}
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Category Info */}
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-0 sm:translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-lg md:text-xl font-medium mb-2">{category.name}</h4>
                <p className="text-sm opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {category.description}
                </p>
                <div className="flex items-center mt-2 text-sm font-light opacity-100 sm:opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span>Explore Collection</span>
                  <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Category Modal */}
      {selectedCategory && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4">
          <div className="bg-white rounded-xl w-full max-w-4xl max-h-[95vh] overflow-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b">
              <h3 className="text-xl md:text-2xl font-serif">{selectedCategory.name}</h3>
              <button
                onClick={() => setSelectedCategory(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5 md:w-6 md:h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {/* Left Column */}
                <div>
                  <img
                    src={selectedCategory.image}
                    alt={selectedCategory.name}
                    className="w-full h-64 md:h-96 object-cover rounded-lg shadow-md"
                  />
                  <p className="mt-4 text-gray-600">
                    {selectedCategory.description}
                  </p>
                </div>

                {/* Right Column */}
                <div>
                  {/* Subcategories */}
                  <div className="mb-6 md:mb-8">
                    <h4 className="text-lg font-medium mb-4">Browse by Style</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {selectedCategory.subcategories.map((sub, idx) => (
                        <button
                          key={idx}
                          className="px-3 md:px-4 py-3 text-left text-sm md:text-base rounded-lg border hover:border-emerald-800 hover:bg-emerald-50 transition-colors"
                        >
                          {sub}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Featured Items */}
                  <div>
                    <h4 className="text-lg font-medium mb-4">Featured Designs</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                      {selectedCategory.featured.map((item, idx) => (
                        <button
                          key={idx}
                          className="px-3 md:px-4 py-3 text-left text-sm md:text-base rounded-lg border hover:border-emerald-800 hover:bg-emerald-50 transition-colors"
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 md:p-6 border-t bg-gray-50">
              <button
                onClick={() => setSelectedCategory(null)}
                className="w-full py-2.5 md:py-3 text-sm md:text-base bg-emerald-800 text-white rounded-lg hover:bg-emerald-900 transition-colors"
              >
                View All {selectedCategory.name}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryShowcase;