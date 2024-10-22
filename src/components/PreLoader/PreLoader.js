import React, { useEffect, useRef } from "react";
import { Typography } from "@mui/material";
import { gsap } from "gsap";
import "./PreLoader.css";

function PreLoader({ setSlideOut }) {
  const preloaderRef = useRef(null);
  const logoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(preloaderRef.current, {
      opacity: 0,
      duration: 3,
      ease: "power2.inOut",
      stagger: 0.3,
      onComplete: () => {
        setSlideOut(true);
      },
    });

    tl.to(preloaderRef.current, {
      y: "100%",
      duration: 1.3,
      ease: "power2.in",
      delay: 3,
      onComplete: () => {
        setSlideOut(true);
      },
    });
  }, [setSlideOut]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="preloader-content">
        <img src="/img/logo_sic.png" alt="Logo" className="preloader-logo" />
        <Typography
          variant="h4"
          className="preloader-name"
          sx={{ fontWeight: 800, marginTop: "1em", fontSize: "2em" }}
        >
          STAN
        </Typography>
        <Typography
          variant="h4"
          className="preloader-name"
          sx={{ fontWeight: 600, fontSize: "1em" }}
        >
          Informatics Club
        </Typography>
      </div>
    </div>
  );
}

export default PreLoader;
