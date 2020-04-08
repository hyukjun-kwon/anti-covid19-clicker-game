import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  HowTo: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    height: "300px",
    overflow: "auto",
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

  const facilities = {
    fontWeight: "bold",
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
          <div className={classes.HowTo}>
            {/* <h2 id="transition-modal-title">How To Play</h2>
            <p id="transition-modal-description">Here is how to play the game<hr />
              <ul>
                <li>Use clicker to create vaccines</li>
                <li>Each vaccine cures the 1 infected</li>
                <li>With every cured patient, you earn money</li>
                <li>Use the money you earn to buy upgrades to help manage the pandemic</li>
              </ul></p> */}
            <h2 id="transition-modal-title">How To Play Anti-COVID19</h2>
            <hr />
            <h3 id="transition-modal-title">Game Conditions:</h3>
            <p id="transition-modal-description">
              Cure all infected people to win. If the number of infected reaches
              1 billion, you lose!
            </p>
            <hr />
            <h3 id="transition-modal-title">Clicker:</h3>
            <p id="transition-modal-description">
              Each click will cure a certain amount of infected and send funds
              to you in return. Upgarding the clicker will generate more
              vaccines and money with each click.
            </p>
            <hr />
            <h3 id="transition-modal-title">Facilities:</h3>
            <p id="transition-modal-description">
              Each facility has its own unique perks to fight off the virus.
              Upgrading the facilities will enhance their perks.
            </p>
            <p id="transition-modal-description">
              <span style={facilities}>Pharmacy:</span> The Pharmacy grants a
              certain amount of vaccines every 5 seconds.
            </p>
            <p id="transition-modal-description">
              <span style={facilities}>Laboratory:</span> The Lab grants a
              certain amount of vaccines every 10 seconds.
            </p>
            <p id="transition-modal-description">
              <span style={facilities}>Clinic:</span> The Clinic will reduce the
              deaths from the virus.
            </p>
            <p id="transition-modal-description">
              <span style={facilities}>Drive-Thru Testing:</span> Drive-Thru
              Testing will reduce the rate of spread of the virus.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default HowToPlayModal;
