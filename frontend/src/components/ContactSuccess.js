import React from "react";
import { Alert, AlertTitle, Button, Stack } from "@mui/material";
import HomeHeader from "./HomeHeader";
import Footer from "./Footer";

const ContactSuccess = () => {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack>
        <HomeHeader />
      </Stack>

      <Stack
        sx={{
          height: "50vh",
          padding: {
            xs: "4rem 2rem 0rem 2rem",
            sm: "10rem 5rem 0rem 5rem",
            md: "10rem 10rem 0rem 10rem",
            lg: "10rem 20rem 0rem 20rem",
          },
        }}
      >
        <Alert severity="success">
          <AlertTitle sx={{ fontWeight: "bold" }}>
            Message Sent Successfully!
          </AlertTitle>
          Thank you for reaching out to Worldview Training and Consulting
          Service PLC. We appreciate your interest and will be in touch shortly.
          In the meantime, you can explore our website to learn more about our
          services.
        </Alert>
        <Button variant="contained" href="/">
          Explore Our Services
        </Button>
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
};

export default ContactSuccess;
