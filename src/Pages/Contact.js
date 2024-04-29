import React from "react";
import { Footer } from "../components/Footer";
import Hamburger from "../components/Hamburger";
import { Stack } from "@mui/material";
import HomeHeader from "../components/HomeHeader";

function Preview() {

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          display: {
            xs: "flex",
            sm: "flex",
            md: "none",
          },
        }}
      >
        <Hamburger />
      </Stack>
      
      <Stack
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "flex",
          },
        }}
      >
        <HomeHeader />
      </Stack>

      <Stack
        sx={{
          marginTop: "auto",
        }}
      >
        <Footer />
      </Stack>
    </Stack>
  );
}

export default Preview;
