// https://www.hackerrank.com/challenges/chocolate-feast/problem

function chocolateFeast(n, c, m) {
  let chocolateEaten = Math.trunc(n / c);
  let wrappers = 0;

  wrappers += chocolateEaten;

  while(Math.trunc(wrappers / m) > 0){
    let chocolateCanTake = Math.trunc(wrappers / m)
    chocolateEaten += chocolateCanTake;
    wrappers += chocolateCanTake;
    wrappers -= chocolateCanTake * m;
  }

  return chocolateEaten
}