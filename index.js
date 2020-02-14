const validation = require('./validations');

module.exports = function Random(params) {
  let response;
  try {
    const options = {
      type: 'number',
      unique: false,
      min: 0,
      max: 100,
      arraySize: 5,
      numberOfArrays: 2,
      ...params
    };
    let {
      type,
      min,
      max,
      arraySize,
      numberOfArrays,
      unique
    } = options;

    const isInvalidOptions = validation.validateOptions(options);

    if (isInvalidOptions) {
      return isInvalidOptions;
    }

    if (options.type === 'number') {
      response = Math.floor(Math.random() * (max - min + 1) + min);
    } else if (type === 'array') {
      const randomNumberArray = generateRandomArray(arraySize, min, max, unique)
      response = randomNumberArray;
    } else if (type === 'multi-array') {
      const randomNumberMultiArrays = [];
      for (let i = 0; i < numberOfArrays; i++) {
        const randomNumberArray = generateRandomArray(arraySize, min, max, unique)
        randomNumberMultiArrays.push(randomNumberArray);
      }
      response = randomNumberMultiArrays;
    } else {
      response = 'Invalid type provided'
    }
  } catch (error) {
    response = 'Invalid options provided'
  }
  return response;
};


function generateRandomArray(arraySize, min, max, unique) {
  const randomNumberArray = [];
  if (unique) {
    if (arraySize <= ((max - min) + 1)) {
      while (randomNumberArray.length !== arraySize) {
        let random = Math.floor(Math.random() * (max - min + 1) + min);
        if (!randomNumberArray.includes(random)) {
          randomNumberArray.push(random)
        }
      }
    } else { // implement some sort of logic later
      for (let i = 0; i < arraySize; i++) {
        randomNumberArray.push(Math.floor(Math.random() * (max - min + 1) + min));
      }
    }
  } else {
    for (let i = 0; i < arraySize; i++) {
      randomNumberArray.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
  }
  return randomNumberArray;
}