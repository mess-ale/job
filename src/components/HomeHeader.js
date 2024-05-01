import { Box, Button, IconButton, Stack, Typography, } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import logo from "../assets/Rectangle 41 (1).png";
import solution1 from "../assets/solutions (1).png";
import solution2 from "../assets/solutions (2).png";
import solution3 from "../assets/solutions (3).png";
import solution4 from "../assets/solutions (4).png";
import solution5 from "../assets/solutions (5).png";
import { Close, Menu } from "@mui/icons-material";

function HomeHeader() {
  const [scrolling, setScrolling] = useState(false);
  const [openClose, setOpenClose] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible21, setIsVisible21] = useState(false);

  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);
  const handleMouseEnter1 = () => setIsVisible1(true);
  const handleMouseLeave1 = () => setIsVisible1(false);
  const handleMouseEnter2 = () => setIsVisible2(true);
  const handleMouseLeave2 = () => setIsVisible2(false);
  const handleMouseEnter21 = () => setIsVisible21(true);
  const handleMouseLeave21 = () => setIsVisible21(false);
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
    fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem", lg: "1rem" },
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
        }}
      >
        <Link>
          <Stack
            direction="row"
            spacing="0.7rem"
            sx={{ paddingTop: { sm: "0.2rem", md: "0.4rem" } }}
          >
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
            paddingTop: { xs: "0.25rem", sm: "0.5rem" },
          }}
        >
          <IconButton onClick={handlOpenClose}>
            {openClose ? <Close /> : <Menu />}
            
          </IconButton>
        </Stack>

        <Stack
          spacing={"0.9rem"}
          sx={{
            paddingLeft: { xs: "0", md: "2rem", lg: "3rem" },
            paddingTop: "0.2rem",
            display: { xs: "none", md: "block" },
          }}
        >
          <Stack
            spacing={{ sm: "0.8rem", md: "0.9rem", lg: "1rem" }}
            direction={"row"}
          >
            <Stack
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link style={isVisible || isVisible1 ? { color: "#ff4800" } : {}}>
                Service
              </Link>
            </Stack>
            <Box
              sx={{
                position: { md: "fixed" },
                width: "100%",
                top: { md: "32px", lg: "35px" },
                right: 0, // Position at right edge
                transition: "transform 0.4s ease-in-out", // Smooth transition
                backgroundColor: "#E8EAED", // Drawer background color
                display: isVisible || isVisible1 ? "block" : "none", // Show/hide based on state
              }}
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <Stack
                direction={{ md: "row" }}
                sx={{
                  padding: {
                    md: "2.5rem 2.5rem 3rem 8rem",
                    lg: "2.75rem 3.5rem 3rem 13rem",
                    xl: "3rem 5rem 3rem 25rem",
                  },
                  justifyContent: "space-between",
                }}
              >
                <Stack spacing={"0.5rem"}>
                  <Typography
                    sx={{
                      paddingBottom: {
                        xs: "1rem",
                        sm: "1.25rem",
                        md: "1.5rem",
                        lg: "2rem",
                      },
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.8rem",
                        md: "0.9rem",
                        lg: "1rem",
                      },
                    }}
                  >
                    Performance Consulting
                  </Typography>
                  <Link style={{ textTransform: "capitalize" }}>
                    Needs Analysis
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Performance Mapping
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Evaluation & Measurement
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Smart L&D Staffing
                  </Link>
                </Stack>
                <Stack spacing={"0.5rem"}>
                  <Typography
                    sx={{
                      paddingBottom: {
                        xs: "1rem",
                        sm: "1.25rem",
                        md: "1.5rem",
                        lg: "2rem",
                      },
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.8rem",
                        md: "0.9rem",
                        lg: "1rem",
                      },
                    }}
                  >
                    Instructional Design
                  </Typography>
                  <Link style={{ textTransform: "capitalize" }}>
                    Digital Learning
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Blended Learning
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    ILT and VILT
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    On-Demand Learning
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Video Services
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Creative Services
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Smart L&D Staffing
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}></Link>
                </Stack>
                <Stack textAlign={"left"} spacing={"0.5rem"}>
                  <Typography
                    sx={{
                      paddingBottom: {
                        xs: "1rem",
                        sm: "1.25rem",
                        md: "1.5rem",
                        lg: "2rem",
                      },
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.8rem",
                        md: "0.9rem",
                        lg: "1rem",
                      },
                    }}
                  >
                    Learning Technologies
                  </Typography>

                  <Link style={{ textTransform: "capitalize" }}>
                    Analysis and Strategy
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Platform Integrations
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Web Services and Additions
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Learning Analytics
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Adaptive Learning and AI
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Content Delivery and Scale
                  </Link>
                  <Link style={{ textTransform: "capitalize" }}>
                    Smart L&D Staffing
                  </Link>
                </Stack>
              </Stack>
            </Box>

            <Stack
              onMouseEnter={handleMouseEnter2}
              onMouseLeave={handleMouseLeave2}
            >
              <Link
                style={isVisible2 || isVisible21 ? { color: "#ff4800" } : {}}
              >
                Solution
              </Link>
            </Stack>
            <Box
              sx={{
                position: { md: "fixed" },
                top: { md: "32px", lg: "35px" },
                width: "100%",
                right: 0, // Position at right edge
                transition: "transform 0.4s ease-in-out", // Smooth transition
                backgroundColor: "#E8EAED", // Drawer background color
                padding: "1rem", // Drawer content padding
                display: isVisible2 || isVisible21 ? "block" : "none", // Show/hide based on state
              }}
              onMouseEnter={handleMouseEnter21}
              onMouseLeave={handleMouseLeave21}
            >
              <Stack
                direction={{ xs: "column", md: "row" }}
                sx={{
                  padding: {
                    sm: "0.7rem 2rem 0.7rem 2rem",
                    md: "0.8rem 2.5rem 0.8rem 2.5rem",
                    lg: "1rem 3rem 1rem 3rem",
                  },
                }}
              >
                <Stack spacing={"0.5rem"}>
                  <Link>
                    <Stack sx={{ display: { sm: "none", md: "block" } }}>
                      <img
                        src={solution1}
                        style={{
                          borderRadius: "0.8rem",
                        }}
                        alt="world view"
                      />
                    </Stack>
                    Learning Management System
                    <Typography
                      style={{ color: "#000", textTransform: "lowercase" }}
                    >
                      Place employees at the center of your business
                      transformation
                    </Typography>
                  </Link>
                </Stack>
                <Stack spacing={"0.5rem"}>
                  <Link>
                    <Stack sx={{ display: { sm: "none", md: "block" } }}>
                      <img
                        src={solution2}
                        style={{
                          borderRadius: "0.8rem",
                        }}
                        alt="world view"
                      />
                    </Stack>
                    Leadership Development Training
                    <Typography
                      style={{ color: "#000", textTransform: "lowercase" }}
                    >
                      Leadership training that empowers employees
                    </Typography>
                  </Link>
                </Stack>
                <Stack spacing={"0.5rem"}>
                  <Link>
                    <Stack sx={{ display: { sm: "none", md: "block" } }}>
                      <img
                        src={solution3}
                        style={{
                          borderRadius: "0.8rem",
                        }}
                        alt="world view"
                      />
                    </Stack>
                    Health And Safety Training
                    <Typography
                      style={{ color: "#000", textTransform: "lowercase" }}
                    >
                      Compliance that balances regulation and culture
                    </Typography>
                  </Link>
                </Stack>
                <Stack spacing={"0.5rem"}>
                  <Link>
                    <Stack sx={{ display: { sm: "none", md: "block" } }}>
                      <img
                        src={solution4}
                        style={{
                          borderRadius: "0.8rem",
                        }}
                        alt="world view"
                      />
                    </Stack>
                    Employee On boarding
                    <Typography
                      style={{ color: "#000", textTransform: "lowercase" }}
                    >
                      Employee onboarding that focuses on people
                    </Typography>
                  </Link>
                </Stack>
                <Stack spacing={"0.5rem"}>
                  <Link>
                    <Stack sx={{ display: { sm: "none", md: "block" } }}>
                      <img
                        src={solution5}
                        style={{
                          borderRadius: "0.8rem",
                        }}
                        alt="world view"
                      />
                    </Stack>
                    Salses And Service Training
                    <Typography
                      style={{ color: "#000", textTransform: "lowercase" }}
                    >
                      Sales Enablement training that creates a culture of
                      performance
                    </Typography>
                  </Link>
                </Stack>
              </Stack>
            </Box>

            <Stack>
              <Link>Blog</Link>
            </Stack>
            <Stack>
              <Link>About</Link>
            </Stack>
          </Stack>

          <Stack width={"25%"}>
            <Link>Contact</Link>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        sx={{
          paddingRight: { xs: "1rem", sm: "2rem", md: "3rem", lg: "4rem" },
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
            fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem", lg: "1rem" },
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
  );
}

export default HomeHeader;
