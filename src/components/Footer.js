import {
  Box,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Rectangle 41 (1).png";
import {
  Email,
  Facebook,
  Instagram,
  LinkedIn,
  LocationOn,
  Phone,
} from "@mui/icons-material";

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
    "&:hover": {
      color: '#ff4800'
    }
  };

  const footerstyle = {
    background: "#fff",
    padding: {
      xs: "2rem 1rem 1rem 1.5rem",
      sm: "4rem 2rem 2.25rem 2rem",
      md: "6rem 2.5rem 2.5rem 2.5rem",
      lg: "8rem 3rem 3rem 3rem",
    },
    "& a": {
      textDecoration: 'none',
      paddingBottom: '0.38rem',
      "&:hover": {
        color: '#ff4800'
      }
    }
  };

  return (
    <Stack sx={footerstyle}>
      <Stack
        direction={"row"}
        sx={{
          paddingBottom: { xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem" },
          justifyContent: "space-between",
        }}
      >
        <Grid container spacing={"2rem"}>
          <Grid item xs={6} sm={4} md={3} lg={2.4}>
            <Stack
              alignItems={"center"}
              direction={"row"}
              spacing={"1rem"}
              sx={{ marginBottom: "1.25rem" }}
            >
              <LocationOn sx={{ color: "#89fc00" }} />
              <Typography>Addis Ababa, Ethiopia</Typography>
            </Stack>
            <Stack
              alignItems={"center"}
              direction={"row"}
              spacing={"1rem"}
              sx={{ marginBottom: "1.25rem" }}
            >
              <Phone sx={{ color: "#89fc00" }} />
              <Typography>+251-91-755-0560</Typography>
            </Stack>
            <Stack alignItems={"center"} direction={"row"} spacing={"1rem"}>
              <Email sx={{ color: "#89fc00" }} />
              <Typography>Worldview@gmail.com</Typography>
            </Stack>
            <Stack direction={"row"} paddingTop={"2rem"}>
              <IconButton>
                <Facebook sx={{ color: "#89fc00" }} />
              </IconButton>
              <IconButton>
                <Instagram sx={{ color: "#89fc00" }} />
              </IconButton>
              <IconButton>
                <LinkedIn sx={{ color: "#89fc00" }} />
              </IconButton>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={2.4} spacing={"1rem"}>
            <Stack>
              <Typography sx={{ fontWeight: 'bold', paddingBottom: '1rem'}}>COMPANY</Typography>
              <Link>About</Link>
              <Link>Reviews</Link>
              <Link>Blog</Link>
              <Link>Careers</Link>
              <Link>Events</Link>
              <Link>Press Kit</Link>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={2.4} spacing={"1rem"}>
            <Stack>
              <Typography sx={{ fontWeight: 'bold', paddingBottom: '1rem'}}>RESOURCES</Typography>
              <Link>Onboarding</Link>
              <Link>Gamification</Link>
              <Link>Compliance Training</Link>
              <Link>Brand Training</Link>
              <Link>Microlearning</Link>
            </Stack>
          </Grid>

          <Grid item xs={6} sm={4} md={3} lg={2.4} spacing={"1rem"}>
            <Stack>
              <Typography sx={{ fontWeight: 'bold', paddingBottom: '1rem'}}>INDUSTRIES</Typography>
              <Link>Financial Services</Link>
              <Link>Healthcare / Medical</Link>
              <Link>Food and Beverage</Link>
              <Link>Travel</Link>
              <Link>Software</Link>
              <Link>Retail</Link>
              <Link>Insurance</Link>
              <Link>Energy</Link>
            </Stack>
          </Grid>

          <Grid
            item
            xs={6}
            sm={4}
            md={3}
            lg={2.4}
            spacing={"1rem"}
            sx={{
              display: "grid",
              placeItems: "flex-end",
            }}
          >
            <Stack
              sx={{
                fontWeight: "bold",
              }}
            >
              <Typography>
                The current time is: {currentTime.toLocaleTimeString()}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <Stack sx={{ paddingBottom: "3rem" }}>
        <Divider />
      </Stack>

      <Grid container spacing={"1rem"}>
        <Grid item xs={12} md={6}>
          <Link to={'/'} style={{ textDecoration: "none", color: "#000" }}>
            <Stack
              direction="row"
              alignItems={"center"}
              spacing={{ xs: "1rem", md: "2rem" }}
            >
              <img
                src={logo}
                style={{
                  width: "13%",
                  height: "100%",
                }}
                alt="world view"
              />
              <Box>
                <Typography>
                  Worldview Training and Consulting Service PLC
                </Typography>
              </Box>
            </Stack>
          </Link>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          sx={{
            display: { md: "grid" },
            placeItems: { md: "flex-end" },
          }}
        >
          <Stack>
            <Link style={linkStyle} to="/Privacy">
              Privacy Policy
            </Link>
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "15px", lg: "16px" },
              }}
            >
              © 2024 by Worldview. All
              Rights Reserved.
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Footer;
