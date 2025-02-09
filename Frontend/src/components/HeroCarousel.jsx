import React, { useState, useEffect } from "react";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image:"https://s3-alpha-sig.figma.com/img/5e0e/24aa/8a88ba4dec037f1f95362d28c74476a4?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XA6sk7IRPwU-czCbr44tg5i7LgC~JKWl~V1TE1ABz3eFJAvLbWH3zPyLO5n4niZOaFmvAAbPRMyCaDMjitHdHqih~JKuHTm-0cCEMrfO4aqa7EmgLMZfFKSyHla3MbmBBEzzUyjbqxw0SQhYyUnsaRxaJk~76lHh7O6A9lMD8UNqfNEqnlhpXp75dhtV4yRfPVKlyhEs6H~CU0Jz-XcYjGOX49LGaf63Lv~DROExR-gVN4VYgRaGcmptKyzVxSp102vhP2TisUkf1N5ZdoSxKq8HvVwbFEtuUNGdabgAUn8dIDEOHoUNHWn3B1x8~O2-dIK1yNCed9fu9imUSrQiwA__",
      title: "Premium Quality Wardrobe Picks",
    },
    {
      id: 2,
      image:"https://s3-alpha-sig.figma.com/img/50ec/2038/f2a549a8c48e7fb3c77719ba6f75ce15?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cC0WeecCj1kxw-qirdAYi8iBWazd20zDqaCNpV3HCU1aAPnTqsCGN6Rc2DnRcigxX5szqCKzDcUdcRttjZo9lmNpppBNf70rPOjLIDB3a1Ra0cOUwEuZxmz7E5cznOhq~nd6M-7mqKQW8izVYj9nkLqjNfjTeNTp-hCHUC~x8pmJLYSa1PSRMv57M8fm21Jk5OvbEpI6cNbkoxFlENYSmA-nWSppSmnR~etnqsVJxHwpzSvPlpdfYEvgnFV5nO9YsZ0wHSv6bHI5MEIwm3Kou1h7TOwzKD2l8JVTjuLj5R1u2aMHrWaeerJELfM10--rTOXV5q-ELh~4CpzItcQuow__",
      title: "Elevate Your Style with Elegance",
    },
    {
      id: 3,
      image:[
        "https://s3-alpha-sig.figma.com/img/f7c9/0855/4e02df6eef8e23963217d8677a2340e0?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=K384KJsj1UXy2oLQ9t9EcUSTnONC0lkVP0PqHVi5hCjG3Jds76B07VB9z8jdIkvqUDMyi8knQUcdk4p4WHOzr9ORNbLpUUElJ2KPg0ql4Ui3AbsxszYcN7NiHuZPe79WtJt4--hB3orCYoCfhR5VNPixRPIsgHZJOVrljFm7lp~-oHLTglPm4zAe0TThBDTV4H2cZV3fzo21TwflWWHLg3OQcw8WDPqT8O6Lb2uLpnij3~AtapLZEtdGJfRhCTsiPAttKcvim09S5y6B2EZlVy4qXEJ5Vb9BUvmKbu0Izb8veRUg2F92UhWRgmVA2WbMxrIaIiq3JMzdHOd6V1giYQ__",
        ],
      title: "Discover the Latest Trends",
    },
  ];

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

  // Function to determine if a slide should be blurred
  const getSlideStyles = (index) => {
    if (index === currentIndex) {
      return "opacity-100 scale-100 blur-none z-30";
    }

    // Left slide
    if (
      index === currentIndex - 1 ||
      (currentIndex === 0 && index === slides.length - 1)
    ) {
      return "opacity-50 scale-95 blur-md z-20 -translate-x-1/4";
    }

    // Right slide
    if (
      index === currentIndex + 1 ||
      (currentIndex === slides.length - 1 && index === 0)
    ) {
      return "opacity-50 scale-95 blur-md z-20 translate-x-1/4";
    }

    return "opacity-0 scale-90 blur-lg";
  };

  return (
    <div className="relative h-screen overflow-hidden bg-neutral-900">
      {/* Carousel container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${getSlideStyles(
              index
            )}`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-contain pt-10"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4 sm:px-6">
              {/* Slide Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">
                {slide.title}
              </h1>

              {/* Shop Now Button */}
              <button className="bg-white text-black px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full text-lg sm:text-xl font-medium hover:bg-black hover:text-white border-2 border-white transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 -translate-y-1/2 text-white text-4xl bg-black/50 p-3 rounded-full hover:bg-black transition-all z-40"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 -translate-y-1/2 text-white text-4xl bg-black/50 p-3 rounded-full hover:bg-black transition-all z-40"
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2 z-40">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              currentIndex === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
