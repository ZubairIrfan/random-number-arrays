const validation = require('./validations');

module.exports = function Random(params) {
  let response;
  try {
    const options = {
      type: 'number',
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
      numberOfArrays
    } = options;

    const isInvalidOptions = validation.validateOptions(options);

    if (isInvalidOptions) {
      return isInvalidOptions;
    }

    if (options.type === 'number') {
      response = Math.floor(Math.random() * (max - min + 1) + min);
    } else if (type === 'array') {
      const randomNumberArray = [];
      for (let i = 0; i < arraySize; i++) {
        randomNumberArray.push(Math.floor(Math.random() * (max - min + 1) + min));
      }
      response = randomNumberArray;
    } else if (type === 'multi-array') {
      const randomNumberMultiArrays = [];
      for (let i = 0; i < numberOfArrays; i++) {
        const randomNumberArray = []
        for (let j = 0; j < arraySize; j++) {
          randomNumberArray.push(Math.floor(Math.random() * (max - min + 1) + min));
        }
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