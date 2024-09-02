const highdash = {};

highdash.array_map = (array, transformer) => {
  const theOutputArray = [];

  for (let x of array) {
    let newValue = transformer(x);
    theOutputArray.push(newValue);
  }

  return theOutputArray;
};

highdash.array_filter = (array, predicate) => {
  const output = []

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      output.push(array[i])
    }
  }

  return output
}

export default highdash;
