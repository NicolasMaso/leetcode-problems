
/* 
Problem description
  - Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
  - Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
  - Return k after placing the final result in the first k slots of nums.
*/

/* Possible solution 1*/
function removeDuplicates(nums: number[]): number {
  console.log(`Original number arrays: ${nums}`)
  let adjustedArray = []
  let k = 0
  for (const num of nums) {
      const alreadyHasTwoOccurrences = adjustedArray.filter(item => item === num).length === 2
      if (!alreadyHasTwoOccurrences) {
          adjustedArray.push(num)
          k++
      }
  }
  for (let i = 0; i < adjustedArray.length; i++) {
      nums[i] = adjustedArray[i]
  }
  console.log(`Adjusted array without triplicates: ${adjustedArray}`)
  console.log(`Number of elements in the new array ${k}`)
  return k
};

/* Possible solution 2*/
// function removeDuplicates(nums: number[]): number {
//   console.log(`Original number arrays: ${nums}`)
//   const n = nums.length;
//   let index = 2;
//   for(let i=2; i<n; i++){
//       if(nums[i] !== nums[index-2]){
//         nums[index] = nums[i]
//         index++
//       }
//   }
//   console.log(`Adjusted array without triplicates: ${nums}`)
//   console.log(`Number of elements in the new array ${index}`)
//   return index;
// };

console.log('Case 1')
removeDuplicates([1,1,1,2,2,3])
console.log('\n')
console.log('Case 2')
removeDuplicates([0,0,1,1,1,1,2,3,3])


