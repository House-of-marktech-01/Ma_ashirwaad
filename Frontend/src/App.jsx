import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ContactUs from "./pages/ContactUs";
import Blog from "./pages/Blog";
import { BlogPost } from "./components/BlogPost";
import UserProfile from "./pages/UserProfile";
import ExploreProducts from "./pages/ExploreProducts";
import Cart from "./pages/Cart";
import AdminPanel from "./admin/AdminPanel";
import Dashboard from "./admin/Dashboard";
import Users from "./admin/Users";
import Orders from "./admin/Orders";
import LoginRegister from "./pages/LoginRegister";
import Inbox from "./admin/Inbox";
import ShopPage from "./pages/ShopPage";
import NewArrivals from "./pages/NewArrivals";
import Men from "./pages/Men";
import OrderDetails from './pages/OrderDetails';
import SavedAddress from './pages/SavedAddress';

import ProfileLayout from './components/ProfileLayout';
import WishList from "./pages/Wishlist";


const blogs = [
  {
    id: 1,
    title: "Traditional Kurtas in Modern Times",
    category: "Style Guide",
    date: "22 Nov",
    image: "https://via.placeholder.com/400x400",
    content: [
      "The kurta, a timeless garment deeply rooted in South Asian culture, has evolved significantly in recent years to meet contemporary fashion demands while maintaining its cultural essence.",
      "Modern interpretations of the traditional kurta have introduced innovative design elements, such as minimalist patterns, sustainable fabrics, and fusion styling that bridges the gap between ethnic and western wear.",
      "One of the most notable trends is the rise of the 'smart casual kurta' – a refined version that works perfectly for both office environments and social gatherings. These modern kurtas often feature subtle details like mandarin collars, asymmetric hemlines, and contemporary prints.",
      "The versatility of today's kurta designs allows for endless styling possibilities. Pair them with jeans for a casual look, or opt for traditional bottoms for a more formal appearance. The key is in choosing the right fabric and fit for the occasion.",
    ],
  },
  {
    id: 2,
    title: "Choosing the Perfect Wedding Kurta",
    category: "Fashion Tips",
    date: "21 Nov",
    image: "https://via.placeholder.com/400x400",
    content: [
      "Selecting the ideal wedding kurta requires careful consideration of various factors, from the ceremony type to the season and time of day.",
      "For morning ceremonies, lighter shades and subtle embellishments work best. Consider pastels or ivory kurtas with delicate threadwork. Evening celebrations call for richer colors and more elaborate designs.",
      "The fabric choice is crucial - opt for natural fibers like silk, cotton-silk blends, or premium cotton for comfort during long ceremonies. Hand-embroidered details add a touch of luxury perfect for wedding occasions.",
      "Don't forget to consider the overall wedding theme and color palette. Your kurta should complement, not compete with, the bride's outfit and the wedding décor. Traditional motifs and modern interpretations can be balanced to create a timeless look.",
    ],
  },
  {
    id: 3,
    title: "Festive Season Kurta Trends",
    category: "Seasonal Fashion",
    date: "20 Nov",
    image: "https://via.placeholder.com/400x400",
    content: [
      "This festive season brings exciting new trends in kurta designs, combining traditional craftsmanship with contemporary aesthetics.",
      "Bold color combinations are making a strong statement, with designers experimenting with unexpected color pairings. Jewel tones remain popular, but with modern twists in styling and embellishments.",
      "Sustainable fashion is influencing festive wear, with many collections featuring handwoven fabrics and natural dyes. These eco-friendly options not only look good but also support traditional artipoppins.",
      "Accessories play a crucial role in festive kurta styling. From traditional jewelry to modern accessories, the right combination can elevate your festive look to new heights.",
    ],
  },
];

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin-Panel" element={<AdminPanel />} />
        <Route path="/admin-panel/dashboard" element={<Dashboard />} />
        <Route path="/admin-panel/users" element={<Users />} />
        <Route path="/admin-panel/orders" element={<Orders />} />
        <Route path="/admin-panel/inbox" element={<Inbox />} />
        <Route path="/login-register" element={<LoginRegister />} />
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/blog" element={<Blog blogs={blogs} />} />
                <Route path="/blog/:id" element={<BlogPost blogs={blogs} />} />
                <Route path="/explore-products" element={<ExploreProducts />} />
                <Route path="/contact" element={<ContactUs />} />
               
                <Route path="/cart" element={<Cart />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/men" element={<Men />} />
                <Route path="/new-arrival" element={<NewArrivals />} />
                
                <Route path="/" element={<ProfileLayout />}>
                  <Route path="/profile" element={<UserProfile />} />
                  <Route path="/order-details" element={<OrderDetails />} />
                  <Route path="/wishlist" element={<WishList />} />
                  <Route path="/saved-address" element={<SavedAddress />} />
                </Route>
              </Routes>
              
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
