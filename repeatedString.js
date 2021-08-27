// https://www.hackerrank.com/challenges/repeated-string/problem

function repeatedString(s, n) {
  let count = 0;

  let firstAs = s.split("").filter((el) => el === "a").length;
  count += firstAs * parseInt(n / s.length);
  let divided = n % s.length;

  let remainingAs = s.substring(0, divided).split("").filter((el) => el === "a").length;

  count += remainingAs;

  return count;

}
