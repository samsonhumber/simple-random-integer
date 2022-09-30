function random(upper, lower) {
  if (lower && upper) {
    return Math.floor(Math.random() * upper + lower);
  } else {
    return Math.floor(Math.random() * (upper + 1));
  }
}
