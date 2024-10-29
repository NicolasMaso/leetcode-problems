/* 
Problem description
  - Given an array nums of size n, return the majority element.
  - The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
*/

/* Possible solution 1*/
function majorityElement(nums: number[]) {
  console.log(`Nums: ${nums}`)
  let majorityElement = nums.length / 2
  console.log(`Half the size of the array: ${majorityElement}`)
  const map = new Map()
  for (const num of nums) {
      let oldValue = map.get(num)
      if (oldValue) {
        oldValue++
        map.set(num, oldValue)
      } else {
        map.set(num, 1)
      }
      let newValue = map.get(num)
      if (newValue > majorityElement) {
        console.log(`Majority element: ${num}`)
        return num
      }
  }
};

/* Possible solution 2*/
// function majorityElement(nums: number[]) {
//   console.log(`Nums: ${nums}`)
//   const size = nums.length
//   if (size === 1) {
//     console.log(`Majority element: ${nums[0]}`)
//     return nums[0]
//   }
//   let majorityElement = size / 2
//   console.log(`Half the size of the array: ${majorityElement}`)
//   const map = new Map()
//   for (const num of nums) {
//     let value = map.get(num)
//     if (value) {
//       map.set(num, value + 1)
//       if (value + 1 > majorityElement) {
//         console.log(`Majority element: ${num}`)
//         return num
//       }
//     } else {
//       map.set(num, 1)
//     }
//   }
// };


console.log('Case 1')
majorityElement([1])
console.log('\n')
console.log('Case 2')
majorityElement([3,2,3])
console.log('\n')
console.log('Case 3')
majorityElement([2,2,1,1,1,2,2])
