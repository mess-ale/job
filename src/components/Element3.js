import { Stack, Typography } from "@mui/material";
import React from "react";
import train from "../assets/Gemini_Generated_Image_rb52fhrb52fhrb52.jpg";

function Element3() {
  return (
    <Stack
      direction={"row"}
      sx={{ backgroundImage: `url(${train})`, height: "100vh" }}
    >
      <Stack width={"60%"} paddingTop={"15rem"} marginLeft={'7rem'}>
        <Typography
          sx={{
            color: "#000",
            fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
            fontFamily: "Young Serif",
          }}
        >
          AUGMENT YOUR L&D TEAM WITH INDUSTRY
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Element3;
