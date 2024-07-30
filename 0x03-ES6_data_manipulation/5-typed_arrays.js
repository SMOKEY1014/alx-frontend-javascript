export default function createInt8TypedArray(length, position, value) {
  // Check if the position is outside the range of the typed array
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a new ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);

  // Create a DataView object to manipulate the ArrayBuffer
  const intView = new DataView(buffer);

  // Set the value at the specified position in the Int8 typed array
  intView.setInt8(position, value);

  // Return the Int8 typed array
  return intView;
}
