import React, { useEffect } from "react";
import CommonLayout from "../Layouts/CommonLayout";
import HomeBanner from "../Components/HomeBanner";
import FeatureSection from "../Components/Feature";
import { useGlobalContext } from "../context/AppAuthContext";
import AOS from "aos";
import "aos/dist/aos.css";
import NewsLetter from "../Components/NewsLetter";
import ShopByCategory from "../Components/ShopByCategory";
import PhotoGallery from "../Components/PhotoGallery";
import { useLocation } from "react-router-dom";
import { changeTitle } from "../utils/dynamicTitle";
import AboutUs from "../Components/AboutUs";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  // console.log(value)
  const { pathname } = useLocation();
  changeTitle(pathname);

  return (
    <>
      <div data-aos="fade-right">
        <HomeBanner />
      </div>
      <div data-aos="fade-up-left">
        <PhotoGallery />
      </div>
      <div data-aos="fade-right">
        <FeatureSection />
      </div>
      <div data-aos="fade-up">
        <ShopByCategory />
      </div>
      <div data-aos="fade-left">
        <AboutUs />
      </div>
      <div data-aos="fade-right">
        <NewsLetter />
      </div>
    </>
  );
};

export default Home;
