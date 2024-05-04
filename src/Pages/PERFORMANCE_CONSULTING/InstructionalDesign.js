import React from "react";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import { PlayCircleOutline } from "@mui/icons-material";
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import logsignimg from "../../assets/slide_4.png";

function InstructionalDesign() {
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
          Instructional Design
        </Typography>
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
            width: { md: "20%", lg: "15%" },
            "&:hover": {
              background: "#fff",
            },
          }}
        >
          Contact Us
        </Button>
      </Stack>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Instructional Design
            </Typography>
            <Typography variant="body1" gutterBottom>
              Create Engaging and Effective Learning Experiences
            </Typography>
            <Typography variant="body1">
              Worldview Training and Consulting Service PLC offers comprehensive
              Instructional Design (ID) services to help you develop engaging
              and effective learning experiences for diverse audiences. Our
              expert ID professionals utilize a systematic approach to transform
              knowledge into impactful learning materials, including:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <PlayCircleOutline color="primary" />
                </IconButton>
                <ListItemText primary="eLearning Modules" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <PlayCircleOutline color="primary" />
                </IconButton>
                <ListItemText primary="Instructor-Led Training Materials" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <PlayCircleOutline color="primary" />
                </IconButton>
                <ListItemText primary="Blended Learning Programs" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <PlayCircleOutline color="primary" />
                </IconButton>
                <ListItemText primary="Performance Support Tools" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Instructional Design Process
            </Typography>
            <Typography variant="body1">
              We follow a proven Instructional Design (ID) process that ensures
              your learning materials are:
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Learner-Centered" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Aligned with Learning Objectives" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Instructionally Sound" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Engaging and Interactive" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Measurably Effective" />
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
          Empower Your Learners, Enhance Performance
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
            Get a Free Consultation
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

export default InstructionalDesign;
