import React, { Fragment } from "react";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Upgrades from "./Upgrades/Upgrades";
import NavBar from "./Navigation/NavBar";
import Results from "../Results/Results";
import Main from "./Main/Main";

import { usePandemicContext } from "../../contexts/PandemicContext";
function Game() {
  const [state, dispatch] = usePandemicContext();

  if (state.token === null) {
    return (
        <Redirect to="/" />
    );
  }

  if (state.isComplete) {
    return (
      <Fragment>
        <Results />
      </Fragment>
    );
  }
  return (
    <Fragment>
      <NavBar />
      <Container>
        <Main />
      </Container>
      <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {/* <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br /> */}
      <Upgrades />
    </Fragment>
  );
}
export default Game;
