import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import ClickBtn from '../../../Images/clicker.png';

import { usePandemicContext } from '../../../contexts/PandemicContext';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    HowTo: {
        position: 'absolute',
        left: '50%',
        top: '42%',
        transform: 'translate(-50%, -50%)',
        marginBottom: '10%',
        width: 'auto'
    },
    Clicker: {
        height: '150px',
        width: 'auto',
        borderRadius: '50%'
    },
    ClickerBtn: {
        position: 'absolute',
        left: '49.7%',
        top: '25%',
        transform: 'translate(-50%, -50%)'
    },
}));

function Clicker() {
    const [state, dispatch] = usePandemicContext();
    const classes = useStyles();
    const [isButtonDisabled,setIsButtonDisabled] = useState(false)
    const clickHandler = event => {
        setIsButtonDisabled(true);
        setTimeout(() => setIsButtonDisabled(false), 3000);
    }

    return (
        <Button disabled={isButtonDisabled} className={classes.ClickerBtn} onClick={() => {dispatch({ type: "CLICK" }); clickHandler()}}>
            {/* <img className={classes.Clicker} src={ClickBtn} alt='clickerbtn'></img> */}
            {isButtonDisabled ? <i className="fas fa-syringe" style={{fontSize:100, color:"grey"}}></i> : <i className="fas fa-syringe" style={{fontSize:100, color:"red"}}></i>}
        </Button>
    )
}

export default Clicker;