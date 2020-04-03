import React, { Fragment, useState } from 'react';
import Container from '@material-ui/core/Container';
import Upgrades from './Upgrades/Upgrades';
import NavBar from './Navigation/NavBar';
import Main from './Main/Main';

function Game( {setPandemic}) {


    return (
        <Fragment>
            <NavBar />
             <Container>
                    <Container>
                        <Main setPandemic={setPandemic}/>
                    </Container>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <Container>
                        <Upgrades />
                    </Container>
                </Container>
        </Fragment>


    )
}
export default Game;