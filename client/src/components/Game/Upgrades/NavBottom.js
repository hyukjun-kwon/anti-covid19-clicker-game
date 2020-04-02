import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange, deepPurple } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Progress from '../Progress/Progress';
import UpgradeTab from '../Tab/Tab';
import Header from '../Header/Header';

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

export default function NavBottom(props) {
    const classes = avatarStyles();

    return (
        <Fragment>

            <Header amount={'1,000'}/>


            <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <Avatar style={avi} className={classes.orange}>{props.avatar}</Avatar>

                        <Progress upgrade={'Hospital Lv.5 (+50 vaccines / 30 sec)'}/>
                    </div>

                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <Avatar style={avi} className={classes.orange}>{props.avatar}</Avatar>

                        <Progress upgrade={'Lab Lv.1 (+500 vaccines / 3 min)'}/>
                    </div>

                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <Avatar style={avi} className={classes.orange}>{props.avatar}</Avatar>

                        <Progress upgrade={'Clinic: reduce Deaths from COVID-19'}/>
                    </div>

                </Paper>
            </Grid>

            <Grid item xs={12}>
                <Paper style={style} className={classes.paper}>
                    <div className={classes.root}>
                        <Avatar style={avi} className={classes.orange}>{props.avatar}</Avatar>

                        <Progress upgrade={'Drive-thru testing: reduce Spread'}/>
                    </div>

                </Paper>
            </Grid>

            <UpgradeTab />
        </Fragment>
    );
}