// https://www.hackerrank.com/challenges/hackerrank-in-a-string/problem

function hackerrankInString(s) {
  const myarr = s.split("");
  console.log(myarr);
  let seriousarray = ["h", "a", "c", "k", "e", "r", "r", "a", "n", "k"];

  let mine = myarr.filter((el) => "hackerrank".indexOf(el) >= 0);

  let currentIndex = 0;
  let counter = 0;
  for (let i = 0; i < mine.length; i++) {
    if (mine[i] === seriousarray[currentIndex]) {
      currentIndex++;
    }
  }
  if (currentIndex === 10) {
    return "YES";
  } else {
    return "NO";
  }
}
