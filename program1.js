function smallestMissingPositiveInteger(nums) {


  // Implement the function smallest_missing_positive_integer

  nums.sort((a, b) => a - b);
  let smallestpositive = 1
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallestpositive) {
      smallestpositive = nums[i] + 1
    }
  }
  return smallestpositive
}

module.exports = smallestMissingPositiveInteger;

