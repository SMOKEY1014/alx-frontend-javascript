export default function appendToEachArrayValue(array, appendString) {
  let array2 = [];
  for (let idx of array) {
    let value = appendString + idx;
    array2.push(value);
  }

  return array2;
}
