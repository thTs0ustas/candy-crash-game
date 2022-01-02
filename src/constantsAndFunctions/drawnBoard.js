import { CANDY_COLORS, WIDTH } from "./constants";

export const createBoard = (callback) => {
  let i = 0;
  let randomColorArrangement = [];
  while (i < WIDTH * WIDTH) {
    const randomColor =
      CANDY_COLORS[Math.floor(Math.random() * CANDY_COLORS.length)];
    randomColorArrangement.push(randomColor);
    i++;
  }
  callback(randomColorArrangement);
};
