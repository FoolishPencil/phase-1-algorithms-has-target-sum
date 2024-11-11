function hasTargetSum(array, target) {
  const seenNumbers = new Set();

  for (let num of array) {
    const complement = target - num;
    if (seenNumbers.has(complement)) {
      return true;
    }
    seenNumbers.add(num);
  }

  return false;
}

/* 
  Time: O(n)
  Space: O(n)
*/

/* 
  function hasTargetSum(array, target):
    // Create an empty set to store numbers we've seen
    create an empty set called seenNumbers

    // Loop through each number in the array
    for each number in array:
        // Calculate the complement that would add up to target
        complement = target - number

        // Check if the complement is already in seenNumbers
        if complement is in seenNumbers:
            // If it is, we found a pair, so return true
            return true

        // Otherwise, add the current number to seenNumbers
        add number to seenNumbers

    // If no pair is found, return false
    return false

*/

/*
  Use a set called seenNumbers to track numbers as we iterate.
  For each number, calculate its "complement" (target - num).
  If this complement exists in seenNumbers, return true.
  Otherwise, add the current number to seenNumbers and continue.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 5));

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
