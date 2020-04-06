import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { usePandemicContext } from '../../contexts/PandemicContext';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(40),
            height: theme.spacing(25),
            padding: theme.spacing(1)
        },
        position: 'absolute',
        left: '50%',
        top: '45%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        fontSize: '18pt'
    },
    results: {
        top: '50%',
    },
    button: {
        width: '200px',
        height: '50px',
        padding: 0,
        margin: 0,
    }
}));



function Results(props) {
    const classes = useStyles();
    const [state, dispatch] = usePandemicContext();
    console.log(state.status.infected);
    console.log(state.status.isComplete);
    if (state.status.infected === 0) {
        return <WinPage className={classes.results} />
    } else if (state.status.infected >= 1000000000) {
        return <LosePage className={classes.results} />
    } else {
        return (
            <div className={classes.root}>
                <Paper className={classes.results} elevation={3}>Whoops! <br /><br />You are on the wrong page!<br /><br /><Link to="/home"><Button type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.button}>Return Home</Button></Link></Paper>
            </div>
        )
    }
}

function WinPage(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.results} elevation={3}>Congratulations! <br /><br />You have defeated COVID-19!<br /><br /><Link to="/home"><Button type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}>Return Home</Button></Link></Paper>
        </div>
    );
};

function LosePage(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.results} elevation={3}>Loser! <br /><br />Everyone is dead!<br /><br /><Link to="/home"><Button type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}>Return Home</Button></Link></Paper>
        </div>
    );
}

export default Results;