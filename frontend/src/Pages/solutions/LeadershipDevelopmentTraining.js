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
import HomeHeader from "../../components/HomeHeader";
import logsignimg from "../../assets/insidesolution_1.jpg";
import Footer from "../../components/Footer";
import {
  BarChartOutlined,
  LightbulbOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

function LeadershipDevelopmentTraining() {
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
          leadership training that empowers employees
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
              Leadership Development Training
            </Typography>
            <Typography variant="body1" gutterBottom>
              Empower Your Leaders to Drive Success
            </Typography>
            <Typography variant="body1">
              In today's competitive business landscape, effective leadership is
              more critical than ever. Worldview Training and Consulting Service
              PLC offers comprehensive Leadership Development Training programs
              designed to equip your leaders with the skills and knowledge they
              need to:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <PeopleAltOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Inspire and Motivate Teams" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <BarChartOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Drive Strategic Performance" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <LightbulbOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Foster Innovation and Creativity" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Leadership Development Programs
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Emerging Leader Development" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Executive Leadership Coaching" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Teamwork and Collaboration Skills" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Strategic Decision-Making" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Change Management and Communication" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" component="h3" gutterBottom>
              Benefits of Leadership Development Training
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Increased Employee Engagement" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Improved Productivity and Performance" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Enhanced Innovation and Problem-Solving" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Stronger Company Culture" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Succession Planning and Talent Development" />
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
          Invest in Your Leaders, Invest in Your Future
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
            Explore Leadership Programs
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

export default LeadershipDevelopmentTraining;
