let arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 24, 25];
let target = 7;

let index = binarySearch(arr, target);
if (index != -1) {
  console.log(`Element found at index ${index}`);
} else {
  console.log('Element not found in the array');
}

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = low + (high - low) / 2;

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1; // Element not found
}
