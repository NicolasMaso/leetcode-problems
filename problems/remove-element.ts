/* 
Problem description
  - Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
  - Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
  - Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
  - Return k.
*/

function removeElement(nums: number[], val: number): number {
  console.log(`Numbers array: ${nums} - Value to remove occurrences: ${val}`)
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
          nums.splice(i,1) 
          i--
      }
  }
  console.log(`New array with all the numbers different from ${val}: ${nums}`)
  console.log(`Number of elements different from ${val}: ${nums.length}`)
  return nums.length
};


console.log('Case 1')
removeElement([3,2,2,3], 3)
console.log('\n')
console.log('Case 2')
removeElement([0,1,2,2,3,0,4,2], 2)
