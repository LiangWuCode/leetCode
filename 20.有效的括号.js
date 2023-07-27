/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let len = s.length;
    //如果字符串长度不为偶数，即返回false
    if (len % 2 != 0) {
        return false;
    }
    let length = len / 2;
    for (let i = 0; i < length; i++) {
        s = s.replace("()", "");
        s = s.replace("{}", "");
        s = s.replace("[]", "");
        if (s.length === 0) {
            return true
        }
    }

    return s.length === 0;
};

// @lc code=end

