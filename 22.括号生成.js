/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    // 最终结果集
    let result = []
    if (n <= 0) {
        return result;
    }
    // 回溯寻找合适的字符串
    function dfs(n, path, result, left, right) {
        if (left < right || left > n) return
        if (path.length === 2 * n) {
            result.push(path)
            return
        }
        dfs(n, path + "(", result, left + 1, right);
        dfs(n, path + ")", result, left, right + 1);
    }
    dfs(n, "", result, 0, 0);
    return result;
};
// @lc code=end

