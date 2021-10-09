// https://www.hackerrank.com/challenges/happy-ladybugs/problem

function happyLadybugs(b) {
  const myarr = b.split("");
  const spacenum = myarr.filter((el) => el === "_").length;
  if (checkHappiness(myarr) === 1) {
    return "YES";
  }
  if (spacenum === 0) {
    return "NO";
  }

  for (let i = 0; i < myarr.length; i++) {
    if (myarr[i] !== "_") {
      if (
        myarr.filter((el) => el === myarr[i]).length === 1 ||
        myarr.filter((el) => el === "_").length === myarr.length
      ) {
        return "NO";
      }
    }
  }

  return "YES";
}

function checkHappiness(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1] && arr[i] !== arr[i + 1]) {
      return 0;
    }
  }
  return 1;
}
