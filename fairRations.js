// https://www.hackerrank.com/challenges/fair-rations/problem

function fairRations(B) {
  // Defining the amount of loaf and iterationCount to check impossibility after some number of iteration.
  let loaf = 0;
  let iterationCount = 0;

  // While the array has odd numbers, continue.
  while (IsItDone(B).length > 0)
    for (let i = 0; i < B.length; i++) {
      // Find odd numbers and add one them.
      if (B[i] % 2 === 1) {
        B[i] += 1;
        loaf++;
        //Check left and right index of the index we just added 1.
        //If any of them odd, add one to them. If none of them odd, then add one to the next one.
        if (B[i - 1] % 2 === 1) {
          B[i - 1] += 1;
          loaf++;
        } else {
          if (B[i + 1]) {
            B[i + 1] += 1;
            loaf++;
          } else {
            B[i - 1] += 1;
            loaf++;
          }
        }
      }
      iterationCount++;
      // If we make iterations more than the length of the array, stop it and return NO.
      if (iterationCount > B.length) {
        return "NO";
      }
    }

  return loaf;
}

function IsItDone(B) {
  return B.filter((el) => el % 2 === 1);
}
