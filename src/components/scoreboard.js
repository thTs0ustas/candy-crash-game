import React from "react";
import "./scoreboard.css";
import PropTypes from "prop-types";

const Scoreboard = ({ score }) => {
  return (
    <div className="score-board">
      <h2>{score}</h2>
    </div>
  );
};

Scoreboard.propTypes = {
  score: PropTypes.number,
};
export default Scoreboard;
