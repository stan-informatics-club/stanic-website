import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const PortraitCard = ({ address, title, description, icon }) => {
  return (
    <Link
      to={"/" + address}
      style={{ textDecoration: "none", color: "black" }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          padding: "20px",
          maxWidth: "250px",
          height: { xs: "180px", md: "350px" },
          textAlign: "center",
          backgroundColor: "#D9D9D9",
          "&:hover": {
            boxShadow: "0px 0px 44px 3px rgba(255,255,255,1)",
            transition: "0.3s ease",
          },
        }}
      >
        <Box
          component="img"
          sx={{
            height: { xs: "3em", md: "7em" },
            marginTop: { xs: "-1em", md: "0" },
          }}
          alt="logo-sic"
          src={icon}
        ></Box>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1em", md: "1.2em" },
            fontWeight: "bold",
            color: "#0E2B4A",
            padding: "1em",
            marginTop: { xs: "-1em", md: "0" },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "0.4em", md: "0.8em" },
            textAlign: "justify",
            padding: { xs: "0", md: "1em" },
          }}
        >
          {description}
        </Typography>
      </Box>
    </Link>
  );
};

export default PortraitCard;
