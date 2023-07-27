/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let nowData = x + "";
    let finData = nowData.split("").reverse().join("");
    if (nowData === finData) {
        return true
    }
    return false;
};
// @lc code=end

