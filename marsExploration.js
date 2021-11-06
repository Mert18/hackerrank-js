// https://www.hackerrank.com/challenges/mars-exploration/problem

function marsExploration(s) {
  let nosos = s.length / 3;
  let myarr = [];
  let sarr = s.split("");
  while (sarr.length > 0) {
    myarr.push(sarr.splice(0, 3).join(""));
  }
  let count = 0;
  myarr.map((el) => {
    if (el.split("")[0] !== "S") {
      count++;
    }
    if (el.split("")[1] !== "O") {
      count++;
    }
    if (el.split("")[2] !== "S") {
      count++;
    }
  });

  return count;
}
