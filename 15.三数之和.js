/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums1) {
  let finalArray = new Map()
  let nums = nums1.sort((a, b) => a - b)
  // 暴力破解   会出现超时的用例
  // for (let i = 0; i < nums.length; i++) {
  //   const firstItem = nums[i];
  //   if (firstItem > 0) {
  //     break;
  //   }
  //   if (i > 0 && nums[i] == nums[i - 1]) continue;

  //   for (let j = i + 1; j < nums.length; j++) {
  //     const secondItem = nums[j];
  //     const sum1 = firstItem + secondItem
  //     for (let z = j + 1; z < nums.length; z++) {
  //       const thirdItem = nums[z];

  //       let sum = sum1 + thirdItem
  //       if (sum === 0) {
  //         let key = new Array(firstItem, secondItem, thirdItem)
  //         finalArray.set(key.sort().toString(), key)
  //       }
  //     }
  //   }
  // }

  // 双指针算法  进行操作满足
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    const element = nums[i];
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      let sum = element + nums[left] + nums[right]
      if (sum === 0) {
        let key = new Array(element, nums[left], nums[right])
        finalArray.set(key.toString(), key)
        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }

  }
  let resultArray = []
  finalArray.forEach((value, key) => {
    resultArray.push(value)
  });

  return resultArray
};
// @lc code=end



