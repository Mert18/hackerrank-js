// https://www.hackerrank.com/challenges/strong-password/problem

function minimumNumber(n, password) {
  let numbers = "0123456789";
  let lower_case = "abcdefghijklmnopqrstuvwxyz";
  let upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let special_characters = "!@#$%^&*()-+";
  const myarr = password.split("");
  let counter = 4;
  let flag1 = true;
  let flag2 = true;
  let flag3 = true;
  let flag4 = true;

  for (let i = 0; i < numbers.length; i++) {
    if (myarr.includes(numbers[i])) {
      i = numbers.length;
      flag1 = false;
      counter--;
    }
  }
  if (flag1 == true) {
    n = n + 1;
  }

  for (let i = 0; i < lower_case.length; i++) {
    if (myarr.includes(lower_case[i])) {
      i = lower_case.length;
      flag2 = false;
      counter--;
    }
  }
  if (flag2 == true) {
    n = n + 1;
  }

  for (let i = 0; i < upper_case.length; i++) {
    if (myarr.includes(upper_case[i])) {
      i = upper_case.length;
      flag3 = false;
      counter--;
    }
  }
  if (flag3 == true) {
    n = n + 1;
  }

  for (let i = 0; i < special_characters.length; i++) {
    if (myarr.includes(special_characters[i])) {
      i = special_characters.length;
      flag4 = false;
      counter--;
    }
  }

  if (flag4 == true) {
    n = n + 1;
  }

  if (n < 6) {
    counter += 6 - n;
  }
  return counter;
}
