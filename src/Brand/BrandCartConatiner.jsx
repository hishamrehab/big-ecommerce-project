import React from "react";
import BrandCard from "./BrandCard";
import BrownShart from "../Images/Brown shirt.jpg";
import MainTitle from "../Components/Home/mainTitle";
import SubTitle from "../Components/utility/SubTitle";
const BrandCartConatiner = () => {
  return (
    <>
      <MainTitle MainTitle="OURPrands"/>
      <SubTitle title="More" btntitle="brands" />
      <div className="my-2 d-flex justify-content-between">
        <BrandCard img={BrownShart} />
        <BrandCard img={BrownShart} />
        <BrandCard img={BrownShart} />
        <BrandCard img={BrownShart} />
      </div>
    </>
  );
};

export default BrandCartConatiner;
