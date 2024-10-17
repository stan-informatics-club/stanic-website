import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LandscapeCard = ({ icon, title, link }) => {
  return (
    <Link
      to={link}
      style={{ textDecoration: "none", color: "inherit" }}
      onClick={() => window.scrollTo(0, 0)}
    >
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "20px",
          padding: "0 auto",
          width: { xs: "120px", md: "300px" },
          height: { xs: "60px", md: "150px" },
          textAlign: "center",
          backgroundColor: "#D9D9D9",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          boxShadow: "0px 0px 30px -14px rgba(0,0,0,1)",
          transition: "0.5s ease",
          "&:hover": {
            boxShadow: "none",
          },
        }}
      >
        <Box sx={{ width: "50%" }}>
          <Box
            component="img"
            sx={{
              height: { xs: "3em", md: "8em" },
              objectFit: "cover",
            }}
            alt="logo-sic"
            src={icon}
          />
        </Box>
        <Box sx={{ width: "50%" }}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: "0.7em", md: "1.2em" },
              fontWeight: "bold",
              color: "#0E2B4A",
              padding: "1em",
              textAlign: "left",
              textDecoration: "none",
              marginLeft: "-1em",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
};

export default LandscapeCard;
