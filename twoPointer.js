let nums = [1, 2, 4, 5, 6, 7, 11, 13, 14];
let target = 9;

let result = findTwoNums(nums, target);

if (result.length === 2) {
  console.log(`Two numbers found: ${result[0]}, ${result[1]} `);
} else {
  console.log('No pair of numbers found.');
}

function findTwoNums(nums, target) {
  let left = 0; // Pointer at start of array
  let right = nums.length - 1; // Pointer at end of array

  while (left < right) {
    let sum = nums[left] + nums[right];
    // Return the two numbers that add up to the target
    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (sum < target) {
      // Move left pointer to increase the sum
      left++;
    } else {
      // Move right pointer to decrease the sum
      right--;
    }
  }
  return [];
}
