/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    //最终返回字符串 
    let commonPrefix = ""
    // 是否继续循环
    let flag = true

    //当数组长度为1时 ，直接返回下标为0的字符串即可
    if (strs.length === 1) {
        commonPrefix = strs[0]
        flag = false
    }

    // 截取字段长度
    let flagIndex = 1;

    // 循环获取最终字段
    while (flag) {
        // 获取截取的字段数组
        let subsArray = []
        for (let index = 0; index < strs.length; index++) {
            const element = strs[index];
            if (element === "" || element === null || flagIndex === element.length) {
                flag = false
            }
            subsArray.push(element.substring(0, flagIndex))
        }
        flagIndex++

        // 判断截取的字段是否相等，获取相等的字段
        let nowCommonPrefix = ""
        for (let index = 0; index < subsArray.length - 1; index++) {
            const start = subsArray[index];
            const end = subsArray[index + 1];
            if (start === end) {
                nowCommonPrefix = start
            } else {
                nowCommonPrefix = ""
                flag = false;
                break;
            }
            if (index + 1 === subsArray.length - 1) {
                commonPrefix = nowCommonPrefix
            }

        }
    }
    return commonPrefix;
};

// @lc code=end

