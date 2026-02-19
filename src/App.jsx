import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Intermidiaries from "./pages/Intermidiaries";
import AccademyPage from "./pages/AccademyPage";
import Talent from "./pages/Talent";
import Marketing from "./pages/Marketing";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUs from "./pages/AboutUs";
import SoftwarePage from "./pages/SoftwarePage";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-primary">
        <Navbar />
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/intermediary" element={<Intermidiaries />} />
            <Route path="/academy" element={<AccademyPage />} />
            <Route path="/talent" element={<Talent />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/software" element={<SoftwarePage />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
