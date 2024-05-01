import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Rectangle 41 (1).png";
import { Close, Menu } from "@mui/icons-material";
import Drawer from "./DrawerLinks";

function HomeHeader() {
  const [scrolling, setScrolling] = useState(false);
  const [openClose, setOpenClose] = useState(false);
  const handlOpenClose = () => setOpenClose(!openClose);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const stackstyle = {
    justifyContent: "space-between",
    background: "rgba(0, 0, 0, 0.65)",
    position: { xs: "relative", md: "fixed" },
    top: "0",
    left: "0",
    width: "100%",
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    ...(scrolling && {
      background: { md: "#E8EAED" },
    }),
    zIndex: "310",
    height: { xs: "4.5rem", sm: "5rem", md: "5.5rem", lg: "6rem" },
    alignItems: "center", // Vertically center the child element
    fontSize: { xs: "0.9rem", md: "0.9rem", lg: "1rem" },
    "&:hover": {
      background: "#E8EAED",
      "& a": {
        color: "#000",
      },
      "& svg": {
        color: "#000",
      },
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      padding: {
        xs: "0.2rem 0.7rem 0.2rem 0.7rem",
        sm: "0.2rem 0.8rem 0.2rem 0.8rem",
        md: "0.2rem 0.9rem 0.2rem 0.9rem",
        lg: "0.2rem 1rem 0.2rem 1rem",
      },
      flexGrow: 0,
      flexShrink: 0,
      ...(scrolling && {
        color: "#000",
      }),
    },
    "& a:hover": {
      color: "#ff4800",
    },
    "& svg": {
      color: "#fff",
    },
  };

  return (
    <Stack>
      <Stack direction={"row"} sx={stackstyle}>
        <Stack
          direction={"row"}
          sx={{
            paddingLeft: {
              xs: "0.4rem",
              sm: "0.8rem",
              md: "1.25rem",
              lg: "1.8rem",
            },
            alignItems: "center",
          }}
        >
          <Link>
            <Stack direction="row" spacing="0.7rem">
              <img
                src={logo}
                style={{
                  width: "28%",
                  height: "100%",
                  // transform: "perspective(500px) rotateX(30deg) rotateY(30deg)",
                  // boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)",
                  // animation: "spin 4s linear infinite",
                }}
                alt="world view"
              />
              {/* {
              <style>
                {`
                    @keyframes spin {
                      0% {
                        transform: perspective(500px) rotateX(0deg) rotateY(0deg);
                      }
                      100% {
                        transform: perspective(500px) rotateX(360deg) rotateY(360deg);
                      }
                    }
                  `}
              </style>
            } */}
              <Box>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    paddingTop: "0.8rem",
                    fontSize: {
                      xs: "0.75rem",
                      sm: "0.8rem",
                      md: "0.9rem",
                    },
                  }}
                >
                  Worldview
                </Typography>
              </Box>
            </Stack>
          </Link>

          <Stack
            sx={{
              display: { xs: "block", md: "none" },
              paddingTop: {
                md: "0.5rem",
              },
            }}
          >
            <IconButton onClick={handlOpenClose}>
              {openClose ? <Close /> : <Menu />}
            </IconButton>
          </Stack>

          <Stack
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Drawer />
          </Stack>
        </Stack>
        <Stack
          sx={{
            paddingRight: {
              xs: "0.4rem",
              sm: "0.8rem",
              md: "1.25rem",
              lg: "1.8rem",
            },
          }}
        >
          <Button
            sx={{
              border: "solid 2px black",
              borderRadius: {
                sm: "1rem 1rem 1rem 0rem",
                md: "1.25rem 1.25rem 1.25rem 0rem",
                lg: "1.5rem 1.5rem 1.5rem 0rem",
              },
              textTransform: "capitalize",
              background: "#89fc00",
              color: "#000",
              fontSize: {
                xs: "0.9rem",
                md: "0.9rem",
                lg: "1rem",
              },
              padding: {
                xs: "0.1rem 1rem 0.1rem 1rem",
                sm: "0.15rem 1.25rem 0.15rem 1.25rem",
                md: "0.25rem 1.5rem 0.25rem 1.5rem",
                lg: "0.5rem 2rem 0.5rem 2rem",
              },
              "&:hover": {
                color: "#ff4800",
              },
            }}
          >
            Contact Us
          </Button>
        </Stack>
      </Stack>

      {openClose && (
        <Stack
          sx={{
            display: { xs: "block", md: "none" },
            background: "#fff",
            zIndex: 999,
            paddingBottom: "3rem",
            "& a": {
              color: "#000",
              textDecoration: "none",
            },
            "& a:hover": {
              color: "#ff4800",
            },
            '& a.uniqueIcon': {
              padding: "0.3rem 1rem 0.4 2rem",
              margin: "0.5rem 2rem 0.1rem 2rem",
              fontSize: { xs: "1.5rem", sm: "1.7rem" },
              fontWeight: "bold",
            },
          }}
        >
          <Drawer />
        </Stack>
      )}
    </Stack>
  );
}

export default HomeHeader;
