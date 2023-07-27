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
  // 基础字典
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
  //  转换为数组
  let digitsArray = digits.split('')
  // 字符串数组
  let digitsToLetterArray = []

  digitsArray.forEach(element => {
    digitsToLetterArray.push(base.get(element))
  });

  // 当字符串长度为1时，范围其本身
  let length = digitsToLetterArray.length
  if (length <= 1) {
    if (digitsArray.length === 0) {
      digitsToLetterArray.push([])
    }
    return digitsToLetterArray[0]
  }

  // 将数组中的第一个数组集合复制给map中key为0的键值，
  // 作为第一轮的笛卡尔积值
  let index = 0
  let finalMap = new Map([
    [0, digitsToLetterArray[index]]
  ])

  // 循环得出数组笛卡尔积，并得到最终结果
  while (index < length - 1) {
    // 获取上一轮的笛卡尔积
    let nowArray = finalMap.get(index)
    let itemArray = digitsToLetterArray[index + 1]
    let finalItemArray = []
    // 循环生成笛卡尔积
    itemArray.forEach(element => {
      nowArray.forEach(nowItem => {
        finalItemArray.push(nowItem + element)
      });
    });
    index++
    finalMap.set(index, finalItemArray)
  }
  // 获取最后一个index即为最终结果
  return finalMap.get(index)

};
// @lc code=end
// let digits = "2"
// console.log(letterCombinations(digits))
