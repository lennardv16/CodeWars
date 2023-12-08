let nums = [4, 1, 7, 1, 9, 8, 3, 5, 0];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 8) {
    console.log(`-> ${nums[i]} <-`);
    break;
  }
  console.log(`${nums[i]},`);
}
