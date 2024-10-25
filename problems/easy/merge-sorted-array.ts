
/* 
Problem description
  You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
  Merge nums1 and nums2 into a single array sorted in non-decreasing order.
  The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
*/


function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  console.log(`First array: ${nums1} - Number of elements: ${m}`)
  console.log(`Second array: ${nums2} - Number of elements: ${n}`)
  let index = m;
  nums2.forEach((val)=> {nums1[index] = val; index++;});
  nums1.sort((a,b)=>a-b);
  console.log(`New array with all the numbers from both arrays in sorted order: ${nums1}`)
};

console.log('Case 1')
merge([1,2,3,0,0,0], 3, [2,5,6], 3)
console.log('\n')
console.log('Case 2')
merge([1], 1, [], 0)
console.log('\n')
console.log('Case 3')
merge([], 0, [1], 1)
console.log('\n')
console.log('Case 4')
merge([-1,0,0,3,3,3,0,0,0], 6, [1,2,2], 3)


