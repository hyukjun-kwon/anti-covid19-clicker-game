import React from 'react';
import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
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
    },
    creator: {
        marginTop: theme.spacing(85),
    },
    spacing: {
        marginTop: theme.spacing(-2)
    }
}));

function Landing() {
    const classes = useStyles();
    const teamName = "{ props.teamname }"
    const projectTitle = "UCLA BOOTCAMP JAN 2020"
    const teamMembers = "Adam Greenthal, James Dabalos, "
    const teamMembers2 = "Paul Kwon, Raymond Amparo"
    return (
        <div>
            <Box className={classes.Box} style={{ margin: '0' }}>
                <h1 className={classes.Title}>COVID-19:</h1>
                <br />
                <h1 className={classes.Title}>Save the World, Be A Hero</h1>
            </Box>
            <Box className={classes.Box} style={{ top: '60%', left: '48%' }}>
                <Link to="/">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.Buttons}>
                        Log In
                </Button>
                </Link>
            </Box>
            <h1 className={classes.creator} align="center">{teamName}</h1>
            <h3 className={classes.spacing} align="center">{teamMembers}</h3>
            <h3 className={classes.spacing} align="center">{teamMembers2}</h3>
            <h3 className={classes.spacing} align="center">{projectTitle}</h3>
        </div>
    );
}

export default Landing;