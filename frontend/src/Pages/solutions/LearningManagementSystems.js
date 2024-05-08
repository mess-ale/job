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
  School,
  CloudUploadOutlined,
  AssessmentOutlined,
} from "@mui/icons-material";
import HomeHeader from "../../components/HomeHeader";
import Footer from "../../components/Footer";
import logsignimg from "../../assets/support.jpg";
import { Link } from "react-router-dom";

function LearningManagementSystems() {
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
            lg: "10rem 0 8rem 10rem",
          },
          backgroundImage: `url(${logsignimg})`,
          alignItems: { xs: "center", md: "baseline" },
        }}
      >
        <Typography
          sx={{
            color: "#000",
            fontSize: { xs: "2rem", sm: "2.25rem", md: "2.6rem", lg: "2.8rem" },
            fontFamily: "Young Serif",
            paddingBottom: "3rem",
            width: { md: "70%", lg: "55%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          place employees at the center of your business transformation
        </Typography>
        <Link to={"/contact"}>
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
            Contact Us
          </Button>
        </Link>
      </Stack>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Learning Management Systems (LMS)
            </Typography>
            <Typography variant="body1" gutterBottom>
              Streamline Training Delivery and Management
            </Typography>
            <Typography variant="body1">
              In today's dynamic learning environment, a Learning Management
              System (LMS) is an essential tool for organizations of all sizes.
              Worldview Training and Consulting Service PLC offers LMS
              implementation, integration, and support services to help you:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <CloudUploadOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Consolidate and Deliver Training Content" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <School />
                </IconButton>
                <ListItemText primary="Facilitate Online Learning and Blended Programs" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <AssessmentOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Track Learner Progress and Performance" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our LMS Solutions
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="LMS Selection and Implementation" />
              </ListItem>
              <ListItem>
                <ListItemText primary="LMS Customization and Integration" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Content Migration and Upload" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Ongoing LMS Support and Maintenance" />
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
          Empower Your Learners, Enhance Training Efficiency
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
            Explore LMS Solutions
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

export default LearningManagementSystems;
