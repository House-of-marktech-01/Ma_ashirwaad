import React, { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    image: "https://s3-alpha-sig.figma.com/img/5e0e/24aa/8a88ba4dec037f1f95362d28c74476a4?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECXrkEeFEh-F1vGkocCFmZajquKTBJimp0CAEmzhZghMO4V5ub3Ziba0ErbbRiHsNxfJgq13Lp74lweXA3qdnzyzeuw1ib3RO7nny1t7VyrRhKmL~Y1kHGtIDU3X-Ql4sirv1l0Mt3xR~n4lJ0Is5vMKqIew2eDPduchSWZcduuypZ4UnaCah2z6DF2OLC8Rcu41eSU~-5aCEPtVAkIz6r2qJKuGjV2o8TxeAYbwfRIqyxNnvI5qalAvKyRAJGcJfA6g7GAuTTc3dyMmDfdwLGQWftfxhljU0fBBeYMOguMlz3Bqu7RI~GT5hl2pUk2vl6mLxoIYYJilsF2ZIqDP-Q__",
    title: "Premium Quality Wardrobe Picks",
  },
  {
    id: 2,
    image: "https://s3-alpha-sig.figma.com/img/f7c9/0855/4e02df6eef8e23963217d8677a2340e0?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IrAP3ttPLRbVjnj39W0Hz3IJrnmA3ESFnjdVVer66yf1nF4e0DItH7sSL-Bqzz9xN-Vtp2Bzav1Ur52N9Sw7FhH~7xSeWpxu4KnltEKFhd8vq8dgv-On~SsaqFZR7~ZvjpfIfLeyQntrlqb-M2DSMtTC37msnXM83J75c1z0JwRSvyYC4HB04uMLXurDLao6KJ~jwPty1j2HYaj58rHpBYwL~FJFiAmQsgNOXHUiilcZ9rod-TZ1ERejHS7Zurdtl3NzEi6Zh5uQyZm8na061Ho7hkaB7t~4~dWhv967RxAaZRmU5ExZXCHf8w2NGLNOeaT4RLHrRM8i6GdIeJZCvA__",
    title: "Elevate Your Style with Elegance",
  },
  {
    id: 3,
    image: "https://s3-alpha-sig.figma.com/img/50ec/2038/f2a549a8c48e7fb3c77719ba6f75ce15?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eQqItidmz0FIW8y9~TukAnTbWxvmWg8E9UOJWvmtHASjIcWYYrCZbhGE9uJQgQ-oYCwpkxUsg588KKf5UOh7EO06~dvZag12iykgQ3h2Vl5841VuozblrdjNNGdlhidlFFrXDvESkSdG~RWN-TeLL2hGNrFQOnGP5UvSM9-RfdMTCzNTCmCnjg8T9XKl9B7MlpPOEKnk60Hj~pIYdEHTb1PKwUlUWIDiOgKSBbz1qs2W7k8jR~xk0PvEnuOjEUL9xEJLRwfYR-lG5QMyrqJeiNHyNgusletNl2k4E-3y4Hnszrn0mm30Co7GXlLCI2kTPGKDJdurVKv2fTyfXX2YoQ__",
    title: "Discover the Latest Trends",
  },
];

const HeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-neutral-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-6">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">{slide.title}</h1>
            <button className="bg-white text-black px-10 py-4 rounded-full text-xl font-medium hover:bg-black hover:text-white border-2 border-white transition-all duration-300">
              Shop Now
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 text-white text-4xl bg-black/50 p-3 rounded-full hover:bg-black transition-all"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 text-white text-4xl bg-black/50 p-3 rounded-full hover:bg-black transition-all"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
