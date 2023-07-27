/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let currentNumber = x;
    // 判断是否为负数
    let isNegative = false;
    if (x < 0) {
        isNegative = true;
        currentNumber = Math.abs(currentNumber)
    }

    // 获取翻转后的数字数组
    let targetArray = []
    while (currentNumber) {
        targetArray.push(currentNumber % 10)
        currentNumber = Math.floor(currentNumber / 10)
    }

    // 去除掉数组中首位为0的数字
    let index = 0
    while (index === 0) {
        if (targetArray[index] === 0) {
            targetArray.shift()
        } else {
            index = -1
        }
    }
    // 获得反转后的正整数
    let finalInt = Number(targetArray.join(''))
    
    // 当反转后的数据大小超过正负2的31次方时直接返回0
    if (!(-Math.pow(2, 31) < finalInt && finalInt < Math.pow(2, 31) - 1)) {
        return 0
    }
    // 根据标志返回正负数据
    return isNegative ? 0 - finalInt : finalInt
};
// @lc code=end

