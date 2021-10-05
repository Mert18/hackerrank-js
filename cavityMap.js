// https://www.hackerrank.com/challenges/cavity-map/problem

function cavityMap(grid) {
  // Map the inner elements.
  for (let i = 1; i < grid.length - 1; i++) {
    // Map the inner elements of inner elements.
    // Because only those can be a cavity.
    for (let y = 1; y < grid[i].length - 1; y++) {
      //Check every four condition for the specific cell, If all of it granted, then replace with X;
      if (
        grid[i][y] > grid[i][y - 1] &&
        grid[i][y] > grid[i][y + 1] &&
        grid[i][y] > grid[i - 1][y] &&
        grid[i][y] > grid[i + 1][y]
      ) {
        grid[i] = grid[i].split("");
        :qa

        grid[i][y] = "X";
        grid[i] = grid[i].join("");
      }
    }
  }

  return grid;
}
