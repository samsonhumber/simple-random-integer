# simple-randomization

An npm package that allows random number generation to be utilized more easily.

Includes functionality for:

- Random integer generation
- Random float generation
- Obtaining random element(s) from an array
- Obtaining random character(s) from a string
- Randomizing an existing string (jumbles the characters)
- Randomizing an object (jumbles the key–value pairs)
- Generating random numbers with probability based on a normal distribution

# Installation

`npm install simple-randomization`

# Quick Start

```
randomInt(max, min) ==> random integer number between min and max inclusive
randomFloat(max, min, precision) ==> random rational number between min and max inclusive, to number of decimal places given by precision
randomElement(arr, num) ==> random element of given array, arr. If num is provided, an array containing random elements of arr, length num, is returned.
randomChar(str, num) ==> random character of given string, str. If num is provided, a string is provided containing random characters of str, length num, is returned.
randomObject(obj) ==> object containing random order of keys and values from obj.
gaussian(mean, std) ==> random value, obeying a gaussian distribution with mean and standard deviation of mean and std respectively.
randomWords(str) ==> string with random order of words (ie sets of characters separated by ' '); or if there are no separate words, a string with characters from str in a random order
```

# Future Plans

- Array shuffler
- Randomizing elements in 2-D array
- Generators of randomness:
  - random array of numbers (of random length?)
- Print random content in the console in response to a command(?)
