import React, { Fragment, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Paper, Typography } from '@material-ui/core';
import Clicker from './Clicker';
import PandemicContext from '../../../contexts/PandemicContext';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    Box: {
        padding: theme.spacing(1),
        textAlign: 'left',
        width: '100%',
        padding: '3px',
        marginTop: '15px',
        border: '1px solid',
        font: 'white'
    },
}));

function Main({ setPandemic }) {
    const pandemic = useContext(PandemicContext);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Box className={classes.Box} style={{ backgroundColor: 'orange' }}>Infected: {pandemic.infected}</Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.Box} style={{ backgroundColor: 'red' }}>Deceased: {pandemic.dead}</Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.Box} style={{ backgroundColor: 'yellow' }}>Cured: {pandemic.cured}</Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.Box} style={{ backgroundColor: 'green' }}>Funding: {pandemic.funding}</Box>
                </Grid>
            </Grid>
            <Clicker setPandemic={setPandemic} />
        </div>
    )
}

export default Main;