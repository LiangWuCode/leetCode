/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 * 
 */
var maxArea = function (height) {

    let maxAreaData = 0
    // 暴力破解  方法一  双层循环找到最大的  超时 
    // for (let i = 0; i < height.length; i++) {
    //     for (let j = i + 1; j < height.length; j++) {
    //         // let minItem = height[i] > height[j] ? height[j] : height[i]
    //         // let distance = 
    //         let area = Math.min(height[i], height[j]) * (j - i)
    //         if (maxAreaData < area) {
    //             maxAreaData = area
    //         }
    //     }
    // }

    // 方法二 双指针    指针向内寻找  哪个小就向内移动指针找更大的
    let left = 0
    let right = height.length - 1
    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left)
        maxAreaData = Math.max(maxAreaData, area)
        if (Math.min(height[left], height[right]) === height[left]) {
            left++
        } else {
            right--
        }
    }
    return maxAreaData;
};
// @lc code=end

