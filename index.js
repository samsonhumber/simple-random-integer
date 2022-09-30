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

export function randomObject(obj) {
  try {
    if (Array.isArray(obj)) throw 'Expected an Object, not an array';
    else if (typeof obj != 'object' || obj === null || obj instanceof Date)
      throw 'Expected an Object';
    else {
      let keys = Object.keys(obj);
      let values = Object.values(obj);
      let result = {};
      while (keys.length > 0) {
        let kIndex = Math.floor(Math.random() * keys.length);
        let vIndex = Math.floor(Math.random() * keys.length);
        result[keys[kIndex]] = values[vIndex];
        keys.splice(kIndex, 1);
        values.splice(vIndex, 1);
      }
      return result;
    }
  } catch (error) {
    console.log(error);
  }
}

//testing bit
let testObj = {
  hello: 'People',
  goodbye: 'everybody',
  cat: 5,
  dog: 'chicken',
};

console.log(randomObject(testObj));
