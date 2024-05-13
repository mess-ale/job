import React from "react";
import {
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Stack,
  Button,
  IconButton
} from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import HomeHeader from "../../components/HomeHeader";
import logsignimg from "../../assets/slide_4.png";
import Footer from "../../components/Footer";

function Solutions() {
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
            lg: "8rem 0 5rem 10rem",
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
        >CORPORATE TRAINING SOLUTIONS THAT DRIVE BUSINESS RESULTS

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
              Delivering Customized Solutions for Your Business Challenges
            </Typography>
            <Typography variant="body1" gutterBottom>
              Worldview Training and Consulting Service PLC goes beyond just
              services. We offer comprehensive solutions tailored to address
              your specific needs and help you achieve your strategic
              objectives.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Solution-Oriented Approach
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <CheckCircleOutline color="primary" />
                </IconButton>
                <ListItemText primary="Needs Assessment and Gap Analysis" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <CheckCircleOutline color="primary" />
                </IconButton>
                <ListItemText primary="Customized Solution Design" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <CheckCircleOutline color="primary" />
                </IconButton>
                <ListItemText primary="Expert Implementation and Facilitation" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <CheckCircleOutline color="primary" />
                </IconButton>
                <ListItemText primary="Continuous Evaluation and Improvement" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h3" gutterBottom>
              Benefits of Our Solutions
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Increased Efficiency and Productivity" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Enhanced Employee Engagement" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Improved Customer Satisfaction" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Achieved Strategic Goals" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Measurable Results and ROI" />
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

export default Solutions;
