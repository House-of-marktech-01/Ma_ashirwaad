import { ChevronRight } from "lucide-react";

const Gallery = () => {
  const categories = [
    {
      id: 1,
      name: "Traditional Wear",
      description: "Explore our collection of timeless traditional outfits",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Modern Fashion",
      description: "Discover contemporary styles for every occasion",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Accessories",
      description: "Complete your look with our curated accessories",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Seasonal Collection",
      description: "Stay trendy with our latest seasonal offerings",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:px-32">
      <h1 className="text-3xl md:text-5xl text-blue-950 text-left mb-4 py-8">
        Fashionable Looks
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-lg aspect-[16/11]"
          >
            {/* Image Container with Adjusted Aspect Ratio */}
            <div className="absolute inset-0">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            {/* Content */}
            <div className="absolute inset-0 p-4 md:p-6 flex flex-col justify-between text-white">
              <div className="text-xl md:text-2xl font-semibold tracking-wide backdrop-blur-sm bg-black/20 w-fit px-4 py-2 rounded-lg">
                {category.name}
              </div>
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
