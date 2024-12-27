import { useState } from "react";
import { User, Truck, Star, Heart, MessageCircle } from "lucide-react";

const Testimonials = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const features = [
    {
      icon: (
        <Truck className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-olive-800" />
      ),
      title: "Fast Shipping",
      description: "Quick delivery across India",
    },
    {
      icon: (
        <Star className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-olive-800" />
      ),
      title: "Premium Material",
      description: "Highest quality fabrics",
    },
    {
      icon: (
        <MessageCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-olive-800" />
      ),
      title: "24/7 Support",
      description: "Always here to help",
    },
    {
      icon: (
        <Heart className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-olive-800" />
      ),
      title: "Made in India",
      description: "Supporting local artipoppins",
    },
  ];

  const reviews = [
    {
      id: 1,
      name: "Aryan K.",
      rating: 5,
      role: "Verified Buyer",
      text: "The quality of the clothes exceeded my expectations. The attention to detail in the stitching and the premium fabric used make these pieces stand out. The customer service team was incredibly helpful throughout my purchase journey.",
      image:
        "https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      name: "Priya M.",
      rating: 5,
      role: "Fashion Designer",
      text: "As a fashion designer, I'm particularly impressed with the craftsmanship. The fusion of traditional and modern elements is executed beautifully. The clothing not only looks great but is also comfortable for daily wear.",
      image:
        "https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      name: "Rahul S.",
      rating: 5,
      role: "Regular Customer",
      text: "I've been a regular customer for over a year now, and I'm consistently impressed with the quality and style of each piece. The shipping is always prompt, and the packaging is excellent.",
      image:
        "https://th.bing.com/th/id/OIP.j8yd8dJ5215WbgQ0NsLzuAHaNK?rs=1&pid=ImgDetMain",
    },
  ];

  const nextReview = () => {
    setCurrentReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReviewIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div className="w-full ">
      <div className=" mx-auto  py-16 md:py-24">
        {/* Reviews Section */}
        <div className="mb-16">
          <div className=" mb-12">
            <h1 className="text-3xl md:text-5xl text-[#3D390F]  text-left mb-4 py-8 lg:pl-32">
              Our Reviews
            </h1>
            {/* <p className="text-gray-600 text-left">
              Read genuine reviews from our valued customers about their
              experience with our products and service
            </p> */}
          </div>

          <div className="bg-[#3D390F] p-6 md:p-12 min-h-[60vh]  ">
            <div className="bg-white/60 rounded-lg p-6 md:p-8 max-w-3xl mx-auto shadow-xl min-h-[40vh]">
              <div className="flex flex-col ">
                <div className="flex items-center mb-6">
                  <img
                    src={reviews[currentReviewIndex].image}
                    alt={reviews[currentReviewIndex].name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      {reviews[currentReviewIndex].name}
                    </h4>
                    <p className="text-olive-800 text-sm">
                      {reviews[currentReviewIndex].role}
                    </p>
                  </div>
                </div>

                <div className="flex mb-6">
                  {[...Array(reviews[currentReviewIndex].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current text-yellow-400"
                      />
                    )
                  )}
                </div>

                <p className="text-gray-800 leading-relaxed">
                  {reviews[currentReviewIndex].text}
                </p>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <button
                onClick={prevReview}
                className="p-2 text-white hover:bg-olive-700 rounded-full transition-colors duration-300"
              >
                ←
              </button>
              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      currentReviewIndex === index ? "bg-white" : "bg-gray-600"
                    }`}
                    onClick={() => setCurrentReviewIndex(index)}
                  />
                ))}
              </div>
              <button
                onClick={nextReview}
                className="p-2 text-white hover:bg-olive-700 rounded-full transition-colors duration-300"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="mb-4 p-3 bg-olive-50 rounded-full">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
