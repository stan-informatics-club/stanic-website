import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function BottomRibbon() {
  return (
    <div>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            background:
              "linear-gradient(90deg, rgba(14,43,74,1) 8%, rgba(33,103,176,1) 100%)",
            padding: "2em ",
          }}
        >
          <Typography sx={{ color: "white", fontWeight: 600, fontSize: "1em" }}>
            Contact Us
          </Typography>
          {/* Social Media */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2em",
              padding: "2em",
            }}
          >
            <Link to="https://google.com">
              <Box
                component="img"
                sx={{ height: { xs: "1.8em", md: "2.8em" } }}
                alt="logo-sic"
                src="/img/socmed-1.png"
              />
            </Link>
            <Link to="https//instagram.com">
              <Box
                component="img"
                sx={{ height: { xs: "2em", md: "3em" } }}
                alt="logo-sic"
                src="/img/socmed-3.png"
              />
            </Link>
          </Box>

          {/* Line */}
          <Box
            sx={{ backgroundColor: "white", height: "0.1em", width: "90vw" }}
          ></Box>

          {/* Navigation */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3em",
              padding: "2em",
            }}
          >
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <Typography
                sx={{
                  color: "White",
                  fontWeight: 500,
                  textDecoration: "underline  ",
                  fontSize: { xs: "0.1em", md: "1em" },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}>
              <Typography
                sx={{
                  color: "White",
                  fontWeight: 500,
                  textDecoration: "underline  ",
                  fontSize: { xs: "0.1em", md: "1em" },
                }}
              >
                About Us
              </Typography>
            </Link>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <Typography
                sx={{
                  color: "White",
                  fontWeight: 500,
                  textDecoration: "underline  ",
                  fontSize: { xs: "0.1em", md: "1em" },
                }}
              >
                Project
              </Typography>
            </Link>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <Typography
                sx={{
                  color: "White",
                  fontWeight: 500,
                  textDecoration: "underline  ",
                  fontSize: { xs: "0.1em", md: "1em" },
                }}
              >
                FAQ
              </Typography>
            </Link>
          </Box>

          {/* Address */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "80vw",
            }}
          >
            <Typography
              sx={{
                color: "white",
                opacity: "70%",
                textDecoration: "underline",
                width: { xs: "50%", md: "20%" },
                fontSize: { xs: "0.5em", md: "1em" },
              }}
            >
              PKN STAN Bintaro Sektor V Tangerang Selatan Indonesia
            </Typography>
            <Box
              component="img"
              sx={{ height: "3em" }}
              alt="logo-sic"
              src="/img/logo_sic.png"
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default BottomRibbon;
