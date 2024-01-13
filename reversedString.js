function reversedString(str) {
  // console.log(str.split('').reverse().join(''));
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(reversedString('racecar')); //Output: true
console.log(reversedString('oogabooga')); //Output: false
console.log(reversedString('the quick brown fox jumped over the lazy dog')); //Output: false
