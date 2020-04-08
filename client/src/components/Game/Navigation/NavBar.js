import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "../../../index.css";

import Menu from "./Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginRight: 57,
    color: "white",
    fontFamily: "Bangers, cursive",
    textShadow: "4px 3px 0px #5E7BD6, 2px 2px 2px rgba(227,239,24,0)",
    fontSize: "20pt",
  },
}));

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Menu />
          <Typography variant="h6" className={classes.title} align="center">
            Anti-COVID19
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;
