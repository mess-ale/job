import { Box, Button, Stack, Typography,  } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/Rectangle 41 (1).png";
import solution1 from "../assets/solutions (1).png";
import solution2 from "../assets/solutions (2).png";
import solution3 from "../assets/solutions (3).png";
import solution4 from "../assets/solutions (4).png";
import solution5 from "../assets/solutions (5).png";

function HomeHeader() {
  const loacation = useLocation();
  const [scrolling, setScrolling] = useState(false);
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
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    ...(scrolling && {
      background: "#E8EAED",
    }),
    zIndex: "310",
    height: "6rem",
    alignItems: "center", // Vertically center the child element
    "&:hover": {
      background: "#E8EAED",
      "& a": {
        color: "#000",
      },
    },
    "& a": {
      color: "#fff",
      textDecoration: "none",
      padding: "0.2rem 1rem 0.2rem 1rem",
      flexGrow: 0,
      flexShrink: 0,
      ...(scrolling && {
        color: "#000",
      }),
    },
    "& a:hover": {
      color: "#ff4800",
    },
  };

  return (
    <Stack direction={"row"} sx={stackstyle}>
      <Stack direction={"row"} sx={{ paddingLeft: "4rem" }}>
        <Link>
          <Stack direction="row" spacing="1rem">
            <img
              src={logo}
              style={{
                width: "28%",
                height: "100%",transform: "perspective(500px) rotateX(30deg) rotateY(30deg)",
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.3)",
                animation: "spin 4s linear infinite",
                
                
              }}
              alt="world view"
            />{<style>
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
                </style> }
            <Box>
              <Typography sx={{ fontWeight: "bold", paddingTop: "0.7rem" }}>
                Worldview
              </Typography>
            </Box>
          </Stack>
        </Link>
        <Stack
          spacing={"0.9rem"}
          sx={{
            paddingLeft: { sm: "2rem", md: "3.3rem", lg: "3rem" },
            paddingTop: "0.2rem",
          }}
        >
          <Stack spacing={"1rem"} direction={"row"}>
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
                position: "fixed",
                top: "36%", // Center vertically
                width: "100%",
                transform: "translateY(-50%)", // Center vertically
                right: 0, // Position at right edge
                transition: "transform 0.4s ease-in-out", // Smooth transition
                backgroundColor: "#E8EAED", // Drawer background color
                padding: "1rem", // Drawer content padding
                display: isVisible || isVisible1 ? "block" : "none", // Show/hide based on state
              }}
              onMouseEnter={handleMouseEnter1}
              onMouseLeave={handleMouseLeave1}
            >
              <Stack
                direction={"row"}
                sx={{
                  padding: "3rem 5rem 3rem 25rem",
                  justifyContent: "space-between",
                }}
              >
                <Stack spacing={"0.5rem"}>
                  <Typography
                    sx={{
                      paddingBottom: "2rem",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    Performance Consulting
                  </Typography>
                  <Link>Needs Analysis</Link>
                  <Link>Performance Mapping</Link>
                  <Link>Evaluation & Measurement</Link>
                  <Link>Smart L&D Staffing</Link>
                </Stack>
                <Stack spacing={"0.5rem"}>
                  <Typography
                    sx={{
                      paddingBottom: "2rem",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    Instructional Design
                  </Typography>
                  <Link>Digital Learning</Link>
                  <Link>Blended Learning</Link>
                  <Link>ILT and VILT</Link>
                  <Link>On-Demand Learning</Link>
                  <Link>Video Services</Link>
                  <Link>Creative Services</Link>
                  <Link>Smart L&D Staffing</Link>
                  <Link></Link>
                </Stack>
                <Stack textAlign={"left"} spacing={"0.5rem"}>
                  <Typography
                    sx={{
                      paddingBottom: "2rem",
                      color: "#000",
                      fontWeight: "bold",
                    }}
                  >
                    Learning Technologies
                  </Typography>

                  <Link>Analysis and Strategy</Link>
                  <Link>Platform Integrations</Link>
                  <Link>Web Services and Additions</Link>
                  <Link>Learning Analytics</Link>
                  <Link>Adaptive Learning and AI</Link>
                  <Link>Content Delivery and Scale</Link>
                  <Link>Smart L&D Staffing</Link>
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
                position: "fixed",
                top: "34%", // Center vertically
                width: "100%",
                transform: "translateY(-50%)", // Center vertically
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
                direction={"row"}
                sx={{
                  padding: "1rem 3rem 1rem 3rem",
                }}
              >
                <Stack spacing={"0.5rem"}>
                  <Link>
                    <img
                      src={solution1}
                      style={{ borderRadius: "0.8rem" }}
                      alt="world view"
                    />
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
                    <img src={solution2} style={{ borderRadius: "0.8rem" }} />
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
                    <img
                      src={solution3}
                      style={{ borderRadius: "0.8rem" }}
                      alt="world view"
                    />
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
                    <img
                      src={solution4}
                      style={{ borderRadius: "0.8rem" }}
                      alt="world view"
                    />
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
                    <img
                      src={solution5}
                      style={{ borderRadius: "0.8rem" }}
                      alt="world view"
                    />
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

      <Stack sx={{ paddingRight: "4rem" }}>
        <Button
          sx={{
            border: "solid 2px black",
            borderRadius: "1.5rem 1.5rem 1.5rem 0rem",
            textTransform: "capitalize",
            background: '#89fc00',
            color: '#000',
            padding: '0.5rem 2rem 0.5rem 2rem',
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
