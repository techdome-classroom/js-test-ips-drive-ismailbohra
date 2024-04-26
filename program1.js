function smallestMissingPositiveInteger(nums) {


  // Implement the function smallest_missing_positive_integer

  nums.sort((a, b) => a - b);
  console.log(nums);
  let smallestpositive = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallestpositive) {
      smallestpositive = nums[i] + 1
    }
  }
  return smallestpositive
}
console.log(smallestMissingPositiveInteger([3,4,1,-1]))
// module.exports = smallestMissingPositiveInteger;

