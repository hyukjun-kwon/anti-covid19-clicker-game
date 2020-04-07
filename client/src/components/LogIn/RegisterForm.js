import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      textAlign: 'center'
    },
  },
}));

const style = {
   marginLeft: '57px'
}

export default function RegisterForm() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
    <h2>Register</h2>
    <Grid container spacing={2} style={style}>
                        <Grid item xs={12} >
                            <TextField
                                // ref={usernameRef}
                                // onChange={event => setUsername (event.target.value )}
                                variant="outlined"
                                required
                                fullWidth
                                id="username"
                                label="Username"
                                name="username"
                                autoComplete="username"
                                style={{ backgroundColor: 'white' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                // ref={passwordRef}
                                // onChange={event => setPassword ( event.target.value )}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                style={{ backgroundColor: 'white' }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                // ref={passwordRef}
                                // onChange={event => setPassword ( event.target.value )}
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmpassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmpassword"
                                autoComplete="current-password"
                                style={{ backgroundColor: 'white' }}
                            />
                        </Grid>
                    </Grid>
       <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        // className={}
        style={style}>Register</Button>
    </form>
  );
}