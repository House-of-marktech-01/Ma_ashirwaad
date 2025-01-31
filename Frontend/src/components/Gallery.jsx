import React from "react";
import arts from "../assets/images/Flower-Brooch.jpg"
import arts1 from "../assets/images/yellow kitkat front.jpg"
import arts2 from "../assets/images/swg2.webp"
import nightdress from "../assets/images/yellow leves front.jpg"

const Gallery = () => {
  const categories = [
    {
      id: 1,
      image: arts,
      size: "row-span-3",
    },
    {
      id: 2,
      image: nightdress,
      size: "row-span-4",
    },
    {
      id: 3,
      image: arts1,
      size: "row-span-5",
    },
    {
      id: 4,
      image: arts2,
      size: "row-span-2",
    },
  ];

  return (
    <div className="relative px-6 py-12 bg-gradient-to-b from-gray-50 to-gray-200">
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 120" style={{marginBottom:"10px"}}>
  
  <rect width="800" height="120" fill="#8C2D2D" rx="8"/>
  
 
  <text x="20" y="25" fill="white" font-size="20">✨</text>
  <text x="20" y="110" fill="white" font-size="20">✨</text>
  
  
  <text x="400" y="70" fill="white" font-size="36" font-weight="800" text-anchor="middle" font-family="Arial, sans-serif">
    Best Indian Designs For your Wardrobe
  </text>
  
 
  <text x="760" y="25" fill="white" font-size="20">✨</text>
  <text x="760" y="110" fill="white" font-size="20">✨</text>
</svg>



      {/* Improved Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`relative overflow-hidden rounded-xl shadow-lg group ${category.size}`}
          >
            {/* Image */}
            <img
              src={category.image}
              alt={`Gallery Image ${category.id}`}
              className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
