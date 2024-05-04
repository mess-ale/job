import React from "react";
import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Stack,
} from "@mui/material";
import HomeHeader from "../../components/HomeHeader";
import Footer from "../../components/Footer";
import logsignimg from "../../assets/slide_4.png";

function Services() {
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
            width: {md: '70%',lg: "55%"},
            textAlign: {xs: 'center', md: 'left'},
          }}
        >
          YOUR PARTNER IN IMPACTFUL TRAINING EXPERIENCES
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
          Contact Us
        </Button>
      </Stack>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4" component="h2" gutterBottom>
              Empowering Your Organization Through World-Class Services
            </Typography>
            <Typography variant="body1" gutterBottom>
              Worldview Training and Consulting Service PLC offers a
              comprehensive suite of services designed to help your organization
              thrive. We partner with you to identify your unique needs and
              develop customized solutions that drive results.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={logsignimg}
                alt="Performance Consulting"
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  Performance Consulting
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Boost efficiency, identify performance gaps, and achieve
                  measurable results.
                </Typography>
                <Button variant="contained" size="small" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={logsignimg}
                alt="Instructional Design"
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  Instructional Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Create engaging and effective learning experiences for diverse
                  audiences.
                </Typography>
                <Button variant="contained" size="small" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={logsignimg}
                alt="Learning Technology"
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  Learning Technology Solutions
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Leverage technology to enhance learning, develop engaging
                  eLearning modules, and implement innovative LMS.
                </Typography>
                <Button variant="contained" size="small" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={logsignimg}
                alt="Smart L&D Staffing"
              />
              <CardContent>
                <Typography variant="h5" component="h3">
                  Smart L&D Staffing
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Fill your L&D skills gap with the right expertise. Access top
                  talent and achieve streamlined project management.
                </Typography>
                <Button variant="contained" size="small" sx={{ mt: 2 }}>
                  Learn More
                </Button>
              </CardContent>
            </Card>
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
          SEE HOW WE CAN HELP YOUR ORGANIZATION ACHIEVE BUSINESS RESULTS
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
            Start Today
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

export default Services;
