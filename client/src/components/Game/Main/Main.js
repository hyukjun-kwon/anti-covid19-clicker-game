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


    },
}));

function Main({setPandemic}) {
    const pandemic = useContext(PandemicContext);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Box className={classes.Box} style={{ color: 'orange' }}>Infected: {pandemic.infected}</Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.Box} style={{ color: 'red' }}>Dead: {pandemic.dead}</Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.Box} style={{ color: 'blue' }}>Cured: {pandemic.cured}</Box>
                </Grid>
                <Grid item xs={3}>
                    <Box className={classes.Box} style={{ color: 'green' }}>Funding: {pandemic.funding}</Box>
                </Grid>
            </Grid>
            <Clicker setPandemic={setPandemic}/>
        </div>





        // <Fragment>
        //     <Grid container spacing={3}>
        //         <Grid item xs={3}>
        //             <Box
        //                 style={{
        //                     // border: 'white 2px solid',
        //                     width: '100%',
        //                     background: 'black',
        //                     color: 'red',
        //                     textAlign: 'center',
        //                     float: 'left',
        //                     padding: '3px',
        //                     marginTop: '15px',
        //                     marginBottom: '15px',
        //                     marginLeft: '30px'
        //                 }}>
        //                 <p>Infected: {pandemic.infected} </p>
        //             </Box>
        //         </Grid>
        //         <Grid item xs={3}>
        //             <Box
        //                 style={{
        //                     // border: 'white 2px solid',
        //                     width: '100%',
        //                     background: 'black',
        //                     float: 'left',
        //                     color: 'grey',
        //                     textAlign: 'center',
        //                     padding: '3px',
        //                     marginTop: '15px',
        //                     marginLeft: '30px'
        //                 }}>
        //                 <p>Dead: {pandemic.dead} </p>
        //             </Box>
        //         </Grid>
        //         <Grid item xs={3}>
        //             <Box
        //                 style={{
        //                     // border: 'white 2px solid',
        //                     width: '100%',
        //                     background: 'black',
        //                     color: 'green',
        //                     textAlign: 'center',
        //                     float: 'left',
        //                     padding: '3px',
        //                     marginTop: '15px',
        //                     marginBottom: '15px',
        //                     marginLeft: '390px'
        //                 }}>
        //                 <p>Cured: {pandemic.cured} </p>
        //             </Box>
        //         </Grid>
        //         <Grid item xs={3}>
        //             <Box
        //                 style={{
        //                     // border: 'white 2px solid',
        //                     width: '100%',
        //                     background: 'black',
        //                     color: 'yellow',
        //                     textAlign: 'center',
        //                     float: 'left',
        //                     padding: '3px',
        //                     marginTop: '15px',
        //                     marginLeft: '30px'
        //                 }}>
        //                 <p>Funding: {pandemic.funding} </p>
        //             </Box>
        //         </Grid>
        //         <Grid item xs={12}>
        //             <Clicker />
        //         </Grid>
        //     </Grid>
        // </Fragment>

    )
}

export default Main;