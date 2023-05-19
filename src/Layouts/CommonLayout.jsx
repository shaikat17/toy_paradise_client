import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const CommonLayout = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div data-aos="fade-down">
        <Navbar />
      </div>

      <Outlet />
      <div data-aos="fade-up">
        <Footer />
      </div>
    </>
  );
};

export default CommonLayout;
