
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import MenuPage from "./pages/MenuPage";
import PricingPage from "./pages/PricingPage";
import PagesPage from "./pages/PagesPage";
import Deliverypage from "./pages/DeliveryPage";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/pages" element={<PagesPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/delivery" element={<Deliverypage />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
