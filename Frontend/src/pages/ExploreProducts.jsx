import DesignDisplay from "../components/DesignDisplay";
import ProductGrid from "../components/ProductGrid";

function ExploreProducts() {
  // Example product data for different categories
  const nighties = [
    {
      id: 1,
      name: "Cotton Nighty",
      price: "₹799",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Satin Nighty",
      price: "₹1,299",

      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Floral Printed Nighty",
      price: "₹999",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Long Sleeved Nighty",
      price: "₹1,099",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Women's Printed Kurta",
      price: "₹999",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Women's Printed Kurta",
      price: "₹999",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const kurtas = [
    {
      id: 1,
      name: "Men's Cotton Kurta",
      price: "₹1,199",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      name: "Women's Embroidered Kurta",
      price: "₹1,599",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      name: "Men's Silk Kurta",
      price: "₹2,499",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      name: "Women's Printed Kurta",
      price: "₹999",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 5,
      name: "Women's Printed Kurta",
      price: "₹999",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 6,
      name: "Women's Printed Kurta",
      price: "₹999",
      image:
        "https://images.pexels.com/photos/14768019/pexels-photo-14768019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

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

  return (
    <div className="pt-24">
      <DesignDisplay />
      <ProductGrid title="Nighties" products={nighties} />
      <ProductGrid title="Kurta" products={kurtas} />
      <ProductGrid title="Sarees" products={sarees} />
      {/* <Products /> */}
    </div>
  );
}

export default ExploreProducts;
