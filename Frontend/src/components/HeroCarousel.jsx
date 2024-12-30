import  { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    // {
    //   id: 1,
    //   title: "Explore Ethnic",
    //   subtitle: "Collection",
    //   tag: "TRENDING COLLECTION",
    //   image:
    //     "https://images.unsplash.com/photo-1701365676249-9d7ab5022dec?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   color: "from-transparent to-emerald-950/90",
    // },
    {
      id: 2,
      title: "Premium Kurtas",
      subtitle: "Handcrafted",
      tag: "DESIGNER SERIES",
      image:
        "https://images.unsplash.com/photo-1624970415682-3f99fae61a94?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      color: "from-transparent to-indigo-950/90",
    },
    // {
    //   id: 3,
    //   title: "Modern Fusion",
    //   subtitle: "Collection",
    //   tag: "NEW ARRIVAL",
    //   image:
    //     "https://images.pexels.com/photos/8818641/pexels-photo-8818641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //   color: "from-transparent to-purple-950/90",
    // },
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
    <div className="relative min-h-[80vh] overflow-hidden bg-black ">
   
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 transition-transform duration-1000 ease-out transform scale-105 ">
        <img
          src={slides[currentSlide].image}
          alt="Collection Banner"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${slides[currentSlide].color}`}
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        {/* Animated Tag */}
        {/* <div className="overflow-hidden">
          <p
            className="text-lg mb-4 px-6 py-2 border border-white/30 backdrop-blur-sm rounded-full 
                       animate-fade-in-up font-light tracking-wider"
          >
            {slides[currentSlide].tag}
          </p>
        </div> */}

        {/* Title with Split Animation */}
        <div className="overflow-hidden text-center mb-8">
          <h2 className="text-6xl font-serif mb-2 animate-fade-in-up">
            {slides[currentSlide].title}
          </h2>
          <h2 className="text-6xl font-serif animate-fade-in-up delay-100">
            {slides[currentSlide].subtitle}
          </h2>
        </div>

        {/* Modern CTA Button */}
        <div className="flex gap-4">
          {/* <button
            className="group relative px-8 py-3 bg-white text-black rounded-full 
                           hover:bg-opacity-90 transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Shop Now
              <ShoppingBag className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div
              className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white
                          translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
            />
          </button> */}

          <button
            className="px-6 py-3 border border-white/30 rounded-full backdrop-blur-sm
                           hover:bg-white/10 transition-colors duration-300 flex items-center gap-2"
          >
            View Lookbook
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
                      ${
                        currentSlide === index ? "w-8 bg-white" : "bg-white/50"
                      }`}
          />
        ))}
      </div>

      {/* Arrow Controls with Hover Effects */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full
                 bg-black/20 backdrop-blur-md border border-white/10
                 hover:bg-white/20 transition-all duration-300
                 group"
      >
        <ChevronLeft className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full
                 bg-black/20 backdrop-blur-md border border-white/10
                 hover:bg-white/20 transition-all duration-300
                 group"
      >
        <ChevronRight className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
      </button>

      {/* Slide Counter */}
      <div
        className="absolute bottom-8 right-8 bg-black/30 text-white px-4 py-2 rounded-full
                    backdrop-blur-md border border-white/10 font-mono"
      >
        {currentSlide + 1}/{slides.length}
      </div>
    </div>
  );
};

export default HeroCarousel;
