import {
  Box,
  Button,
  Divider,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Rectangle 41 (1).png";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";

function HomeHeader() {
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [anchorEl2, setAnchorEl2] = useState(null);
  const [anchorEl3, setAnchorEl3] = useState(null);
  const [isMenu1Open, setIsMenu1Open] = useState(false);
  const [isMenu2Open, setIsMenu2Open] = useState(false);
  const [isMenu3Open, setIsMenu3Open] = useState(false);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
    setIsMenu1Open(true);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
    setIsMenu2Open(true);
  };

  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
    setIsMenu3Open(true);
  };

  const handleClose = () => {
    setAnchorEl1(null);
    setAnchorEl2(null);
    setAnchorEl3(null);
    setIsMenu1Open(false);
    setIsMenu2Open(false);
    setIsMenu3Open(false);
  };

  const linkStyle = {
    color: "#000",
    textDecoration: "none",
  };
  const linkStyle2 = {
    padding: "0.2rem 1rem 0.2rem 1rem",
    fontFamily: "Outfit",
    "&:hover": {
      fontFamily: "Young Serif",
    },
    flexGrow: 0,
    flexShrink: 0,
  };

  const linkStyle3 = {
    fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
    color: "#000",
    "&:hover": {
      borderRadius: {
        sm: "0.4rem",
        md: "0.4.5rem",
        lg: "0.5rem",
      },
    },
    fontFamily: "Outfit",
  };

  return (
    <Stack
      direction={"row"}
      sx={{
        justifyContent: "space-between",
        background: "#E8EAED",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        zIndex: "310",
        padding: { md: "0.5rem 0rem" },
      }}
    >
      <Stack
        direction={"row"}
        sx={{
          paddingLeft: { sm: "2rem", md: "3.3rem", lg: "3rem" },
          paddingTop: "1rem",
        }}
      >
        <Stack>
          <Box
            aria-controls="simple-menu"
            aria-haspopup="true"
            onMouseOver={handleClick1}
            sx={linkStyle2}
            style={isMenu1Open ? { fontFamily: "Young Serif" } : {}}
          >
            Service
          </Box>
          {isMenu1Open && <Divider variant="middle" sx={{ my: 1 }} />}

          <Menu
            sx={{ marginTop: "1.5rem" }}
            id="simple-menu"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
          >
            <MenuItem onClick={handleClose}>
              <Link style={linkStyle} to="/service/Overview">
                Overview
              </Link>
            </MenuItem>
            <Divider variant="middle" />
            <MenuItem onClick={handleClose}>
              <Link style={linkStyle} to="/service/StrategyAndAdvisory">
                Strategy And Advisory
              </Link>
            </MenuItem>
            <Divider variant="middle" />
            <MenuItem onClick={handleClose}>
              <Link style={linkStyle} to="/service/MarketiongAndDesign">
                Marketiong And Design
              </Link>
            </MenuItem>
            <Divider variant="middle" />
            <MenuItem onClick={handleClose}>
              <Link style={linkStyle} to="/service/Content">
                Content Creation And Managment
              </Link>
            </MenuItem>
            <Divider variant="middle" />
            <MenuItem onClick={handleClose}>
              <Link style={linkStyle} to="/service/Customer">
                Customer Engagement
              </Link>
            </MenuItem>
            <Divider variant="middle" />
            <MenuItem onClick={handleClose}>
              <Link style={linkStyle} to="/service/Digtal">
                Digital Technology
              </Link>
            </MenuItem>
          </Menu>
        </Stack>

        <Stack>
          <Box
            aria-controls="simple-menu2"
            aria-haspopup="true"
            onMouseOver={handleClick2}
            sx={linkStyle2}
            style={isMenu2Open ? { fontFamily: "Young Serif" } : {}}
          >
            Solution
          </Box>
          {isMenu2Open && <Divider variant="middle" sx={{ my: 1 }} />}
          <Menu
            sx={{ marginTop: "1.5rem" }}
            id="simple-menu2"
            anchorEl={anchorEl2}
            keepMounted
            open={Boolean(anchorEl2)}
            onClose={handleClose}
            MenuListProps={{ onMouseLeave: handleClose }}
          >
            <MenuItem onClick={handleClose}>
              <Link style={linkStyle} to="/solutions/ComplianceAndRiskTraining">
                Compliance And Risk Training
              </Link>
            </MenuItem>

            <Divider variant="middle" />
            <MenuItem onClick={handleClose}>
              <Link style={linkStyle} to="/solutions/EmployeeOnboarding">
                Employee On boarding
              </Link>
            </MenuItem>

            <Divider variant="middle" />
            <MenuItem onClick={handleClose}>
              <Link
                style={linkStyle}
                to="/solutions/LeadershipDevelopmentTraining"
              >
                Leadership Development Training
              </Link>
            </MenuItem>

            <Divider variant="middle" />
            <MenuItem onClick={handleClose}>
              <Link style={linkStyle} to="/solutions/LearningManagement">
                Learning Management System
              </Link>
            </MenuItem>

            <Divider variant="middle" />
            <MenuItem onClick={handleClose}>
              <Link style={linkStyle} to="/solutions/SalsesAndServiceTraining">
                Salses And Service Training
              </Link>
            </MenuItem>
          </Menu>
        </Stack>

        <Stack>
          <Box
            aria-controls="simple-menu3"
            aria-haspopup="true"
            onMouseOver={handleClick3}
            sx={linkStyle2}
            style={isMenu3Open ? { fontFamily: "Young Serif" } : {}}
          >
            Insights
          </Box>
          {isMenu3Open && (
            <Divider variant="middle" sx={{ my: 1, borderRightWidth: 5 }} />
          )}

          <Menu
            id="simple-menu3"
            anchorEl={anchorEl3}
            open={Boolean(anchorEl3)}
            onClose={handleClose}
            sx={{
              marginTop: "1.5rem", // Add spacing at the top
              borderRadius: "8px", // Add rounded corners
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
            }}
            MenuListProps={{ onMouseLeave: handleClose }}
          >
            <MenuItem onClick={handleClose}>
              <Link
                to="/Insights/Blog"
                style={{
                  textDecoration: "none", // Customize link styling
                  color: "inherit", // Use the default text color
                }}
              >
                Blog
              </Link>
            </MenuItem>

            <Divider variant="middle" />

            <MenuItem onClick={handleClose}>
              <Link
                to="/Insights/FutureOfWork"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Future of work
              </Link>
            </MenuItem>

            <Divider variant="middle" />

            <MenuItem onClick={handleClose}>
              <Link
                to="/Insights/Microlearning"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                Micro learning
              </Link>
            </MenuItem>
          </Menu>
        </Stack>

        <Stack>
          <Link style={linkStyle} to="/about">
            <Box sx={linkStyle2}>About</Box>
          </Link>
        </Stack>

        <Stack>
          <Link style={linkStyle} to="/Contact">
            <Box sx={linkStyle2}>Contact</Box>
          </Link>
        </Stack>
      </Stack>

      <Link style={linkStyle} to="/">
        <Stack direction={"row"} spacing={"2rem"}>
          <img src={logo} alt="world view" />
          <Box>
            <Typography sx={{ paddingTop: "1rem" }}>Worldview</Typography>
          </Box>
        </Stack>
      </Link>

      <Stack
        direction={"row"}
        spacing={"1rem"}
        sx={{
          paddingRight: { sm: "2rem", md: "3.3rem", lg: "3rem" },
          paddingTop: "1rem",
        }}
      >
        <Button
          startIcon={<Facebook />}
          sx={linkStyle3}
          style={{ height: "50%" }}
        >
          Facebook
        </Button>
        <Button
          startIcon={<LinkedIn />}
          sx={linkStyle3}
          style={{ height: "50%" }}
        >
          LinkedIn
        </Button>
        <Button
          startIcon={<Instagram />}
          sx={linkStyle3}
          style={{ height: "50%" }}
        >
          Instagram
        </Button>
      </Stack>
    </Stack>
  );
}

export default HomeHeader;
