module.exports = function Random(params) {
  const options = {
    type: 'number',
    min: 0,
    max: 100,
    arraySize: 5,
    numberOfArrays: 2,
    ...params
  };
  const {
    type,
    min,
    max,
    arraySize,
    numberOfArrays
  } = options;
  let response;
  if (options.type === 'number') {
    response = Math.floor(Math.random() * (max - min + 1) + min);
  }
  return response;
};