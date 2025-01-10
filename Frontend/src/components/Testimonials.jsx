import { useState } from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);

  const reviews = [
    {
      id: 1,
      name: "Aryan K.",
      rating: 5,
      role: "Verified Buyer",
      text: "The quality of the clothes exceeded my expectations. The attention to detail in the stitching and the premium fabric used make these pieces stand out. The customer service team was incredibly helpful throughout my purchase journey.",
      image: "https://your-image-url.com/your-image.jpg", // Manually added image URL here
      clothImage: "https://your-cloth-image-url.com/cloth-image.jpg", // Cloth image URL
    },
    {
      id: 2,
      name: "Priya M.",
      rating: 5,
      role: "Fashion Designer",
      text: "As a fashion designer, I'm particularly impressed with the craftsmanship. The fusion of traditional and modern elements is executed beautifully. The clothing not only looks great but is also comfortable for daily wear.",
      image: "https://your-image-url.com/your-image.jpg", // Manually added image URL here
      clothImage: "https://your-cloth-image-url.com/cloth-image.jpg", // Cloth image URL
    },
    {
      id: 3,
      name: "Rahul S.",
      rating: 5,
      role: "Regular Customer",
      text: "I've been a regular customer for over a year now, and I'm consistently impressed with the quality and style of each piece. The shipping is always prompt, and the packaging is excellent.",
      image: "https://your-image-url.com/your-image.jpg", // Manually added image URL here
      clothImage: "https://your-cloth-image-url.com/cloth-image.jpg", // Cloth image URL
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
    <div className="w-full py-16 md:py-24 bg-gray-100">
      <div className="flex justify-center items-center flex-row">
        {/* Review and Cloth Box Wrapper */}
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center flex-row mb-6">
            {/* Left Review Box */}
            <div className="w-[400px] h-[400px] bg-blue-950 p-6 mx-4 rounded-lg shadow-xl text-white flex flex-col justify-between">
              <div className="flex flex-col justify-center items-center mb-4">
                {/* Reviewer's Rounded Photo */}
                <img
                  src={reviews[currentReviewIndex].image}
                  alt="Reviewer"
                  className="w-24 h-24 rounded-full object-cover mb-2"
                />
                {/* Reviewer's Name */}
                <p className="text-xl font-semibold">{reviews[currentReviewIndex].name}</p>
                <p className="text-sm text-olive-300">{reviews[currentReviewIndex].role}</p>
              </div>

              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col justify-between w-full mb-4">
                  {/* Review Text */}
                  <p className="text-sm leading-relaxed mb-4">{reviews[currentReviewIndex].text}</p>
                  {/* Star Rating in the center */}
                  <div className="flex justify-center mb-4">
                    {[...Array(reviews[currentReviewIndex].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-current text-yellow-400 inline-block"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Cloth Box */}
            <div className="w-[400px] h-[400px] bg-gray-200 p-6 mx-4 rounded-lg shadow-xl text-black flex flex-col justify-between">
              {/* Random Cloth Image */}
              <img
                src={reviews[currentReviewIndex].clothImage}
                alt="Random Cloth"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Arrows Below Review Box */}
          <div className="flex justify-center w-full max-w-[400px] mt-6 space-x-2">
            <button
              onClick={prevReview}
              className="p-4 text-white bg-blue-700 hover:bg-blue-800 rounded-full transition"
            >
              ←
            </button>
            <button
              onClick={nextReview}
              className="p-4 text-white bg-blue-700 hover:bg-blue-800 rounded-full transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
