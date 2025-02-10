import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import art1 from "../assets/images/Flower-Brooch.jpg";
import nightdress1 from "../assets/images/nightdress1.jpg";
import hairclip from "../assets/images/hairclip.jpg";

const CategoryCircle = () => {
  const scrollContainer = useRef(null);
  const navigate = useNavigate();

  const categories = [
    {
      name: "Fashion",
      image: nightdress1,
      path: "/women",
      filterValue: "All"
    },
    {
      name: "Decorations",
      image: art1,
      path: "/artsandcrafts",
      filterValue: "All"
    },
    {
      name: "Hair Accessories",
      image: hairclip,
      path: "",
      filterValue: ""
    },
    {
      name: "Loungewear",
      image: "https://img.fkcdn.com/image/xif0q/night-dress-nighty/e/b/6/xxl-madhya-urban-d-cor-original-imagp4jna8bghrsy.jpeg",
      path: "",
      filterValue: ""
    },
    {
      name: "Men Collection",
      image:"https://s3-alpha-sig.figma.com/img/28c7/5265/836787e5bbe2a4630d33f0d1e2b6e126?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=DskvrlNDcGNFs20v1uTj8hkSPPYKLa8NBLKDue0REoiZxyJWwhI-RG0QVrgVeYm7KHH~FBI1yashI3gpDs9BekkMQsUW6sWFkN8DlqUZM8qE1FUvnYZTKj-M3mGl6PvfROvyjVztoVRC23slXwseuVsC0pPqDzUKNRIMAkqbkg2ieokcmYznorO-aTcAXO3FKOth9nvhjYqRqC9piK4IB5XaNU0caBWYxmtSPVgn2441AV9Iaacv8~IFh4hGF0QkXVMJeyqOond5geB1~eWEGoiM2XhaOF4cU0CgBJcf30gAzWfgodFkC7gfYi0aWje~02s1TJXhY-At~ozo045JpA__",
      path: "",
      filterValue: ""
    },
    {
      name: "New Arrivals", 
      image:"https://s3-alpha-sig.figma.com/img/9662/436c/8d09a81342202b22ffb289fa1510a726?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WHXzfUIlha4PSnGRD8eV5N0WMPvkMajRChkUJH8xfgGKjBq~HXq9XABKC7EB~oeKirM~ysVJXgH-tT56fQBd25iTClUBJh0bMctGBkp8EivR0CIcfmoL8aaN3Ld1VQKC4N2PlBoN190bInc54PQ3wxB64xuAXCVCC4Se79-D20qOVMOOziyTmqlqmokqUdSQ3FltPDgkUNjWUoT989djKumxagHuKFdoxX4586w~xCpPbX8kFZWM~FzzPRFEY~rlXQhLh2Qca1sFuy0C6xFbAtcv~r6gy1uIea6tHBLtrZQ-Kz2R3QfLXmxKBkuPKSZLmcpLSwEZdd9ZCmKAYNa9MQ__",
      path: "",
      filterValue: ""
    },
  ];

  const handleCategoryClick = (category) => {
    if (category.name === "ComingSoon") {
      return;
    }
    navigate(`${category.path}?filter=${category.filterValue}`);
  };

  return (
    <div className="w-full py-10 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Categories Title Card */}
        <div className="bg-red-500 text-white rounded-full absolute left-4 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-10 shadow-md w-28 h-28 flex items-center justify-center">
          <h2 className="text-lg font-medium text-center">Categories</h2>
        </div>

        {/* Scrollable Categories Container */}
        <div
          ref={scrollContainer}
          className="flex overflow-x-auto space-x-6 pl-36 sm:pl-40 scrollbar-hide"
          style={{
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className={`flex flex-col items-center space-y-2 flex-shrink-0 ${
                category.path !== "" ? "cursor-pointer" : "cursor-not-allowed opacity-70"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              <div className="w-36 h-36 rounded-full shadow-md bg-white flex items-center justify-center transition hover:scale-105 ">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-contain rounded-full bg-cover"
                />
              </div>
              <h3 className="text-gray-900 font-medium text-center text-sm">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCircle;