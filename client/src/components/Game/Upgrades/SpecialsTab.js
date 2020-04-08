import React, { Fragment } from "react";

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
  red: {
    color: theme.palette.getContrastText(red[500]),
    backgroundColor: red[500],
    fontFamily: "Bangers, cursive",
  },
  green: {
    color: theme.palette.getContrastText(green[500]),
    backgroundColor: green[500],
    fontFamily: "Bangers, cursive",
  },
}));

const style = {
  height: 80,
};

const label = {
  textAlign: "center",
};

const styles = {
  height: 300,
  overflowY: "auto",
};

export default function SpecialsTab() {
  const classes = avatarStyles();
  const [state, dispatch] = usePandemicContext();

  return (
    <Fragment>
      <Paper style={styles}>
        <Grid item xs={12} style={label}>
          <b>All special upgrades triples the number of cures</b>
        </Grid>
        <Grid item xs={12}>
          <Paper style={style} className={classes.paper}>
            <div className={classes.root}>
              <button
                disabled={
                  state.clicker.level < 5 ||
                  state.clicker.special1 ||
                  state.status.fund < 50000
                }
                onClick={() => dispatch({ type: "CLICKER_SPECIAL1_UPGRADE" })}
              >
                {state.clicker.level < 5 ||
                state.clicker.special1 ||
                state.status.fund < 50000 ? (
                  <Avatar className={classes.red}>C-1</Avatar>
                ) : (
                  <Avatar className={classes.green}>C-1</Avatar>
                )}
              </button>
              <p>
                <b>Clicker Special 1</b>
                <br />
                (Req: Lv. 5, $50K)
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={style} className={classes.paper}>
            <div className={classes.root}>
              <button
                disabled={
                  state.clicker.level < 15 ||
                  !state.clicker.special1 ||
                  state.clicker.special2 ||
                  state.status.fund < 500000
                }
                onClick={() => dispatch({ type: "CLICKER_SPECIAL2_UPGRADE" })}
              >
                {state.clicker.level < 15 ||
                !state.clicker.special1 ||
                state.clicker.special2 ||
                state.status.fund < 500000 ? (
                  <Avatar className={classes.red}>C-2</Avatar>
                ) : (
                  <Avatar className={classes.green}>C-2</Avatar>
                )}
              </button>
              <p>
                <b>Clicker Special 2</b>
                <br />
                (Req: Lv. 15, $500K)
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={style} className={classes.paper}>
            <div className={classes.root}>
              <button
                disabled={
                  state.clicker.level < 25 ||
                  !state.clicker.special1 ||
                  !state.clicker.special2 ||
                  state.clicker.special3 ||
                  state.status.fund < 5000000
                }
                onClick={() => dispatch({ type: "CLICKER_SPECIAL3_UPGRADE" })}
              >
                {state.clicker.level < 25 ||
                !state.clicker.special1 ||
                !state.clicker.special2 ||
                state.clicker.special3 ||
                state.status.fund < 5000000 ? (
                  <Avatar className={classes.red}>C-3</Avatar>
                ) : (
                  <Avatar className={classes.green}>C-3</Avatar>
                )}
              </button>
              <p>
                <b>Clicker Special 3</b>
                <br />
                (Req: Lv. 25, $5M)
              </p>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper style={style} className={classes.paper}>
            <div className={classes.root}>
              <button
                disabled={
                  state.pharmacy.level < 5 ||
                  state.pharmacy.special1 ||
                  state.status.fund < 200000
                }
                onClick={() => dispatch({ type: "PHARMACY_SPECIAL1_UPGRADE" })}
              >
                {state.pharmacy.level < 5 ||
                state.pharmacy.special1 ||
                state.status.fund < 200000 ? (
                  <Avatar className={classes.red}>P-1</Avatar>
                ) : (
                  <Avatar className={classes.green}>P-1</Avatar>
                )}
              </button>
              <p>
                <b>Pharmacy Special 1</b>
                <br />
                (Req: Lv. 5, $200K)
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={style} className={classes.paper}>
            <div className={classes.root}>
              <button
                disabled={
                  state.pharmacy.level < 15 ||
                  !state.pharmacy.special1 ||
                  state.pharmacy.special2 ||
                  state.status.fund < 5000000
                }
                onClick={() => dispatch({ type: "PHARMACY_SPECIAL2_UPGRADE" })}
              >
                {state.pharmacy.level < 15 ||
                !state.pharmacy.special1 ||
                state.pharmacy.special2 ||
                state.status.fund < 5000000 ? (
                  <Avatar className={classes.red}>P-2</Avatar>
                ) : (
                  <Avatar className={classes.green}>P-2</Avatar>
                )}
              </button>
              <p>
                <b>Pharmacy Special 2</b>
                <br />
                (Req: Lv. 15, $5M)
              </p>
            </div>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper style={style} className={classes.paper}>
            <div className={classes.root}>
              <button
                disabled={
                  state.laboratory.level < 3 ||
                  state.laboratory.special1 ||
                  state.status.fund < 2000000
                }
                onClick={() =>
                  dispatch({ type: "LABORATORY_SPECIAL1_UPGRADE" })
                }
              >
                {state.laboratory.level < 3 ||
                state.laboratory.special1 ||
                state.status.fund < 2000000 ? (
                  <Avatar className={classes.red}>L-1</Avatar>
                ) : (
                  <Avatar className={classes.green}>L-1</Avatar>
                )}
              </button>
              <p>
                <b>Laboratory Special 1</b>
                <br />
                (Req: Lv. 3, $2M)
              </p>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper style={style} className={classes.paper}>
            <div className={classes.root}>
              <button
                disabled={
                  state.laboratory.level < 6 ||
                  !state.laboratory.special1 ||
                  state.laboratory.special2 ||
                  state.status.fund < 10000000
                }
                onClick={() =>
                  dispatch({ type: "LABORATORY_SPECIAL2_UPGRADE" })
                }
              >
                {state.laboratory.level < 6 ||
                !state.laboratory.special1 ||
                state.laboratory.special2 ||
                state.status.fund < 10000000 ? (
                  <Avatar className={classes.red}>L-2</Avatar>
                ) : (
                  <Avatar className={classes.green}>L-2</Avatar>
                )}
              </button>
              <p>
                <b>Laboratory Special 2</b>
                <br />
                (Req: Lv. 6, $10M)
              </p>
            </div>
          </Paper>
        </Grid>
      </Paper>
    </Fragment>
  );
}
