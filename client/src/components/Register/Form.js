import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    input: {
        backgroundColor: 'white',
        color: 'black'
    },
}));

export default function RegisterForm() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField className={classes.input} label="username" variant="filled" />
            <TextField className={classes.input} label="password" variant="filled" />
        </form>
    );
}