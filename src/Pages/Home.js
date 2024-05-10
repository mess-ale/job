import React, { useEffect, useState } from "react";
import { Footer } from "../components/Footer";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import HomeHeader from "../components/HomeHeader";
import {
  ArrowDownwardRounded,
  Build,
  Business,
  BusinessCenter,
  Handshake,
  TipsAndUpdates,
} from "@mui/icons-material";
import Businesses from "../assets/Rectangle.png";
import success from "../assets/success.png";
import SwitchingStacks from "../components/SwitchingStacks";
import { Link } from "react-router-dom";
import MapComponent from "../components/MapComponent";
import "../style/Animation.css";

export const Home = () => {
  const gridItem = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    background: "#000",
    borderRadius: { xs: "1rem 1rem 0 0", md: "2rem 0 0 0" },
    "& img": {
      borderRadius: { xs: "1rem 1rem 0 0", md: "2rem 0 0 0" },
    },
  };

  const gridItem1 = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    background: "#000",
    borderRadius: { xs: "0 0 1rem 1rem", md: "0 2rem 0 0" },
  };
  const image = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "cover",
  };
  const [isArrowUp, setIsArrowUp] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsArrowUp((prevIsArrowUp) => !prevIsArrowUp);
    }, 1000); // Change the interval time (in milliseconds) as per your requirement

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Stack
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
        }}
      >
        <HomeHeader />
      </Stack>

      <Stack>
        <SwitchingStacks />
      </Stack>

      <Stack
        padding={{
          xs: "0rem 1.25rem 1rem 1.25rem",
          sm: "0rem 1.5rem 1.2rem 1.5rem",
          md: "0rem 0rem 1.35rem 2rem",
          lg: "0rem 0rem 1.5rem 3rem",
          el: "0rem 0rem 1.5rem 4rem",
        }}
      >
        <Grid
          container
          spacing={{ xs: "0.6rem", md: "1rem" }}
          paddingTop={{ xs: "1.25rem", sm: "1.5rem", md: "2rem", lg: "3rem" }}
          alignItems="stretch"
          sx={{
            height: "100%",
          }}
        >
          <Grid item xs={12} md={6} sx={{ display: "flex" }}>
            <Stack
              sx={{
                background: "#89fc00",
                padding: {
                  xs: "1rem 1.4rem 2rem 2rem",
                  md: "2.25rem 1.5rem 2.25rem 2.25rem",
                  lg: "3rem 2rem 3rem 3rem",
                },
                borderTopRightRadius: { xs: "1rem", md: "2rem" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "25px", md: "30px" },
                  paddingBottom: { xs: "0.7rem", md: "1rem" },
                }}
              >
                Services
              </Typography>
              <Typography
                sx={{
                  width: { xs: "90%", md: "80%" },
                  paddingBottom: { xs: "1rem", md: "2rem" },
                }}
              >
                Worldview Training and Consulting Service PLC offers a
                comprehensive range of services encompassing Training,
                Consulting, and Research. These services are tailored to meet
                the diverse needs of clients in the private, public, and NGO
                sectors, aiming to enhance their business and management
                development capabilities.
              </Typography>
              <Link to={"/contact"}>
                <Button
                  sx={{
                    border: "solid 2px black",
                    width: { xs: "90%", sm: "50%", md: "70%", lg: "50%" },
                    color: "#000",
                    borderRadius: {
                      xs: "1rem 1rem 1rem 0rem",
                      md: "1.5rem 1.5rem 1.5rem 0rem",
                    },
                    textTransform: "capitalize",
                  }}
                >
                  Schedule a Free Consultation
                </Button>
              </Link>
            </Stack>
          </Grid>

          <Grid
            item
            xs={12}
            md={2}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Stack
              sx={{
                margin: { md: "8.75rem 0 0 0" },
                background: "#ced4da",
                borderRadius: { xs: "1rem", md: "2rem" },
                alignItems: "center",
                flexGrow: 1, // Set flex-grow property to 1
                width: "100%",
              }}
            >
              <ArrowDownwardRounded
                sx={{
                  paddingTop: "5rem ",
                  transition: "transform 1s ease",
                  transform: isArrowUp ? "translateY(-20%)" : "translateY(0)",
                  fontSize: "130px",
                }}
              />
            </Stack>
          </Grid>

          <Grid item xs={12} md={4} sx={{ display: "flex" }}>
            <Stack
              sx={{
                background: "#000",
                padding: {
                  xs: "1rem 1.4rem 2rem 2rem",
                  md: "2.25rem 1.5rem 2.25rem 2.25rem",
                  lg: "3rem 2rem 3rem 3rem",
                },
                borderTopLeftRadius: { xs: "1rem", md: "2rem" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "25px", md: "30px" },
                  paddingBottom: { xs: "0.7rem", md: "1rem" },
                  color: "#fff",
                }}
              >
                Welcome
              </Typography>
              <Typography
                sx={{
                  width: { xs: "90%", md: "85%", lg: "85%" },
                  paddingBottom: { xs: "1rem", md: "2rem" },
                  color: "#fff",
                }}
              >
                Welcome to Worldview Training and Consulting Service PLC, your
                trusted partner in driving organizational excellence and
                empowering individuals for success.excellence and empowering.
              </Typography>
              <Link to={"/blog"}>
                <Button
                  sx={{
                    border: "solid 2px white",
                    width: { xs: "90%", sm: "50%", md: "70%", lg: "50%" },
                    borderRadius: {
                      xs: "1rem 1rem 1rem 0rem",
                      md: "1.5rem 1.5rem 1.5rem 0rem",
                    },
                    color: "#fff",
                    textTransform: "capitalize",
                  }}
                >
                  Read our latest report
                </Button>
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <Stack
        sx={{
          padding: {
            xs: "0rem 1.25rem 1rem 1.25rem",
            sm: "0rem 1.5rem 1.2rem 1.5rem",
            md: "0rem 0rem 1.35rem 0rem",
            lg: "0rem 0rem 1.5rem 0rem",
            el: "0rem 0rem 1.5rem 0rem",
          },
        }}
      >
        <Grid container spacing={{ xs: "0.6rem", md: "1rem" }}>
          <Grid item xs={12} md={4}>
            <img
              src={Businesses}
              style={{
                borderRadius: "0rem 2rem 2rem 0rem",
                width: "100%",
                height: "280px",
              }}
              alt="businesses"
            />
          </Grid>

          <Grid item xs={12} md={5}>
            <Stack
              sx={{
                background: "#000",
                padding: {
                  xs: "1.65rem 1rem 1.25rem 1.25rem",
                  sm: "2rem 1.25rem 1.5rem 1.5rem",
                  md: "2.5rem 1.5rem 2rem 2rem",
                  lg: "3rem 2rem 3rem 3rem",
                },
                borderRadius: { xs: "1rem", md: "2rem" },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "23px", sm: "25px", md: "27px", lg: "30px" },
                  paddingBottom: { xs: "0.7rem", md: "1rem" },
                  color: "#89fc00",
                }}
              >
                Training Services
              </Typography>
              <Typography
                sx={{
                  width: { xs: "90%", sm: "80%", md: "90%", lg: "80%" },
                  paddingBottom: "2rem",
                  color: "#89fc00",
                }}
              >
                The company provides regular and tailored training programs in
                different topics such as Training of Trainers (TOT), Consultancy
                Skills Development, Leadership and Management, Change
                Management, Coaching and Mentoring, Transformational Leadership,
                Project Management, Entrepreneurship and Business Plan
                Formulation, Human Resource Management, Academic Leadership,
                Teaching Methodology, Work Ethics and Customer service, Business
                Leadership
              </Typography>
              <Link to={"/Solutions"}>
                <Button
                  sx={{
                    border: "solid 2px #89fc00",
                    width: { xs: "90%", sm: "50%", md: "70%", lg: "50%" },
                    color: "#89fc00",
                    borderRadius: "1.5rem 1.5rem 1.5rem 0rem",
                    textTransform: "capitalize",
                  }}
                >
                  Check Our Solutions
                </Button>
              </Link>
            </Stack>
          </Grid>

          <Grid item xs={12} md={3}>
            <Stack
              sx={{
                alignItems: "center",
                background: "#89fc00",
                borderRadius: { xs: "1rem", md: "2rem" },
                padding: "5rem 2rem 5rem 2rem",
              }}
            >
              <Business sx={{ fontSize: "7rem" }} />
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <Stack
        sx={{
          background: "#fff",
          borderRadius: {
            xs: "1rem 1rem 0rem 0rem",
            md: "2rem 2rem 0rem 0rem",
          },
          padding: {
            xs: "2rem 3rem 0.8rem 2rem",
            sm: "3rem 3rem 1rem 2.5rem",
            md: "5rem 3rem 1.5rem 3rem",
            lg: "7rem 3rem 2rem 4rem",
          },
        }}
      >
        <Typography sx={{ fontSize: { xs: "25px", md: "30px" } }}>
          The story of Worldview
        </Typography>
        <Stack
          sx={{
            padding: {
              xs: "1.5rem 1rem 0.8rem 0rem",
              sm: "2rem 1.5rem 2.5rem 0rem",
              md: "3rem 8rem 3rem 8rem",
              lg: "4rem 12rem 3.5rem 12rem",
              el: "5rem 16rem 4rem 16rem",
            },
          }}
        >
          <Typography
            sx={{
              alignItems: "center",
              fontSize: { xs: "40px", sm: "45px", md: "50px", lg: "65px" },
            }}
          >
            Isn't it time for your business to reach its apex? Your greatest
            success is just around the corner.
          </Typography>
          <Typography
            sx={{
              width: { xs: "100%", md: "80%" },
              paddingTop: { xs: "1rem", md: "2rem" },
              paddingBottom: { xs: "1rem", md: "2rem" },
            }}
          >
            Worldview Training and Consulting Service PLC, located in Addis
            Ababa, Ethiopia, is your inspiring partner for business growth and
            development. Established as a private limited company, we are
            dedicated to enhancing the capabilities of a wide range of sectors
            including private, public, and NGOs. Our mission is to enable local
            business institutions to become strong competitors in the national
            and international market, contributing significantly to the national
            economy. We achieve this through our customized training,
            consultancy, and research services.
          </Typography>
          <Link to={"/about"}>
            <Button
              sx={{
                border: "solid 2px black",
                width: { xs: "60%", sm: "50%", md: "40%", lg: "30%" },
                borderRadius: "1rem 1rem 1rem 0rem",
                background: "#000",
                color: "#89fc00",
              }}
            >
              Read More
            </Button>
          </Link>
        </Stack>

        <Stack
          sx={{
            padding: { xs: "1rem 0rem 2rem 0rem", md: "2rem 0rem 4rem 0rem" },
          }}
        >
          <Typography sx={{ fontSize: "30px" }}>Industries</Typography>
        </Stack>

        <Grid
          container
          spacing={{ xs: "0.5rem", md: "1rem" }}
          paddingTop={{ xs: "0.5rem", md: "1rem" }}
          paddingLeft={{
            xs: "2rem",
            sm: "3rem",
            md: "4rem",
            lg: "6rem",
            xl: "8rem",
          }}
          alignItems="stretch"
          sx={{
            height: "100%",
          }}
        >
          <Grid item xs={12} md={6} lg={4} sx={{ display: "flex" }}>
            <Stack
              sx={{
                background: "#E8EAED",
                padding: {
                  xs: "3rem 1.6rem 3.5rem 1.6rem",
                  sm: "4rem 2.5rem 5rem 2.5rem",
                  md: "3.5rem 2.5rem 4rem 2.5rem",
                  lg: "4rem 3rem 6rem 3rem",
                },
                borderRadius: "2rem",
              }}
            >
              <BusinessCenter paddingBottom={"1rem"} />
              <Typography
                sx={{
                  fontSize: "30px",
                  paddingBottom: "1rem",
                  color: "#000",
                }}
              >
                Private Sector
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                }}
              >
                In the fast-paced and competitive private sector, organizations
                need to continuously adapt and innovate to stay ahead. Worldview
                Training and Consulting Service PLC understands the unique
                challenges faced by businesses in this sector.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={4} sx={{ display: "flex" }}>
            <Stack
              sx={{
                background: "#89fc00",
                padding: {
                  xs: "3rem 1.6rem 3.5rem 1.6rem",
                  sm: "4rem 2.5rem 5rem 2.5rem",
                  md: "3.5rem 2.5rem 4rem 2.5rem",
                  lg: "4rem 3rem 6rem 3rem",
                },
                borderRadius: "2rem",
              }}
            >
              <BusinessCenter paddingBottom={"1rem"} />
              <Typography
                sx={{
                  fontSize: "30px",
                  paddingBottom: "1rem",
                  color: "#000",
                }}
              >
                Public Sector
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                }}
              >
                The public sector plays a vital role in serving communities and
                driving societal progress. At Worldview, we recognize the
                importance of effective governance, strategic planning, and
                efficient service delivery in the public sector.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={4} sx={{ display: "flex" }}>
            <Stack
              sx={{
                background: "#E8EAED",
                padding: {
                  xs: "3rem 1.6rem 3.5rem 1.6rem",
                  sm: "4rem 2.5rem 5rem 2.5rem",
                  md: "3.5rem 2.5rem 4rem 2.5rem",
                  lg: "4rem 3rem 6rem 3rem",
                },
                borderRadius: "2rem",
              }}
            >
              <BusinessCenter paddingBottom={"1rem"} />
              <Typography
                sx={{
                  fontSize: "30px",
                  paddingBottom: "1rem",
                  color: "#000",
                }}
              >
                NGO Sector
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                }}
              >
                Non-Governmental Organizations (NGOs) play a crucial role in
                addressing social and environmental challenges. Worldview
                Training and Consulting Service PLC is committed to supporting
                NGOs in achieving their missions and maximizing their impact.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={4} sx={{ display: "flex" }}>
            <Stack
              sx={{
                background: "#89fc00",
                padding: {
                  xs: "3rem 1.6rem 3.5rem 1.6rem",
                  sm: "4rem 2.5rem 5rem 2.5rem",
                  md: "3.5rem 2.5rem 4rem 2.5rem",
                  lg: "4rem 3rem 6rem 3rem",
                },
                borderRadius: "2rem",
              }}
            >
              <BusinessCenter paddingBottom={"1rem"} />
              <Typography
                sx={{
                  fontSize: "30px",
                  paddingBottom: "1rem",
                  color: "#000",
                  position: "right",
                }}
              >
                Information Technology
              </Typography>
              <Typography
                sx={{
                  paddingBottom: "2rem",
                  color: "#000",
                }}
              >
                In the rapidly evolving IT industry, staying ahead of the curve
                is essential. Worldview offers training programs and consulting
                services designed to enhance technical skills, project
                management, and software development methodologies.
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={6} lg={4} sx={{ display: "flex" }}>
            <Stack
              sx={{
                padding: "3rem",
                background: "#E8EAED",
                borderRadius: "2rem",
              }}
            >
              <BusinessCenter paddingBottom={"1rem"} />
              <Typography
                sx={{
                  fontSize: "30px",
                  paddingBottom: "1rem",
                  color: "#000",
                }}
              >
                Healthcare
              </Typography>
              <Typography
                sx={{
                  paddingBottom: "2rem",
                  color: "#000",
                }}
              >
                The healthcare and pharmaceutical industries require specialized
                knowledge and expertise. Our training programs and consulting
                services in these sectors focus on areas such as healthcare
                management, patient care, regulatory compliance,
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <Stack className="component" padding={'3rem 1rem 3rem 1rem'}>
        <Container>
          <Grid container alignItems={"center"}>
            <Grid item xs={12} md={6}>
              <Typography
                sx={{
                  color: "#000",
                  fontSize: {
                    xs: "2rem",
                    sm: "2.5rem",
                    md: "3rem",
                    lg: "3.5rem",
                  },
                  paddingBottom: {xs: '2rem', md: '0'},
                  textAlign: {xs: 'center', md: 'left'},
                  fontFamily: "Young Serif",
                }}
              >
                Our Location
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <MapComponent />
            </Grid>
          </Grid>
        </Container>
      </Stack>

      <Stack>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems={"center"}
          sx={{ padding: { xs: "1rem", sm: "1.6rem", md: "2rem", lg: "3rem" } }}
        >
          <Stack
            sx={{
              alignItems: "center",
              width: "50%",
              padding: { xs: "5rem", sm: "6rem", md: "7rem", lg: "8rem" },
            }}
            spacing={"1.5rem"}
          >
            <Handshake />
            <Typography sx={{ fontSize: "30px" }}>Strategy</Typography>
            <Typography sx={{ textAlign: "center", lineHeight: "1.5" }}>
              Worldview Training and Consulting Service PLC will strategically
              position itself in the training and consulting industry by
              conducting a comprehensive market analysis to identify key trends
              and competitors.
            </Typography>
          </Stack>

          <Stack
            sx={{
              alignItems: "center",
              width: "50%",
              background: "#fff",
              padding: { xs: "5rem", sm: "6rem", md: "7rem", lg: "8rem" },
              borderRadius: { xs: "2rem 2rem 2rem 2rem", md: "0 2rem 0 0" },
            }}
            spacing={{ xs: "0.9rem", sm: "1rem", md: "1.5rem" }}
          >
            <Build />
            <Typography sx={{ fontSize: "30px" }}>Execution</Typography>
            <Typography sx={{ textAlign: "center", lineHeight: "1.5" }}>
              Worldview Training and Consulting Service PLC will execute its
              strategy by implementing a comprehensive marketing and branding
              strategy to increase brand visibility and attract clients. This
              will involve creating a compelling brand identity, developing a
              user-friendly website, and leveraging digital marketing channels.
            </Typography>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        sx={{
          alignItems: "center",
          background: "#89fc00",
          padding: {
            xs: "2rem 2.5rem 2.5rem 2.5rem",
            sm: "2.5rem 3rem 3rem 3rem",
            md: "3rem 4rem 4rem 4rem",
            lg: "4rem 6rem 5rem 6rem",
          },
        }}
      >
        <Typography
          textAlign={"center"}
          sx={{
            fontWeight: "bold",
            fontSize: { xs: "20px", sm: "25px", md: "30px", lg: "35px" },
            paddingBottom: "2rem",
          }}
        >
          “Our end-to-end experience with AllenComm has been best in class. We
          developed a great collaboration built on trust and confidence in
          AllenComm’s ability to adapt and be responsive to the needs of the
          business. I view Kraft Heinz’s collaboration with AllenComm as a true
          strategic partnership”{" "}
        </Typography>
        <Typography>Kraft Heinz</Typography>
      </Stack>

      <Grid
        container
        sx={{
          padding: {
            xs: "1.5rem 1rem 0rem 1rem",
            sm: "1.75rem 2rem 0rem 2rem",
            md: "2rem 2.5rem 0rem 2.5rem",
            lg: "2.5rem 3rem rem 3rem",
          },
        }}
      >
        <Grid item xs={12} md={6}>
          <Stack sx={gridItem}>
            <img src={success} style={image} alt="success" />
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          <Stack sx={gridItem1}>
            <TipsAndUpdates
              sx={{
                color: "#fff",
                padding: { xs: "2rem 0 1rem 0", md: "2rem 0 2rem 0" },
              }}
            />
            <Typography
              sx={{
                fontSize: "30px",
                color: "#fff",
                padding: "1rem 0 2rem 0",
              }}
            >
              Data Advisory
            </Typography>
            <Typography
              sx={{
                width: "80%",
                color: "#fff",
                textAlign: "center",
                padding: { xs: "0.5rem 0 1rem 0", md: "1rem 0 2rem 0" },
              }}
            >
              As a trusted Data Advisory partner, Worldview Training and
              Consulting Service PLC leverages its expertise and industry
              knowledge to provide comprehensive guidance and strategic
              recommendations to organizations. With a deep understanding of
              data management, analytics, and emerging technologies, Worldview
              assists clients in harnessing the power of data to drive business
              transformation.
            </Typography>
            <Stack padding={{ xs: "0.5rem 0 3rem 0", md: "1rem 0 2rem 0" }}>
              <Link to={"/Solutions"}>
                <Button
                  sx={{
                    border: "solid 2px #89fc00",
                    color: "#89fc00",
                    borderRadius: "1.5rem 1.5rem 1.5rem 0rem",
                    textTransform: "capitalize",
                  }}
                >
                  Check out solutions
                </Button>
              </Link>
            </Stack>
          </Stack>
        </Grid>
      </Grid>

      <Stack
        sx={{ background: "#212529", borderRadius: "2rem 2rem 0rem 0rem" }}
      >
        <Container
          sx={{
            color: "#fff",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "30px", md: "38px" },
              padding: "3.5rem 0 1rem 0",
            }}
          >
            It’s all about a dialogue
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            A few words from our clients.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            See client stories for more.
          </Typography>
        </Container>

        <Stack>
          <Grid
            container
            spacing={"1rem"}
            padding={{
              xs: "1rem",
              sm: "1.5rem 2rem 2rem 2rem",
              md: "3rem 3rem 3rem 6rem",
              lg: "3.5rem 3.5rem 3.5rem 10rem",
            }}
          >
            <Grid item xs={12} sm={6} md={4}>
              <Stack
                sx={{
                  background: "#000",
                  padding: "3rem",
                  borderRadius: "2rem",
                  color: "#fff",
                }}
                spacing={"2rem"}
              >
                <Typography>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate totam velit tenetur, iste et, aut asperiores
                  cumque, consectetur nisi adipisci error ea quos sit vel
                  debitis laudantium quis nostrum at.
                </Typography>
                <Stack alignItems={"end"}>
                  <Typography>Jeffrey Cohen, CEO</Typography>
                  <Typography>Nato Productions</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack
                sx={{
                  background: "#000",
                  padding: "3rem",
                  borderRadius: "2rem",
                  color: "#fff",
                }}
                spacing={"2rem"}
              >
                <Typography>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate totam velit tenetur, iste et, aut asperiores
                  cumque, consectetur nisi adipisci error ea quos sit vel
                  debitis laudantium quis nostrum at.
                </Typography>
                <Stack alignItems={"end"}>
                  <Typography>Jeffrey Cohen, CEO</Typography>
                  <Typography>Nato Productions</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack
                sx={{
                  background: "#000",
                  padding: "3rem",
                  borderRadius: "2rem",
                  color: "#fff",
                }}
                spacing={"2rem"}
              >
                <Typography>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Cupiditate totam velit tenetur, iste et, aut asperiores
                  cumque, consectetur nisi adipisci error ea quos sit vel
                  debitis laudantium quis nostrum at.
                </Typography>
                <Stack alignItems={"end"}>
                  <Typography>Jeffrey Cohen, CEO</Typography>
                  <Typography>Nato Productions</Typography>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      <Stack
        sx={{
          background: "#89fc00",
          padding: "5rem 3rem",
        }}
        spacing={"3rem"}
      >
        <Typography sx={{ fontSize: "35px" }}>Our Clients</Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} sx={{ paddingRight: "0.5rem" }}>
            <Box
              sx={{ background: "#000", color: "#fff", borderRadius: "2rem" }}
            >
              <Typography
                sx={{ padding: "3rem", textAlign: "center", fontSize: "25px" }}
              >
                Kindergarten
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ paddingRight: "0.5rem" }}>
            <Box
              sx={{ background: "#000", color: "#fff", borderRadius: "2rem" }}
            >
              <Typography
                sx={{ padding: "3rem", textAlign: "center", fontSize: "25px" }}
              >
                Kindergarten
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3} sx={{ paddingRight: "0.5rem" }}>
            <Box
              sx={{ background: "#000", color: "#fff", borderRadius: "2rem" }}
            >
              <Typography
                sx={{ padding: "3rem", textAlign: "center", fontSize: "25px" }}
              >
                Kindergarten
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Box
              sx={{ background: "#000", color: "#fff", borderRadius: "2rem" }}
            >
              <Typography
                sx={{ padding: "3rem", textAlign: "center", fontSize: "25px" }}
              >
                Kindergarten
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Stack direction={"row"}></Stack>
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
};

export default Home;
