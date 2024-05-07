import React from "react";
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Elements({ imageUrl, title, num }) {
  const stackstyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <Stack sx={stackstyle}>
      <Container>
        <Stack direction={"row"} alignItems="center" height="85vh" sx={{ display: {xs: 'flex', md: ''}, justifyContent: {xs: 'center', md: 'left'}}}>
          <Stack
            width={{ xs: "75%", md: "70%", lg: "65%", xl: "60%" }}
          >
            <Typography
              sx={{
                color: "#fff",
                fontSize: {
                  xs: "2rem",
                  sm: "2.5rem",
                  md: "3rem",
                  lg: "3.5rem",
                },
                fontFamily: "Young Serif",
                paddingBottom: "3rem",
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {title}
            </Typography>
            <Stack
              sx={{
                "& a": {
                  width: { xs: "55%", sm: "45%", md: "35%", lg: "30%" },
                },
                alignItems: { xs: "center", md: "baseline" },
              }}
            >
              <Link to={"/about"}>
                <Button
                  sx={{
                    border: "solid 3px #fff",
                    color: "#fff",
                    borderRadius: {
                      xs: "1rem 1rem 1rem 0rem",
                      md: "1.5rem 1.5rem 1.5rem 0rem",
                    },
                    width: "100%",
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    "&:hover": {
                      background: "#fff",
                      color: "#89fc00",
                    },
                    "& a": {
                      color: "#fff",
                      textDecoration: "none",
                    },
                  }}
                  endIcon={<ArrowForward />}
                >
                  See How We Do It
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Stack>

        <Grid
          container
          sx={{
            "& button": {
              color: "#fff",
              textTransform: "capitalize",
              "&:hover": {
                boxShadow: "0px -3px 0px #89fc00",
              },
              fontSize: {xs: '0.7rem', sm: '0.8rem', md: '0.9rem', lg: '1rem'}
            },
          }}
        >
          <Grid item xs={3}>
            <Link to={"/PerformanceConsulting"}>
              <Button
                style={
                  num === 0
                    ? {
                        boxShadow: "0px -3px 0px #89fc00",
                      }
                    : {}
                }
              >
                Performance Consulting
              </Button>
            </Link>
          </Grid>

          <Grid item xs={3}>
            <Link to={"/InstructionalDesign"}>
              <Button
                style={
                  num === 1
                    ? {
                        boxShadow: "0px -3px 0px #89fc00",
                      }
                    : {}
                }
              >
                Instructional Design
              </Button>
            </Link>
          </Grid>

          <Grid item xs={3}>
            <Link to={"/LearningTechnology"}>
              <Button
                style={
                  num === 2
                    ? {
                        boxShadow: "0px -3px 0px #89fc00",
                      }
                    : {}
                }
              >
                Learning Technology
              </Button>
            </Link>
          </Grid>

          <Grid item xs={3}>
            <Link to={"/service/SmartLNDStaffing"}>
              <Button
                style={
                  num === 3
                    ? {
                        boxShadow: "0px -3px 0px #89fc00",
                      }
                    : {}
                }
              >
                Smart L&D Staffing
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Stack>
  );
}

export default Elements;
