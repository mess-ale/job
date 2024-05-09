import React from "react";
import {
  Container,
  Grid,
  Typography,
  Button,
  Stack,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import logsignimg from "../../../assets/PERFORMANCE/PERFORMANCE_1.jpg";
import Footer from "../../../components/Footer";
import HomeHeader from "../../../components/HomeHeader";
import {
  AssessmentOutlined,
  BarChartOutlined,
  LightbulbOutlined,
} from "@mui/icons-material";

function NeedsAnalysis() {
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
        >Bridge the Gap Between Current State and Future
        Goals
        </Typography>
      </Stack>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Needs Analysis: Bridge the Gap Between Current State and Future
              Goals
            </Typography>
            <Typography variant="body1" gutterBottom>
              A thorough Needs Analysis is the critical first step to any
              successful training or development program. Worldview Training and
              Consulting Service PLC helps you identify gaps between your
              current state and your desired future state. This analysis ensures
              that your training programs are:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <LightbulbOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Focused on Addressing Specific Needs" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <BarChartOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Aligned with Your Strategic Goals" />
              </ListItem>
            </List>
            <Typography variant="h5" component="h3" gutterBottom sx={{ mt: 4 }}>
              Our Needs Analysis Process
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <AssessmentOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Data Collection: Interviews, Surveys, and Assessments" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <LightbulbOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Skills Gap Analysis: Identify Strengths and Weaknesses" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <BarChartOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Needs Prioritization: Focus on Critical Areas" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <AssessmentOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Recommendations for Training and Development" />
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
          Bridge the Gap Between Current State and Future
        Goals
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
            Learn More About
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

export default NeedsAnalysis;
