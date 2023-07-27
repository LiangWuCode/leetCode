/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let condition = true;
    let firstIndex = 0;
    let lastIndex = 1;
    let length = s.length;
    let resultArray = []
    let splitChats = ''
    let maxFlagIndex = 1;

    // 字符串长度为一时，直接返回结果，即为其本身
    if (s.length === 1) {
        return s;
    }

    // 判断字段是否为回文字段的函数
    function isPalindrome2(s) {
        s = s.replace(/[\W|_]/g, "").toLowerCase();
        if (s.length < 2) {
            return true;
        }
        let left = 0;
        let right = s.length - 1;
        while (left < right) {
            if (s[left] !== s[right]) {//对撞指针判断左右两边是否是相同的字符
                return false;
            }
            left++;
            right--;
        }
        return true;
    }

    // 循环找出回文字段
    while (condition) {
        if (firstIndex >= length) {
            condition = false
        } else {
            if (lastIndex <= length + 1) {
                splitChats = s.slice(firstIndex, lastIndex);
            //    判断截取的字段是否为回文字段
                if (isPalindrome2(splitChats)) {
                    resultArray.push(splitChats)
                    // 找到最长字段是多长
                    maxFlagIndex = splitChats.length + 1
                }
                lastIndex++
            } else {
                if (length - firstIndex < maxFlagIndex) {
                    condition = false
                } else {
                    firstIndex++
                    // 由于只需找出最长的字段，所以每次只需找出比现有的字段的更长的即可
                    lastIndex = firstIndex + maxFlagIndex
                }

            }

        }
    }
    // 只需取出最后一个即可，因为最后一个肯定是最长的
    return resultArray[resultArray.length - 1];
};

// @lc code=end

