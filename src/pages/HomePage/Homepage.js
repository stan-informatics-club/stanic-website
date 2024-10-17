import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import PortraitCard from "../../components/Card/PortraitCard";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          sx={{ height: "88vh", objectFit: "cover", width: "100vw" }}
          alt="logo-sic"
          src="/img/banner.png"
        ></Box>
        <Box sx={{ position: "absolute", bottom: 150, left: 50 }}>
          <Typography
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "3em", md: "7em" },
            }}
          >
            STAN
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "2em", md: "5em" },
            }}
          >
            INFORMATICS CLUB
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontWeight: 100,
              fontSize: "1em",
              padding: "1em",
            }}
          >
            UKM at PKN STAN
          </Typography>
          <Box
            sx={{
              backgroundColor: "white",
              width: "10em",
              height: "3em",
              borderRadius: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{ fontWeight: 600, color: "#2E3384", fontSize: "1.5em" }}
            >
              JOIN US
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: { xs: "30vh", md: "50vh" },
          filter: "drop-shadow(0px 0px 19px #000000)",
          borderRadius: "20px",
        }}
      >
        <Box
          component="img"
          sx={{
            height: { xs: "8em", md: "15em" },
          }}
          alt="logo-sic"
          src="/img/logo_sic.png"
        />
        <Box sx={{ width: "50%", marginLeft: "3em" }}>
          <Typography
            sx={{ fontWeight: 800, fontSize: { xs: "1em", md: "3em" } }}
          >
            Apa Itu STAN Informatics Club?
          </Typography>
          <Typography
            sx={{ fontSize: { xs: "0.5em", md: "1em" }, marginY: "1em" }}
          >
            STAN Informatics Club merupakan organisasi yang bertujuan sebagai
            wadah penelitian yang dapat menampung minat dan kemampuan ilmiah
            mahasiswa Politeknik Keuangan Negara STAN dalam ilmu informatika.
          </Typography>
          {/* Button Learn More */}
          <Box
            sx={{
              backgroundColor: "#FDD20B",
              width: "10em",
              height: "2em",
              borderRadius: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <Link
              to="/about"
              style={{ textDecoration: "none" }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Typography
                sx={{
                  color: "white",
                  fontWeight: 600,
                  "&:hover": {
                    opacity: "50%",
                  },
                }}
              >
                Learn More...
              </Typography>
            </Link>
          </Box>
        </Box>
      </Box>
      {/* Activity Section */}
      <Box
        sx={{
          background:
            "linear-gradient(90deg, rgba(14,43,74,1) 8%, rgba(33,103,176,1) 100%)",
          padding: { xs: "20px", md: "100px" },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Event-1 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "0", md: "50px" },
            marginY: "2em",
          }}
        >
          {/* images */}
          <Box sx={{ width: "50%", objectFit: "cover" }}>
            <Box
              component="img"
              sx={{
                height: { xs: "7em", md: "15em" },
                width: { xs: "10em", md: "20em" },
                objectFit: "cover",
              }}
              alt="logo-sic"
              src="/img/event-1.png"
            ></Box>
          </Box>
          {/* Text */}

          <Box sx={{ width: "50%" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "1em", md: "2.5em" },
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              First Gathering
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "0.5em", md: "1em" },
                width: "80%",
                fontWeight: 200,
              }}
            >
              Acara STAN Informatics Club pertama kali untuk saling mengenal dan
              meningkatkan kekompakan satu sama lain sesama anggota organisasi
            </Typography>
          </Box>
        </Box>

        {/* Event 2 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "0", md: "50px" },
            marginY: "2em",
          }}
        >
          {/* Text */}
          <Box sx={{ width: "50%" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "1em", md: "2.5em" },
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              Kelas Rutin
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "0.5em", md: "1em" },
                width: "80%",
                fontWeight: 200,
              }}
            >
              Program kerja dari STAN Informatics Club untuk meningkatkan
              kompetensi dan wawasan dari anggota organisasi sesuai divisinya
            </Typography>
          </Box>
          {/* images */}
          <Box sx={{ width: "50%", objectFit: "cover" }}>
            <Box
              component="img"
              sx={{
                height: { xs: "7em", md: "15em" },
                width: { xs: "10em", md: "20em" },
                objectFit: "cover",
              }}
              alt="logo-sic"
              src="/img/event-2.png"
            ></Box>
          </Box>
        </Box>

        {/* Event 3 */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: { xs: "0", md: "50px" },
            marginY: "2em",
          }}
        >
          {/* images */}
          <Box sx={{ width: "50%", objectFit: "cover" }}>
            <Box
              component="img"
              sx={{
                height: { xs: "7em", md: "15em" },
                width: { xs: "10em", md: "25em" },
                objectFit: "cover",
              }}
              alt="logo-sic"
              src="/img/event-3.png"
            ></Box>
          </Box>
          {/* Text */}
          <Box sx={{ width: "50%" }}>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "1em", md: "2.5em" },
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              Rapat Tahunan
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: { xs: "0.5em", md: "1em" },
                width: "80%",
                fontWeight: 200,
              }}
            >
              Program kerja dari STAN Informatics Club untuk membahas kegiatan
              ke depannya serta evaluasi kegiatan apa saja yang telah
              dilaksanakan
            </Typography>
          </Box>
        </Box>

        {/* Card */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "90vw", md: "60vw" },
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PortraitCard
                title="PR"
                description="Bertanggung jawab untuk membangun citra positif klub, serta mengelola komunikasi dengan publik dan media"
                icon="/img/divisi-1.png"
                address="public-relation"
              />
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PortraitCard
                title="UI/UX"
                description="Fokus pada pengembangan antarmuka pengguna (UI) dan pengalaman pengguna (UX) untuk aplikasi dan situs web klub"
                icon="/img/divisi-2.png"
                address="frontend"
              />
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PortraitCard
                title="BACKEND"
                description="Mengelola sisi server dari aplikasi dan situs web klub, termasuk basis data, logika server, dan integrasi API"
                icon="/img/divisi-3.png"
                address="backend"
              />
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PortraitCard
                title="DATA SCIENCE"
                description="Mengumpulkan, menganalisis, dan menginterpretasikan data untuk memberikan wawasan dan mendukung pengambilan keputusan strategis dalam klub"
                icon="/img/divisi-4.png"
                address="data-science"
              />
            </Grid>
            <Grid
              item
              xs={6}
              sm={6}
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PortraitCard
                title="DESIGN"
                description="Bertanggung jawab atas semua aspek visual dan grafis yang terkait dengan klub, termasuk logo, poster, materi promosi, dan konten visual lainnya"
                icon="/img/divisi-5.png"
                address="design"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
}

export default Homepage;
