module.exports.validateOptions = (options) => {
  let {
    type,
    min,
    max,
    arraySize,
    numberOfArrays,
    unique
  } = options;
  if (type !== 'number' && type !== 'array' && type !== 'multi-array') {
    return 'Invalid value for (type) provided'
  }
  if (isNaN(min)) {
    return 'Invalid value for (min) provided'
  }

  if (isNaN(max)) {
    return 'Invalid value for (max) provided'
  }

  if (isNaN(arraySize)) {
    return 'Invalid value for (arraySize) provided'
  }

  if (isNaN(numberOfArrays)) {
    return 'Invalid value for (arraySize) provided'
  }

  if (min > max) {
    return '(min) value should be less than (max) value'
  }

  if (arraySize <= 0) {
    return '(arraySize) cannot be less than or equal to zero'
  }

  if (numberOfArrays <= 0) {
    return '(numberOfArrays) cannot be less than or equal to zero'
  }

  if(typeof unique !== "boolean") {
    return 'Invalid value for (unique) provided'
  }
  
  return null;
}