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
import {
  SecurityOutlined,
  ShieldOutlined,
  WarningOutlined,
} from "@mui/icons-material";
import HomeHeader from "../../components/HomeHeader";
import Footer from "../../components/Footer";
import logsignimg from "../../assets/insidesolution_2.jpg";
import { Link } from "react-router-dom";

function HealthAndSafetyTraining() {
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
          compliance that balances regulation and culture
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
              Prioritize Safety with Effective Health and Safety Training
            </Typography>
            <Typography variant="body1" gutterBottom>
              A safe work environment is essential for every organization.
              Worldview Training and Consulting Service PLC offers a
              comprehensive suite of Health and Safety Training programs
              designed to:
            </Typography>
            <List>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <SecurityOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Empower Employees to Identify and Mitigate Risks" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <ShieldOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Promote Safe Work Practices and Procedures" />
              </ListItem>
              <ListItem>
                <IconButton sx={{ mr: 1 }}>
                  <WarningOutlined color="primary" />
                </IconButton>
                <ListItemText primary="Reduce Workplace Accidents and Injuries" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Our Health and Safety Training Programs
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Workplace Safety Basics" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Fire Safety and Emergency Preparedness" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Hazard Identification and Risk Assessment" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Personal Protective Equipment (PPE) Training" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Industry-Specific Safety Compliance" />
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" component="h3" gutterBottom>
              Benefits of Health and Safety Training
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Improved Employee Morale and Engagement" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Reduced Workers' Compensation Costs" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Enhanced Regulatory Compliance" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Positive Impact on Company Culture" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Reduced Downtime and Increased Productivity" />
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
          Invest in Safety, Invest in Your Workforce
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
            Explore Health and Safety Training
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

export default HealthAndSafetyTraining;
