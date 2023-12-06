import React from "react";
import NavBarLogin from "../../Components/utility/NavBarLogin";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsCotainer from "../../Components/Products/CardProductsCotainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandCartConatiner from "../../Brand/BrandCartConatiner";
import Footer from "../../Components/utility/Footer";
const HomePage = () => {
  return (
    <div>
      <NavBarLogin />
      <Slider />
      <div className="container">
        <HomeCategory />
        <CardProductsCotainer
          title="More"
          btntitle="best seller"
          maintitle="Products"
        />
        <DiscountSection />
        <CardProductsCotainer
          title="More"
          btntitle="Latest fashion"
          maintitle="Latest Fashion"
        />
        <BrandCartConatiner />
      
        </div>
        <Footer />
    </div>
  );
};

export default HomePage;
