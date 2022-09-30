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
        throw "Invalid inputs - arguments must be positive integers";
      }
      if (!(max > min)) {
        throw "Invalid input - max value is lower than min value";
      }
      return Math.floor(Math.random() * (max - min + 1) + min);
    } else if (max) {
      if (isNaN(max) || !(max > 0) || !Number.isInteger(max)) {
        throw "Invalid input - single argument must be a positive integer";
      }
      return Math.floor(Math.random() * (max + 1));
    } else {
      throw "Required arguments were not provided";
    }
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
        throw "Invalid inputs - arguments must be positive integers";
      }
      if (!max > min) {
        throw "Invalid inputs - max value is lower than min value";
      }
      if (!Number.isInteger(precision)) {
        throw "Invalid inputs - precision argument must be an integer";
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
        throw "Invalid inputs - arguments must be positive integers";
      }
      if (!max > min) {
        throw "Invalid inputs - max value is lower than min value";
      }
      return Math.random() * (max - min) + min;
    } else if (max) {
      if (isNaN(max) || !Number.isInteger(max) || max < 0) {
        throw "Invalid input - argument must be a positive integer";
      }
      return Math.random() * max;
    } else {
      throw "Required arguments were not provided";
    }
  } catch (error) {
    console.error(error);
  }
}

export function randomElement(arr, num) {
  try {
    if (!Array.isArray(arr)) {
      throw "Invalid input - input must be an array";
    }
    if (!num) {
      return arr[Math.floor(Math.random() * arr.length)];
    }
    if (isNaN(num) || !Number.isInteger(num)) {
      throw "Invalid input - second argument must be a positive integer";
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
    if (typeof str !== "string") {
      throw "Invalid input - input must be a string";
    }
    if (!num) {
      return str[Math.floor(Math.random() * str.length)];
    }
    if (isNaN(num) || !Number.isInteger(num)) {
      throw "Invalid input - second argument must be a positive integer";
    }
    let i = 0;
    let result = [];
    while (i < num) {
      result.push(str[Math.floor(Math.random() * str.length)]);
      i++;
    }
    return result.join("").toLowerCase();
  } catch (error) {
    console.error(error);
  }
}
