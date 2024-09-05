const highdash = {};

highdash.array_map = (array, transformer) => {
  const theOutputArray = [];

  for (let x of array) {
    let newValue = transformer(x);
    theOutputArray.push(newValue);
  }

  return theOutputArray;
};

highdash.array_take = (array, n) => {
  let output = [];

  for (let i = 0; i < n && i < array.length; i++) {
    output.push(array[i]);
  }

  return output;
};

highdash.array_filter = (array, predicate) => {
  const output = [];

  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      output.push(array[i]);
    }
  }

  return output;
};

highdash.array_some = (array, predicate) => {
  for (let i = 0; i < array.length; i++) {
    const returnValue = predicate(array[i]);
    if (returnValue == true) {
      return true;
    }
  }

  return false;
};

highdash.array_find = (array, predicate) => {
  for (let i = 0; i < array.length; i++) {
    const theResultYo = predicate(array[i]);
    if (theResultYo == true) {
      return array[i];
    }
  }

  return null;
};

highdash.array_sum = (array) => {
  let sum = 0;
  let i = 0;
  while (i < array.length) {
    sum = sum + array[i];
    i += 1;
  }
  return sum;
};

export default highdash;
