function random(upper, lower) {
  //
  if (lower && upper) {
    return Math.floor(Math.random() * upper + lower);
  } else if(upper) {
    return Math.floor(Math.random() * (upper + 1));
  } else {
    throw console.error("Expected 1 or 2 arguments, you did not supply any arguments");
  }
}
export default random;

console.log(random());
