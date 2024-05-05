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
  AssessmentOutlined,
  BarChartOutlined,
  LightbulbOutlined,
} from "@mui/icons-material";
import HomeHeader from "../../../components/HomeHeader";
import Footer from "../../../components/Footer";
import logsignimg from "../../../assets/PERFORMANCE/PERFORMANCE_2.jpg";

function PerformanceMapping() {
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
Drive Success with Effective Performance Mapping
        </Typography>
      </Stack>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Drive Success with Effective Performance Mapping
            </Typography>
            <Typography variant="body1" gutterBottom>
              Performance mapping is a strategic tool used to bridge the gap
              between employee goals and organizational objectives. Worldview
              Training and Consulting Service PLC helps you develop performance
              maps that:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <LightbulbOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Align Individual Goals with Company Strategy" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <AssessmentOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Define Clear Performance Objectives and Metrics" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <BarChartOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Track Progress and Facilitate Ongoing Development" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Benefits of Performance Mapping
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Improved Employee Engagement and Motivation" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Enhanced Employee Performance and Development" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Stronger Alignment Between Individual and Team Goals" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Data-Driven Performance Management Decisions" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Positive Impact on Organizational Culture" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Performance Mapping Services
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Performance Mapping Development and Implementation" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Goal Setting and Alignment Workshops" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Performance Management Training for Managers" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Performance Data Analysis and Reporting" />
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
          Empower Your Workforce and Achieve Strategic Goals with Performance
          Mapping
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
            Learn More About Performance Mapping
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

export default PerformanceMapping;
