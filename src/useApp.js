import { useEffect, useState } from "react";
import {
  moveIntoSquareBelow,
  resolvePuzzle,
} from "./constantsAndFunctions/recreateBoard";
import { createBoard } from "./constantsAndFunctions/drawnBoard";
import blank from "./images/blank.png";

export const useApp = () => {
  const [currentColorArrangement, setCurrentColorArrangement] = useState([]);
  const [draggedSquare, setDraggedSquare] = useState(null);
  const [replacedSquare, setReplacedSquare] = useState(null);
  const [showScore, setShowScore] = useState(0);

  useEffect(() => {
    createBoard(setCurrentColorArrangement);
  }, []);

  useEffect(() => {
    resolvePuzzle(currentColorArrangement, setShowScore);
  }, [replacedSquare]);

  useEffect(() => {
    const timer = setInterval(() => {
      let resolved = resolvePuzzle(currentColorArrangement);
      resolved.forEach((index) => {
        currentColorArrangement[index] = blank;
      });

      moveIntoSquareBelow(currentColorArrangement);
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 100);
    return () => clearInterval(timer);
  }, [resolvePuzzle, currentColorArrangement]);

  return {
    showScore,
    setCurrentColorArrangement,
    currentColorArrangement,
    setDraggedSquare,
    setReplacedSquare,
    draggedSquare,
    replacedSquare,
  };
};
