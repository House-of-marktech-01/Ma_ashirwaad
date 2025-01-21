import CategoryShowcase from "../components/CategoryShowcase";
import DesignDisplay from "../components/DesignDisplay";
import Gallery from "../components/Gallery";
import HeroCarousel from "../components/HeroCarousel";
import Testimonials from "../components/Testimonials";

import CategoryCircle from "../components/CategoryCircle";
import ProductGrid from "../components/ProductGrid";

const sarees = [
  {
    id: 1,
    name: "Silk Saree",
    price: "₹4,999",
    image:
      "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Cotton Saree",
    price: "₹2,599",
    image:
      "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    name: "Banarasi Saree",
    price: "₹8,499",
    image:
      "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    name: "Georgette Saree",
    price: "₹3,999",
    image:
      "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    name: "Chiffon Saree",
    price: "₹2,999",
    image:
      "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    name: "Printed Saree",
    price: "₹1,999",
    image:
      "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Home = () => {
  return (
    <>
      <div className="pt-24">
        <HeroCarousel />
      </div>
      <CategoryCircle />
      <CategoryShowcase />
      {/* <ProductGrid title="Women nighties" products={sarees} /> */}
      <Gallery />
      <Testimonials />
    </>
  );
};

export default Home;
