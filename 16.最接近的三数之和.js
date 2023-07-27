/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 * 思路为选择大于target最接近，以及小于target中最接近的，
 * 二者中选择最接近的即可
 */
var threeSumClosest = function (nums, target) {
    // 排序
    let sortNum = nums.sort((a, b) => {
        return a - b
    })
    let length = sortNum.length
    // 小于target中最大的，即在小于target中最接近target的
    let minTarget = -Infinity
    // 大于target中最小的，即在大于target中最接近target的
    let maxTarget = Infinity

    for (let i = 0; i < length; i++) {
        const element = sortNum[i];
        let left = i + 1
        let right = length - 1
        while (left < right) {
            let sum = element + sortNum[left] + sortNum[right]
            if (sum >= target) {
                if (maxTarget >= sum) {
                    maxTarget = sum
                }
                right--
            } else {
                if (minTarget <= sum) {
                    minTarget = sum
                }
                left++
            }
        }
    }
    // 计算各自离targetde距离，选择距离最小的那个target即为最接近的
    let minDistance = Math.abs(target - minTarget)
    let maxDistance = Math.abs(maxTarget - target)
    let sumClosestTarget = minDistance >= maxDistance ? maxTarget : minTarget

    return sumClosestTarget
};
// @lc code=end

// let start = new Date()
// let nums = [0,0,0], target = 1
// console.log(threeSumClosest(nums, target))
// let end = new Date()
// console.log(`程序执行时间为：${end - start}ms`)

