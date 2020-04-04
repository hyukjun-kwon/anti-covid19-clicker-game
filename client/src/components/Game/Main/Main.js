import React, { Fragment, useEffect } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';

import Clicker from './Clicker';

import { usePandemicContext } from '../../../contexts/PandemicContext';

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

    if(state.status.infected === 0) {
        dispatch({ type: "WIN" });
      }
    
      useEffect(() => {
        const timer = setInterval(() => dispatch({ type: "TICK" }), 3000);
        return () => clearTimeout(timer); 
      });

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Box className={classes.Box} style={{ color: 'orange' }}>Infected: {Math.ceil(state.status.infected)}</Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.Box} style={{ color: 'red' }}>Deceased: {Math.ceil(state.status.death)}</Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.Box} style={{ color: 'yellow' }}>Cured: {}</Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.Box} style={{ color: 'green' }}>Funding: {state.status.fund}</Box>
                </Grid>
            </Grid>
            <Clicker />
        </div>
    )
}

export default Main;