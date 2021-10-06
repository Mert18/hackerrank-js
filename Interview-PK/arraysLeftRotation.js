// https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem

function rotLeft(a, d) {
  while (d > 0) {
    a.push(a.shift());
    d--;
  }
  return a;
}
