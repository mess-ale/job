import { Box, Grid, Stack, Typography } from "@mui/material";
import solution1 from "../assets/solutions (1).png";
import solution2 from "../assets/solutions (2).png";
import solution3 from "../assets/solutions (3).png";
import solution4 from "../assets/solutions (4).png";
import solution5 from "../assets/solutions (5).png";
import React, { useEffect, useState } from "react";
import "../style/Animation.css";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";

function Drawer() {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible21, setIsVisible21] = useState(false);
  const [isclicked1, setIsclicked1] = useState(false);
  const [isclicked2, setIsclicked2] = useState(false);
  const handlIsClicked1 = () => setIsclicked1(!isclicked1);
  const handlIsClicked2 = () => setIsclicked2(!isclicked2);
  const [isPageJustLoaded, setIsPageJustLoaded] = useState(true);
  const loacation = useLocation();
  useEffect(() => {
    // When the component mounts, set the flag to false after a short delay
    const timer = setTimeout(() => {
      setIsPageJustLoaded(false);
    }, 100); // 100ms delay

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);

  const handleMouseEnter = () => {
    if (!isPageJustLoaded) {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    if (!isPageJustLoaded) {
      setIsVisible(false);
    }
  };
  const handleMouseEnter1 = () => {
    if (!isPageJustLoaded) {
      setIsVisible1(true);
    }
  };
  const handleMouseLeave1 = () => {
    if (!isPageJustLoaded) {
      setIsVisible1(false);
    }
  };
  const handleMouseEnter2 = () => {
    if (!isPageJustLoaded) {
      setIsVisible2(true);
    }
  };
  const handleMouseLeave2 = () => {
    if (!isPageJustLoaded) {
      setIsVisible2(false);
    }
  };
  const handleMouseEnter21 = () => {
    if (!isPageJustLoaded) {
      setIsVisible21(true);
    }
  };
  const handleMouseLeave21 = () => {
    if (!isPageJustLoaded) {
      setIsVisible21(false);
    }
  };

  const textstyle1 = {
    fontSize: {
      md: "0.9rem",
      lg: "1.1rem",
    },
    textTransform: "capitalize",
    fontWeight: "bold",
    paddingLeft: { xs: "2rem", md: "0" },
  };

  const textstyle2 = {
    color: "#000",
    textTransform: "lowercase",
    fontSize: {
      md: "0.7rem",
      lg: "1rem",
    },
    paddingLeft: { xs: "2rem", md: "0" },
    paddingBottom: "0.5rem",
  };

  const serviceStyle = {
    padding: {
      xs: "1.5rem 1.5rem 3rem 2rem",
      md: "3rem 1.5rem 3rem 15rem",
      lg: "3.5rem 5rem 3rem 25rem",
    },
    "& a": {
      textTransform: "capitalize",
      lineHeight: 1.5,
      paddingLeft: {xs: '0.5rem', md: '0'}
    },
  };

  const typoStyle = {
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
        <Stack onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <Stack
            sx={{ justifyContent: "space-between", alignItems: "center", paddingRight: {xs: '3rem', md: '0'} }}
            direction={"row"}
            style={
              loacation.pathname === "/Services"
                ? {
                    color: "#ff4800",
                  }
                : {}
            }
          >
            <Link
              className="uniqueIcon"
              style={isVisible || isVisible1 ? { color: "#ff4800" } : {}}
              to={"/Services"}
            >
              Service
            </Link>
            <KeyboardArrowDown onClick={handlIsClicked1} sx={{ cursor: 'pointer' }}/>
          </Stack>
        </Stack>
        <Box
          className={isVisible || isVisible1 ? "slide-in" : "slide-out"}
          sx={{
            boxShadow: 1,
            position: { md: "fixed" },
            width: '100%',
            top: { md: "35px", lg: "37px" },
            right: 0, // Position at right edge
            backgroundColor: "#E8EAED", // Drawer background color
            display: {
              xs: isclicked1 ? "block" : "none",
              md: isVisible || isVisible1 ? "block" : "none",
            }, // Show/hide based on state
          }}
          onMouseEnter={handleMouseEnter1}
          onMouseLeave={handleMouseLeave1}
        >
          <Grid container sx={serviceStyle}>
            <Grid item xs={12} md={4}>
              <Stack>
                <Typography sx={typoStyle}>Performance Consulting</Typography>
                <Link
                  to={"/service/NeedsAnalysis"}
                  style={
                    loacation.pathname === "/service/NeedsAnalysis"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Needs Analysis
                </Link>
                <Link
                  to={"/service/PerformanceMapping"}
                  style={
                    loacation.pathname === "/service/PerformanceMapping"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Performance Mapping
                </Link>
                <Link
                  to={"/service/EvaluationAndMeasurement"}
                  style={
                    loacation.pathname === "/service/EvaluationAndMeasurement"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Evaluation & Measurement
                </Link>
                <Link
                  to={"/service/SmartLNDStaffing"}
                  style={
                    loacation.pathname === "/service/SmartLNDStaffing"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Smart L&D Staffing
                </Link>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack>
                <Typography sx={typoStyle}>Instructional Design</Typography>
                <Link
                  to={"/service/DigitalLearning"}
                  style={
                    loacation.pathname === "/service/DigitalLearning"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Digital Learning
                </Link>
                <Link
                  to={"/service/BlendedLearning"}
                  style={
                    loacation.pathname === "/service/BlendedLearning"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Blended Learning
                </Link>
                <Link
                  to={"/service/ILTVILT"}
                  style={
                    loacation.pathname === "/service/ILTVILT"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  ILT and VILT
                </Link>
                <Link
                  to={"Solutions"}
                  style={
                    loacation.pathname === "Solutions"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  On-Demand Learning
                </Link>
                <Link
                  to={"/service/BlendedLearning"}
                  style={
                    loacation.pathname === "/service/BlendedLearning"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Video Services
                </Link>
                <Link
                  to={"/solutions/LearningManagement"}
                  style={
                    loacation.pathname === "/solutions/LearningManagement"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Creative Services
                </Link>
                <Link
                  to={"LearningTechnology"}
                  style={
                    loacation.pathname === "LearningTechnology"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Smart L&D Staffing
                </Link>
                <Link
                  to={"/Solutions/LeadershipDevelopmentTraining"}
                  style={
                    loacation.pathname ===
                    "/Solutions/LeadershipDevelopmentTraining"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                ></Link>
              </Stack>
            </Grid>

            <Grid item xs={12} md={4}>
              <Stack>
                <Typography sx={typoStyle}>Learning Technologies</Typography>

                <Link
                  to={"/InstructionalDesign"}
                  style={
                    loacation.pathname === "/InstructionalDesign"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Analysis and Strategy
                </Link>
                <Link
                  to={"/PerformanceConsulting"}
                  style={
                    loacation.pathname === "/PerformanceConsulting"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Platform Integrations
                </Link>
                <Link
                  to={"/Services"}
                  style={
                    loacation.pathname === "/Services"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Web Services and Additions
                </Link>
                <Link
                  to={"/Solutions/HealthAndSafetyTraining"}
                  style={
                    loacation.pathname === "/Solutions/HealthAndSafetyTraining"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Learning Analytics
                </Link>
                <Link
                  to={"/service/ILTVILT"}
                  style={
                    loacation.pathname === "/service/ILTVILT"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Adaptive Learning and AI
                </Link>
                <Link
                  to={"/Solutions/EmployeeOnboarding"}
                  style={
                    loacation.pathname === "/Solutions/EmployeeOnboarding"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Content Delivery and Scale
                </Link>
                <Link
                  to={"/Solutions/SalesAndServiceTraining"}
                  style={
                    loacation.pathname === "/Solutions/SalesAndServiceTraining"
                      ? {
                          color: "#ff4800",
                        }
                      : {}
                  }
                >
                  Smart L&D Staffing
                </Link>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <Stack
          onMouseEnter={handleMouseEnter2}
          onMouseLeave={handleMouseLeave2}
        >
          <Stack
            direction={"row"}
            sx={{ justifyContent: "space-between", alignItems: "center", paddingRight: {xs: '3rem', md: '0'} }}
            style={
              loacation.pathname === "/Solutions"
                ? {
                    color: "#ff4800",
                  }
                : {}
            }
          >
            <Link
              to={"/Solutions"}
              className="uniqueIcon"
              style={isVisible2 || isVisible21 ? { color: "#ff4800" } : {}}
            >
              Solution
            </Link>
            <KeyboardArrowDown onClick={handlIsClicked2} sx={{ cursor: 'pointer'}}/>
          </Stack>
        </Stack>

        <Box
          className={(isVisible2 || isVisible21) ? "slide-in" : "slide-out"}
          sx={{
            boxShadow: 1,
            position: { md: "fixed" },
            top: { md: "32px", lg: "35px" },
            width: '100%',
            right: 0, // Position at right edge
            backgroundColor: "#E8EAED", // Drawer background color
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
                  <Link to={"/solutions/LearningManagement"}>
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
                  <Link to={"/Solutions/LeadershipDevelopmentTraining"}>
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
                  <Link to={"/Solutions/HealthAndSafetyTraining"}>
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
                  <Link to={"/Solutions/EmployeeOnboarding"}>
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
                  <Link to={"/Solutions/SalesAndServiceTraining"}>
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
          <Link
            to={"/blog#"}
            style={
              loacation.pathname === "/blog"
                ? {
                    color: "#ff4800",
                  }
                : {}
            }
            className="uniqueIcon"
          >
            Blog
          </Link>
        </Stack>
        <Link
          to={"/about"}
          style={
            loacation.pathname === "/about"
              ? {
                  color: "#ff4800",
                }
              : {}
          }
          className="uniqueIcon"
        >
          About
        </Link>
      </Stack>

      <Stack width={{ xs: "100%", md: "25%" }}>
        <Link
          to={"/contact"}
          style={
            loacation.pathname === "/contact"
              ? {
                  color: "#ff4800",
                }
              : {}
          }
          className="uniqueIcon"
        >
          Contact
        </Link>
      </Stack>
    </Stack>
  );
}

export default Drawer;
