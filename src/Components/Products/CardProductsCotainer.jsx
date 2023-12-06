import React from "react";
import ProductCart from "./ProductCart";
import MainTitle from "../Home/mainTitle";
import SubTitle from "../utility/SubTitle";

const CardProductsCotainer = ({title, btntitle , maintitle }) => {
  return (
    <div className="container ">
      <MainTitle  MainTitle={maintitle}/>
      <SubTitle title={title} btntitle={btntitle} />
      <div className="d-flex flex-wrap gap-4">
        <ProductCart />
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </div>
  );
};

export default CardProductsCotainer;
