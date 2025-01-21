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
    // ... more categories
  ];

  return (
    <div className="w-full py-10 bg-white ">
      <div className="ml-4 sm:ml-8 mx-auto px-4 relative">
        {/* Categories Title Card */}
        <div className="bg-red-500 z text-white rounded-lg py-3 px-6 absolute left-0 top-1/2 -translate-y-1/2 z-10 shadow-md w-28 h-28 flex items-center justify-center">
          <h2 className="text-lg font-medium text-center">Categories</h2>
        </div>

        {/* Scrollable Categories Container */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-auto space-x-4 ml-32 scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[150px] p-3 shadow-md bg-white rounded-lg transition hover:scale-105 w-28" // Removed fixed height
            >
              <div className="w-full pt-[100%] relative"> {/* Added a wrapper div with padding-top trick */}
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-lg absolute top-0 left-0" // Added absolute positioning
                />
              </div>
              <h3 className="text-gray-900 font-medium text-center">
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
