import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { usePandemicContext } from '../../contexts/PandemicContext';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(20),
        },
        position: 'absolute',
        left: '49%',
        top: '45%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center'
    },
    results: {
        fontSize: '24pt',
    }
}));



function Results(props) {
    const classes = useStyles();
    const [state, dispatch] = usePandemicContext();
    console.log(state.status.infected);
    if (state.status.infected === 0) {
        return <WinPage className={classes.results} />
    } else if (state.status.infected >= 1000000000) {
        return <LosePage className={classes.results} />
    } else {
        return (
            <div className={classes.root}>
                <Paper className={classes.results} elevation={3}>404 error</Paper>
            </div>
        )
    }
}

function WinPage(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3}>Winner!</Paper>
        </div>
    );
};

function LosePage(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3}>Loser!</Paper>
        </div>
    );
}


export default Results;