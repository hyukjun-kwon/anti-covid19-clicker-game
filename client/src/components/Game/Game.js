import React, { Fragment } from 'react';

import Container from '@material-ui/core/Container';

import Upgrades from './Upgrades/Upgrades';
import NavBar from './Navigation/NavBar';
import Results from '../Results/Results';
import Main from './Main/Main';
import Home from '../Home/Home';
import { usePandemicContext } from '../../contexts/PandemicContext';
function Game() {
    const [state, dispatch] = usePandemicContext();

    if(state.token === null) {
        return (
            <Home />
        )
    }

    if(state.isComplete) {
        return (
            <Fragment>
                <Results />
            </Fragment>
        )
    }
    return (
        <Fragment>
            <NavBar />
            <Container>
                {/* <Container> */}
                    <Main />
                {/* </Container> */}
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </Container>
            <Upgrades />
        </Fragment>
    )
}
export default Game;