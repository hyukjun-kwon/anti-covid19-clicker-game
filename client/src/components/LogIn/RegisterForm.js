import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Alert, AlertTitle } from "@material-ui/lab";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
      textAlign: "center",
    },
  },

  center: {
    marginLeft: "auto",
    marginRight: "auto",
  },

  fluid: {
    width: "100%",
  },
}));

export default function RegisterForm() {
  const classes = useStyles();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [alert, setAlert] = useState(<div></div>);

  const handleRegister = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      API.register({
        username: username,
        password: password,
      })
        .then((response) => {
          console.log(response.data);
          setAlert(
            <Alert severity="success">Player successfully Registered</Alert>
          );
        })
        .catch((err) => {
          console.log(err);
          setAlert(
            <Alert severity="error">
              <AlertTitle>Registration Error!</AlertTitle>Same username already
              exists in database
            </Alert>
          );
        });
    } else {
      setAlert(<Alert severity="warning">Passwords must match</Alert>);
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <h2>Register</h2>
      <Grid container spacing={2} className={classes.center}>
        <Grid item xs={12}>
          <TextField
            onChange={(event) => setUsername(event.target.value)}
            value={username}
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
            value={password}
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
        <Grid item xs={12}>
          <TextField
            onChange={(event) => setConfirmPassword(event.target.value)}
            value={confirmPassword}
            variant="outlined"
            required
            fullWidth
            name="confirmpassword"
            label="Confirm Password"
            type="password"
            id="confirmpassword"
            autoComplete="current-password"
            style={{ backgroundColor: "white" }}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleRegister}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Register
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.fluid}>
        {alert}
      </Grid>
    </form>
  );
}
