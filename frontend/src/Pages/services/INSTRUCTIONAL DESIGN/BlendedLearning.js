import React from "react";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Button,
  Stack,
  IconButton,
} from "@mui/material";
import {
  SchoolOutlined,
  AssessmentOutlined,
  LightbulbOutlined,
} from "@mui/icons-material";
import logsignimg from "../../../assets/design/DESIGN_1.jpg";
import Footer from "../../../components/Footer";
import HomeHeader from "../../../components/HomeHeader";

function BlendedLearning() {
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
            md: "8rem 0 5rem 7rem",
            lg: "14rem 0 8rem 14rem",
          },
          backgroundImage: `url(${logsignimg})`,
          alignItems: { xs: "center", md: "baseline" },
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: { xs: "2rem", sm: "2.25rem", md: "2.6rem", lg: "2.8rem" },
            fontFamily: "Young Serif",
            paddingBottom: "3rem",
            width: { md: "70%", lg: "55%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Empower Learners with the Power of Blended Learning
        </Typography>
      </Stack>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Empower Learners with the Power of Blended Learning
            </Typography>
            <Typography variant="body1" gutterBottom>
              Blended learning combines the best of instructor-led training with
              the flexibility and convenience of digital learning. Worldview
              Training and Consulting Service PLC designs and delivers blended
              learning programs that:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <LightbulbOutlined olor="primary" />
                </IconButton>
                <ListItemText primary="Cater to Diverse Learning Styles and Preferences" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <AssessmentOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Enhance Knowledge Retention and Skill Development" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <SchoolOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Create Engaging and Interactive Learning Experiences" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Blended Learning Components
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Instructor-Led Training Sessions (Workshops, Lectures)" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Interactive E-learning Modules and Microlearning" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Collaborative Activities and Group Discussions" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Performance-Based Assessments and Feedback" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Benefits of Blended Learning
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Improved Learning Outcomes and Skill Development" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Increased Learner Engagement and Motivation" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Flexibility for Personalized Learning Paths" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Cost-Effectiveness through Optimized Resource Allocation" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Cater to Diverse Learning Needs and Preferences" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>{" "}
      <Stack
        sx={{
          background: "#212529",
          padding: {
            xs: "2rem 2.5rem 2rem 2.5rem",
            sm: "2.5rem 3rem 2.5rem 3rem",
            md: "3rem 8rem 3rem 8rem",
            lg: "4rem 10rem 5rem 10rem",
          },
        }}
        justifyContent={"center"}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            paddingBottom: "2rem",
            fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem", lg: "1.8rem" },
          }}
          variant="h4"
          component="h2"
          color={"#fff"}
        >
          Unlock the Full Potential of Learning with Blended Learning Strategies
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
            Learn More About Blended Learning
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

export default BlendedLearning;
