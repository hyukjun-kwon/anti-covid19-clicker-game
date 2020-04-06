import React, { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import HowToPlay from '../HowToPlay/HowToPlay';

import NavBar from '../Game/Navigation/NavBar';

import { usePandemicContext } from '../../contexts/PandemicContext';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    ChooseDifficulty: {
        textAlign: 'center'
    },
    DifficultyBtns: {
        position: 'absolute',
        left: '50%',
        top: '75%',
        transform: 'translate(-50%, -50%)'
    }
}));
function Home() {
    const [state, dispatch] = usePandemicContext();

    const classes = useStyles();

    return (
        <Fragment>
            <NavBar />
            <HowToPlay />
            <Box className={classes.DifficultyBtns}>
                <p className={classes.ChooseDifficulty}>Choose Your Difficulty</p>
                <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group">
                    <Button onClick={() => dispatch({ type: "SET_EASY_DIFFICULTY" })}>Easy</Button>
                    <Button onClick={() => dispatch({ type: "SET_MEDIUM_DIFFICULTY" })}>Medium</Button>
                    <Button onClick={() => dispatch({ type: "SET_HARD_DIFFICULTY" })}>Hard</Button>
                </ButtonGroup>
                <Link to="/game">
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="secondary"
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '140%',
                            transform: 'translate(-50%, -50%)',
                            marginBottom: '10%',
                        }}>PLAY</Button>
                </Link>
            </Box>
        </Fragment >
    )
}

export default Home;