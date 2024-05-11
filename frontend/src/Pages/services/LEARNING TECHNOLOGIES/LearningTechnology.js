import React from "react";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import {
  ComputerOutlined,
  LightbulbOutlined,
  School,
} from "@mui/icons-material";
import HomeHeader from "../../../components/HomeHeader";
import Footer from "../../../components/Footer";
import logsignimg from "../../../assets/slide_1.png";
import { Link } from "react-router-dom";

function LearningTechnology() {
  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack>
        <HomeHeader />
      </Stack>
      <Stack
        sx={{
          padding: {
            xs: "5rem 0 4rem 0",
            sm: "6rem 0 5rem 0",
            md: "11rem 0 5rem 7rem",
          },
          backgroundImage: `url(${logsignimg})`,
          backgroundSize: "cover",
          alignItems: { xs: "center", md: "baseline" },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "2rem", sm: "2.25rem", md: "2.6rem", lg: "3rem" },
            fontFamily: "Young Serif",
            paddingBottom: "3rem",
          }}
        >
          Learning Technology
        </Typography>
        <Link to={"/contact"}>
          <Button
            sx={{
              border: "solid 2px black",
              borderRadius: {
                sm: "0.7rem 0.7rem 0.7rem 0rem",
                md: "0.8rem 0.8rem 0.8rem 0rem",
                lg: "1rem 1rem 1rem 0rem",
              },
              textTransform: "capitalize",
              background: "#89fc00",
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
                background: "#fff",
              },
            }}
          >
            Contact Us
          </Button>
        </Link>
      </Stack>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Learning Technology Solutions
            </Typography>
            <Typography variant="body1" gutterBottom>
              Leverage Technology to Enhance Learning and Development
            </Typography>
            <Typography variant="body1">
              In today's digital age, learning technology plays a crucial role
              in transforming the way we learn and develop. Worldview Training
              and Consulting Service PLC offers a comprehensive suite of
              learning technology solutions to help you:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <ComputerOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Develop Engaging eLearning Modules" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <LightbulbOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Implement Innovative Learning Management Systems (LMS)" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <School />
                </IconButton>
                <ListItemText primary="Integrate Blended Learning Strategies" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h3" gutterBottom>
              Benefits of Learning Technology
            </Typography>
            <Typography variant="body1">
              By incorporating learning technology into your training programs,
              you can achieve numerous benefits, including:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Improved Learner Engagement" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Increased Knowledge Retention" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Enhanced Scalability and Accessibility" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Reduced Training Costs" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Measurable Learning Outcomes" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>

      <Stack
        sx={{
          background: "#212529",
          padding: {
            xs: "2rem 2.5rem 2rem 2.5rem",
            sm: "2.5rem 3rem 2.5rem 3rem",
            md: "3rem 8rem 3rem 8rem",
            lg: "4rem 13rem 5rem 13rem",
          },
        }}
        justifyContent={"center"}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            paddingBottom: "2rem",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2rem" },
          }}
          variant="h4"
          component="h2"
          color={"#fff"}
        >
          Unlock the Power of Learning Technology
        </Typography>

        <Stack alignItems={"center"}>
          <Button
            href="/contact"
            sx={{
              border: "solid 2px black",
              borderRadius: {
                sm: "0.7rem 0.7rem 0.7rem 0rem",
                md: "0.8rem 0.8rem 0.8rem 0rem",
                lg: "1rem 1rem 1rem 0rem",
              },
              textTransform: "capitalize",
              background: "#89fc00",
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
                background: "#fff",
              },
            }}
          >
            Explore Our Services
          </Button>
        </Stack>
      </Stack>

      <Stack
        sx={{
          marginTop: "auto",
        }}
      >
        <Footer />
      </Stack>
    </Stack>
  );
}

export default LearningTechnology;
