import React from 'react';
import Button from '@material-ui/core/Button';
import ClickBtn from '../../Images/clicker.png';

function Clicker() {
    return (
        <Button 
            style={{
                position: 'absolute',
                left: '49.7%',
                top: '45%',
                transform: 'translate(-50%, -50%)'
        }}>
            <img 
            src={ClickBtn} 
            alt='clickerbtn'
            style={{
                height: '300px',
                width: 'auto',
                borderRadius: '50%'
            }}>
            </img>
        </Button>
    )
}

export default Clicker;