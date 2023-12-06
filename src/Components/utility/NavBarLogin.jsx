import React from "react";
import ecommercelogo from "../../Images/ecommmerce.png";
import { Box, Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "@mui/material";

const NavBarLogin = () => {
  return (
    <Box
      className="Navbar-box"
      sx={{
        paddingTop: "20px",
        paddingLeft: "120px",
        width: "100%",
        background: "#777",
        display: "flex",
        justifyContent: "space-between",
        gap: "60px",
        paddingRight: "20px",
        color: "white",
        paddingBottom: "10px",
        textAlign: "center",
        flexWrap: "nowrap",
      }}
    >
      <img
        src={ecommercelogo}
        style={{
          with: "170px",
          height: "30px",
        }}
      />

      <div className="input-group ">
        <div className=" flex-grow-1 " data-mdb-input-init>
          <input type="search" id="form1" className="form-control " />
          <label className="form-label " for="form1">
            Search...
          </label>
        </div>
      </div>
      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
        }}
      >
        <AccountCircleIcon />
        <Typography>Login</Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          cursor: "pointer",
        }}
      >
        <ShoppingCartIcon />
        <Typography>Cart</Typography>
      </Box>
    </Box>
  );
};

export default NavBarLogin;
