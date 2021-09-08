// https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
  let counter = 0;
  let index = 0;

  while (index < c.length - 1) {
    if (c[index + 2] === 1) {
      index += 1;
      counter++;
    } else {
      index += 2;
      counter++;
    }
  }

  return counter;
}
