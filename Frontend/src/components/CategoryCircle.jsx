import { useRef } from "react";

const CategoryCircle = () => {
  const scrollContainer = useRef(null);

  const categories = [
    {
      name: "Long Kurti",
      image:
        "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    },
    {
      name: "Woollen Kurti",
      image:
        "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    },
    {
      name: "Short Kurti",
      image:
        "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    },
    {
      name: "Men's Kurta",
      image:
        "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    },
    {
      name: "Night Suit",
      image:
        "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    },
    {
      name: "Pathani Kurta",
      image:
        "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
    },
  ];

  return (
    <div className="w-full py-10 bg-white">
      <div className="ml-4 sm:ml-8 mx-auto px-4 relative">
        {/* Categories Title Card */}
        <div className="bg-red-500 text-white rounded-full py-3 px-6 absolute left-0 top-1/2 -translate-y-1/2 z-10 shadow-md w-28 h-28 flex items-center justify-center">
          <h2 className="text-lg font-medium text-center">Categories</h2>
        </div>

        {/* Scrollable Categories Container */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-auto space-x-6 ml-32 scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-2"
            >
              <div className="w-36 h-36 rounded-full shadow-md bg-white flex items-center justify-center transition hover:scale-105">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-center text-sm">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCircle;
