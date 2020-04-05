import React, { Fragment } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

import { usePandemicContext } from '../../../contexts/PandemicContext';

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

const styles = {
    height: '150px',
    overflowY: 'auto',
}

export default function ClickerUpgrades() {
    const classes = avatarStyles();
    const [state, dispatch] = usePandemicContext();
    return (
        <Fragment>
            <Paper style={styles}>
                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <button><Avatar className={classes.orange}>C</Avatar></button>
                            <p>Clicker Lv.23</p>
                        </div>

                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <button><Avatar className={classes.orange}>Q</Avatar></button>

                            <p>Vaccine Quantity Lv.17</p>
                            <button>Upgrade: $112k</button>
                        </div>

                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <button><Avatar className={classes.orange}>PR</Avatar></button>

                            <p>Production Rate Lv.6</p>
                            <button>Upgrade: $70k</button>
                        </div>

                    </Paper>
                </Grid>
            </Paper>
        </Fragment>

    )
}