import { flattenDeep } from "lodash";
import { WIDTH } from "./constants";

export const checkColumns = (array) => {
  const checkAr = [];
  let column = 0;
  while (column < WIDTH) {
    let index = 0 + column;
    let tempArr = [];
    let tempArSets = 0;

    while (index < array.length && array[index + WIDTH]) {
      tempArr[tempArSets] = tempArr[tempArSets] || [];

      if (array[index] === array[index + WIDTH]) {
        if (!tempArr[tempArSets].includes(index)) {
          tempArr[tempArSets] = [...tempArr[tempArSets], index, index + WIDTH];
        } else {
          tempArr[tempArSets] = [...tempArr[tempArSets], index + WIDTH];
        }
      } else tempArSets++;

      index += WIDTH;
    }
    let cleanTempArr = tempArr.filter((arr) => arr.length > 2);

    cleanTempArr.length > 0 && checkAr.push(cleanTempArr);

    column++;
  }

  return flattenDeep(checkAr);
};

export const checkRows = (array) => {
  const checkAr = [];
  let row = 0;
  while (row < WIDTH) {
    let index = 0 + row;
    let tempArr = [];
    let tempArSets = 0;

    while (index < array.length && array[index + 1]) {
      tempArr[tempArSets] = tempArr[tempArSets] || [];

      if (array[index] === array[index + 1] && (index + 1) % WIDTH !== 0) {
        if (!tempArr[tempArSets].includes(index)) {
          tempArr[tempArSets] = [...tempArr[tempArSets], index, index + 1];
        } else {
          tempArr[tempArSets] = [...tempArr[tempArSets], index + 1];
        }
      } else {
        tempArSets++;
      }

      index++;
    }
    let cleanTempArr = tempArr.filter((arr) => arr.length > 2);
    row += WIDTH;

    cleanTempArr.length > 0 && checkAr.push(cleanTempArr);
  }

  return flattenDeep(checkAr);
};
