import React, { Fragment } from 'react';
import { Box } from '@material-ui/core';
import Clicker from './Clicker';

function Main() {
    return (
        <Fragment>
            <Box
                style={{
                    border: 'white 2px solid',
                    width: '13%',
                    background: 'black',
                    color: 'white',
                    textAlign: 'center',
                    float: 'left',
                    padding: '3px',
                    marginTop: '15px',
                    marginBottom: '15px',
                    marginLeft: '390px'
                }}>
                <p>Vaccines: #vaccines </p>
            </Box>
            <Box
                style={{
                    border: 'white 2px solid',
                    width: '13%',
                    background: 'black',
                    color: 'white',
                    textAlign: 'center',
                    float: 'left',
                    padding: '3px',
                    marginTop: '15px',
                    marginBottom: '15px',
                    marginLeft: '30px'
                }}>
                <p>Infected: #infected </p>
            </Box>
            <Box
                style={{
                    border: 'white 2px solid',
                    width: '13%',
                    background: 'black',
                    float: 'left',
                    color: 'white',
                    textAlign: 'center',
                    padding: '3px',
                    marginTop: '15px',
                    marginLeft: '30px'
                }}>
                <p>Dead: #dead </p>
            </Box>
            <Box
                style={{
                    border: 'white 2px solid',
                    width: '13%',
                    background: 'black',
                    color: 'white',
                    textAlign: 'center',
                    float: 'left',
                    padding: '3px',
                    marginTop: '15px',
                    marginLeft: '30px'
                }}>
                <p>Money: #money </p>
            </Box>
            <Clicker />
        </Fragment>

    )
}

export default Main;