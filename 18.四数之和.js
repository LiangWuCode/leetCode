/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    // 最终记过
    let needArray = []
    // 排序
    nums.sort((a, b) => { return a - b })
    let length = nums.length
    // 如果长度为4，直接返回当前字符串即可
    if (length <= 4) {
        let sum4 = nums[0] + nums[1] + nums[2] + nums[3]
        if (sum4 === target) {
            return [nums]
        } else {
            return needArray
        }
    }

    let finalArray = new Map()
    for (let i = 0; i < length - 3; i++) {
        // 连续数据加起来大于target即结束
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break;
        // 当前节点加上最后最大的三位小于target则跳过次次循环增加i
        if (nums[i] + nums[length - 1] + nums[length - 2] + nums[length - 3] < target) continue;
        for (let j = i + 1; j < length - 2; j++) {
            // 与上述通逻辑
            if (nums[i] + nums[j + 1] + nums[j + 2] + nums[j] > target) break;
            if (nums[i] + nums[j] + nums[length - 1] + nums[length - 2] < target) continue;
            let left = j + 1
            let right = length - 1
            // 找到满足条件的结果，存入map数组中
            while (left < right) {
                let sum3 = nums[i] + nums[j] + nums[left] + nums[right]
                if (sum3 < target) {
                    left++
                }
                if (sum3 > target) {
                    right--
                }
                if (sum3 === target) {
                    let item = [nums[i], nums[j], nums[left], nums[right]]
                    finalArray.set(item.toString(), item)
                    left++
                    right--
                }

            }
        }

    }
    // 循环得出最终结果
    finalArray.forEach((value, key) => {
        needArray.push(value)
    });

    return needArray

};
// @lc code=end
// let nums = [1, 0, -1, 0, -2, 2]
// let target = 0
// fourSum(nums, target)
