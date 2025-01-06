import React from "react";

const HeroCarousel = () => {
  return (
    <div className="relative min-h-screen bg-neutral-900 antonio">
      {/* Main image and content */}
      <div>
        {/* Background image */}
        <div className="absolute inset-0 ">
          <img
            src="https://s3-alpha-sig.figma.com/img/5e0e/24aa/8a88ba4dec037f1f95362d28c74476a4?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ECXrkEeFEh-F1vGkocCFmZajquKTBJimp0CAEmzhZghMO4V5ub3Ziba0ErbbRiHsNxfJgq13Lp74lweXA3qdnzyzeuw1ib3RO7nny1t7VyrRhKmL~Y1kHGtIDU3X-Ql4sirv1l0Mt3xR~n4lJ0Is5vMKqIew2eDPduchSWZcduuypZ4UnaCah2z6DF2OLC8Rcu41eSU~-5aCEPtVAkIz6r2qJKuGjV2o8TxeAYbwfRIqyxNnvI5qalAvKyRAJGcJfA6g7GAuTTc3dyMmDfdwLGQWftfxhljU0fBBeYMOguMlz3Bqu7RI~GT5hl2pUk2vl6mLxoIYYJilsF2ZIqDP-Q__"
            alt="Fashion Collection Background"
            className="w-full h-full object-cover "
          />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-center pb-24 h-full w-full bg-gradient-to-b from-transparent via-black/50 to-black">
          <div className="text-center text-white space-y-8 max-w-4xl px-6">
            <h1 className="text-6xl md:text-7xl font-bold leading-tight">
              Premium Quality
              <br />
              Wardrobe Picks
            </h1>

            {/* Shop Now Button */}
            <button className="mt-12 bg-black text-white px-12 py-4 rounded-full text-xl font-medium border-2 border-white hover:bg-white hover:text-black hover:border-black transition-all duration-300 shadow-lg shadow-white/20 relative overflow-hidden group">
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCarousel;
