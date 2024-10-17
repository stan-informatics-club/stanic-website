import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Box, Button, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Frontend() {
  const sliderRef = useRef(null); // Reference to the slider
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of images with name and position
  const images = [
    { src: "/img/frontend/3.png", name: "Risci Akhfareza", position: "Staff" },
    { src: "/img/frontend/4.png", name: "Ufy Ananda", position: "Staff" },
    { src: "/img/frontend/5.png", name: "Roni Nur H.", position: "Staff" },
    { src: "/img/frontend/6.png", name: "Rayhan Rahma", position: "Staff" },
    { src: "/img/frontend/7.png", name: "Arridho Rizki", position: "Staff" },
    { src: "/img/frontend/8.png", name: "Surya Kencana", position: "Staff" },
    { src: "/img/frontend/9.png", name: "Baratio Athallah", position: "Staff" },
    { src: "/img/frontend/10.png", name: "Tuah Wahyu", position: "Staff" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 images at a time
    slidesToScroll: 1, // Scroll 1 image at a time
    beforeChange: (oldIndex, newIndex) => setCurrentIndex(newIndex), // Update index on slide change
    autoplay: false, // Turn off autoplay in the settings, we'll handle it manually
    arrows: false,
  };

  // Manual slide using buttons
  const goToNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  // Automatically move to the next slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    }, 3000); // 3 seconds

    return () => clearInterval(timer); // Cleanup the timer
  }, []);

  return (
    <Box textAlign="center" mt={5}>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          color: "#307CC0",
          fontSize: { xs: "2em", md: "3em" },
          fontWeight: 800,
          textAlign: "center",
        }}
      >
        Divisi Frontend & UI/UX
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          marginTop: { xs: "-2em", md: "-5em" },
        }}
      >
        <Box display="flex" flexDirection="column" alignItems="center">
          {/* Image */}
          <Box
            component="img"
            src="/img/frontend/1.png"
            alt="damai"
            sx={{
              borderRadius: "50%",
              width: {
                xs: "100%",
                md: "400px",
              },
              height: "auto",
              maxWidth: "100%",
            }}
          />
          {/* Name and Position */}
          <Typography
            variant="h6"
            mt={2}
            sx={{ marginTop: "-2em", fontSize: { xs: "1em", md: "1.5em" } }}
          >
            Moch. Amil Labib
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ fontSize: { xs: "0.7em", md: "1em" } }}
          >
            Kepala Divisi
          </Typography>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{ marginLeft: { xs: "-2em", md: "0" } }}
        >
          {/* Image */}
          <Box
            component="img"
            src="/img/frontend/2.png"
            alt="damai"
            sx={{
              borderRadius: "50%",
              width: {
                xs: "100%",
                md: "400px",
              },
              height: "auto",
              maxWidth: "100%",
            }}
          />
          {/* Name and Position */}
          <Typography
            variant="h6"
            mt={2}
            sx={{ marginTop: "-2em", fontSize: { xs: "1em", md: "1.5em" } }}
          >
            Muhammad Alfian
          </Typography>
          <Typography
            variant="body1"
            color="textSecondary"
            sx={{ fontSize: { xs: "0.7em", md: "1em" } }}
          >
            Wakil Kepala Divisi
          </Typography>
        </Box>
      </Box>

      <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
        {/* Previous Button */}
        <ArrowForwardIosIcon
          onClick={goToPrev}
          sx={{
            cursor: "pointer",
            color: "black",
            transform: "rotate(180deg)",
            fontSize: { xs: "1em", md: "2em" },
            marginRight: { xs: "-2em", md: "0" },
          }}
        />
        <Box
          mx={3}
          sx={{
            marginTop: { xs: "0", md: "-3em" },
            width: { xs: "90%", md: "60%" },
          }}
        >
          {" "}
          {/* Adjust width for 3 images */}
          <Box
            mx={3}
            sx={{
              marginTop: { xs: "0", md: "0" },
              width: { xs: "90%", md: "100%" },
            }}
          >
            <Slider {...settings} ref={sliderRef}>
              {images.map((image, index) => (
                <div key={index}>
                  <Box
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                  >
                    {/* Image */}

                    <Box
                      component="img"
                      src={image.src}
                      alt={`${index + 1}`}
                      sx={{
                        borderRadius: "50%",
                        width: {
                          xs: "100%",
                          md: "400px",
                        },
                        height: "auto",
                        maxWidth: "100%",
                      }}
                    />
                    {/* Name and Position */}
                    <Typography
                      variant="h6"
                      mt={2}
                      sx={{
                        marginTop: "-2em",
                        fontSize: { xs: "0.7em", md: "1em" },
                      }}
                    >
                      {image.name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      sx={{ fontSize: { xs: "0.7em", md: "1em" } }}
                    >
                      {image.position}
                    </Typography>
                  </Box>
                </div>
              ))}
            </Slider>
          </Box>
        </Box>
        {/* Next Button */}
        <ArrowForwardIosIcon
          fontSize="large"
          onClick={goToNext}
          sx={{
            cursor: "pointer",
            color: "black",
            fontSize: { xs: "1em", md: "2em" },
            marginLeft: { xs: "-2em", md: "0em" },
          }}
        />
      </Box>
    </Box>
  );
}

export default Frontend;
