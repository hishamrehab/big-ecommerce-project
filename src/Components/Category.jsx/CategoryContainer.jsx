import React from "react";
import SubTitle from "../utility/SubTitle";
import BlackShirt from "../../Images/blackshart.jpg";
import BlackShirt2 from "../../Images/blueshairt.jpg";
import BlouseJeans from "../../Images/blousejeans.jpg";
import BlouseShairt from "../../Images/blueshairt.jpg";
import CategoryCart from "../Category.jsx/CategoryCart";
import { Box, Typography } from "@mui/material";

const CategoryContainer = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDierection: "row",
          flexWrap: "wrap",
        }}
      >
        <Typography
          sx={{
            marginRight: "auto",
            marginLeft: "auto",
       
            marginTop: "50px",
          }}
        >
          All Categories
        </Typography>
        <CategoryCart title="hello" img={BlackShirt} />
        <CategoryCart title="Sportswear" img={BlackShirt2} />
        <CategoryCart title="Electrical devices" img={BlouseJeans} />
        <CategoryCart title="Fashion" img={BlouseShairt} />
        <CategoryCart title="Games" img={BlouseShairt} />
        <CategoryCart title="Mobiles" img={BlouseShairt} />
        <CategoryCart title="Sportswear" img={BlackShirt2} />
        <CategoryCart title="Electrical devices" img={BlouseJeans} />
        <CategoryCart title="Fashion" img={BlouseShairt} />
        <CategoryCart title="Games" img={BlouseShairt} />
        <CategoryCart title="Mobiles" img={BlouseShairt} />{" "}
        <CategoryCart title="Sportswear" img={BlackShirt2} />
        <CategoryCart title="Electrical devices" img={BlouseJeans} />
        <CategoryCart title="Fashion" img={BlouseShairt} />
        <CategoryCart title="Games" img={BlouseShairt} />
        <CategoryCart title="Mobiles" img={BlouseShairt} />{" "}
        <CategoryCart title="Sportswear" img={BlackShirt2} />
        <CategoryCart title="Electrical devices" img={BlouseJeans} />
        <CategoryCart title="Fashion" img={BlouseShairt} />
        <CategoryCart title="Games" img={BlouseShairt} />
        <CategoryCart title="Mobiles" img={BlouseShairt} />
      </Box>
    </>
  );
};

export default CategoryContainer;
