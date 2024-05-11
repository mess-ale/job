import React from 'react';
import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Stack, IconButton } from '@mui/material';
import logsignimg from "../../../assets/design/DESIGN_3.jpg";
import Footer from '../../../components/Footer';
import HomeHeader from '../../../components/HomeHeader';
import { AssessmentOutlined, ComputerOutlined, LightbulbOutlined, SchoolOutlined } from '@mui/icons-material';

function ILTVILT() {
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
            color: "#000",
            fontSize: { xs: "2rem", sm: "2.25rem", md: "2.6rem", lg: "2.8rem" },
            fontFamily: "Young Serif",
            paddingBottom: "3rem",
            width: { md: "70%", lg: "55%" },
            textAlign: { xs: "center", md: "left" },
          }}
        >
          Empower Your Workforce with Flexible Learning: ILT & VILT
        </Typography>
      </Stack>
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom>
            Empower Your Workforce with Flexible Learning: ILT & VILT
          </Typography>
          <Typography variant="body1" gutterBottom>
            Worldview Training and Consulting Service PLC offers a comprehensive
            approach to learning delivery, combining the strengths of
            instructor-led training (ILT) and virtual instructor-led training
            (VILT). This hybrid approach ensures we can meet the diverse needs
            of your learners and your organization.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h3" gutterBottom>
            Benefits of ILT
          </Typography>
          <List>
            <ListItem>
              <IconButton sx={{ mr: 1 }}>
                <SchoolOutlined color="primary" />
              </IconButton>
              <ListItemText primary="Real-Time Interaction and Collaboration" />
            </ListItem>
            <ListItem>
              <IconButton sx={{ mr: 1 }}>
                <LightbulbOutlined color="primary" />
              </IconButton>
              <ListItemText primary="Enhanced Facilitation and Personalized Attention" />
            </ListItem>
            <ListItem>
              <IconButton sx={{ mr: 1 }}>
                <AssessmentOutlined color="primary" />
              </IconButton>
              <ListItemText primary="Effective Hands-on Practice and Skill Development" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h3" gutterBottom>
            Benefits of VILT
          </Typography>
          <List>
            <ListItem>
              <IconButton sx={{ mr: 1 }}>
                <ComputerOutlined color="primary" />
              </IconButton>
              <ListItemText primary="Increased Accessibility and Flexibility" />
            </ListItem>
            <ListItem>
              <IconButton sx={{ mr: 1 }}>
                <LightbulbOutlined color="primary" />
              </IconButton>
              <ListItemText primary="Cost-Effectiveness and Reduced Travel Time" />
            </ListItem>
            <ListItem>
              <IconButton sx={{ mr: 1 }}>
                <AssessmentOutlined color="primary" />
              </IconButton>
              <ListItemText primary="Enhanced Engagement with Interactive Tools" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" component="h3" gutterBottom>
            The Worldview Advantage: Combining ILT & VILT
          </Typography>
          <Typography variant="body1">
            We leverage the unique strengths of both ILT and VILT to create
            customizable learning experiences that cater to your specific needs.
            This may include:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Interactive in-person workshops for core concepts" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Engaging VILT sessions for follow-up and reinforcement" />
              </ListItem>
            <ListItem>
              <ListItemText primary="Blended learning with online resources and activities" />
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
        Unlock the Power of Flexible Learning with Worldview
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
          Learn More About ILT & VILT Solutions
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

export default ILTVILT;
