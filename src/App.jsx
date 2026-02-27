import "./App.css";
import { lazy, Suspense } from "react";
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

const NextLynxAiBlogPage = lazy(() => import("./pages/NextLynxAiBlogPage"));

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
            <Route path="/blog" element={<Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="w-8 h-8 border-2 border-secondary border-t-transparent rounded-full animate-spin"></div></div>}><NextLynxAiBlogPage /></Suspense>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
