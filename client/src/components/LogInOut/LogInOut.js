import React from 'react';
import Button from '@material-ui/core/button';
import Box from '@material-ui/core/box';
import './LogInOut.css';
import '../../../src/index.css';


function LogInOut() {
    return (
        <div>
            <Box
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '40%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <h1 
                style={{
                    color: 'gold'
                }}>COVID-19</h1>
            </Box>
            <Box style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="white"
                    style={{
                        position: 'static, center',
                        marginBottom: '10%',
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        border: 0,
                        borderRadius: 40,
                        width: 'static',
                        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
                        color: 'white'
                    }}>
                    Log In with Google+
                </Button>
            </Box>
        </div>
    );
}

export default LogInOut;