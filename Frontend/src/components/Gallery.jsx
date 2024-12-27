import { ChevronRight } from "lucide-react";

const Gallery = () => {
  const categories = [
    {
      id: 1,
      name: "Traditional Wear",
      description: "Explore our collection of timeless traditional outfits",
      image:
        "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/09/Mandarin-Kurta-10.jpg",
    },
    {
      id: 2,
      name: "Modern Fashion",
      description: "Discover contemporary styles for every occasion",
      image:
        "https://i.pinimg.com/originals/02/84/c7/0284c7b61010c95f91f65f44a907e97f.jpg",
    },
    {
      id: 3,
      name: "Accessories",
      description: "Complete your look with our curated accessories",
      image:
        "https://1.bp.blogspot.com/--Rkg54Nwako/VzCVtvVypZI/AAAAAAAAAeA/J2Gc3_Dlz98BGXYvQBSlZgRLhN-BzYDlACLcB/s1600/Bonanza-Latest-Shalwaar-Kameez-Winter-collection-for-Men-5.jpg",
    },
    {
      id: 4,
      name: "Seasonal Collection",
      description: "Stay trendy with our latest seasonal offerings",
      image:
        "https://www.shaadidukaan.com/vogue/wp-content/uploads/2019/09/Mandarin-Kurta-10.jpg",
    },
  ];


  return (
    <div className="container mx-auto px-4 py-8 md:py-12">
      <h1 className="text-3xl md:text-5xl text-[#3D390F]  text-left mb-4 py-8">
        Our Collections
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-lg aspect-[3/4]"
          >
            {/* Image Container with Fixed Aspect Ratio */}
            <div className="absolute inset-0">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-70" /> */}

            {/* Content */}
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between text-white">
              {/* Category Name */}
              {/* <h2 className="text-xl md:text-2xl font-semibold">{category.name}</h2> */}

              {/* Description and Button Container */}
              <div className="transform translate-y-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="mb-4 text-sm md:text-lg">
                  {category.description}
                </p>
                <button className="flex items-center space-x-2 bg-white text-black px-4 py-2 md:px-6 md:py-3 rounded-full hover:bg-gray-100 transition-colors duration-300">
                  <span className="text-sm md:text-base">
                    Explore Collection
                  </span>
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;