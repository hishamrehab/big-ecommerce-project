import React from 'react'

const BrandCard = ({img}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" style={{
            width:"150px",
            height:"150px"
        }}/>
      </a>
    </div>
  );
}

export default BrandCard