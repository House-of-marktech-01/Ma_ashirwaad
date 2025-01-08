import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, TagIcon } from "lucide-react";

const DesignDisplay = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Explore Ethnic",
      subtitle: "Collection",
      tag: "TRENDING COLLECTION",
      description:
        "Discover the beauty of traditional craftsmanship with modern aesthetics",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accentColor: "from-emerald-600 to-emerald-950",
    },
    {
      id: 2,
      title: "Premium Kurtas",
      subtitle: "Handcrafted",
      tag: "DESIGNER SERIES",
      description:
        "Elegance meets comfort in our premium handcrafted collection",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accentColor: "from-indigo-600 to-indigo-950",
    },
    {
      id: 3,
      title: "Modern Fusion",
      subtitle: "Collection",
      tag: "NEW ARRIVAL",
      description: "Where tradition meets contemporary design",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      accentColor: "from-purple-600 to-purple-950",
    },
  ];

  const nextSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[70vh] overflow-hidden bg-gray-950">
      {/* Main Content Layer */}
      <div className="relative h-full w-full">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 transition-all duration-700 ease-out transform scale-105">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950" />
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Container */}
        <div className="absolute inset-0 flex flex-col justify-center px-16 lg:px-44">
          <div className="max-w-2xl space-y-6">
            {/* Tag */}
            <div className="flex items-center space-x-2">
              <TagIcon className="w-4 h-4 text-white/80" />
              <span className="text-sm font-medium tracking-wider text-white/80">
                {slides[currentSlide].tag}
              </span>
            </div>

            {/* Title and Subtitle */}
            <div className="space-y-2">
              <h1 className="text-6xl font-bold text-white tracking-tight">
                {slides[currentSlide].title}
              </h1>
              <p className="text-4xl font-light text-white/90">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-lg text-white/70 max-w-xl">
              {slides[currentSlide].description}
            </p>

            {/* CTA Button */}
            <button
              className="px-8 py-4 bg-white text-gray-900 rounded-full font-medium
                             hover:bg-gray-100 transform transition-all duration-200
                             hover:scale-105 active:scale-95"
            >
              Explore Collection
            </button>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute bottom-12 left-16 flex items-center space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all duration-300 rounded-full bg-white
                         ${
                           currentSlide === index
                             ? "w-12 opacity-100"
                             : "w-6 opacity-40"
                         }
                         hover:opacity-100`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-12 right-16 font-mono text-white/80">
          <span className="text-2xl font-bold">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <span className="text-lg opacity-50">
            /{String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* Arrow Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 p-4 rounded-full
                   bg-white/10 backdrop-blur-sm border border-white/20
                   hover:bg-white/20 transition-all duration-300
                   group"
        >
          <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 p-4 rounded-full
                   bg-white/10 backdrop-blur-sm border border-white/20
                   hover:bg-white/20 transition-all duration-300
                   group"
        >
          <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>
    </div>
  );
};

export default DesignDisplay;
