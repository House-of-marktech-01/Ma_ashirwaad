import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import art1 from "../assets/images/Flower-Brooch.jpg";
import nightdress1 from "../assets/images/nightdress1.jpg";
import hairclip from "../assets/images/hairclip.jpg";

const CategoryCircle = () => {
  const scrollContainer = useRef(null);
  const navigate = useNavigate();

  const categories = [
    {
      name: "Night Suits",
      image: nightdress1,
      path: "/women",
      filterValue: "Nightsuits"
    },
    {
      name: "Arts and Crafts",
      image: art1,
      path: "/artsandcrafts",
      filterValue: "ArtsAndCrafts"
    },
    {
      name: "Hair Accessories",
      image: hairclip,
      path: "/women",
      filterValue: "Hairclips"
    },
    {
      name: "Loungewear",
      image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
      path: "/women",
      filterValue: "Loungewear"
    },
    {
      name: "ComingSoon",
      image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
      path: "",
      filterValue: ""
    },
    {
      name: "ComingSoon",
      image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
      path: "",
      filterValue: ""
    },
  ];

  const handleCategoryClick = (category) => {
    if (category.name === "ComingSoon") {
      return;
    }
    navigate(`${category.path}?filter=${category.filterValue}`);
  };

  return (
    <div className="w-full py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Categories Title Card */}
        <div className="bg-red-500 text-white rounded-full absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 shadow-md w-28 h-28 flex items-center justify-center">
          <h2 className="text-lg font-medium text-center">Categories</h2>
        </div>

        {/* Scrollable Categories Container */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-auto space-x-6 pl-36 sm:pl-40 scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center space-y-2 flex-shrink-0 ${
                category.name !== "ComingSoon" ? "cursor-pointer" : "cursor-not-allowed opacity-70"
              }`}
              onClick={() => handleCategoryClick(category)}
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