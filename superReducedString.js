// https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(s) {
  const myarr = s.split("");

  for (let i = 0; i < myarr.length; i++) {
    if (i < 0) {
      i++;
    }

    if (myarr[i] === myarr[i - 1]) {
      myarr.splice(i - 1, 2);
      i = i - 2;
    } else if (myarr[i] === myarr[i + 1]) {
      myarr.splice(i, 2);
      i--;
    }
  }

  if (myarr.length == 0) {
    return "Empty String";
  }
  return myarr.join("");
}
