import React from "react";
import { useApp } from "./useApp";
import {
  dragDrop,
  dragEnd,
  dragStart,
} from "./constantsAndFunctions/dragFunctionality";
import Scoreboard from "./components/scoreboard";

const App = () => {
  const {
    showScore,
    currentColorArrangement,
    setDraggedSquare,
    setReplacedSquare,
    draggedSquare,
    replacedSquare,
    setCurrentColorArrangement,
  } = useApp();

  const dEnd = (event) =>
    dragEnd(
      event,
      draggedSquare,
      replacedSquare,
      currentColorArrangement,
      setDraggedSquare,
      setReplacedSquare,
      setCurrentColorArrangement
    );

  return (
    <div className="app">
      <Scoreboard score={showScore} />
      <div className="game">
        {currentColorArrangement.map((candyColor, index) => (
          <img
            src={candyColor}
            key={index}
            alt={candyColor}
            data-id={index}
            draggable={true}
            onDragStart={(event) => dragStart(event, setDraggedSquare)}
            onDragOver={(event) => {
              event.preventDefault();
            }}
            onDragEnter={(event) => {
              event.preventDefault();
            }}
            onDragLeave={(event) => {
              event.preventDefault();
            }}
            onDrop={(event) => dragDrop(event, setReplacedSquare)}
            onDragEnd={dEnd}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
