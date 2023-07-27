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

    let index = 0
    let finalMap = new Map([
        [0, digitsToLetterArray[index]]
    ])
    while (index < digitsToLetterArray.length - 1) {
        let nowArray = finalMap.get(index)
        let itemArray = digitsToLetterArray[index + 1]
        let finalItemArray = []
        itemArray.forEach(element => {
            nowArray.forEach(nowItem => {
                finalItemArray.push(nowItem + element)
            });
        });
        index++
        finalMap.set(index, finalItemArray)
    }
    console.log(finalMap.get(index))
    return finalMap.get(index)

};
// @lc code=end
let digits = "2"
letterCombinations(digits)
