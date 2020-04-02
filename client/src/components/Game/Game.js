import React, { Fragment, useState } from 'react';
import Container from '@material-ui/core/Container';
import Upgrades from './Upgrades/Upgrades';
import NavBar from './Navigation/NavBar';
import Main from './Main/Main';
import PandemicContext from '../../contexts/PandemicContext';

function Game() {
    const [pandemic, setPandemic] = useState({
        infected: 5000,
        infectionRate: 1.05,
        cured: 0,
        dead: 0,
        funding: 2500
    })

    return (
        <Fragment>
            <NavBar />
            <PandemicContext.Provider value={pandemic}>
                <Container>
                    <Container>
                        <Main setPandemic={setPandemic} />
                    </Container>
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                    <Container>
                        <Upgrades setPandemic={setPandemic} />
                    </Container>
                </Container>
            </PandemicContext.Provider>
        </Fragment>


    )
}
export default Game;