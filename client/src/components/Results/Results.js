import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { usePandemicContext } from "../../contexts/PandemicContext";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: theme.spacing(35),
      height: theme.spacing(15),
      paddingTop: theme.spacing(3),
    },
    position: "absolute",
    left: "50%",
    // marginLeft: 'auto',
    // marginRight: 'auto',
    top: "45%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    fontSize: "14pt",
  },
  button: {
    width: "100px",
    height: "25px",
    padding: 0,
    marginTop: "20px",
  },
}));

const Results = () => {
  const classes = useStyles();
  const [state, dispatch] = usePandemicContext();

  const calculateScore = () => {
    let score = 7800000000 - state.status.death;
    if (score < 0) {
      score = 0;
    }

    return score;
  };

  if (state.won) {
    switch (state.difficulty) {
      case "easy":
        API.easyScore({
          score: calculateScore(),
          token: state.token,
          player: state.player,
        });
        break;
      case "medium":
        API.mediumScore({
          score: calculateScore() * 3,
          token: state.token,
          player: state.player,
        });
        break;
      case "hard":
        API.hardScore({
          score: calculateScore() * 5,
          token: state.token,
          player: state.player,
        });
        break;
      case "default":
        break;
    }
  }

  return state.won ? WinPage() : LosePage();
};

function WinPage() {
  const [state, dispatch] = usePandemicContext();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper elevation={3}>
        Congratulations! <br />
        <br />
        You have defeated COVID-19!
        <Link to="/">
          <Button
            type="submit"
            onClick={dispatch("REINITIALIZE")}
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Exit
          </Button>
        </Link>
      </Paper>
    </div>
  );
}

function LosePage() {
  const [state, dispatch] = usePandemicContext();
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.results} elevation={3}>
        Loser! <br />
        <br />
        You are Fired!
        <br />
        <Link to="/">
          <Button
            type="submit"
            onClick={dispatch("REINITIALIZE")}
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Exit
          </Button>
        </Link>
      </Paper>
    </div>
  );
}

export default Results;
