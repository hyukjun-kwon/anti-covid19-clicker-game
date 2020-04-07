import React, { Fragment, useState } from 'react';

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

export default function LevelUpTab() {
    const classes = avatarStyles();
    const [state, dispatch] = usePandemicContext();
    const [clickerDisabled, setClickerDisabaled] = useState(false)
    const [pharmacyDisabled, setPharmacyDisabaled] = useState(false)
    const [laboratoryDisabled, setLaboratoryDisabaled] = useState(true)
    const [hospitalDisabled, setHospitalDisabaled] = useState(true)
    const [driveThruDisabled, setDriveThruDisabaled] = useState(true)

    const clickerUpgrade = () => {
        
    }
    const pharmacyUpgrade = () => {

    }
    const laboratory = () => {

    }
    const hospitalUpgrade = () => {

    }
    const driveThruUpgrade = () => {

    }

    return (
        <Fragment>
            <Paper style={styles}>
                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <button disabled={state.status.fund < state.clicker.cost} onClick={() => {
                                dispatch({ type: "CLICKER_LEVEL_UP" });
                            }}
                            >
                                <Avatar className={classes.orange}>C</Avatar></button>
                            <p>Clicker Level: {state.clicker.level}</p>
                            <p>Profit: ${state.clicker.profit}</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <button disabled={pharmacyDisabled} onClick={() => {
                                dispatch({ type: "PHARMACY_LEVEL_UP" });
                                // if (state.status.fund < state.pharmacy.cost) {
                                //     setPharmacyDisabaled(true)
                                // }
                            }}
                            >
                                <Avatar className={classes.orange}>P</Avatar></button>
                            <p>Pharmacy Level: {state.pharmacy.level}</p>
                            <p>Profit: ${state.pharmacy.profit}</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <button disabled={laboratoryDisabled}><Avatar className={classes.orange}>L</Avatar></button>
                            <p>Laboratory Level: {state.laboratory.level}</p>
                            <p>Profit: ${state.laboratory.profit}</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <button disabled={hospitalDisabled}><Avatar className={classes.orange}>H</Avatar></button>
                            <p>Hospital Level: {state.hospital.level}</p>
                            {/* <p>Profit: ${state.hospital.profit}</p> */}
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <button disabled={driveThruDisabled}><Avatar className={classes.orange}>D</Avatar></button>
                            <p>Drive-thru Level: {state.drivethru.level}</p>
                            {/* <p>Profit: ${state.drivethru.profit}</p> */}
                        </div>
                    </Paper>
                </Grid>
            </Paper>
        </Fragment>

    )
}