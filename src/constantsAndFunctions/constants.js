import redCandy from "../images/red-candy.png";
import blueCandy from "../images/blue-candy.png";
import greenCandy from "../images/green-candy.png";
import orangeCandy from "../images/orange-candy.png";
import yellowCandy from "../images/yellow-candy.png";
import purpleCandy from "../images/purple-candy.png";

export const WIDTH = 8;
export const CANDY_COLORS = [
  greenCandy,
  blueCandy,
  orangeCandy,
  purpleCandy,
  redCandy,
  yellowCandy,
];

export const VALID_MOVES = (dSquare) => [
  dSquare - 1,
  dSquare - WIDTH,
  dSquare + 1,
  dSquare + WIDTH,
];
