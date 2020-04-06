import React, { Fragment } from 'react';

import Container from '@material-ui/core/Container';

import Upgrades from './Upgrades/Upgrades';
import NavBar from './Navigation/NavBar';
import Main from './Main/Main';

function Game() {

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