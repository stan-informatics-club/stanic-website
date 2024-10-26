import React from "react";
import { Box, Grid } from "@mui/material";
import PortraitCard from "../../components/Card/PortraitCard";

function Project() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "90vw", md: "90vw" },
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
              title="Random Quotes Generator"
              description="Website untuk menampilkan quotes secara acak"
              icon="/img/project-1.png"
              address="#"
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
              title="Tribute Page"
              description="Website untuk menampilkan riwayat hidup tokoh terdahulu"
              icon="/img/project-2.png"
              address="#"
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
              title="App Survey"
              description="Website untuk mengumpulkan survei aplikasi dari responden"
              icon="/img/project-3.png"
              address="#"
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
              title="Documentation Page"
              description="Website untuk menjelaskan cara penggunaan suatu aplikasi"
              icon="/img/project-4.png"
              address="#"
            />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Project;
