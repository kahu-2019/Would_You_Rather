import React from "react";
import Game from "./Game";
import { connect } from "tls";

const App = () => (
  <div className="app">
    <h1>Hello world!</h1>
    <Game />
  </div>
);
const mapStateToProps = state => {
  return {
    gameState: state.gameState
  }
}

export default connect(mapStateToProps)(App)
