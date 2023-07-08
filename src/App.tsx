import "./App.css";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Reservation from "@/pages/Reservation";
import AboutUs from "@/pages/AboutUs";
import Menu from "@/pages/Menu";
import NotFound from "@/pages/NotFound";
import Footer from "@/components/Footer";

export default function App() {

  useEffect(() => {
    document.body.classList.add("bg-[#f1f5dd]");
  }, []);
  return (
    <>
    <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="reservation" element={<Reservation />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

