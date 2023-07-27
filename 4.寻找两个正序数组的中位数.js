/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let num = nums1.concat(nums2)

  let sortNum = num.sort((a, b) => {
    return a - b
  })
  let length = sortNum.length
  let finalResult = -1;
  if (!(length % 2)) {
    finalResult = (sortNum[length / 2 - 1] + sortNum[length / 2]) / 2
  } else {
    finalResult = sortNum[Math.floor(length / 2)]
  }
  return finalResult;

};
// @lc code=end

let num1 = [1, 2]
let num2 = [3, 4]
findMedianSortedArrays(num1, num2)
