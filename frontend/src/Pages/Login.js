import React, { useState } from "react";
import { Footer } from "../components/Footer";
import {
  Button,
  Container,
  Grid,
  Input,
  Stack,
  Typography,
} from "@mui/material";
import HomeHeader from "../components/HomeHeader";
import LoginIcon from "@mui/icons-material/Login";
import { Link, useNavigate } from "react-router-dom";
import logsignimg from "../assets/slide_2.png";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import api from "../api";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await api.post("http://127.0.0.1:8000/api/token/", {
        username: name,
        password: password,
      });
      localStorage.setItem(ACCESS_TOKEN, res.data.access);
      localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
      navigate("/")
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

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
          marginBottom: { sm: "0rem", md: "7rem" },
        }}
      >
        <HomeHeader />
      </Stack>

      <Container>
        <Grid
          container
          sx={{
            padding: {
              xs: "1rem 1rem 2rem 1rem",
              sm: "2rem 1rem 2.5rem 1rem",
              md: "1.5rem 6rem 3rem 6rem",
              lg: "1rem 10rem 4rem 10rem",
            },
          }}
          spacing={{ xs: "2rem", sm: "3rem", md: "4rem", lg: "6rem" }}
          alignItems={{ sm: "center" }}
        >
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                color: "#000",
                fontWeight: "bold",
                textAlign: { xs: "center", md: "left" },
                fontSize: {
                  xs: "2rem",
                  sm: "2.1rem",
                  md: "2.65rem",
                  lg: "3rem",
                },
                textTransform: "uppercase",
                fontFamily: "Young Serif",
                paddingBottom: "2rem",
              }}
            >
              Worldview
            </Typography>

            <Typography
              sx={{
                textAlign: "justify",
                fontSize: {
                  xs: "1.1rem",
                  sm: "1rem",
                  md: "1.32rem",
                  lg: "1.55rem",
                },
                fontFamily: "Outfit",
              }}
            >
              <span
                style={{
                  color: "#00C6CF",
                  fontWeight: "bold",
                }}
              >
                Welcome back!
              </span>{" "}
              Please sign in!
            </Typography>

            <Stack alignItems={"center"} direction={"row"}>
              <Typography
                sx={{
                  textAlign: "justify",
                  fontSize: {
                    xs: "1.1rem",
                    sm: "1rem",
                    md: "1.31rem",
                    lg: "1.55rem",
                  },
                  fontFamily: "Outfit",
                }}
              >
                Don't have an account?
                <Link to={"/signup"}>
                  <Button>Register</Button>
                </Link>
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Stack
              sx={{
                backgroundImage: `url(${logsignimg})`,
                borderRadius: "1rem",
              }}
            >
              <form onSubmit={handleSubmit}>
                <Typography
                  sx={{
                    color: "#fff",
                    textAlign: "center",
                    padding: "2rem 0 2rem 0",
                    fontSize: {
                      xs: "1.2rem",
                      sm: "1.5rem",
                      md: "1.75rem",
                      lg: "2rem",
                    },
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    fontFamily: "Young Serif",
                  }}
                >
                  Log In
                </Typography>
                <Stack
                  spacing={{
                    xs: "1.7rem",
                    sm: "2.5rem",
                    md: "2.75rem",
                    lg: "3rem",
                  }}
                  sx={{ alignItems: "center" }}
                >
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    required
                    sx={{
                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.8rem",
                        md: "0.9rem",
                        lg: "1rem",
                      },
                      fontFamily: "Outfit",
                    }}
                    style={{
                      color: "#000",
                      borderRadius: "0.25rem",
                      paddingLeft: "1rem",
                      backgroundColor: "#fff",
                      width: "65%",
                    }}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    type="password"
                    required
                    placeholder="Your Password"
                    value={password}
                    sx={{
                      fontSize: {
                        xs: "0.7rem",
                        sm: "0.8rem",
                        md: "0.9rem",
                        lg: "1rem",
                      },
                      fontFamily: "Outfit",
                    }}
                    style={{
                      color: "#000",
                      borderRadius: "0.25rem",
                      backgroundColor: "#fff",
                      paddingLeft: "1rem",
                      width: "65%",
                    }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Stack
                    sx={{
                      paddingBottom: { xs: "4rem", sm: "4.5rem", md: "5rem" },
                      paddingTop: { xs: "1.5rem", sm: "1.75rem", md: "2rem" },
                    }}
                  >
                    <Button
                      type="submit"
                      endIcon={<LoginIcon />}
                      sx={{
                        backgroundImage:
                          "linear-gradient(to right, #00C6CF, #7FD1AE)",
                        borderRadius: "5px",
                        color: "#333",
                        padding: {
                          xs: "0.2rem 1.5rem",
                          sm: "0.2rem 1.75rem",
                          md: "0.3rem 2rem",
                        },
                        "&:hover": {
                          backgroundColor: "#e0e0e0",
                        },
                        fontFamily: "Young Serif",
                      }}
                    >
                      Log In
                    </Button>
                  </Stack>
                </Stack>
              </form>
            </Stack>
          </Grid>
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

export default Login;
