// randomInt takes up to two positive integers as arguments, returning a random positive integer in that range (inclusive)
export function randomInt(max, min) {
  try {
    if (max && min) {
      if (
        isNaN(max) ||
        isNaN(min) ||
        !Number.isInteger(max) ||
        !Number.isInteger(min) ||
        max < 0 ||
        min < 0
      ) {
        throw 'Invalid inputs - arguments must be positive integers';
      }
      if (!(max > min)) {
        throw 'Invalid input - max value is lower than min value';
      }
      return Math.floor(Math.random() * (max - min + 1) + min);
    } else if (max) {
      if (isNaN(max) || !(max > 0) || !Number.isInteger(max)) {
        throw 'Invalid input - single argument must be a positive integer';
      }
      return Math.floor(Math.random() * (max + 1));
    } else {
      throw 'Required arguments were not provided';
    }
  } catch (error) {
    console.error(error);
  }
}


// altRanInt: max is an upper bound, non-inclusive; min is lower bound, inclusive. This can take negative arguments
export function altRanInt(max=100, min=0) {
  try {
      if (
        isNaN(max) ||
        isNaN(min) ||
        !Number.isInteger(max) ||
        !Number.isInteger(min)
      ) {
        throw 'Invalid inputs - arguments must be integers';
      }
      if (!(max > min)) {
        throw 'Invalid input - max value is lower than min value';
      }
      return Math.floor(Math.random() * (max - min)) + min;
  } catch (error) {
    console.error(error);
  }
}

// randomInt takes up to three positive integers as arguments (max, min, and precision)
// returns a random float in the range between min and max (inclusive) with set precision (number of decimal places)
export function randomFloat(max, min, precision) {
  try {
    if (max && min && precision) {
      if (
        isNaN(max) ||
        isNaN(min) ||
        isNaN(precision) ||
        !Number.isInteger(max) ||
        !Number.isInteger(min) ||
        !Number.isInteger(precision) ||
        max < 0 ||
        min < 0 ||
        precision < 0
      ) {
        throw 'Invalid inputs - arguments must be positive integers';
      }
      if (!max > min) {
        throw 'Invalid inputs - max value is lower than min value';
      }
      if (!Number.isInteger(precision)) {
        throw 'Invalid inputs - precision argument must be an integer';
      }
      return (Math.random() * (max - min) + min).toFixed(precision);
    } else if (max && min) {
      if (
        isNaN(max) ||
        isNaN(min) ||
        !Number.isInteger(max) ||
        !Number.isInteger(min) ||
        max < 0 ||
        min < 0
      ) {
        throw 'Invalid inputs - arguments must be positive integers';
      }
      if (!max > min) {
        throw 'Invalid inputs - max value is lower than min value';
      }
      return Math.random() * (max - min) + min;
    } else if (max) {
      if (isNaN(max) || !Number.isInteger(max) || max < 0) {
        throw 'Invalid input - argument must be a positive integer';
      }
      return Math.random() * max;
    } else {
      throw 'Required arguments were not provided';
    }
  } catch (error) {
    console.error(error);
  }
}

export function randomElement(arr, num) {
  try {
    if (!Array.isArray(arr)) {
      throw 'Invalid input - input must be an array';
    }
    if (!num) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    if (isNaN(num) || !Number.isInteger(num)) {
      throw 'Invalid input - second argument must be a positive integer';
    }
    let i = 0;
    let result = [];
    while (i < num) {
      result.push(arr[Math.floor(Math.random() * arr.length)]);
      i++;
    }
    return result;
  } catch (error) {
    console.error(error);
  }
}

export function randomChar(str, num) {
  try {
    if (typeof str !== 'string') {
      throw 'Invalid input - input must be a string';
    }
    if (!num) {
      return str[Math.floor(Math.random() * str.length)];
    }
    if (isNaN(num) || !Number.isInteger(num)) {
      throw 'Invalid input - second argument must be a positive integer';
    }
    let i = 0;
    let result = [];
    while (i < num) {
      result.push(str[Math.floor(Math.random() * str.length)]);
      i++;
    }
    return result.join('').toLowerCase();
  } catch (error) {
    console.error(error);
  }
}

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

export function gaussian(mean = 0, std = 1) {
  try {
    if (typeof mean !== 'number' || typeof std !== 'number') {
      console.log('error 1 thrown');
      throw 'Only accepts number inputs';
    } else if (isNaN(mean) || isNaN(std)) {
      console.log('error 2 thrown');
      throw 'Inputs cannot not be NaN';
    } else {
      // mean is centre of distribution - if not given, it is assumed 0, std is standard deviation, how 'wide' the distribution is - if not given, it is assumed 1
      // The approach here uses a Box-Muller transformation
      if (arguments.length > 2) {
        console.log(
          'WARNING: you may have entered more than 2 arguments, any additional arguments are ignored.'
        );
      }
      const uniforms = [Math.random(), Math.random()];
      const normals = [
        Math.sqrt(-2 * Math.log(uniforms[0])) *
          Math.cos(2 * Math.PI * uniforms[1]),
      ];

      // The orginal formula says that the sin version is independent but on same distribution
      //const normals = [Math.sqrt(-2*Math.log(uniforms[0])) * Math.cos(2*Math.PI*uniforms[1]), Math.sqrt(-2*Math.log(uniforms[0])) * Math.sin(2*Math.PI*uniforms[1])];

      return normals[0] * std + mean;
    }
  } catch (err) {
    console.error(
      'Invalid input arguments. Mean is',
      mean,
      ', standard deviation is',
      std
    );
    throw err;
  }
}

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
