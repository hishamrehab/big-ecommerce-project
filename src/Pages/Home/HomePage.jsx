import React from "react";
import Slider from "../../Components/Home/Slider";
import HomeCategory from "../../Components/Home/HomeCategory";
import CardProductsCotainer from "../../Components/Products/CardProductsCotainer";
import DiscountSection from "../../Components/Home/DiscountSection";
import BrandCartConatiner from "../../Brand/BrandCartConatiner";

const HomePage = () => {
  return (
    <div>
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
    </div>
  );
};

export default HomePage;
