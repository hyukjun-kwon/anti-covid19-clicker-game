import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { usePandemicContext } from "../../../contexts/PandemicContext";
import numAbb from "../../../utils/numberAbbreviate";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Bangers, cursive",
  },
  money: {
    letterSpacing: "5px",
    fontFamily: "Bangers, cursive",
    fontSize: "16pt",
  },
}));

export default function Header() {
  const [state, dispatch] = usePandemicContext();
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Upgrades
          </Typography>
          <p color="inherit" className={classes.money}>
            ${numAbb(state.status.fund)}
          </p>
        </Toolbar>
      </AppBar>
    </div>
  );
}
