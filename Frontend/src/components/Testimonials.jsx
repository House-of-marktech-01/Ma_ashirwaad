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
      image:
        "https://s3-alpha-sig.figma.com/img/e111/a35c/2e4dfbd3ba647c843975444ef1357b6c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akgqEbLN87uZwO5gSjzyftCkGdyPJZLS8ynWxm-Zm8-VvYUnxof9Pq6kkXWh3g2wI9rxm9kJUCkaAGX-Rqx79f41pUJPY97XphUiaLgQ2qtC9IKQZks7YdSKb~gQ7VoTSaJ~2dqKcyf1ZwpSd6zzEyQ1HVURKmsUOqHdngLHd82fxSg7M1LeyDPN87J2pfvArIztidOlTbf736VehUzB2y5XriV50wrHBsDkK8ieNa4jRqb-nzPXE1pqbapXmGucJSxB5gCFfxHAqrXYqt1lF46L9vqPulr11TKxPylL9q63vX~lsFqtDWw13yEaMZCjCCufl3-jJdU6rJabT0vEBw__", // Manually added image URL here
      clothImage: "https://s3-alpha-sig.figma.com/img/6460/5589/9ab7413ebc6cc6d0123596ca88fdaf92?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsOQR-~9TK4uCO8x-xrmqka13m3eP~bDCsCQ29iNqV7i1cKYIX482rYO5IDGtecm6d3nA22P5Rs2znlSPycS8T~xdOPefDLib5DtyJ9nKyXqLFM8TJnNXVceLs1SrxpL3B2nXUAvIFDWOgc9A8zmK13H194l5HmwdTac4QaOT88fQv3HijDiKC0JwKreIJwutZMQT4civMyPm0P-Ps1xooYfaPo4kD5fW6u7mnYXJt4-wx6PWvG6K0ftPZOzTmpO3Huny2pMWb1plO02FxsfeIQF8MPDoRjkcT8neQ~~MSIi6aVnyb6JwLZFPSboQo13PCI-oRmGgEQ6lt0YJMPvgA__", // Cloth image URL
    },
    {
      id: 2,
      name: "Priya M.",
      rating: 5,
      role: "Fashion Designer",
      text: "As a fashion designer, I'm particularly impressed with the craftsmanship. The fusion of traditional and modern elements is executed beautifully. The clothing not only looks great but is also comfortable for daily wear.",
      image:
        "https://s3-alpha-sig.figma.com/img/e111/a35c/2e4dfbd3ba647c843975444ef1357b6c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akgqEbLN87uZwO5gSjzyftCkGdyPJZLS8ynWxm-Zm8-VvYUnxof9Pq6kkXWh3g2wI9rxm9kJUCkaAGX-Rqx79f41pUJPY97XphUiaLgQ2qtC9IKQZks7YdSKb~gQ7VoTSaJ~2dqKcyf1ZwpSd6zzEyQ1HVURKmsUOqHdngLHd82fxSg7M1LeyDPN87J2pfvArIztidOlTbf736VehUzB2y5XriV50wrHBsDkK8ieNa4jRqb-nzPXE1pqbapXmGucJSxB5gCFfxHAqrXYqt1lF46L9vqPulr11TKxPylL9q63vX~lsFqtDWw13yEaMZCjCCufl3-jJdU6rJabT0vEBw__", // Manually added image URL here
      clothImage: "https://s3-alpha-sig.figma.com/img/6460/5589/9ab7413ebc6cc6d0123596ca88fdaf92?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsOQR-~9TK4uCO8x-xrmqka13m3eP~bDCsCQ29iNqV7i1cKYIX482rYO5IDGtecm6d3nA22P5Rs2znlSPycS8T~xdOPefDLib5DtyJ9nKyXqLFM8TJnNXVceLs1SrxpL3B2nXUAvIFDWOgc9A8zmK13H194l5HmwdTac4QaOT88fQv3HijDiKC0JwKreIJwutZMQT4civMyPm0P-Ps1xooYfaPo4kD5fW6u7mnYXJt4-wx6PWvG6K0ftPZOzTmpO3Huny2pMWb1plO02FxsfeIQF8MPDoRjkcT8neQ~~MSIi6aVnyb6JwLZFPSboQo13PCI-oRmGgEQ6lt0YJMPvgA__", // Cloth image URL
    },
    {
      id: 3,
      name: "Rahul S.",
      rating: 5,
      role: "Regular Customer",
      text: "I've been a regular customer for over a year now, and I'm consistently impressed with the quality and style of each piece. The shipping is always prompt, and the packaging is excellent.",
      image:
        "https://s3-alpha-sig.figma.com/img/e111/a35c/2e4dfbd3ba647c843975444ef1357b6c?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=akgqEbLN87uZwO5gSjzyftCkGdyPJZLS8ynWxm-Zm8-VvYUnxof9Pq6kkXWh3g2wI9rxm9kJUCkaAGX-Rqx79f41pUJPY97XphUiaLgQ2qtC9IKQZks7YdSKb~gQ7VoTSaJ~2dqKcyf1ZwpSd6zzEyQ1HVURKmsUOqHdngLHd82fxSg7M1LeyDPN87J2pfvArIztidOlTbf736VehUzB2y5XriV50wrHBsDkK8ieNa4jRqb-nzPXE1pqbapXmGucJSxB5gCFfxHAqrXYqt1lF46L9vqPulr11TKxPylL9q63vX~lsFqtDWw13yEaMZCjCCufl3-jJdU6rJabT0vEBw__", // Manually added image URL here
      clothImage: "https://s3-alpha-sig.figma.com/img/6460/5589/9ab7413ebc6cc6d0123596ca88fdaf92?Expires=1737936000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IsOQR-~9TK4uCO8x-xrmqka13m3eP~bDCsCQ29iNqV7i1cKYIX482rYO5IDGtecm6d3nA22P5Rs2znlSPycS8T~xdOPefDLib5DtyJ9nKyXqLFM8TJnNXVceLs1SrxpL3B2nXUAvIFDWOgc9A8zmK13H194l5HmwdTac4QaOT88fQv3HijDiKC0JwKreIJwutZMQT4civMyPm0P-Ps1xooYfaPo4kD5fW6u7mnYXJt4-wx6PWvG6K0ftPZOzTmpO3Huny2pMWb1plO02FxsfeIQF8MPDoRjkcT8neQ~~MSIi6aVnyb6JwLZFPSboQo13PCI-oRmGgEQ6lt0YJMPvgA__", // Cloth image URL
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
            <div className="w-[400px] h-[400px] bg-white p-6 mx-4 rounded-lg shadow-xl text-black flex flex-col justify-between">
              <div className="flex flex-col justify-center items-center mb-4">
                {/* Reviewer's Rounded Photo */}
                <img
                  src={reviews[currentReviewIndex].image}
                  alt="Reviewer"
                  className="w-24 h-24 rounded-full object-cover mb-2"
                />
                {/* Reviewer's Name */}
                <p className="text-xl font-semibold">
                  {reviews[currentReviewIndex].name}
                </p>
                <p className="text-sm text-olive-300">
                  {reviews[currentReviewIndex].role}
                </p>
              </div>

              <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col justify-between w-full mb-4">
                  {/* Review Text */}
                  <p className="text-sm leading-relaxed mb-4">
                    {reviews[currentReviewIndex].text}
                  </p>
                  {/* Star Rating in the center */}
                  <div className="flex justify-center mb-4">
                    {[...Array(reviews[currentReviewIndex].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-current text-yellow-400 inline-block"
                        />
                      )
                    )}
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
          <div className="flex justify-start w-full max-w-[550px] mt-6 space-x-2 pl-0 ml-0">
            <button
              onClick={prevReview}
              className="p-4 text-black border-2 text-2xl font-extrabold border-black bg-white hover:bg-blue-800  transition"
            >
              ←
            </button>
            <button
              onClick={nextReview}
              className="p-4 text-black border-2 text-2xl font-bold border-black bg-white hover:bg-blue-800  transition"
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
