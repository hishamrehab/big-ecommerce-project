import React from "react";
import { Link } from "react-router-dom";
const SubTitle = ({ title, btntitle, pathText }) => {
  return (
    <div className="d-flex justify-content-between pt-4  cursor-pointer ">
      <Link
        to={`${pathText}`}
        style={{
          textDecoration: "none",
        }}
      >
        <h5 className="sub-title mt-3 border-1 ">{title}</h5>
        {btntitle ? <h5 className="shopping-now mt-3  ">{btntitle}</h5> : null}
      </Link>
    </div>
  );
};

export default SubTitle;
