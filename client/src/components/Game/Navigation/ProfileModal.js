import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

import MenuItem from "@material-ui/core/MenuItem";

import { usePandemicContext } from "../../../contexts/PandemicContext";

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
}));

function ProfileModal() {
  const [state, dispatch] = usePandemicContext();
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
        Profile
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
            <h2 id="transition-modal-title">
              Username: {state.player.username}
            </h2>
            <p id="transition-modal-description">
              Here are your stats from previous games.
            </p>{" "}
            <hr />
            <ul>
              <li>
                Easy:{" "}
                {state.player.easyscore
                  ? state.player.easyscore
                  : "Never attempted"}
              </li>
              <li>
                Medium:{" "}
                {state.player.mediumscore
                  ? state.player.mediumscore
                  : "Never attempted"}
              </li>
              <li>
                Hard:{" "}
                {state.player.hardscore
                  ? state.player.hardscore
                  : "Never attempted"}
              </li>
            </ul>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default ProfileModal;
