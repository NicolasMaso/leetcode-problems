
/* 
Problem description
  - Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
  - Consider the number of unique elements of nums to be k, to get accepted, you need to do the following things:
  - Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
  - Return k.
*/

/* Possible solution 1*/
function removeDuplicates(nums: number[]): number {
  console.log(`Original number arrays: ${nums}`)
  const numsAdjusted = Array.from(new Set(nums))
  console.log(`Number arrays without duplicates: ${numsAdjusted}`)
  for (let i = 0; i < numsAdjusted.length; i++) {
      nums[i] = numsAdjusted[i]
  }
  console.log(`Number of unique elements in the new array ${numsAdjusted.length}`)
  return numsAdjusted.length
};

/* Possible solution 2*/
// function removeDuplicates(nums: number[]): number {
//   console.log(`Original number arrays: ${nums}`)
//   let counter = 0;
//   const temp:number[] = [];
//   nums.forEach((ele:number)=> {
//       if(!temp.includes(ele)){
//           temp.push(ele);
//           nums[counter]=ele;
//           counter++;
//       } 
//   });
//   console.log(`Temp Number arrays without duplicates: ${temp}`)
//   console.log(`Number of unique elements in the new array ${counter}`)
//   return counter;
// };

console.log('Case 1')
removeDuplicates([1,1,2])
console.log('\n')
console.log('Case 2')
removeDuplicates([0,0,1,1,1,2,2,3,3,4])


