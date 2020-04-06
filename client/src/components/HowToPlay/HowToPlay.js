import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        height: '300px',
        overflow: 'auto'

    },
  HowTo: {
         position: 'absolute',
         left: '50%',
         top: '42%',
         transform: 'translate(-50%, -50%)',
         marginBottom: '10%',
         width: 'auto'
    },
}));

export default function HowToPlay() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const facilities = {
        fontWeight: 'bold'
    }

    return (
        <div>
            <Button
                fullWidth
                variant="contained"
                color="primary" type="button"  className={classes.HowTo} onClick={handleOpen}>
                How To Play
      </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h1 id="transition-modal-title">How To Play Anti-COVID19</h1>
                        <hr />
                        <h2 id="transition-modal-title">Game Conditions:</h2>
                        <p id="transition-modal-description">Cure all infected people to win. If the number of infected reaches 1 billion, you lose!</p>
                        <hr />
                        <h1 id="transition-modal-title">Upgrades</h1>
                        <hr />
                        <h2 id="transition-modal-title">Clicker:</h2>
                        <p id="transition-modal-description">Each click of the clicker will cure a certain amount of infected and send funds to you in return.</p>
                        <hr />
                        <h2 id="transition-modal-title">Facilities:</h2>
                        <p id="transition-modal-description">Each facility has its own unique perks to fight off the virus. Each with the ability to upgrade to higher levels to better fight off the virus.</p>
                        <p id="transition-modal-description"><span style={facilities}>Pharmacy:</span> The Pharmacy will grant 50 vaccines reducing the number of infected every 30 seconds.</p>
                        <p id="transition-modal-description"><span style={facilities}>Laboratory:</span> The Lab will grant 500 vaccines every 3 minutes.</p>
                        <p id="transition-modal-description"><span style={facilities}>Clinic:</span> The Clinic will reduce the deaths from the virus.</p>
                        <p id="transition-modal-description"><span style={facilities}>Drive-Thru Testing:</span> Drive-Thru Testing will reduce the rate of spread of the virus.</p>

                    </div>
                </Fade>
            </Modal>
        </div>
    );
}