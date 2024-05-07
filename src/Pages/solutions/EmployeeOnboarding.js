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
import Footer from "../../components/Footer";
import HomeHeader from "../../components/HomeHeader";
import logsignimg from "../../assets/insidesolution_3.jpg";
import {
  CheckCircleOutline,
  EmojiPeopleOutlined,
  LightbulbOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function EmployeeOnboarding() {
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
            color: "#fff",
            fontSize: { xs: "2rem", sm: "2.25rem", md: "2.6rem", lg: "2.8rem" },
            fontFamily: "Young Serif",
            paddingBottom: "3rem",
            width: { md: "70%", lg: "55%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          employee onboarding that focuses on people
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
              Streamline Success from Day One with Effective Onboarding
            </Typography>
            <Typography variant="body1" gutterBottom>
              A smooth and engaging onboarding experience sets the tone for a
              positive and productive employee journey. Worldview Training and
              Consulting Service PLC provides customized onboarding solutions to
              help you:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <CheckCircleOutline color="primary" />
                </IconButton>
                <ListItemText primary="Reduce Time to Productivity" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <EmojiPeopleOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Enhance New Hire Engagement and Retention" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <LightbulbOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Foster a Strong Company Culture" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Onboarding Solutions
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Pre-boarding Preparation and Communication" />
              </ListItem>
              <ListItem>
                <ListItemText primary="New Hire Orientation and Welcome Program" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Role-Specific Training and Development" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Mentorship and Buddy Programs" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Performance Management and Feedback Integration" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Benefits of Effective Onboarding
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Increased Employee Satisfaction" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Improved Employee Engagement" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Reduced Turnover Rates" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Enhanced Employer Branding" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Stronger Company Culture and Values Alignment" />
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
          Invest in Your New Hires, Invest in Your Future Success
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
            Learn More About Onboarding Solutions
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

export default EmployeeOnboarding;
