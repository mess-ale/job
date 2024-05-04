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
} from "@mui/material";
import HomeHeader from "../../components/HomeHeader";
import Footer from "../../components/Footer";
import logsignimg from "../../assets/slide_4.png";

function PerformanceConsulting() {
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
          alignItems: {xs: 'center', md: 'baseline'}
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
          TRAINING CONSULTING
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
              width: {md: '20%', lg : "15%"},
              "&:hover": {
                background: '#fff',
              }
            }}
          >
            Contact Us
          </Button>
      </Stack>

      <Container
        maxWidth="lg"
        sx={{
          py: 8,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Performance Consulting
            </Typography>
            <Typography variant="body1" gutterBottom>
              Boost Efficiency, Drive Results with Worldview Training and
              Consulting Service PLC
            </Typography>
            <Typography variant="body1">
              In today's competitive landscape, organizations need to perform at
              their peak to achieve sustainable success. Worldview Training and
              Consulting Service PLC offers comprehensive Performance Consulting
              services designed to help you identify performance gaps, develop
              targeted interventions, and achieve measurable results.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Approach
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Needs Assessment" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Performance Gap Analysis" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Root Cause Identification" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Customized Intervention Design" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Implementation and Facilitation" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Evaluation and Measurement" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Benefits of Performance Consulting
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Improved Efficiency and Productivity" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Enhanced Employee Engagement" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Reduced Costs and Waste" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Increased Customer Satisfaction" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Achieved Strategic Objectives" />
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
          Ready to unlock your organization's full potential?
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
                background: '#fff',
              }
            }}
          >
            Contact Us Today
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

export default PerformanceConsulting;
