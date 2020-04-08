import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
  p: {
    marginBottom: theme.spacing(-2),
  },
}));

export default function Progress({ description }) {
  const classes = useStyles();
  const style = {
    margin: "0px",
  };

  return (
    <div style={style} className={classes.root}>
      <p className={classes.p}>{description.level}</p>
      <p className={classes.p}>{description.effect}</p>
      <p className={classes.p}>{description.profit}</p>
    </div>
  );
}
