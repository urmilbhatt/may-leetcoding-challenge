// Majority Element
/*
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
*/

var majorityElement = function(nums) {
    nums.sort(); 

    let maxCount = 1;
    let res = nums[0]; 
    let currCount = 1; 
      
    for (let i = 1; i < nums.length; i++) { 
        if (nums[i] === nums[i - 1]) {
            currCount++;  
        } else { 
            if (currCount > maxCount) { 
                maxCount = currCount; 
                res = nums[i - 1]; 
            } 
            currCount = 1; 
        } 
    } 
  
    if (currCount > maxCount) { 
        maxCount = currCount; 
        res = nums[nums.length - 1]; 
    }
  
    return res;
};