import { VALID_MOVES } from "./constants";
import { isEmpty } from "lodash";
import { resolvePuzzle } from "./recreateBoard";

const dragStart = (event, callback) => {
  // console.log("drag start");
  callback(event.target);
};

const dragDrop = (event, callback, check = false) => {
  // console.log("drag drop");
  callback(event.target);
  return check;
};

const dragEnd = (
  event,
  rSquare,
  dSquare,
  arr,
  setDraggedSquare,
  setReplacedSquare,
  setCurrentColorArrangement
) => {
  // console.log("drag end");

  const replacedSquareID = +rSquare.getAttribute("data-id");
  const draggedSquareID = +dSquare.getAttribute("data-id");
  const validMove = VALID_MOVES(draggedSquareID).includes(replacedSquareID);

  setCurrentColorArrangement((prev) => {
    arr[replacedSquareID] = dSquare.getAttribute("src");
    arr[draggedSquareID] = rSquare.getAttribute("src");

    if (validMove && !isEmpty(resolvePuzzle(arr))) {
      setDraggedSquare(null);
      setReplacedSquare(null);

      return [...prev];
    } else {
      arr[replacedSquareID] = rSquare.getAttribute("src");
      arr[draggedSquareID] = dSquare.getAttribute("src");

      return [...arr];
    }
  });

  // console.log("Replaced: ", replacedSquareID, " Dragged: ", draggedSquareID);
};

export { dragStart, dragDrop, dragEnd };
