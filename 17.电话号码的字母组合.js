/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const base = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']]
    ])

    let digitsArray = digits.split('')
    let digitsToLetterArray = []

    digitsArray.forEach(element => {
        digitsToLetterArray.push(base.get(element))
    });

    for (let i = 0; i < digitsToLetterArray.length-1; i++) {
        const first = digitsToLetterArray[i];
        const second = digitsToLetterArray[i+1];
        while (condition) {
            first.forEach(firstItem => {
                second.forEach(secondItem => {
                    firstItem+secondItem
                });
            });
        }
        
    }


};
// @lc code=end

