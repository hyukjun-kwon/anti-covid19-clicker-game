import React from 'react';
import Button from '@material-ui/core/button';
import Box from '@material-ui/core/box';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    Title: {
        margin: '0',
        color: 'gold',
        textAlign: 'center',

    },
    Box: {
        position: 'absolute',
        left: '49.5%',
        top: '42%',
        transform: 'translate(-50%, -50%)',
        margin: '0'
    },
    Buttons: {
        position: 'static, center',
        marginBottom: '10%',
        border: 0,
        width: 'static',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
    }
}));

function Landing() {
    const classes = useStyles();
    return (
        <div>
            <Box className={classes.Box} style={{ margin: '0' }}>
                <h1 className={classes.Title}>COVID-19:</h1>
                <br />
                <h1 className={classes.Title}>Save the World, Be A Hero</h1>
            </Box>
            <Box className={classes.Box} style={{ top: '80%', left: '49.5%' }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.Buttons}>
                    Log In
                </Button>
                <br />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.Buttons}>
                    Register
                </Button>
            </Box>
        </div>
    );
}

export default Landing;