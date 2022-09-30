export function randomInt(max, min) {
  try {
    if (max && min) {
      if (
        isNaN(max) ||
        isNaN(min) ||
        !Number.isInteger(max) ||
        !Number.isInteger(min)
      ) {
        throw "Invalid inputs - arguments must be integers";
      }
      if (!(max > min)) {
        throw "Invalid input - max value is lower than min value";
      } else {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    } else if (max) {
      if (isNaN(max) || !(max > 0) || !Number.isInteger(max)) {
        throw "Invalid input - single argument must be a positive integer";
      } else {
        return Math.floor(Math.random() * (max + 1));
      }
    } else {
      throw "Required arguments were not provided";
    }
  } catch (error) {
    console.error(error);
  }
}

export function randomFloat(max, min, precision) {
  try {
    if (max && min && precision) {
      if (!max > min) {
        throw "Invalid inputs - max value is lower than min value";
      }
      if (!Number.isInteger(precision)) {
        throw "Invalid inputs - third argument must be an integer";
      }
      return (Math.random() * (max - min) + min).toFixed(precision);
    } else if (max && min) {
      return Math.random() * (max - min) + min;
    } else if (max) {
      return Math.random() * max;
    } else {
      throw console.error("Required arguments were not provided");
    }
  } catch (error) {
    console.error(error);
  }
}
