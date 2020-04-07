import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Progress from './Progress';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

import { usePandemicContext } from '../../../contexts/PandemicContext';
import numAbb from '../../../utils/numberAbbreviate';

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
    height: 120
}

const styles = {
    height: '150px',
    overflowY: 'auto',
}

export default function CurrentTab() {
    const classes = avatarStyles();
    const [state, dispatch] = usePandemicContext();

    let clicker= {
        level:`Clicker Level: ${state.clicker.level}`,
        effect: `Cure ${state.clicker.effect} every click | CD: 3 sec`,
        profit: `Earn $${numAbb(state.clicker.profit)} every cure`
    }
    let pharmacy= {
        level:`Pharmacy Level: ${state.pharmacy.level}`,
        effect: `Cure ${state.pharmacy.effect} every 5 sec`,
        profit: `Earn $${numAbb(state.pharmacy.profit)} every cure`
    }
    let laboratory= {
        level:`Laboratory Level: ${state.laboratory.level}`,
        effect: `Cure ${state.laboratory.effect} every 10 sec`,
        profit: `Earn $${numAbb(state.laboratory.profit)} every cure`
    }
    let hospital= {
        level:`Hospital Level: ${state.hospital.level}`,
        effect:`Reduces death rate`
    }
    let driveThru= {
        level: `Drive-thru Level: ${state.drivethru.level}`,
        effect: `Reduces infection rate`
    }


    
    return (
        <Fragment>
            <Paper style={styles}>
                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <Avatar className={classes.orange}>C</Avatar>
                            <Progress description={clicker} />
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <Avatar className={classes.orange}>P</Avatar>
                            <Progress description={pharmacy}/>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <Avatar className={classes.orange}>L</Avatar>
                            <Progress description={laboratory}/>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <Avatar className={classes.orange}>H</Avatar>
                            {/* <Progress level={(state.hospital.level + 1) < 3 ? hospitalLevel : "Maxed" } /> */}
                            <Progress  description={hospital}/>
                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12}>
                    <Paper style={style} className={classes.paper}>
                        <div className={classes.root}>
                            <Avatar className={classes.orange}>DT</Avatar>
                            {/* <Progress level={(state.drivethru.level + 1) < 5 ? driveThruLevel : "Maxed" } /> */}
                            <Progress description={driveThru} />
                        </div>
                    </Paper>
                </Grid>
            </Paper>
        </Fragment>

    )
}