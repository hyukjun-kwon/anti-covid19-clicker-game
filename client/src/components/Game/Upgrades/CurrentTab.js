import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Progress from './Progress';
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
    height: 100
}

const styles = {
    height: '150px',
    overflowY: 'auto',
}

export default function CurrentTab() {
    const classes = avatarStyles();
    const [state, dispatch] = usePandemicContext();

    let clickerLevel= `Clicker Next Level: ${state.clicker.level + 1}`
    let pharmacyLevel= `Pharmacy Next Level: ${state.pharmacy.level + 1}`
    let laboratoryLevel= `Laboratory Next Level: ${state.laboratory.level + 1}`
    let hospitalLevel= `Hospital Next Level: ${state.hospital.level + 1}`
    let driveThruLevel= `Drive-thru Next Level: ${state.drivethru.level + 1}`


    
    return (
        <Fragment>
            <Paper style={styles}>
                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <Avatar className={classes.orange}>C</Avatar>
                            <Progress upgrade={clickerLevel} description={state.clicker.effect}/>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <Avatar className={classes.orange}>P</Avatar>
                            <Progress upgrade={pharmacyLevel} description={state.pharmacy.effect}/>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <Avatar className={classes.orange}>L</Avatar>
                            <Progress upgrade={laboratoryLevel} description={state.laboratory.cost}/>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <Avatar className={classes.orange}>H</Avatar>
                            <Progress upgrade={(state.hospital.level + 1) < 3 ? hospitalLevel : "Maxed" } />
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <Avatar className={classes.orange}>DT</Avatar>
                            <Progress upgrade={(state.drivethru.level + 1) < 3 ? driveThruLevel : "Maxed" } />
                        </div>
                    </Paper>
                </Grid>
            </Paper>
        </Fragment>

    )
}