import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import solution1 from "../assets/solutions (1).png";
import solution2 from "../assets/solutions (2).png";
import solution3 from "../assets/solutions (3).png";
import solution4 from "../assets/solutions (4).png";
import solution5 from "../assets/solutions (5).png";
import React, { useState } from "react";
import { KeyboardArrowDown } from "@mui/icons-material";

function Drawer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible21, setIsVisible21] = useState(false);
  const [isclicked1, setIsclicked1] = useState(false);
  const [isclicked2, setIsclicked2] = useState(false);
  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);
  const handleMouseEnter1 = () => setIsVisible1(true);
  const handleMouseLeave1 = () => setIsVisible1(false);
  const handleMouseEnter2 = () => setIsVisible2(true);
  const handleMouseLeave2 = () => setIsVisible2(false);
  const handleMouseEnter21 = () => setIsVisible21(true);
  const handleMouseLeave21 = () => setIsVisible21(false);
  const handlIsClicked1 = () => {
    setIsclicked1(!isclicked1);
    if (isVisible2) {
      setIsVisible2(!isVisible2);
    }
  };
  const handlIsClicked2 = () => {
    setIsclicked2(!isclicked2);
    if (isVisible1) {
      setIsclicked1(!isclicked1);
    }
  };

  const textstyle1 = {
    fontSize: {
      md: "0.9rem",
      lg: "1.1rem",
    },
    textTransform: "capitalize",
    fontWeight: "bold",
    paddingLeft: {xs: "2rem", md: '0'},
  };

  const textstyle2 = {
    color: "#000",
    textTransform: "lowercase",
    fontSize: {
      md: "0.7rem",
      lg: "1rem",
    },
    paddingLeft: {xs: "2rem", md: '0'},
    paddingBottom: "0.5rem",
  };

  const linkOneStyle = {
    textTransform: "capitalize",
    paddingLeft: '3rem',
    fontWeight: "bold",
  };

  const typoStyle = {
    padding: "1rem 0rem 1rem 2rem",
    paddingBottom: {
      xs: "1rem",
      sm: "1.25rem",
      md: "1.5rem",
      lg: "2rem",
    },
    color: "#000",
    fontWeight: "bold",
    fontSize: {
      md: "0.9rem",
      lg: "1rem",
    },
  };

  return (
    <Stack
      spacing={{ xs: "0", md: "0.9rem" }}
      sx={{
        paddingLeft: { xs: "0", md: "1.5rem", lg: "2rem" },
        paddingTop: "0.2rem",
      }}
    >
      <Stack
        spacing={{ md: "0.9rem", lg: "1rem" }}
        direction={{ xs: "column", md: "row" }}
      >
        <Stack
          onClick={handlIsClicked1}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Link
            className="uniqueIcon"
            style={isVisible || isVisible1 ? { color: "#ff4800" } : {}}
          >
            <Stack
              sx={{ justifyContent: "space-between", alignItems: "center" }}
              direction={"row"}
            >
              Service
              <KeyboardArrowDown />
            </Stack>
          </Link>
        </Stack>
        <Box
          sx={{
            position: { md: "fixed" },
            width: "100%",
            top: { md: "35px", lg: "37px" },
            right: 0, // Position at right edge
            transition: "transform 0.4s ease-in-out", // Smooth transition
            backgroundColor: "#E8EAED", // Drawer background color
            display: {
              xs: isclicked1 ? "block" : "none",
              md: isVisible || isVisible1 ? "block" : "none",
            }, // Show/hide based on state
          }}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <Stack
            direction={{ md: "row" }}
            sx={{
              padding: {
                md: "3rem 1.5rem 3rem 15rem",
                lg: "3.5rem 5rem 3rem 25rem",
              },
              justifyContent: "space-between",
            }}
            spacing={"1rem"}
            className="moreIcon"
          >
            <Stack spacing={"0.5rem"}>
              <Typography sx={typoStyle}>Performance Consulting</Typography>
              <Link style={linkOneStyle}>Needs Analysis</Link>
              <Link style={linkOneStyle}>Performance Mapping</Link>
              <Link style={linkOneStyle}>Evaluation & Measurement</Link>
              <Link style={linkOneStyle}>Smart L&D Staffing</Link>
            </Stack>
            <Stack spacing={"0.5rem"}>
              <Typography sx={typoStyle}>Instructional Design</Typography>
              <Link style={linkOneStyle}>Digital Learning</Link>
              <Link style={linkOneStyle}>Blended Learning</Link>
              <Link style={linkOneStyle}>ILT and VILT</Link>
              <Link style={linkOneStyle}>On-Demand Learning</Link>
              <Link style={linkOneStyle}>Video Services</Link>
              <Link style={linkOneStyle}>Creative Services</Link>
              <Link style={linkOneStyle}>Smart L&D Staffing</Link>
              <Link style={linkOneStyle}></Link>
            </Stack>
            <Stack textAlign={"left"} spacing={"0.5rem"}>
              <Typography sx={typoStyle}>Learning Technologies</Typography>

              <Link style={linkOneStyle}>Analysis and Strategy</Link>
              <Link style={linkOneStyle}>Platform Integrations</Link>
              <Link style={linkOneStyle}>Web Services and Additions</Link>
              <Link style={linkOneStyle}>Learning Analytics</Link>
              <Link style={linkOneStyle}>Adaptive Learning and AI</Link>
              <Link style={linkOneStyle}>Content Delivery and Scale</Link>
              <Link style={linkOneStyle}>Smart L&D Staffing</Link>
            </Stack>
          </Stack>
        </Box>

        <Stack
          onClick={handlIsClicked2}
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <Link
            className="uniqueIcon"
            style={isVisible2 || isVisible21 ? { color: "#ff4800" } : {}}
          >
            <Stack
              direction={"row"}
              sx={{ justifyContent: "space-between", alignItems: "center" }}
            >
              Solution
              <KeyboardArrowDown />
            </Stack>
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
            display: {
              xs: isclicked2 ? "block" : "none",
              md: isVisible2 || isVisible21 ? "block" : "none",
            }, // Show/hide based on state
          }}
          onMouseEnter={handleMouseEnter21}
          onMouseLeave={handleMouseLeave21}
        >
          <Stack
            sx={{
              padding: {
                md: "1.5rem 3rem 0.7rem 5.5rem",
                lg: "2rem 6rem 1rem 8rem",
              },
            }}
            className="moreIcon"
          >
            <Grid container>
              <Grid item xs={12} md={2.4}>
                <Stack spacing={"0.5rem"}>
                  <Link>
                    <Stack
                      sx={{
                        display: { xs: "none", md: "block" },
                      }}
                    >
                      <img
                        src={solution1}
                        style={{
                          borderRadius: "0.5rem",
                          width: "100%",
                          height: "100%",
                        }}
                        alt="world view"
                      />
                    </Stack>
                    <Typography sx={textstyle1}>
                      Learning Management System
                    </Typography>
                    <Typography sx={textstyle2}>
                      Place employees at the center of your business
                      transformation
                    </Typography>
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={12} md={2.4}>
                <Stack spacing={"0.5rem"}>
                  <Link>
                    <Stack sx={{ display: { xs: "none", md: "block" } }}>
                      <img
                        src={solution2}
                        style={{
                          borderRadius: "0.5rem",
                          width: "100%",
                          height: "100%",
                        }}
                        alt="world view"
                      />
                    </Stack>
                    <Typography sx={textstyle1}>
                      Leadership Development Training
                    </Typography>
                    <Typography sx={textstyle2}>
                      Leadership training that empowers employees
                    </Typography>
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={12} md={2.4}>
                <Stack spacing={"0.5rem"}>
                  <Link>
                    <Stack sx={{ display: { xs: "none", md: "block" } }}>
                      <img
                        src={solution3}
                        style={{
                          borderRadius: "0.5rem",
                          width: "100%",
                          height: "100%",
                        }}
                        alt="world view"
                      />
                    </Stack>
                    <Typography sx={textstyle1}>
                      Health And Safety Training
                    </Typography>
                    <Typography sx={textstyle2}>
                      Compliance that balances regulation and culture
                    </Typography>
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={12} md={2.4}>
                <Stack spacing={"0.5rem"}>
                  <Link>
                    <Stack sx={{ display: { xs: "none", md: "block" } }}>
                      <img
                        src={solution4}
                        style={{
                          borderRadius: "0.5rem",
                          width: "100%",
                          height: "100%",
                        }}
                        alt="world view"
                      />
                    </Stack>
                    <Typography sx={textstyle1}>
                      Employee On boarding
                    </Typography>
                    <Typography sx={textstyle2}>
                      Employee onboarding that focuses on people
                    </Typography>
                  </Link>
                </Stack>
              </Grid>
              <Grid item xs={12} md={2.4}>
                <Stack spacing={"0.5rem"}>
                  <Link>
                    <Stack sx={{ display: { xs: "none", md: "block" } }}>
                      <img
                        src={solution5}
                        style={{
                          borderRadius: "0.5rem",
                          width: "100%",
                          height: "100%",
                        }}
                        alt="world view"
                      />
                    </Stack>
                    <Typography sx={textstyle1}>
                      Salses And Service Training
                    </Typography>
                    <Typography sx={textstyle2}>
                      Sales Enablement training that creates a culture of
                      performance
                    </Typography>
                  </Link>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Box>

        <Stack>
          <Link className="uniqueIcon">Blog</Link>
        </Stack>
        <Stack>
          <Link className="uniqueIcon">About</Link>
        </Stack>
      </Stack>

      <Stack width={"25%"}>
        <Link className="uniqueIcon">Contact</Link>
      </Stack>
    </Stack>
  );
}

export default Drawer;
