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
            width: theme.spacing(35),
            height: theme.spacing(15),
            paddingTop: theme.spacing(3)
        },
        position: 'absolute',
        left: '50%',
        top: '45%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        fontSize: '14pt'
    },
    button: {
        width: '100px',
        height: '25px',
        padding: 0,
        marginTop: '20px',
    }
}));

const Results = () => {
    const classes = useStyles();
    const [state, dispatch] = usePandemicContext();

    return state.won ? WinPage() : LosePage();
}

function WinPage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3}>Congratulations! <br /><br />You have defeated COVID-19!<Link to="/home"><Button type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}>Exit</Button></Link></Paper>
        </div>
    );
};

function LosePage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper className={classes.results} elevation={3} >Loser! <br /><br />Everyone is dead!<br /><Link to="/home"><Button type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                className={classes.button}>Exit</Button></Link></Paper>
        </div >
    );
}

export default Results;