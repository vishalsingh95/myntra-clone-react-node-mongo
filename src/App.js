import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderHistory from "./pages/OrderHistory";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Kids from "./pages/Kids";
import Accessories from "./pages/Accessories";
import HomeAndLiving from "./pages/HomeAndLiving";
import Beauty from "./pages/Beauty";
import Studio from "./pages/Studio";
import Trending from "./pages/Trending";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Feedback from "./pages/Feedback";
import Faq from "./pages/Faq";
import Logout from "./pages/Logout";
import Admin from "./pages/Admin";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/support" element={<Support />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/home-living" element={<HomeAndLiving />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/support" element={<Support />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/admin" element={<Admin />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
