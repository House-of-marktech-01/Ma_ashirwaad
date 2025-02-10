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
        "https://s3-alpha-sig.figma.com/img/e111/a35c/2e4dfbd3ba647c843975444ef1357b6c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DnbdwKckwAWt2n0v98rsFc7OgX88d9gKVKSUmLYiWhGgxBvSGNm13QeRZ~CqpzgdxhZvtpT3msy3QAVgVM162naSf2iAemywYuIDpGRGg~Sty4VtRuZy69xBzg7tJcGidOOBpnoWFVt5fxoI5RWyZaipPLWCmj2b~8Av2LtTuDc-wk4Bnl0OzbwXnil~45lt-crxr8p1HmQvA-d6PgE9AeyOsq6DIyWiTA-6K~sQJelsiDJ9KTdm0u0AcIAstAqTMYNoJhTTWiyAha7NYygJMxsG3jLZ8GmZp8EiQQo~cwwrCa9lNy-XKFXN66UQIc1AxS04srC3~obIO0oLZZ5s1w__", // Manually added image URL here
      clothImage: "https://s3-alpha-sig.figma.com/img/6460/5589/9ab7413ebc6cc6d0123596ca88fdaf92?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ggdaH6kRmRcTdW739p7tq71BSiyFoWJZw-XtfR~Vf-T8g~qsgSSbKvjFAKc~sIDhAGHku557w~Yw1fTEJfBGGag1TTBkMtFs3F~QF~Ekft3ruuo2GjrEVzvW78oj-g~vAA4IZW2tnXDggZdxlx5UWAFA8S25tQ7gNpY6Je5RDvpg9N2Wvl8YbFHU39AcvnE6RZjDlQfS9o2~MKtgRwXxx4UNzfuLsVxJTXrKiQ10PIUudwQ0EJWjRxGT-NYzCg8Vs5HpNrZYR6duwjBHVqV2iCzFQ9XnpZbADOPoBmOBXWCYri0Lz3XJfYwOgkS8dVAdHj4hPhYuNI5bXuVKSNR~rg__", // Cloth image URL
    },
    {
      id: 2,
      name: "AP M.",
      rating: 5,
      role: "Fashion Designer",
      text: "As a fashion designer, I'm particularly impressed with the craftsmanship. The fusion of traditional and modern elements is executed beautifully. The clothing not only looks great but is also comfortable for daily wear.",
      image:
        "https://s3-alpha-sig.figma.com/img/e111/a35c/2e4dfbd3ba647c843975444ef1357b6c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DnbdwKckwAWt2n0v98rsFc7OgX88d9gKVKSUmLYiWhGgxBvSGNm13QeRZ~CqpzgdxhZvtpT3msy3QAVgVM162naSf2iAemywYuIDpGRGg~Sty4VtRuZy69xBzg7tJcGidOOBpnoWFVt5fxoI5RWyZaipPLWCmj2b~8Av2LtTuDc-wk4Bnl0OzbwXnil~45lt-crxr8p1HmQvA-d6PgE9AeyOsq6DIyWiTA-6K~sQJelsiDJ9KTdm0u0AcIAstAqTMYNoJhTTWiyAha7NYygJMxsG3jLZ8GmZp8EiQQo~cwwrCa9lNy-XKFXN66UQIc1AxS04srC3~obIO0oLZZ5s1w__", // Manually added image URL here
      clothImage: "https://s3-alpha-sig.figma.com/img/6460/5589/9ab7413ebc6cc6d0123596ca88fdaf92?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ggdaH6kRmRcTdW739p7tq71BSiyFoWJZw-XtfR~Vf-T8g~qsgSSbKvjFAKc~sIDhAGHku557w~Yw1fTEJfBGGag1TTBkMtFs3F~QF~Ekft3ruuo2GjrEVzvW78oj-g~vAA4IZW2tnXDggZdxlx5UWAFA8S25tQ7gNpY6Je5RDvpg9N2Wvl8YbFHU39AcvnE6RZjDlQfS9o2~MKtgRwXxx4UNzfuLsVxJTXrKiQ10PIUudwQ0EJWjRxGT-NYzCg8Vs5HpNrZYR6duwjBHVqV2iCzFQ9XnpZbADOPoBmOBXWCYri0Lz3XJfYwOgkS8dVAdHj4hPhYuNI5bXuVKSNR~rg__", // Cloth image URL
    },
    {
      id: 3,
      name: "Rahul S.",
      rating: 5,
      role: "Regular Customer",
      text: "I've been a regular customer for over a year now, and I'm consistently impressed with the quality and style of each piece. The shipping is always prompt, and the packaging is excellent.",
      image:
        "https://s3-alpha-sig.figma.com/img/e111/a35c/2e4dfbd3ba647c843975444ef1357b6c?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DnbdwKckwAWt2n0v98rsFc7OgX88d9gKVKSUmLYiWhGgxBvSGNm13QeRZ~CqpzgdxhZvtpT3msy3QAVgVM162naSf2iAemywYuIDpGRGg~Sty4VtRuZy69xBzg7tJcGidOOBpnoWFVt5fxoI5RWyZaipPLWCmj2b~8Av2LtTuDc-wk4Bnl0OzbwXnil~45lt-crxr8p1HmQvA-d6PgE9AeyOsq6DIyWiTA-6K~sQJelsiDJ9KTdm0u0AcIAstAqTMYNoJhTTWiyAha7NYygJMxsG3jLZ8GmZp8EiQQo~cwwrCa9lNy-XKFXN66UQIc1AxS04srC3~obIO0oLZZ5s1w__", // Manually added image URL here
      clothImage: "https://s3-alpha-sig.figma.com/img/6460/5589/9ab7413ebc6cc6d0123596ca88fdaf92?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ggdaH6kRmRcTdW739p7tq71BSiyFoWJZw-XtfR~Vf-T8g~qsgSSbKvjFAKc~sIDhAGHku557w~Yw1fTEJfBGGag1TTBkMtFs3F~QF~Ekft3ruuo2GjrEVzvW78oj-g~vAA4IZW2tnXDggZdxlx5UWAFA8S25tQ7gNpY6Je5RDvpg9N2Wvl8YbFHU39AcvnE6RZjDlQfS9o2~MKtgRwXxx4UNzfuLsVxJTXrKiQ10PIUudwQ0EJWjRxGT-NYzCg8Vs5HpNrZYR6duwjBHVqV2iCzFQ9XnpZbADOPoBmOBXWCYri0Lz3XJfYwOgkS8dVAdHj4hPhYuNI5bXuVKSNR~rg__", // Cloth image URL
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
          <div className="flex justify-center items-center flex-col sm:flex-row mb-6">
            {/* Left Review Box */}
            <div className="sm:max-w-[370px] max-w-[400px] h-[400px] lg:max-w-[400px] bg-white p-6 mx-4 sm:mx-0 md:mx-4 rounded-lg shadow-xl text-black flex flex-col justify-between">
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
            <div className="hidden sm:max-w-[370px] sm:w-[370px] h-[400px] lg:max-w-[400px] lg:w-[400px] bg-gray-200 p-6 mx-4 rounded-lg shadow-xl text-black sm:flex flex-col justify-between">
              {/* Random Cloth Image */}
              <img
                src={reviews[currentReviewIndex].clothImage}
                alt="Random Cloth"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Arrows Below Review Box */}
          <div className="flex justify-start  max-w-[550px] mt-6 space-x-2 ">
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
