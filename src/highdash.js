const highdash = {};

highdash.array_map = (array, transformer) => {
  const theOutputArray = [];

  for (let x of array) {
    let newValue = transformer(x);
    theOutputArray.push(newValue);
  }

  return theOutputArray;
};

export default highdash;
