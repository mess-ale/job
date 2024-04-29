import { Button, Stack, Typography } from "@mui/material";
import React from "react";
import train from "../assets/Gemini_Generated_Image_rb52firb52firb52.jpg";
import { ArrowForward } from "@mui/icons-material";

function Element2() {
  return (
      <Stack
        direction={"row"}
        sx={{ backgroundImage: `url(${train})`, height: "100vh" }}
      >
        <Stack width={"45%"} marginLeft={"10rem"} paddingTop={"10rem"}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
              fontFamily: "Young Serif",
            }}
          >
            Worldview Training and Consulting Service PLC
          </Typography>
        </Stack>
        <Stack>
          <Button endIcon={<ArrowForward />}>See How We Do It</Button>
        </Stack>
      </Stack>
  );
}

export default Element2;
