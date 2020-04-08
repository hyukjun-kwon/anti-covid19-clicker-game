import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";
import HowToPlay from "../HowToPlay/HowToPlay";

import NavBar from "../Game/Navigation/NavBar";
import Login from "../LogIn/LogIn";

import { usePandemicContext } from "../../contexts/PandemicContext";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  ChooseDifficulty: {
    textAlign: "center",
    color: "white",
    fontFamily: "Bangers, cursive",
    textShadow: "4px 3px 0px #5E7BD6, 2px 2px 2px rgba(227,239,24,0)",
    fontSize: "16pt",
    letterSpacing: "3px",
  },
  DifficultyBtns: {
    position: "absolute",
    left: "50%",
    top: "75%",
    transform: "translate(-50%, -50%)",
    letterSpacing: "5px",
  },
  Buttons: {
    color: "white",
    fontFamily: "Bangers, cursive",
    textShadow: "4px 3px 0px #5E7BD6, 2px 2px 2px rgba(227,239,24,0)",
    fontSize: "14pt",
    letterSpacing: "5px",
  },
  PlayBtn: {
    position: "absolute",
    left: "50%",
    top: "140%",
    transform: "translate(-50%, -50%)",
    marginBottom: "10%",
    color: "white",
    fontFamily: "Bangers, cursive",
    textShadow: "4px 3px 0px #5E7BD6, 2px 2px 2px rgba(227,239,24,0)",
    fontSize: "14pt",
    letterSpacing: "5px",
  },
}));

function Home() {
  const [state, dispatch] = usePandemicContext();

  const classes = useStyles();
  if (state.token === null) {
    return <Login />;
  } else {
    return (
      <Fragment>
        <NavBar />
        <HowToPlay />
        <Box className={classes.DifficultyBtns}>
          <p className={classes.ChooseDifficulty}>Choose Your Difficulty</p>
          <ButtonGroup
            variant="contained"
            color="primary"
            aria-label="contained primary button group"
          >
            <Button
              className={classes.Buttons}
              onClick={() => dispatch({ type: "SET_EASY_DIFFICULTY" })}
            >
              Easy
            </Button>
            <Button
              className={classes.Buttons}
              onClick={() => dispatch({ type: "SET_MEDIUM_DIFFICULTY" })}
            >
              Medium
            </Button>
            <Button
              className={classes.Buttons}
              onClick={() => dispatch({ type: "SET_HARD_DIFFICULTY" })}
            >
              Hard
            </Button>
          </ButtonGroup>
          <Link to="/game">
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.PlayBtn}
            >
              PLAY
            </Button>
          </Link>
        </Box>
      </Fragment>
    );
  }
}

export default Home;
