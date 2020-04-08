import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { usePandemicContext } from "../../contexts/PandemicContext";
import Container from "@material-ui/core/Container";
import RegisterModal from "./RegisterModal";

import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, -2),
    fontFamily: "Bangers, cursive",
    fontSize: "14pt",
  },
  creator: {
    marginTop: theme.spacing(10),
    color: "white",
    fontFamily: "Bangers, cursive",
    textShadow: "4px 3px 0px #5E7BD6, 2px 2px 2px rgba(227,239,24,0)",
    letterSpacing: "3px",
  },
  spacing: {
    marginTop: theme.spacing(-2),
    color: "white",
    fontFamily: "Bangers, cursive",
    textShadow: "4px 3px 0px #5E7BD6, 2px 2px 2px rgba(227,239,24,0)",
    letterSpacing: "3px",
  },
  title: {
    color: "white",
    margin: 0,
    fontFamily: "Bangers, cursive",
    fontSize: "40pt",
    textShadow: "4px 3px 0px #5E7BD6, 2px 2px 2px rgba(227,239,24,0)",
    letterSpacing: "5px",
  },
}));

function LogIn() {
  const [state, dispatch] = usePandemicContext();
  const classes = useStyles();

  const teamName = "{ props.teamname }";
  const projectTitle = "UCLA BOOTCAMP JAN 2020";
  const teamMembers = "Adam Greenthal, James Dabalos, ";
  const teamMembers2 = "Paul Kwon, Raymond Amparo";

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = (event) => {
    event.preventDefault();
    API.login({
      username: username,
      password: password,
    })
      .then((response) => {
        dispatch({
          type: "USER_LOGIN",
          token: response.data.token,
          player: response.data.player,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleRegister = (event) => {
    event.preventDefault();
    API.register({
      username: username,
      password: password,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container component="main" maxWidth="xs">
      <h1
        align="center"
        className={classes.title}
        style={{ marginTop: "50px" }}
      >
        Welcome
      </h1>
      <h2 align="center" className={classes.title}>
        to
      </h2>
      <h1 align="center" className={classes.title}>
        ANTI-COVID-19
      </h1>
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                onChange={(event) => setUsername(event.target.value)}
                variant="outlined"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                style={{ backgroundColor: "white" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(event) => setPassword(event.target.value)}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                style={{ backgroundColor: "white" }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Button
                onClick={handleLogin}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Log In
              </Button>
            </Grid>
            <Grid item xs={6}>
              <RegisterModal className={classes.submit} />
            </Grid>
          </Grid>
        </form>
      </div>
      <h1 className={classes.creator} align="center">
        {teamName}
      </h1>
      <h2 className={classes.spacing} align="center">
        {teamMembers}
      </h2>
      <h2 className={classes.spacing} align="center">
        {teamMembers2}
      </h2>
      <h3 className={classes.spacing} align="center">
        {projectTitle}
      </h3>
    </Container>
  );
}

export default LogIn;
