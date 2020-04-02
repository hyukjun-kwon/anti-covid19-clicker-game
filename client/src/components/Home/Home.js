import React, { Fragment } from 'react';
import NavBar from '../Game/Navigation/NavBar';
import Button from '@material-ui/core/button';
import Box from '@material-ui/core/box';
import ButtonGroup from '@material-ui/core/ButtonGroup';


function Home() {
    return (
        <Fragment>
            <NavBar />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '42%',
                    transform: 'translate(-50%, -50%)',
                    marginBottom: '10%',
                    width: 'auto',
                }}>
                HOW TO PLAY
            </Button>
            <Box
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '75%',
                    transform: 'translate(-50%, -50%)',
                }}>
                <p
                    style={{ textAlign: 'center' }}>
                    Choose Your Difficulty</p>
                <ButtonGroup
                    variant="contained"
                    color="primary"
                    aria-label="contained primary button group">
                    <Button>Easy</Button>
                    <Button>Medium</Button>
                    <Button>Hard</Button>
                </ButtonGroup>
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
            </Box>
        </Fragment>
    )

}

export default Home;