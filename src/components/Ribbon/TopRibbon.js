import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function TopRibbon() {
  return (
    <Box
      sx={{
        background:
          "linear-gradient(90deg, rgba(14,43,74,1) 8%, rgba(33,103,176,1) 100%)",
        height: { xs: "12vh", md: "12vh" },
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              justifyContent: "left",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              component="img"
              sx={{ width: "50px", height: "50px" }}
              alt="logo-sic"
              src="/img/logo_sic.png"
            ></Box>
          </Box>
          <Box
            sx={{
              justifyContent: "right",
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              gap: { xs: "1em", md: "4em" },
            }}
          >
            {/* Use Link to make the items clickable */}
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                  fontSize: { xs: "0.5rem", md: "1rem" },
                  fontWeight: 500,
                  "&:hover": {
                    opacity: "50%",
                  },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                  fontSize: { xs: "0.5rem", md: "1rem" },
                  fontWeight: 500,
                  "&:hover": {
                    opacity: "50%",
                  },
                }}
              >
                About Us
              </Typography>
            </Link>
            <Link to="/project" style={{ textDecoration: "none" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                  fontSize: { xs: "0.5rem", md: "1rem" },
                  fontWeight: 500,
                  "&:hover": {
                    opacity: "50%",
                  },
                }}
              >
                Project
              </Typography>
            </Link>
            <Link to="/events" style={{ textDecoration: "none" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                  fontSize: { xs: "0.5rem", md: "1rem" },
                  fontWeight: 500,
                  "&:hover": {
                    opacity: "50%",
                  },
                }}
              >
                Events
              </Typography>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                  fontSize: { xs: "0.5rem", md: "1rem" },
                  fontWeight: 500,
                  "&:hover": {
                    opacity: "50%",
                  },
                }}
              >
                Contact
              </Typography>
            </Link>
            <Link to="/faq" style={{ textDecoration: "none" }}>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "white",
                  fontSize: { xs: "0.5rem", md: "1rem" },
                  fontWeight: 500,
                  "&:hover": {
                    opacity: "50%",
                  },
                }}
              >
                FAQ
              </Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default TopRibbon;
