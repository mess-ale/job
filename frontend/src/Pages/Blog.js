import React from "react";
import Footer from "../components/Footer";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import HomeHeader from "../components/HomeHeader";
import ima from "../assets/slide_1.png";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Importance of Training and Development for Businesses",
    excerpt:
      "In today's competitive business landscape, continuous learning and development...",
    imageUrl: ima,
    readMoreLink:
      "/blog/the-importance-of-training-and-development-for-businesses",
  },
  {
    id: 1,
    title: "The Importance of Training and Development for Businesses",
    excerpt:
      "In today's competitive business landscape, continuous learning and development...",
    imageUrl: ima,
    readMoreLink:
      "/blog/the-importance-of-training-and-development-for-businesses",
  },
  {
    id: 1,
    title: "The Importance of Training and Development for Businesses",
    excerpt:
      "In today's competitive business landscape, continuous learning and development...",
    imageUrl: ima,
    readMoreLink:
      "/blog/the-importance-of-training-and-development-for-businesses",
  },
  {
    id: 1,
    title: "The Importance of Training and Development for Businesses",
    excerpt:
      "In today's competitive business landscape, continuous learning and development...",
    imageUrl: ima,
    readMoreLink:
      "/blog/the-importance-of-training-and-development-for-businesses",
  },
  {
    id: 1,
    title: "The Importance of Training and Development for Businesses",
    excerpt:
      "In today's competitive business landscape, continuous learning and development...",
    imageUrl: ima,
    readMoreLink:
      "/blog/the-importance-of-training-and-development-for-businesses",
  },
  // ... add more blog posts here
];

function Blog() {
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
          py: 8,
          padding: {
            xs: "5rem 0.8rem 5rem 0.8rem",
            md: "10rem 1.3rem 10rem 1.3rem",
          },
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} textAlign={"center"} paddingBottom={"2rem"}>
            <Typography
              gutterBottom
              sx={{
                fontWeight: "bold",
                fontSize: {
                  xs: "1.9rem",
                  sm: "2.2rem",
                  md: "2.6rem",
                  lg: "3rem",
                },
              }}
            >
              Worldview BLOG
            </Typography>
            <Typography
              sx={{
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                  md: "1.4rem",
                  lg: "1.6rem",
                },
              }}
            >
              Sharing training insights, the latest L&D trends, and tips to
              improve your training and development here.
            </Typography>
          </Grid>
          {blogPosts.map((post) => (
            <Grid item xs={12} md={6} lg={4} key={post.id}>
              <Card sx={{ mb: 4 }}>
                <CardMedia
                  component="img"
                  image={post.imageUrl}
                  alt={post.title}
                  height="200"
                />
                <CardContent>
                  <Typography variant="h5" component="h3">
                    {post.title}
                  </Typography>
                  <Typography variant="body1">{post.excerpt}</Typography>
                  <Button
                    variant="contained"
                    component={Link}
                    to={post.readMoreLink}
                    sx={{ mt: 2 }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

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

export default Blog;
