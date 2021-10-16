// https://www.hackerrank.com/challenges/camelcase/problem

function camelcase(s) {
  let myarr = s.split("");
  myarr = myarr.filter((el) => el === el.toUpperCase());

  return myarr.length + 1;
}
