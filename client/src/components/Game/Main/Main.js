import React, { Fragment, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';

import Clicker from './Clicker';

import { usePandemicContext } from '../../../contexts/PandemicContext';
import numAbb from '../../../utils/numberAbbreviate'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    Box: {
        padding: theme.spacing(2),
        textAlign: 'left',
        width: 'auto',
        padding: '3px',
        marginTop: '15px',
    },
}));

function Main() {
    const [state, dispatch] = usePandemicContext();
    const classes = useStyles();

    if (state.status.infected === 0) {
        dispatch({ type: "WIN" });
    }


    if (state.status.infected >= 1000000000) { 
        dispatch({ type: "LOST" });
    };

    useEffect(() => {
        const timer = setInterval(() => dispatch({ type: "TICK" }), 1000);
        return () => clearTimeout(timer);
    });

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <Box className={classes.Box}>Infected: <span style={{ color: 'red' }}>{numAbb(state.status.infected)}</span></Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={classes.Box} >Deceased: <span style={{ color: 'red' }}>{numAbb(state.status.death)}</span></Box>
                </Grid>
                {/* <Grid item xs={3}>
                    <Box className={classes.Box} style={{ color: 'yellow' }}>Cured: {}</Box>
                </Grid> */}
                {/* <Grid item xs={4}>
                    <Box className={classes.Box} >Funding: <span style={{ color: 'green' }}>{state.status.fund}</span></Box>
                </Grid> */}
            </Grid>
            <Clicker />
        </div>
    )
}

export default Main;