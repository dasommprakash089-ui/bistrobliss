import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import ServicePage from "./pages/ServicePage";
import Navbar from "./Components/Common/Navbar";
import Footer from "./Components/Common/Footer";

const App = () => {
  return(
    <div>
    <Navbar/>
      <BrowserRouter>
      <Routes>
      <Route path="/"element={<HomePage/>}/>
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/service" element={<ServicePage />} />
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  )
}

export default App ;