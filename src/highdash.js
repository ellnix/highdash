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

/* 
Logic of array_some function:
The function checks if inside of the array there is at least one element that pass the condition
*/

const arrayForTest = [1, 2, 4, 5];

highdash.array_some = (array, predicate) => {
  for (let i = 0; i < array.length; i++) {
    const returnValue = predicate(array[i]);
    if (returnValue == true) {
      return true;
    }
  }

  return false;
};
/* array_some(arrayForTest, (x) => x % 3 === 0);
 */
export default highdash;
