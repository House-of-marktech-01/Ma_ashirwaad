import React, { useState, useEffect } from "react";

const HeroCarousel = () => {
  const slides = [
    {
      id: 1,
      image:"https://s3-alpha-sig.figma.com/img/5e0e/24aa/8a88ba4dec037f1f95362d28c74476a4?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Vs7RDqCnjk4q9Lx8pM2F8mFdw45w4pWN7lSlD9sgoaPW-9noP-b2TnFC-6~PZVQE~6rvGiHUh3pLDPX7ilIbHRVjq19GQSxYgARyhUmEPB1gq6pDD9BNI2Xm8FyDZcSF9dZRQUy5NZunsHcUkW59-5kPUwbdm9Oy0NrMQLpij7ecik9WRAQlFS59SulQth74bup5Zs-iUre0ArFVdZQWm55hajeTOLYq0VSveNaJZ6OP4~mJKYNq32JWBTrfNgJ3MJeikNU23SliwMx-SXW-uxSmzv6QFVmJx8SszfqMPDTrwHpEc~R1e4Bwp5GVHYPlOzmSELkPcxiUKAkDgrxDnQ__",
      title: "Premium Quality Wardrobe Picks",
    },
    {
      id: 2,
      image: "https://s3-alpha-sig.figma.com/img/f7c9/0855/4e02df6eef8e23963217d8677a2340e0?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OZJonI51TjfHTBx1ae5KXSSUkfMiXec9zB45xZASdmoZ2aD7zG7gsBjeKfJgCececCHDlnoYL6Q8cT3Il9oM~SSbPrmBGt0TSG5Ktd7k9R-8vfZKuDO1bhThzojDRNM~~VNnPN43CMF8MOgSyR4qcVS7iM6txhkrdn4jIFqazVQ7uowOzdWubIU18KWXeHYnn2-5~NWuGBKS-l7GKu7WPHO3N8cYmHe3ozrnAN18jJ3ftXTnJVoNDmr-XM4f4Z9PGtqjlQFn-WnbOPehF0~CRmKKhDg1tcjjRhjRrRXrpu8Y1U0eVAEFv8QtIMBE5ukDZcrE2gQfabFByGAuMhmn8w__",
    title: "Elevate Your Style with Elegance",
  },
  {
    id: 3,
    image:"https://s3-alpha-sig.figma.com/img/50ec/2038/f2a549a8c48e7fb3c77719ba6f75ce15?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JyInbTgeEF1HQDDRQYMfIQPKzp028QZcyCogN9LaaXo3akw2kdKcWHZ7YuWYc3DSyC8Wnms9ENtS0znvO-EDO0QjbqpFcWcWnNokipoFit2lMQYf29JPgkTLIuVlXzJBNIAvKRFgw~bvPz02~Q1g25cK388sOINDWFkLXTJwyyy-c9Rch~Afxk5xabsarfXdRlK1qg768ZFIiDKTMBhjZBdhyVnZbmKRX0ZHS9q8PAjew9jPLVHc7gWRN7ei-tIB69Tuu3Z1TEpKWjDHU6I-THlRg9WZ6rLDLi2BoJttp~1pGI18jsN7AwevJhf-VOqnvxEDnMxLzvGU2SJrERmxfA__",
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
    if ((index === currentIndex - 1) || (currentIndex === 0 && index === slides.length - 1)) {
      return "opacity-50 scale-95 blur-md z-20 -translate-x-1/4";
    }
    
    // Right slide
    if ((index === currentIndex + 1) || (currentIndex === slides.length - 1 && index === 0)) {
      return "opacity-50 scale-95 blur-md z-20 translate-x-1/4";
    }
    
    return "opacity-0 scale-90 blur-lg";
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-neutral-900">
      {/* Carousel container */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-700 ease-in-out ${getSlideStyles(index)}`}
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