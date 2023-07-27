/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let numsIndexArray = []
    let finalArray = []
    for (let i = 0; i < nums.length; i++) {
        const element = nums[i];
        numsIndexArray.push({
            index: i,
            value: element
        })
    }
    numsIndexArray.sort((a, b) => {
        return a.value - b.value
    })

    for (let j = 0; j < numsIndexArray.length; j++) {
        const element = numsIndexArray[j];
        let left = j + 1;
        let flag = false;
        while (left < numsIndexArray.length) {
            let sum = element.value + numsIndexArray[left].value
            if (sum === target) {
                flag = true;
                finalArray = [element.index, numsIndexArray[left].index]
                left = numsIndexArray.length
            } else {
                left++
            }

        }

        if (flag) {
            finalArray.sort((a, b) => {
                return a - b
            })
            break;
        }

    }
    return finalArray;
};
// @lc code=end

