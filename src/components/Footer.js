import { Button, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateTimer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(updateTimer); // Cleanup on unmount
  }, []);

  const linkStyle = {
    color: "#000",
    textDecoration: "none",
  };

  return (
    <Stack
      sx={{
        background: "#fff",
        padding: "5rem 3rem 5rem 3rem",
      }}
    >
      <Stack sx={{ paddingBottom: "4rem" }}>
        <Typography sx={{ fontSize: "100px", fontWeight: "bold" }}>
          Worldview Training and Consulting Service PLC
        </Typography>
      </Stack>
      <Stack sx={{ paddingBottom: "5rem" }}>
        <Divider />
      </Stack>

      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Stack direction={"row"} spacing={"2rem"}>
          <Stack spacing={"1rem"}>
            <Stack>
              <Link style={linkStyle} to="/Solution">
                <Typography>Solution</Typography>
              </Link>
            </Stack>

            <Stack>
              <Link style={linkStyle} to="/About">
                <Typography>About</Typography>
              </Link>
            </Stack>

            <Stack>
              <Link style={linkStyle} to="/Insights">
                <Typography>Training</Typography>
              </Link>
            </Stack>

            <Stack>
              <Link style={linkStyle} to="/Contact">
                <Typography>Contact</Typography>
              </Link>
            </Stack>
          </Stack>

          <Stack spacing={"1rem"}>
            <Typography>
              Address: Bole Sub City, Woreda 05, Addis Ababa, Ethiopia
            </Typography>
            <Typography>Tel: +251-91-342-0960</Typography>
            <Typography>Email: worldviewconsulting01@gmail.com</Typography>
          </Stack>

          <Stack>
            <Button style={{ color: "#000" }}>Facebook</Button>
            <Button style={{ color: "#000" }}>LinkedIn</Button>
            <Button style={{ color: "#000" }}>Instagram</Button>
          </Stack>

          <Stack>
            <Link style={linkStyle} to="/Privacy">
              Privacy Policy
            </Link>
          </Stack>
        </Stack>

        <Stack
          sx={{
            display: "grid",
            placeItems: "flex-end",
            fontWeight: "bold",
          }}
        >
          <Typography>
            The current time is: {currentTime.toLocaleTimeString()}
          </Typography>
          <Typography>
            © 2024 by Worldview Training and Consulting Service PLC. All Rights
            Reserved.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Footer;
