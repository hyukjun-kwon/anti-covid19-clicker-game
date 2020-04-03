import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import MenuItem from '@material-ui/core/MenuItem';

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
  },
}));

function HowToPlayModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <MenuItem type="button" onClick={handleOpen}>
        How To Play
      </MenuItem>
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
            <h2 id="transition-modal-title">How To Play</h2>
            <p id="transition-modal-description">Here is how to play the game<hr />
              <ul>
                <li>Click on Virus to create Vaccines</li>
                <li>Accumulate vaccines to cure the sick</li>
                <li>With every cured patient, you earn money</li>
                <li>Use the money you earn to buy upgrades to help manage the pandemic</li>
              </ul></p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default HowToPlayModal;