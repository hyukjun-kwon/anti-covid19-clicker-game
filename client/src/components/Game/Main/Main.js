import React, { Fragment, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";

import Clicker from "./Clicker";

import { usePandemicContext } from "../../../contexts/PandemicContext";
import numAbb from "../../../utils/numberAbbreviate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  Box: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontFamily: "Bangers, cursive",
    fontSize: 25,
  },
  text: {
    color: "red",
    fontFamily: "Helvetica",
  },
}));

function Main() {
  const [state, dispatch] = usePandemicContext();
  const classes = useStyles();

  if (state.status.infected === 0) {
    dispatch({ type: "WIN" });
  }

  if (state.status.infected >= 1000000000 || state.status.death > 7800000000) {
    dispatch({ type: "LOST" });
  }

  useEffect(() => {
    const timer = setInterval(() => dispatch({ type: "TICK" }), 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <Box className={classes.Box}>
            <p>Infected: </p>
            <span className={classes.text}>
              {numAbb(state.status.infected)}
            </span>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.Box}>
            <p>Deceased: </p>
            <span className={classes.text}>{numAbb(state.status.death)}</span>
          </Box>
        </Grid>
      </Grid>
      <Clicker />
    </div>
  );
}

export default Main;
