function queensAttack(n, k, r_q, c_q, obstacles) {
  let attackable = [];
  let currentSquare = [r_q, c_q];

  // Creating Hash of Obstacles ( we cannot search array in an array )
  var hash = {};
  for (var i = 0; i < obstacles.length; i += 1) {
    hash[obstacles[i]] = i;
  }

  // GO DOWN, If you see an obstacle, break)
  // DOWN
  for (let i = r_q - 1; i >= 1; i--) {
    if (hash.hasOwnProperty([i, c_q])) {
      i = 0;
    } else {
      attackable.push([i, c_q]);
    }
  }

  // UP
  for (let i = r_q + 1; i <= n; i++) {
    if (hash.hasOwnProperty([i, c_q])) {
      i = n + 1;
    } else {
      attackable.push([i, c_q]);
    }
  }

  // LEFT
  for (let i = c_q - 1; i >= 1; i--) {
    if (hash.hasOwnProperty([r_q, i])) {
      i = 0;
    } else {
      attackable.push([r_q, i]);
    }
  }

  // RIGHT
  for (let i = c_q + 1; i <= n; i++) {
    if (hash.hasOwnProperty([r_q, i])) {
      i = n + 1;
    } else {
      attackable.push([r_q, i]);
    }
  }

  // ----DIAGONALS---- //
  // LEFT UP
  do {
    currentSquare[0] += 1;
    currentSquare[1] -= 1;
    if (hash.hasOwnProperty(currentSquare)) {
      break;
    } else {
      if (currentSquare[0] <= n && currentSquare[1] >= 1) {
        attackable.push([currentSquare[0], currentSquare[1]]);
      }
    }
  } while (currentSquare[0] <= n && currentSquare[1] >= 1);

  currentSquare = [r_q, c_q];

  // RIGHT DOWN
  do {
    currentSquare[0] -= 1;
    currentSquare[1] += 1;
    if (hash.hasOwnProperty(currentSquare)) {
      break;
    } else {
      if (currentSquare[0] >= 1 && currentSquare[1] <= n) {
        attackable.push([currentSquare[0], currentSquare[1]]);
      }
    }
  } while (currentSquare[0] >= 1 && currentSquare[1] <= n);

  currentSquare = [r_q, c_q];

  // LEFT DOWN
  do {
    currentSquare[0] -= 1;
    currentSquare[1] -= 1;
    if (hash.hasOwnProperty(currentSquare)) {
      currentSquare[0] = -1;
    } else {
      if (currentSquare[0] >= 1 && currentSquare[1] >= 1) {
        attackable.push([currentSquare[0], currentSquare[1]]);
      }
    }
  } while (currentSquare[0] >= 1 && currentSquare[1] >= 1);

  currentSquare = [r_q, c_q];

  // RIGHT UP
  do {
    currentSquare[0] += 1;
    currentSquare[1] += 1;
    if (hash.hasOwnProperty(currentSquare)) {
      break;
    } else {
      if (currentSquare[0] <= n && currentSquare[1] <= n) {
        attackable.push([currentSquare[0], currentSquare[1]]);
      }
    }
  } while (currentSquare[0] <= n && currentSquare[1] <= n);

  currentSquare = [r_q, c_q];

  return attackable.length;
}
