import React, { Fragment, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

import { usePandemicContext } from '../../../contexts/PandemicContext';
import numAbb from '../../../utils/numberAbbreviate'

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
    height: 300,
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
                            {/* Button disabled if clicker is max-level or insufficient fund */}
                            <button disabled={(state.clicker.level === 30) || (state.status.fund < state.clicker.cost)} onClick={() => {
                                dispatch({ type: "CLICKER_LEVEL_UP" });
                            }}
                            >
                                <Avatar className={classes.orange}>C</Avatar></button>
                            <p>Increase the number of cures. Cost: ${numAbb(state.clicker.cost)}</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <button disabled={(state.pharmacy.level === 20) || (state.status.fund < state.pharmacy.cost)} onClick={() => {
                                dispatch({ type: "PHARMACY_LEVEL_UP" });
                            }}
                            >
                                <Avatar className={classes.orange}>P</Avatar></button>
                            <p>Increase the number of cures. Cost: ${numAbb(state.pharmacy.cost)}</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <button disabled={(state.laboratory.level === 10) || (state.status.fund < state.laboratory.cost)}><Avatar className={classes.orange}>L</Avatar></button>
                            <p>Increase the number of cures. Cost: ${numAbb(state.laboratory.cost)}</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <button disabled={(state.hospital.level === 3) || (state.status.fund < state.hospital.cost)}><Avatar className={classes.orange}>H</Avatar></button>
                            <p>Decrease the rate of people dying. Cost: ${numAbb(state.hospital.cost)}</p>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <button disabled={(state.drivethru.level === 5) || (state.status.fund < state.drivethru.cost)}><Avatar className={classes.orange}>D</Avatar></button>
                            <p>Decrease the rate of infection. Cost: ${numAbb(state.drivethru.cost)}</p>
                        </div>
                    </Paper>
                </Grid>
            </Paper>
        </Fragment>

    )
}