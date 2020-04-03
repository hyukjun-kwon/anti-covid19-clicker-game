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

const avi = {
    margin: '13px'
}

export default function ClickerUpgrades() {
    const classes = avatarStyles();

return (   
    <Fragment> 
    <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <Avatar style={avi} className={classes.orange}>C</Avatar>
                        <p>Clicker Lv.23</p>
                    </div>

                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <Avatar style={avi} className={classes.orange}>Q</Avatar>

                        <p>Vaccine Quantity Lv.17</p>
                        <button>Upgrade: $112k</button>
                    </div>

                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <Avatar style={avi} className={classes.orange}>PR</Avatar>

                        <p>Production Rate Lv.6</p>
                        <button>Upgrade: $70k</button>
                    </div>

                </Paper>
            </Grid>

            </Fragment>

    )
}