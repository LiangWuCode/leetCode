/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    //初始化字母变量值
    let bases = [
        {
            code: "M",
            value: 1000
        },
        {
            code: "D",
            value: 500
        },
        {
            code: "C",
            value: 100
        },
        {
            code: "L",
            value: 50
        },
        {
            code: "X",
            value: 10
        },
        {
            code: "V",
            value: 5
        },
        {
            code: "I",
            value: 1
        }
    ]
    // 将其转换为有序数组
    let romanStrings = s.split('');

    // 将字符串转换为数组类型
    let intStrings = []
    romanStrings.forEach(romanItem => {
        for (let index = 0; index < bases.length; index++) {
            const basesItem = bases[index];
            if (romanItem === basesItem.code) {
                intStrings.push(basesItem.value)
                break;
            }
        }
    });

    // 获取最终的int数组
    let finIntStrings = []
    let isLast = false;
    for (let index = 0; index < intStrings.length - 1; index++) {
        const start = intStrings[index];
        const end = intStrings[index + 1];
        // 判断是否为特殊情况
        if (start < end) {
            finIntStrings.push(end - start)
            if (index + 1 === intStrings.length - 1) {
                isLast = true
            }
            index++;
        } else {
            finIntStrings.push(start)
        }
    }

    // 如果特殊情况不是最后一个，需将最后一个添加到最终数组中
    if (!isLast) {
        finIntStrings.push(intStrings[intStrings.length - 1])
    }

    // 计算最终结果
    let finInt = 0
    finIntStrings.forEach(element => {
        finInt += element
    });
    console.log(finInt)
    return finInt
};

// @lc code=end

