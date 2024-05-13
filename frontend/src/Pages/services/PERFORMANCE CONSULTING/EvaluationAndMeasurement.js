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
import logsignimg from "../../../assets/PERFORMANCE/PERFORMANCE_1.jpg";
import HomeHeader from "../../../components/HomeHeader";
import Footer from "../../../components/Footer";
import {
  AssessmentOutlined,
  BarChartOutlined,
  LightbulbOutlined,
} from "@mui/icons-material";

function EvaluationAndMeasurement() {
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
          Make Informed Decisions with Effective Evaluation & Measurement
        </Typography>
      </Stack>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Make Informed Decisions with Effective Evaluation & Measurement
            </Typography>
            <Typography variant="body1" gutterBottom>
              Effective evaluation and measurement are critical for
              understanding the impact of your programs and initiatives.
              Worldview Training and Consulting Service PLC helps you develop a
              robust evaluation framework to:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <LightbulbOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Assess Program Effectiveness and ROI" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <BarChartOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Track Progress and Measure Outcomes" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <AssessmentOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Identify Areas for Improvement and Optimization" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Evaluation & Measurement Services
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Development of Evaluation Plans and Metrics" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Data Collection and Analysis" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Reporting and Visualization of Evaluation Results" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Stakeholder Engagement and Communication" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Benefits of Evaluation & Measurement
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Data-Driven Decision Making for Program Improvement" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Increased Accountability and Transparency" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Improved Resource Allocation and Efficiency" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Demonstration of Program Value and ROI" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Continuous Learning and Program Development" />
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
          Invest in Measurement, Invest in Continuous Improvement
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
            Learn More About Evaluation & Measurement
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

export default EvaluationAndMeasurement;
