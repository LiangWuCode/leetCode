/*
 * @lc app=leetcode.cn id=12 lang=javascript
 *
 * [12] 整数转罗马数字
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    // 基础对照码
    const base = [
        {
            key: 'M',
            value: 1000
        },
        {
            key: 'CM',
            value: 900
        },
        {
            key: 'D',
            value: 500
        },
        {
            key: 'CD',
            value: 400
        },
        {
            key: 'C',
            value: 100
        },
        {
            key: 'XC',
            value: 90
        },
        {
            key: 'L',
            value: 50
        },
        {
            key: 'XL',
            value: 40
        },
        {
            key: 'X',
            value: 10
        },
        {
            key: 'IX',
            value: 9
        },
        {
            key: 'V',
            value: 5
        },
        {
            key: 'IV',
            value: 4
        },
        {
            key: 'I',
            value: 1
        },

    ]

    let number = num
    let roman = ''

    // 贪心算法 拼接字符串
    base.forEach(element => {
        while (number >= element.value) {
            roman += element.key
            number -= element.value
        }
    });

    return roman
};
// @lc code=end

