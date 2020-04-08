import React, { useState } from "react";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { usePandemicContext } from "../../../contexts/PandemicContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  HowTo: {
    position: "absolute",
    left: "50%",
    top: "42%",
    transform: "translate(-50%, -50%)",
    marginBottom: "10%",
    width: "auto",
  },
  Clicker: {
    height: "150px",
    width: "auto",
    borderRadius: "50%",
  },
  ClickerBtn: {
    position: "absolute",
    left: "49.7%",
    top: "28%",
    transform: "translate(-50%, -50%)",
  },
}));

function Clicker() {
  const [state, dispatch] = usePandemicContext();
  const classes = useStyles();
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const clickHandler = (event) => {
    setIsButtonDisabled(true);
    setTimeout(() => setIsButtonDisabled(false), 1500);
  };

  return (
    <Button
      disabled={isButtonDisabled}
      className={classes.ClickerBtn}
      onClick={() => {
        dispatch({ type: "CLICK" });
        clickHandler();
      }}
    >
      {isButtonDisabled ? (
        <i
          className="fas fa-syringe"
          style={{ fontSize: 100, color: "red" }}
        ></i>
      ) : (
        <i
          className="fas fa-syringe"
          style={{ fontSize: 100, color: "green" }}
        ></i>
      )}
    </Button>
  );
}

export default Clicker;
