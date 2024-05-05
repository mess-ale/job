import React from "react";
import { Footer } from "../components/Footer";
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import HomeHeader from "../components/HomeHeader";
import logo from "../assets/Rectangle 41 (1).png";
import Employee from "../assets/theam.jpg";

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

      <Container
        maxWidth="lg"
        sx={{
          padding: {
            xs: "2rem 1.25rem 4rem 1.25rem",
            sm: "4rem 1.5rem 5rem 1.5rem",
            md: "8rem 3rem 6rem 3rem",
            lg: "10rem 0 7rem 2rem",
          },
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" component="h2" gutterBottom>
              Worldview Training and Consulting Service PLC
            </Typography>
            <Typography variant="body1" gutterBottom>
              Your Inspiring Partner
            </Typography>
            <Typography variant="body1">
              Worldview Training and Consulting Service PLC (WTC) is a private
              limited company established to provide Training, Consulting, and
              Research services to a wide range of private, public, and NGO
              sectors. We are dedicated to enhancing the business and management
              development capabilities of private and governmental institutions.
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              WTC is committed to improving managerial performance and
              organizational effectiveness in different organizations through
              Training, Consulting, and Research interventions. We have
              extensive experience providing training on various business and
              management areas through regular/open and tailor-made training
              programs.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Link
                href="/"
                underline="none"
                color="primary"
                sx={{
                  border: "solid 2px black",
                  padding: {
                    xs: "0.6rem 1.2rem 0.6rem 1.2rem",
                    md: "0.7rem 1.8rem 0.7rem 1.8rem",
                  },
                  color: "#000",
                  borderRadius: {
                    xs: "1rem 1rem 1rem 0rem",
                    md: "1.5rem 1.5rem 1.5rem 0rem",
                  },
                  background: "#89fc00",
                  textTransform: "capitalize",
                  "&:hover": {
                    background: "#fff",
                    color: "#000",
                  },
                }}
              >
                Learn More About Our Services
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={logo} // Replace with your logo path
              alt="Worldview Training and Consulting Service PLC Logo"
              width="70%"
            />
          </Grid>
        </Grid>
        <Grid container spacing={4} sx={{ mt: 8 }}>
          <Grid item xs={12}>
            <Typography variant="h5" component="h3">
              Our Vision, Mission, and Values
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" component="h4">
                  Vision
                </Typography>
                <Typography variant="body1">
                  By 2030, we aspire to be one of the top 5 Business &
                  Management Training and Consultancy Centers.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6" component="h4">
                  Mission
                </Typography>
                <Typography variant="body1">
                  Our mission is to design and deliver high-impact training and
                  development programs and a wide range of consultancy services
                  that produce outstanding human performance in private and
                  other organizations.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6" component="h4">
                  Values
                </Typography>
                <Typography variant="body1">
                  - Competency - Integrity - Confidentiality - Value Adding -
                  Customer Focused - Continuous Growth - Accountability -
                  Professionalism
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Stack
        sx={{
          background: "#89fc00",
          padding: {
            xs: "2rem 2.5rem 2rem 2.5rem",
            sm: "2.5rem 3rem 2.5rem 3rem",
            md: "3rem 8rem 3rem 8rem",
            lg: "4rem 15rem 5rem 15rem",
          },
        }}
      >
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: "bold", paddingBottom: { xs: "2rem", md: "4rem" } }}
        >
          HOW WE DO IT
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          sx={{ paddingBottom: { xs: "1rem", md: "2.5rem" } }}
        >
          Over the last 40 years we have built our training company to have a
          complete team of performance consultants, instructional designers,
          software developers, dedicated project managers and agency-level
          creatives, and have earned a reputation for excellence.
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          sx={{ paddingBottom: { xs: "1rem", md: "2.5rem" } }}
        >
          Because we bring together all of the elements needed to create
          transformative learning solutions, our clients get a true partner
          fully equipped to deliver an impactful experience that meets both
          their organizational needs and business objectives.
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          sx={{ paddingBottom: { xs: "1rem", md: "2.5rem" } }}
        >
          In recognition of the work, we do with our clients we consistently win
          industry awards year after year. We have been named a top training
          provider due to our depth of expertise across disciplines, creativity,
          and streamlined development and integration process.
        </Typography>
        <Typography
          variant="h6"
          component="h2"
          sx={{ paddingBottom: { xs: "1rem", md: "2.5rem" } }}
        >
          The results? We have an ongoing collaboration with some of the most
          successful global organizations. We never take for granted the
          relationships we have built with our clients, the accolades we
          receive, or the opportunities that we have to work with our
          world-class clients.
        </Typography>
      </Stack>

      <Stack sx={{ background: "#fff" }}>
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            padding: { xs: "4rem 0 4rem 0", md: "7rem 0 7rem 0" },
          }}
          variant="h4"
          component="h2"
        >
          LEADERSHIP TEAM
        </Typography>
        <Grid
          container
          sx={{
            padding: {
              xs: "1rem 1rem 2rem 1rem",
              sm: "2rem 2rem 2.5rem 2rem",
              md: "1.5rem 6rem 3rem 6rem",
              lg: "1rem 10rem 4rem 10rem",
            },
          }}
          spacing={{ xs: "2rem", sm: "3rem", md: "2rem" }}
          alignItems={{ sm: "center" }}
          textAlign={"center"}
        >
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img src={Employee} alt="black man" />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Ron Zamir</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img src={Employee} alt="black man" />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Ron Zamir</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img src={Employee} alt="black man" />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Ron Zamir</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img src={Employee} alt="black man" />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Ron Zamir</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img src={Employee} alt="black man" />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Ron Zamir</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img src={Employee} alt="black man" />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Ron Zamir</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img src={Employee} alt="black man" />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Ron Zamir</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img src={Employee} alt="black man" />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Ron Zamir</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img src={Employee} alt="black man" />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Ron Zamir</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={6} sm={4} md={3}>
            <Stack>
              <img src={Employee} alt="black man" />
              <Stack spacing={"0.5rem"} paddingTop={"0.5rem"}>
                <Typography>Ron Zamir</Typography>
                <Typography>President/CEO</Typography>
                <Button>Connect</Button>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <Stack
        sx={{
          background: "#212529",
          padding: {
            xs: "2rem 2.5rem 2rem 2.5rem",
            sm: "2.5rem 3rem 2.5rem 3rem",
            md: "3rem 8rem 3rem 8rem",
            lg: "4rem 15rem 5rem 15rem",
          },
        }}
        justifyContent={"center"}
      >
        <Typography
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            paddingBottom: "2rem",
          }}
          variant="h4"
          component="h2"
          color={"#fff"}
        >
          WANT TO KNOW MORE? WE'D LOVE TO HEAR FROM YOU.
        </Typography>

        <Stack alignItems={"center"}>
          <Link top={"/contact"}>
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
              }}
            >
              Contact Us
            </Button>
          </Link>
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
