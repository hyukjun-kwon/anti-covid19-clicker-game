import React, { Fragment } from 'react';
import Upgrades from './Upgrades';
import NavBar from './NavBar';
import Main from './Main';
import HowToPlayModal from './HowToPlayModal';

function Game() {
    return (
        <Fragment>
            <NavBar />
            <Main />
            <Upgrades />
        </Fragment>


    )
}
export default Game;