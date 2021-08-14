function angryProfessor(k, a) {
  let myArr = a.filter((el) => el <= 0)
  if(myArr.length >= k){
    return "NO"
  }else{
    return "YES"
  }
}