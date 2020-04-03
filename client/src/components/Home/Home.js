import React, { Fragment, useContext, useState } from 'react';
import NavBar from '../Game/Navigation/NavBar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PandemicContext from '../../contexts/PandemicContext';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    HowTo: {
        position: 'absolute',
        left: '50%',
        top: '42%',
        transform: 'translate(-50%, -50%)',
        marginBottom: '10%',
        width: 'auto'
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
function Home({ setPandemic }) {
    // function Home() {
    // const { dispatch } = useContext(PandemicContext)
    const pandemic = useContext(PandemicContext)
    console.log(pandemic)
    const classes = useStyles();

    const easySettings = {
        difficulty:"easy",
        infected: 5000,
        infectionRate: 1.05,
        cured: 0,
        dead: 0,
        funding: 2500
    }
    const mediumSettings = {
        difficulty:"medium",
        infected: 100000,
        infectionRate: 1.10,
        cured: 0,
        dead: 0,
        funding: 2500
    }
    const hardSettings = {
        difficulty:"hard",
        infected: 100000,
        infectionRate: 1.15,
        cured: 0,
        dead: 0,
        funding: 500
    }
    return (
        <Fragment>
            <NavBar />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.HowTo}>
                HOW TO PLAY
            </Button>
            <Box className={classes.DifficultyBtns}>
                <p className={classes.ChooseDifficulty}>Choose Your Difficulty</p>
                <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group">
                    {/* <Button onClick={() => dispatch({ type: 'SET_DIFFICULTY', payload: 'EASY_SETTINGS' })}>Easy</Button>
                    <Button onClick={() => dispatch({ type: 'SET_DIFFICULTY', payload: 'MEDIUM_SETTINGS' })}>Medium</Button>
                    <Button onClick={() => dispatch({ type: 'SET_DIFFICULTY', payload: 'HARD_SETTINGS' })}>Hard</Button> */}
                    <Button onClick={event => {event.preventDefault(); setPandemic(easySettings)}}>Easy</Button>
                    <Button onClick={event => {event.preventDefault(); setPandemic(mediumSettings)}}>Medium</Button>
                    <Button onClick={event => {event.preventDefault(); setPandemic(hardSettings)}}>Hard</Button>
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