import React from 'react';
import { Container, Grid, Typography, List, ListItem, ListItemText, Button, Stack, IconButton } from '@mui/material';
import logsignimg from "../../assets/insidesolution_4.jpg";
import Footer from '../../components/Footer';
import HomeHeader from '../../components/HomeHeader';
import { AttachMoneyOutlined, EmojiPeopleOutlined, StarRateOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function SalesAndServiceTraining() {
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
        sales enablement training that creates a culture of performance
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
            width: { md: "20%", lg: "15%" },
            "&:hover": {
              background: "#fff",
            },
          }}
        >
        <Link to={'/contact'}>Contact Us</Link>
        </Button>
      </Stack>

    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom>
            Empower Your Teams to Drive Sales and Deliver Exceptional Service
          </Typography>
          <Typography variant="body1" gutterBottom>
            In today's competitive market, exceptional sales and service are
            critical for business success. Worldview Training and Consulting
            Service PLC offers comprehensive training programs designed to equip
            your sales and service teams with the skills and knowledge they need
            to:
          </Typography>
          <List>
            <ListItem>
              <IconButton sx={{ mr: 1 }}>
                <AttachMoneyOutlined color="primary" />
              </IconButton>
              <ListItemText primary="Increase Sales and Revenue Growth" />
            </ListItem>
            <ListItem>
              <IconButton sx={{ mr: 1 }}>
                <EmojiPeopleOutlined color="primary" />
              </IconButton>
              <ListItemText primary="Build Strong Customer Relationships" />
            </ListItem>
            <ListItem>
              <IconButton sx={{ mr: 1 }}>
                <StarRateOutlined color="primary" />
              </IconButton>
              <ListItemText primary="Deliver Exceptional Customer Service" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h3" gutterBottom>
            Our Sales Training Programs
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Sales Methodology and Prospecting Techniques" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Effective Communication and Presentation Skills" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Product Knowledge and Value Selling" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Negotiation and Closing Techniques" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Sales Management and Coaching" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h5" component="h3" gutterBottom>
            Our Service Training Programs
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Customer Service Excellence" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Effective Communication and Conflict Resolution" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Complaint Handling and Service Recovery" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Building Customer Loyalty and Advocacy" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Service Culture and Teamwork" />
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
        Invest in Your Teams, Invest in Growth and Customer Satisfaction
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
          Explore Sales & Service Training
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

export default SalesAndServiceTraining;
