import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

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
    height: "550px",
    overflow: "auto",
  },
  HowTo: {
    position: "absolute",
    left: "50%",
    top: "42%",
    transform: "translate(-50%, -50%)",
    marginBottom: "10%",
    width: "auto",
    fontFamily: "Bangers, cursive",
    textShadow: "4px 3px 0px #5E7BD6, 2px 2px 2px rgba(227,239,24,0)",
    fontSize: "14pt",
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
    fontWeight: "bold",
  };

  return (
    <div>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        type="button"
        className={classes.HowTo}
        onClick={handleOpen}
      >
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
            <h2 id="transition-modal-title">How To Play Anti-COVID19</h2>
            <hr />
            <h3 id="transition-modal-title">Back Story:</h3>
            <p id="transition-modal-description">
              In late 2019, the human race was faced with an unseen foe that is
              COVID-19, causing a widespread of peolpe lining up in grocery
              stores to snag the last rolls of toilet paper. Now in the late
              first quarter of 2020, the virus has forced people to lock
              themselves indoors as toilet paper rations begin to run low. It is
              up to you to stop this menacing invisible foe and get these
              civilized people back to their toilet paper!
            </p>
            <hr />
            <h3 id="transition-modal-title">Game Conditions:</h3>
            <p id="transition-modal-description">
              Every click will cure one infected and will return a sum of cash
              that can be used on Upgrades. To win, you must strategically use
              your allowance of cash on upgrades, which all have their own
              unique perks to help destory COVID-19 once and for all. Once all
              infected people are cured, we can all go back out to grab more
              toilet paper worry-free. But if the number of infected reaches 1
              billion, you lose!
            </p>
            <hr />
            <h3 id="transition-modal-title">Clicker:</h3>
            <p id="transition-modal-description">
              Each click of the clicker will cure a certain amount of infected
              and send funds to you in return.
            </p>
            <hr />
            <h3 id="transition-modal-title">Facilities:</h3>
            <p id="transition-modal-description">
              Each facility has its own unique perks to fight off the virus.
              Each with the ability to upgrade to higher levels to better fight
              off the virus.
            </p>
            <p id="transition-modal-description">
              <span style={facilities}>Pharmacy:</span> The Pharmacy will cure a
              certain amount of infected every 5 seconds.
            </p>
            <p id="transition-modal-description">
              <span style={facilities}>Laboratory:</span> The Lab will cure a
              certaom amount of infected every 10 seconds.
            </p>
            <p id="transition-modal-description">
              <span style={facilities}>Hospital:</span> The Hospital will reduce
              the deaths from the virus.
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
