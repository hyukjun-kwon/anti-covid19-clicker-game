import React, { useContext } from 'react';
import Button from '@material-ui/core/Button';
import ClickBtn from '../../../Images/clicker.png';
import PandemicContext from '../../../contexts/PandemicContext';
import { makeStyles } from '@material-ui/core/styles';

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
        height: '200px',
        width: 'auto',
        borderRadius: '50%'
    },
    ClickerBtn: {
        position: 'absolute',
        left: '49.7%',
        top: '45%',
        transform: 'translate(-50%, -50%)'
    }
}));

function Clicker({ setPandemic }) {
    const classes = useStyles();
    const pandemic = useContext(PandemicContext);
    const handleClick = event => {
        event.preventDefault();
        setPandemic({
            ...pandemic,
            cured: pandemic.cured + 5,
            infected: pandemic.infected - 5,
        })
    }
    return (
        <Button className={classes.ClickerBtn} onClick={handleClick}>
            <img className={classes.Clicker} src={ClickBtn} alt='clickerbtn'></img>
        </Button>
    )
}

export default Clicker;