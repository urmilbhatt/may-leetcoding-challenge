// Single Element in a Sorted Array
/*
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once. Find this single element that appears only once.

Example 1:

Input: [1,1,2,3,3,4,4,8,8]
Output: 2
Example 2:

Input: [3,3,7,7,10,11,11]
Output: 10
 
Note: Your solution should run in O(log n) time and O(1) space.
*/

var singleNonDuplicate = function(nums) {
    return search(nums, 0, nums.length - 1); 
};

var search = function(nums, l, h) {
    let start = 0;
    let end = nums.length - 1;
    
    if (l > h) return;
    if (l === h) return nums[l];
    
    let mid = (l + h) / 2; 
    
    if (mid % 2 === 0) {
        if (nums[mid] === nums[mid + 1]) {
            return search(nums, mid + 2, h);
        } else {
            return search(nums, l, mid);
        }
    } else {
        if (nums[mid] === nums[mid - 1]) {
            return search(nums, mid + 1, h);
        } else {
            return search(nums, l, mid - 1)
        }
    }
}