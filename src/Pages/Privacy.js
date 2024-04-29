import React from "react";
import { Footer } from "../components/Footer";
import Hamburger from "../components/Hamburger";
import { Stack, Typography } from "@mui/material";
import HomeHeader from "../components/HomeHeader";

function Prediction() {
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

      <Stack padding={"15rem 5rem 7rem 5rem"}>
        <Typography sx={{ fontSize: "85px" }}>Privacy Policy</Typography>
        <Typography sx={{ fontSize: "45px", margin: "2rem 0rem 2rem 0rem" }}>
          A legal disclaimer
        </Typography>
        <Typography sx={{ width: "70%"}}>
          At Worldview Training and Consulting Service PLC, we value and respect
          your privacy. This Privacy Policy explains how we collect, use,
          disclose, and protect your personal information when you visit our
          website. By accessing and using our website, you consent to the
          practices described in this Privacy Policy.
          At Worldview Training and Consulting Service PLC, we value and respect
          your privacy. This Privacy Policy explains how we collect, use,
          disclose, and protect your personal information when you visit our
          website. By accessing and using our website, you consent to the
          practices described in this Privacy Policy.
        </Typography>
        <Typography sx={{ fontSize: "45px", margin: "2rem 0rem 2rem 0rem" }}>
          Information We Collect
        </Typography>
        <Typography sx={{ width: "70%"}}>
          When you visit our website, we may collect certain information
          automatically, such as your IP address, browser type, device
          information, and browsing behavior. We may also collect personal
          information that you voluntarily provide to us through contact forms
          or when subscribing to our newsletters.
          When you visit our website, we may collect certain information
          automatically, such as your IP address, browser type, device
          information, and browsing behavior. We may also collect personal
          information that you voluntarily provide to us through contact forms
          or when subscribing to our newsletters.
        </Typography>
        <Typography sx={{ fontSize: "45px", margin: "2rem 0rem 2rem 0rem" }}>
          Use of Collected Information
        </Typography>
        <Typography sx={{ width: "70%"}}>
          We use the information we collect to improve our website, provide
          relevant content and services, respond to inquiries, and communicate
          with you. We may also use your information to send promotional
          materials or updates about our offerings, but only if you have
          provided your consent to receive such communications.
          We use the information we collect to improve our website, provide
          relevant content and services, respond to inquiries, and communicate
          with you. We may also use your information to send promotional
          materials or updates about our offerings, but only if you have
          provided your consent to receive such communications.
        </Typography>
        <Typography sx={{ fontSize: "45px", margin: "2rem 0rem 2rem 0rem" }}>
          Data Security
        </Typography>
        <Typography sx={{ width: "70%"}}>
          We implement appropriate security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction. However, please be aware that no method of transmission
          over the internet or electronic storage is 100% secure. While we
          strive to protect your information, we cannot guarantee its absolute
          security.
          We implement appropriate security measures to protect your personal
          information from unauthorized access, disclosure, alteration, or
          destruction. However, please be aware that no method of transmission
          over the internet or electronic storage is 100% secure. While we
          strive to protect your information, we cannot guarantee its absolute
          security.
        </Typography>
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

export default Prediction;
