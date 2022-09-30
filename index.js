function random(upper, lower) {
  //
  if (lower && upper) {
    return Math.floor(Math.random() * upper + lower);
  } else if (upper) {
    return Math.floor(Math.random() * (upper + 1));
  } else {
    throw console.error(
      'Expected 1 or 2 arguments, you did not supply any arguments'
    );
  }
}
//export default random;

export function randomWords(str) {
  let sentence = false;
  let result = [];
  try {
    // checks if sentence passed
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ' ') {
        sentence = true;
        break;
      }
    }
    //if sentence passed reorder words
    if (sentence) {
      let source = str.split(' ');
      while (source.length > 0) {
        let index = Math.floor(Math.random() * source.length);
        result.push(source[index]);
        source.splice(index, 1);
      }
      return result.join(' ');
      // else reorder letters in single word
    } else {
      let source = str.split('');
      while (source.length > 0) {
        let index = Math.floor(Math.random() * source.length);
        result.push(source[index]);
        source.splice(index, 1);
      }
      return result.join('');
    }
  } catch {
    console.error('Expected a string to be passed');
  }
}

console.log(randomWords(4));
