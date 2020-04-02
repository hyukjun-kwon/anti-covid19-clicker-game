import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ClickBtn from '../../../Images/clicker.png';
import PandemicContext from '../../../contexts/PandemicContext'

function Clicker( { setPandemic } ) {
    const pandemic = useContext(PandemicContext);
    const handleClick = event => {
        event.preventDefault();
        setPandemic({
            ...pandemic,
            cured: pandemic.cured+5,
            infected: pandemic.infected-5,
        })
    }
    return (
        <Button 
            style={{
                position: 'absolute',
                left: '49.7%',
                top: '45%',
                transform: 'translate(-50%, -50%)'
        }} onClick={handleClick}>
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