import React from "react";
import {
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Grid,
} from "@mui/material";
import LandscapeCard from "../../components/Card/LandscapeCard";
import { motion } from "framer-motion";

function About() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          padding: "2em",
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              color: "#307CC0",
              fontSize: { xs: "2em", md: "3em" },
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            ABOUT US
          </Typography>
          <Box
            component="img"
            sx={{ width: "70vw", objectFit: "cover", marginTop: "1em" }}
            alt="logo-sic"
            src="/img/banner.png"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              width: { xs: "90vw", md: "70vw" },
              padding: "2em",
            }}
          >
            <Box
              sx={{
                width: "15vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: { xs: "4em", md: "10em" },
                }}
                alt="logo-sic"
                src="/img/logo_sic.png"
              />
            </Box>
            <Box
              sx={{
                width: "85vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "2em",
              }}
            >
              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: { xs: "0.5em", md: "0.8em" },
                }}
              >
                STAN INFORMATICS CLUB (SIC) merupakan organisasi mahasiswa di
                bawah naungan BEM PKN STAN yang bergerak di bidang Informatika.
                Melalui kegiatan kelas, forum diskusi, sharing session, dan
                seminar bersama narasumber kompeten di bidangnya. SIC juga akan
                menyelenggarakan kegiatan pelatihan kepenulisan dan pencapaian
                prestasi.
              </Typography>
            </Box>
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: { xs: "80vw", md: "70vw" }, padding: "1em" }}>
            <Typography
              sx={{ color: "#307CC0", fontSize: "2em", fontWeight: 800 }}
            >
              Visi
            </Typography>
            <Typography
              sx={{ fontStyle: "italic", fontSize: { xs: "0.8em", md: "1em" } }}
            >
              Mewujudkan mahasiswa yang berkompeten dan berintelektual dalam
              bidang Informatika serta mampu untuk memberikan kontribusi bagi
              institusi dan masyarakat.
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box sx={{ width: { xs: "80vw", md: "70vw" }, padding: "1em" }}>
            <Typography
              sx={{ color: "#307CC0", fontSize: "2em", fontWeight: 800 }}
            >
              Misi
            </Typography>
            <List sx={{ listStyle: "decimal", pl: 4 }}>
              <ListItem
                sx={{
                  display: "list-item",
                  fontStyle: "italic",
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: { xs: "0.8em", md: "1em" },
                  }}
                  primary="Meningkatkan kompetensi mahasiswa PKN STAN di bidang Informatika melalui kelas, forum diskusi, sharing session, dan webinar"
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "list-item",
                  fontStyle: "italic",
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: { xs: "0.8em", md: "1em" },
                  }}
                  primary="Meningkatkan kompetensi kepenulisan mahasiswa PKN STAN melalui pelatihan kepenulisan karya ilmiah"
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "list-item",
                  fontStyle: "italic",
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: { xs: "0.8em", md: "1em" },
                  }}
                  primary="Menyusun karya tulis di bidang Informatika untuk dipublikasikan"
                />
              </ListItem>
              <ListItem
                sx={{
                  display: "list-item",
                  fontStyle: "italic",
                }}
              >
                <ListItemText
                  primaryTypographyProps={{
                    fontSize: { xs: "0.8em", md: "1em" },
                  }}
                  primary="Mempersiapkan mahasiswa PKN STAN untuk mengikuti kompetisi terkait Informatika"
                />
              </ListItem>
            </List>
          </Box>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={variants}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              padding: "2em",
            }}
          >
            <Typography
              sx={{
                color: "#307CC0",
                fontSize: { xs: "2em", md: "3em" },
                fontWeight: 800,
                textAlign: "center",
              }}
            >
              MEET OUR TEAM MEMBER
            </Typography>
            <Box sx={{ width: "80vw" }}>
              <Grid
                container
                spacing={3}
                justifyContent="center"
                alignItems="center"
                sx={{ padding: "2em" }}
              >
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LandscapeCard
                    icon="/img/divisi-6.png"
                    title="BPH"
                    link="/bph"
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LandscapeCard
                    icon="/img/divisi-1.png"
                    title="Frontend"
                    link="/frontend"
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LandscapeCard
                    icon="/img/divisi-2.png"
                    title="Backend"
                    link="/backend"
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LandscapeCard
                    icon="/img/divisi-3.png"
                    title="Public Relation"
                    link="/public-relation"
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LandscapeCard
                    icon="/img/divisi-4.png"
                    title="Design"
                    link="/design"
                  />
                </Grid>
                <Grid
                  item
                  xs={6}
                  sm={6}
                  md={4}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LandscapeCard
                    icon="/img/divisi-5.png"
                    title="Data Science"
                    link="/data-science"
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </motion.div>
      </Box>
    </div>
  );
}

export default About;
