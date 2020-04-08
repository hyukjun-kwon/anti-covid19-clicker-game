import React, { Fragment, useState } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { red, green } from "@material-ui/core/colors";

import { usePandemicContext } from "../../../contexts/PandemicContext";
import numAbb from "../../../utils/numberAbbreviate";

const avatarStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  green: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    fontFamily: "Bangers, cursive",
  },
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    fontFamily: "Bangers, cursive",
  },
}));

const style = {
  height: 70,
};

const styles = {
  height: 300,
  overflowY: "auto",
};

export default function LevelUpTab() {
  const classes = avatarStyles();
  const [state, dispatch] = usePandemicContext();

  return (
    <Fragment>
      <Paper style={styles}>
        <Grid item xs={12}>
          <Paper style={style} className={classes.paper}>
            <div className={classes.root}>
              <button
                disabled={
                  state.clicker.level === 30 ||
                  state.status.fund < state.clicker.cost
                }
                onClick={() => {
                  dispatch({ type: "CLICKER_LEVEL_UP" });
                }}
              >
                {state.clicker.level === 30 ||
                state.status.fund < state.clicker.cost ? (
                  <Avatar className={classes.red}>C</Avatar>
                ) : (
                  <Avatar className={classes.green}>C</Avatar>
                )}
              </button>
              <p>
                <b>Clicker</b> Next level:{" "}
                {state.clicker.level === 30 ? "Max" : state.clicker.level + 1}
                <br />
                Cost: ${numAbb(state.clicker.cost)}
              </p>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper style={style} className={classes.paper}>
            <div className={classes.root}>
              <button
                disabled={
                  state.pharmacy.level === 20 ||
                  state.status.fund < state.pharmacy.cost
                }
                onClick={() => {
                  dispatch({ type: "PHARMACY_LEVEL_UP" });
                }}
              >
                {state.pharmacy.level === 20 ||
                state.status.fund < state.pharmacy.cost ? (
                  <Avatar className={classes.red}>P</Avatar>
                ) : (
                  <Avatar className={classes.green}>P</Avatar>
                )}
              </button>
              <p>
                <b>Pharmacy</b> Next level:{" "}
                {state.pharmacy.level === 20 ? "Max" : state.pharmacy.level + 1}{" "}
                <br />
                Cost: ${numAbb(state.pharmacy.cost)}
              </p>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper style={style} className={classes.paper}>
            <div className={classes.root}>
              <button
                disabled={
                  state.laboratory.level === 10 ||
                  state.status.fund < state.laboratory.cost
                }
                onClick={() => {
                  dispatch({ type: "LABORATORY_LEVEL_UP" });
                }}
              >
                {state.laboratory.level === 10 ||
                state.status.fund < state.laboratory.cost ? (
                  <Avatar className={classes.red}>L</Avatar>
                ) : (
                  <Avatar className={classes.green}>L</Avatar>
                )}
              </button>
              <p>
                <b>Laboratory</b> Next level:{" "}
                {state.laboratory.level === 10
                  ? "Max"
                  : state.laboratory.level + 1}
                <br />
                Cost: ${numAbb(state.laboratory.cost)}
              </p>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper style={style} className={classes.paper}>
            <div className={classes.root}>
              <button
                disabled={
                  state.hospital.level === 3 ||
                  state.status.fund < state.hospital.cost
                }
                onClick={() => {
                  dispatch({ type: "HOSPITAL_LEVEL_UP" });
                }}
              >
                {state.hospital.level === 3 ||
                state.status.fund < state.hospital.cost ? (
                  <Avatar className={classes.red}>H</Avatar>
                ) : (
                  <Avatar className={classes.green}>H</Avatar>
                )}
              </button>
              <p>
                <b>Hospital</b> Next level:{" "}
                {state.hospital.level === 3 ? "Max" : state.hospital.level + 1}
                <br />
                Cost: ${numAbb(state.hospital.cost)}
              </p>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper style={style} className={classes.paper}>
            <div className={classes.root}>
              <button
                disabled={
                  state.drivethru.level === 5 ||
                  state.status.fund < state.drivethru.cost
                }
                onClick={() => {
                  dispatch({ type: "DRIVE_THRU_LEVEL_UP" });
                }}
              >
                {state.drivethru.level === 5 ||
                state.status.fund < state.drivethru.cost ? (
                  <Avatar className={classes.red}>D</Avatar>
                ) : (
                  <Avatar className={classes.green}>D</Avatar>
                )}
              </button>
              <p>
                <b>Drive-thru</b> Next level:{" "}
                {state.drivethru.level === 5
                  ? "Max"
                  : state.drivethru.level + 1}
                <br />
                Cost: ${numAbb(state.drivethru.cost)}
              </p>
            </div>
          </Paper>
        </Grid>
      </Paper>
    </Fragment>
  );
}
