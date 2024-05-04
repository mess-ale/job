import React, { useState } from "react";
import { Footer } from "../components/Footer.js";
import { Stack, Typography, Input, Button, Grid } from "@mui/material";
import HomeHeader from "../components/HomeHeader.js";
import logsignimg from "../assets/slide_2.png";
import LoginIcon from "@mui/icons-material/Login";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePasswordError, setRePasswordError] = useState("");
  const [emailError, setEmailError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError(true);
    }

    if (!name) {
      setNameError(true);
    }
    if (!password) {
      setPasswordError(true);
    }
    if (!rePassword) {
      setRePasswordError(true);
    }

    if (
      !name ||
      !password ||
      !rePassword ||
      password !== rePassword ||
      !email
    ) {
      // history.push("/home/upload");
    }

    setName("");
    setPassword("");
    setRePassword("");
    setEmail("");
    console.log("sign up seccessesful");
  };

  const sxinput = {
    fontSize: {
      xs: "0.9rem",
      sm: "1rem",
      md: "1.1rem",
      lg: "1.2rem",
    },
    fontFamily: "Outfit",
    width: '70%'
  };

  const styleinput = {
    color: "#000",
    borderRadius: "0.25rem",
    paddingLeft: "1rem",
    backgroundColor: "#fff",

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
            Worldview
            </span>{" "}
            Create your Worldview Training and Consulting Service PLC account (:
          </Typography>
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
                  textAlign: "center",
                  padding: '1rem 0 2rem 0',
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1rem",
                    md: "1.25rem",
                    lg: '1.5rem'
                  },
                  color: "#fff",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  fontFamily: "Young Serif",
                }}
              >
                Create Account
              </Typography>
              <Stack
                spacing={{
                  xs: "1rem",
                  sm: "1.5rem",
                  md: "2rem",
                }}
                sx={{ alignItems: "center" }}
              >
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  required
                  error={nameError}
                  onChange={(e) => setName(e.target.value)}
                  sx={sxinput}
                  style={styleinput}
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  required
                  error={emailError}
                  onChange={(e) => setEmail(e.target.value)}
                  sx={sxinput}
                  style={styleinput}
                />

                <Input
                  type="password"
                  required
                  error={passwordError}
                  placeholder="Your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={sxinput}
                  style={styleinput}
                />
                <Input
                  type="password"
                  required
                  error={rePasswordError}
                  placeholder="Repeat Your Password"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                  sx={sxinput}
                  style={styleinput}
                />
                <Typography sx={{ color: "red" }}>
                  {password !== rePassword && "password do not match"}
                </Typography>

                <Stack>
                  <Button
                    type="submit"
                    endIcon={<LoginIcon />}
                    sx={{
                      color: "#333",
                      padding: "0.3rem 2rem",
                      marginBottom: "4rem",
                      borderRadius: "5px",
                      backgroundImage:
                        "linear-gradient(to right, #7FD1AE, #00C6CF)",

                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                      },
                      fontFamily: "Young Serif",
                    }}
                  >
                    Sign Up
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Stack>
        </Grid>
      </Grid>

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

export default SignUp;
