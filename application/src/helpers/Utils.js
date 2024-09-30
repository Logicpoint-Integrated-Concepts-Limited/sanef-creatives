/**
 * Compute the width of an image in an alternating manner except for a single element on a row which results to 100.
 *
 * For example: for 5 elements, this would be the result (indexPair,valuePair) > (0,1=70,35), (2,3=35,70), (4=100)
 *
 * @param {number} currentIdx - The index of the current iteration
 * @param {Array} arr - The array being processed
 * @param {Array} cases - The array of values to be used as outputs of this function. First elements are the defaults.
 * @returns {{width: number, level: number, direction: string, start: string}}
 */
export const computeImageWidth = (currentIdx, arr, cases = [3, 2, 1]) => {
  if (arr.length === currentIdx + 1 && arr.length % 2 === 1)
    return { width: cases[0] };

  const level = Math.floor(currentIdx / 2),
    direction = currentIdx % 2 === 0 ? "forward" : "backward";

  if (
    (level % 2 === 0 && direction === "forward" && currentIdx % 2 === 0) ||
    (level % 2 === 1 && direction === "backward" && currentIdx % 2 === 1)
  )
    return { width: cases[1], level, direction };
  else return { width: cases[2], level, direction };
};
