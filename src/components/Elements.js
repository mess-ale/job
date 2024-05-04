import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Elements({ imageUrl, title, num }) {
  const buttonStyle = {
    margin: {
      xs: "0rem 0rem 0rem 1rem",
      sm: "0rem 0.8rem 0rem 2rem",
      md: "0rem 1.5rem 0rem 3.5rem",
      lg: "0rem 2rem 0rem 5rem",
    },
    color: "#fff",
    paddingTop: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem", lg: "1rem" },
    textTransform: "capitalize",
    "&:hover": {
      boxShadow: "0px -3px 0px #89fc00",
    },
  };

  const stackstyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  return (
    <Stack sx={stackstyle}>
      <Stack direction={"row"}>
        <Stack
          width={{ xs: "75%", md: "70%", lg: "65%", xl: "60%" }}
          marginLeft={{ xs: "4rem", sm: "6rem", md: "8rem" }}
          paddingTop={{ xs: "7rem", sm: "8.5rem", md: "10rem" }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3.5rem", lg: "4rem" },
              fontFamily: "Young Serif",
              paddingBottom: "3rem",
            }}
          >
            {title}
          </Typography>
          
          <Link
            style={{
              textDecoration: "none",
            }}
            to={'/about'}
          >
            <Button
              sx={{
                border: "solid 3px #fff",
                width: { xs: "60%", sm: "50%", md: "40%", lg: "30%" },
                color: "#fff",
                borderRadius: {
                  xs: "1rem 1rem 1rem 0rem",
                  md: "1.5rem 1.5rem 1.5rem 0rem",
                },
                textTransform: "capitalize",
                fontWeight: "bold",
                "&:hover": {
                  background: "#fff",
                  color: "#89fc00",
                },
                fontSize: { xs: "small", sm: "medium", md: "large" },
              }}
              endIcon={<ArrowForward />}
            >
              See How We Do It
            </Button>
          </Link>
        </Stack>
      </Stack>

      <Stack direction={"row"} sx={{ position: "absolute", bottom: "40px" }}>
        <Button
          href="/PerformanceConsulting"
          style={
            num === 0
              ? {
                  boxShadow: "0px -3px 0px #89fc00",
                }
              : {}
          }
          sx={buttonStyle}
        >
          <Typography>Performance Consulting</Typography>
        </Button>
        <Button
          href="/InstructionalDesign"
          style={
            num === 1
              ? {
                  boxShadow: "0px -3px 0px #89fc00",
                }
              : {}
          }
          sx={buttonStyle}
        >
          <Typography>Instructional Design</Typography>
        </Button>
        <Button
        href="/LearningTechnology"
          style={
            num === 2
              ? {
                  boxShadow: "0px -3px 0px #89fc00",
                }
              : {}
          }
          sx={buttonStyle}
        >
          <Typography>Learning Technology</Typography>
        </Button>
        <Button
        href="/SmartLNDStaffing"
          style={
            num === 3
              ? {
                  boxShadow: "0px -3px 0px #89fc00",
                }
              : {}
          }
          sx={buttonStyle}
        >
          <Typography>Smart L&D Staffing</Typography>
        </Button>
      </Stack>
    </Stack>
  );
}

export default Elements;
