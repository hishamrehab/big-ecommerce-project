import React from "react";

const SubTitle = ({ title, btntitle }) => {
  return (
    <div className="d-flex justify-content-between pt-4  cursor-pointer ">
      <h5 className="sub-title mt-3 border-1 ">{title}</h5>
      {btntitle ? <h5 className="shopping-now mt-3  ">{btntitle}</h5> : null}
    </div>
  );
};

export default SubTitle;
