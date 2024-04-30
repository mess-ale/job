import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Elements({ imageUrl, title, num }) {
  const buttonStyle = {
    margin: "0rem 3rem 0rem 5rem",
    color: "#fff",
    paddingTop: "1rem",
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
        <Stack width={"45%"} marginLeft={"10rem"} paddingTop={"10rem"}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "4rem" },
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
          >
            <Button
              sx={{
                border: "solid 3px #fff",
                width: "40%",
                color: "#fff",
                borderRadius: "1.5rem 1.5rem 1.5rem 0rem",
                textTransform: "capitalize",
                fontWeight: "bold",
                "&:hover": {
                  background: "#fff",
                  color: "#89fc00",
                },
              }}
              endIcon={<ArrowForward />}
            >
              See How We Do It
            </Button>
          </Link>
        </Stack>
      </Stack>
      <Stack direction={"row"} sx={{ paddingTop: "6.5rem" }}>
        <Button
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
