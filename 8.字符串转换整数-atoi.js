/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    let myAtoiArray = s.split('')
    let isNegative = false
    // 将头部空格字符去掉
    while (myAtoiArray && myAtoiArray[0] === ' ') {
        myAtoiArray.shift()
    }

    // 判断最终整数的正负
    let index = 0
    if (myAtoiArray[0] === '-') {
        isNegative = true
        index++
    } else if (myAtoiArray[0] === '+') {
        isNegative = false
        index++
    }


    // 最终的字符串集合
    let finalArray = []
    while (myAtoiArray[index] != ' ' && (Number(myAtoiArray[index]) || Number(myAtoiArray[index]) === 0)) {
        finalArray.push(myAtoiArray[index])
        index++
    }

    // 去掉数组顶部为0的数据
    while (finalArray && Number(finalArray[0]) === 0) {
        finalArray.shift()
    }

    // 得到最终数据
    let finalInt = 0
    if (finalArray) {
        let noNagativeInt = Number(finalArray.join(''))
        finalInt = isNegative ? 0 - noNagativeInt : noNagativeInt
    }

    // 判断最终数据是否在合理的范围内
    let maxData = Math.pow(2, 31)
    let minData = 0 - maxData
    let max2Data = maxData - 1
    if (!(minData < finalInt && finalInt < max2Data)) {
        return isNegative ? minData : max2Data
    }
    return finalInt

};
// @lc code=end

