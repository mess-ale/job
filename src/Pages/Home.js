import React from "react";
import { Footer } from "../components/Footer";
import { Box, Button, Grid, Stack, Typography, } from "@mui/material";
import HomeHeader from "../components/HomeHeader";
import {
  AcUnit,
  ArrowDownwardRounded,
  Build,
  Business,
  BusinessCenter,
  Handshake,
  TipsAndUpdates,
} from "@mui/icons-material";
import Businesses from "../assets/Rectangle.png";
import dame from "../assets/dame.png";
import success from "../assets/success.png";
import SwitchingStacks from "../components/SwitchingStacks";


export const Home = () => {
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
          
      <Stack>
        <SwitchingStacks />
      </Stack>

      <Stack padding={"0rem 0rem 1.5rem 4rem"}>
        <Grid container spacing={"1rem"} paddingTop={"3rem"}>
          <Grid item xs={12} sm={6} md={6}>
            <Stack
              sx={{
                background: "#89fc00",
                padding: "3rem 2rem 3rem 3rem",
                borderTopRightRadius: "2rem",
              }}
            >
              <Typography sx={{ fontSize: "30px", paddingBottom: "1rem" }}>
                Services
              </Typography>
              <Typography sx={{ width: "80%", paddingBottom: "2rem" }}>
                Worldview Training and Consulting Service PLC offers a
                comprehensive range of services encompassing Training,
                Consulting, and Research. These services are tailored to meet
                the diverse needs of clients in the private, public, and NGO
                sectors, aiming to enhance their business and management
                development capabilities.
              </Typography>
              <Button
                sx={{
                  border: "solid 2px black",
                  width: "50%",
                  color: "#000",
                  borderRadius: "1.5rem 1.5rem 1.5rem 0rem",
                  textTransform: "capitalize",
                }}
              >
                Schedule a Free Consultation
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Stack sx={{ paddingTop: "8.75rem" }}>
              <Stack
                sx={{
                  background: "#ced4da",
                  alignItems: "center",
                  borderRadius: "2rem",
                }}
              >
                <ArrowDownwardRounded
                  sx={{ paddingTop: "5rem ", fontSize: "130px" }}
                />
              </Stack>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Stack
              sx={{
                background: "#000",
                padding: "3rem 2rem 3rem 3rem",
                borderTopLeftRadius: "2rem",
              }}
            >
              <Typography
                sx={{ fontSize: "30px", paddingBottom: "1rem", color: "#fff" }}
              >
                Welcome
              </Typography>
              <Typography
                sx={{ width: "80%", paddingBottom: "2rem", color: "#fff" }}
              >
                Welcome to Worldview Training and Consulting Service PLC, your
                trusted partner in driving organizational excellence and
                empowering individuals for success.excellence and empowering.
              </Typography>
              <Button
                sx={{
                  border: "solid 2px white",
                  width: "50%",
                  color: "#fff",
                  borderRadius: "1.5rem 1.5rem 1.5rem 0rem",
                  textTransform: "capitalize",
                }}
              >
                Read our latest report
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <Stack paddingBottom={"4rem"}>
        <Grid container spacing={"1rem"}>
          <Grid item xs={12} sm={6} md={3}>
            <img
              src={Businesses}
              style={{
                borderRadius: "0rem 2rem 2rem 0rem",
                width: "100%",
                height: "70%",
              }}
              alt="businesses"
            />
          </Grid>

          <Grid item xs={12} sm={6} md={6}>
            <Stack
              sx={{
                background: "#000",
                padding: "3rem 2rem 3rem 3rem",
                borderRadius: "2rem",
                minHeight: "15.5rem",
              }}
            >
              <Typography
                sx={{
                  fontSize: "30px",
                  paddingBottom: "1rem",
                  color: "#89fc00",
                }}
              >
                Training Services
              </Typography>
              <Typography
                sx={{ width: "80%", paddingBottom: "2rem", color: "#89fc00" }}
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
              <Button
                sx={{
                  border: "solid 2px #89fc00",
                  width: "50%",
                  color: "#89fc00",
                  borderRadius: "1.5rem 1.5rem 1.5rem 0rem",
                  textTransform: "capitalize",
                }}
              >
                Check Our Solutions
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Stack
              sx={{
                alignItems: "center",
                background: "#89fc00",
                borderRadius: "2rem",
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
          borderRadius: "2rem 2rem 0rem 0rem",
          padding: "9rem 3rem 2rem 4rem",
        }}
      >
        <Typography sx={{ fontSize: "30px" }}>
          The story of Worldview
        </Typography>
        <Stack sx={{ padding: "8rem 16rem 4rem 16rem" }}>
          <Typography sx={{ alignItems: "center", fontSize: "65px" }}>
            Isn't it time for your business to reach its apex? Your greatest
            success is just around the corner.
          </Typography>
          <Typography
            sx={{ width: "80%", paddingTop: "2rem", paddingBottom: "2rem" }}
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
          <Button
            sx={{
              border: "solid 2px black",
              width: "30%",
              borderRadius: "1rem 1rem 1rem 0rem",
              background: "#000",
              color: "#89fc00",
            }}
          >
            Read More
          </Button>
        </Stack>

        <Stack sx={{ padding: "2rem 0rem 4rem 0rem" }}>
          <Typography sx={{ fontSize: "30px" }}>Industries</Typography>
        </Stack>

        <Grid
          container
          spacing={"1rem"}
          paddingTop={"1rem"}
          paddingLeft={"8rem"}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Stack
              sx={{
                background: "#E8EAED",
                padding: "4rem 3rem 6rem 3rem",
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

          <Grid item xs={12} sm={6} md={4}>
            <Stack
              sx={{
                background: "#89fc00",
                padding: "4rem 3rem 6rem 3rem",
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

          <Grid item xs={12} sm={6} md={4}>
            <Stack
              sx={{
                background: "#E8EAED",
                padding: "4rem 3rem 6rem 3rem",
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
          <Grid item md={4}></Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Stack
              sx={{
                background: "#E8EAED",
                padding: "3rem",
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

          <Grid item xs={12} sm={6} md={4}>
            <Stack
              sx={{
                background: "#89fc00",
                padding: "3rem",
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

      <Stack alignItems={"center"} sx={{ background: "#89fc00" }}>
        <Stack direction={"row"} sx={{ paddingTop: "4rem" }}>
          <Stack
            sx={{
              padding: "10rem 10rem 10rem 10rem",
              background: "#000",
              borderTopLeftRadius: "2rem",
            }}
          >
            <Box sx={{ position: "relative", textAlign: "center" }}>
              <AcUnit sx={{ color: "#495057", fontSize: "235px" }} />
              <Typography
                sx={{
                  color: "#fff",
                  fontSize: "34px",
                  fontWeight: "bold",
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  zIndex: 1,
                }}
              >
                Our Solutions
              </Typography>
            </Box>
          </Stack>

          <Stack>
            <img
              src={dame}
              alt="ethiopian dame"
              style={{
                height: "100%",
                width: "100%",
                borderTopRightRadius: "2rem",
              }}
            />
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Stack direction={"row"} sx={{ padding: "3rem" }}>
          <Stack
            sx={{ alignItems: "center", width: "50%", padding: "8rem" }}
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
              padding: "8rem",
              borderTopRightRadius: "2rem",
            }}
            spacing={"1.5rem"}
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

      <Stack direction={"row"} padding={"0rem 4rem 0rem 4rem"}>
        <Stack>
          <img
            style={{ borderTopLeftRadius: "2rem", width: '100%', height: '100%' }}
            src={success}
            alt="success"
          />
        </Stack>
        <Stack
          sx={{
            background: "#000814",
            padding: "5rem 2rem 3rem 3rem",
            borderTopRightRadius: "2rem",
            minHeight: "15.5rem",
          }}
          alignItems={"center"}
          spacing={"2rem"}
        >
          <TipsAndUpdates style={{ color: "#fff" }} />
          <Typography
            sx={{
              fontSize: "30px",
              color: "#fff",
            }}
          >
            Data Advisory
          </Typography>
          <Typography
            sx={{
              width: "80%",
              color: "#fff",
              textAlign: "center",
            }}
          >
            As a trusted Data Advisory partner, Worldview Training and
            Consulting Service PLC leverages its expertise and industry
            knowledge to provide comprehensive guidance and strategic
            recommendations to organizations. With a deep understanding of data
            management, analytics, and emerging technologies, Worldview assists
            clients in harnessing the power of data to drive business
            transformation.
          </Typography>
          <Button
            sx={{
              border: "solid 2px #89fc00",
              width: "50%",
              color: "#89fc00",
              borderRadius: "1.5rem 1.5rem 1.5rem 0rem",
              textTransform: "capitalize",
            }}
          >
            Check out solutions
          </Button>
        </Stack>
      </Stack>

      <Stack
        sx={{ background: "#212529", borderRadius: "2rem 2rem 0rem 0rem" }}
      >
        <Stack
          sx={{
            margin: "5rem 0rem 3.5rem 3.5rem",
            color: "#fff",
            width: "20%",
          }}
        >
          <Typography sx={{ fontSize: "38px", paddingBottom: "1rem" }}>
            It’s all about a dialogue
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            A few words from our clients.
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            See client stories for more.
          </Typography>
        </Stack>

        <Stack>
          <Grid container spacing={"1rem"} padding={"3rem 3rem 3rem 15rem"}>
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
        <Grid container>
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
