import React from "react";
import { Box } from "@mui/material";
import PortraitCard from "../../components/Card/PortraitCard";

function Project() {
  return (
    <div>
      <Box>
        <PortraitCard
          title="Random Quotes Generator"
          description="Website untuk menampilkan quotes secara acak"
          icon="/img/project-1.png"
          address="#"
        />
        <PortraitCard
          title="Tribute Page"
          description="Website untuk menampilkan riwayat hidup tokoh terdahulu"
          icon="/img/project-2.png"
          address="#"
        />
        <PortraitCard
          title="App Survey"
          description="Website untuk mengumpulkan survei aplikasi dari responden"
          icon="/img/project-3.png"
          address="#"
        />
        <PortraitCard
          title="Documentation Page"
          description="Website untuk menjelaskan cara penggunaan suatu aplikasi"
          icon="/img/project-4.png"
          address="#"
        />
      </Box>
    </div>
  );
}

export default Project;
