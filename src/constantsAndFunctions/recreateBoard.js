import { CANDY_COLORS, WIDTH } from "./constants";
import { checkColumns, checkRows } from "./checkers";
import blank from "../images/blank.png";

export const resolvePuzzle = (arr, callback) => {
  let col = checkColumns(arr);
  let row = checkRows(arr);
  let recreatedPuzzle = [...new Set([...col, ...row])];
  callback && callback((prev) => prev + recreatedPuzzle.length);
  return recreatedPuzzle;
};

export const moveIntoSquareBelow = (array) => {
  for (let i = 0; i < WIDTH * WIDTH; i++) {
    const firstRow = [...Array(WIDTH).keys()];
    const isFirstRow = firstRow.includes(i);

    if (isFirstRow && array[i] === blank) {
      array[i] = CANDY_COLORS[Math.floor(Math.random() * CANDY_COLORS.length)];
    }

    if (array[i + WIDTH] === blank) {
      array[i + WIDTH] = array[i];
      array[i] = blank;
    }
  }
};
