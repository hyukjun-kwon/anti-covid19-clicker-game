import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const avatarStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    orange: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    purple: {
        color: theme.palette.getContrastText(deepPurple[500]),
        backgroundColor: deepPurple[500],
    },
}));

const style = {
    height: '70px'
}

export default function SpecialsUpgrades() {
    const classes = avatarStyles();

return (   
    <Fragment> 
    <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <button><Avatar className={classes.orange}>DP</Avatar></button>
                        <p>Double Production Lv.10</p>
                    </div>

                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <button><Avatar className={classes.orange}>Q</Avatar></button>

                        <p>Double Margin Lv.1</p>
                        
                    </div>

                </Paper>
            </Grid>

            </Fragment>

    )
}