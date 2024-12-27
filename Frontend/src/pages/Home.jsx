import CategoryShowcase from "../components/CategoryShowcase";
import DesignDisplay from "../components/DesignDisplay";
import Gallery from "../components/Gallery";
import HeroCarousel from "../components/HeroCarousel";
import Products from "../components/ProductsGrid";
import Testimonials from "../components/Testimonials";
// import { Heading } from "lucide-react";

import Heading from "../components/Heading";
const Home = () => {
  return (
    <div>
      <div className="pt-16">
      <Heading />
      </div>
        <HeroCarousel />
      <CategoryShowcase />
      <DesignDisplay />
      <Products />
      <Gallery />
      <Testimonials />
    </div>
  );
};

export default Home;
