/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] N 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 * 
 * 根据题意分析规律可知：
 * 1、其是一个二维数组；
 * 2、行数为numRows；
 * 3、当列数为列数取余numRows-1等于0时，应该全部填充 s中的字符串；
 * 4、当列数取余numRows-1不等于0时，只有行数等于((numRows - 1) - flagIndex)才获取s中的字符串，其余填充空字符串；
 * 5、最终循环拼接二维数组，得到想要的结果；
 */
var convert = function (s, numRows) {
    const characterLength = s.length
    // 当字符串长度小于等于所需numRows或者numRows等于1时，直接返回字符串
    if (characterLength <= numRows || numRows === 1) {
        return s
    }
    // 将字符串转换为数组
    const characterArray = s.split('')
    // 最终结果数组
    let itemArray = new Array()
    // 循环获取字符串值
    for (let index = 0; index < characterArray.length; true) {
    //    因为其为一个二维数组，定义列循环指针
        for (let itemColumn = 0; index < characterArray.length; itemColumn++) {
            // 定义行循环指针
            for (let itemRow = 0; itemRow < numRows; itemRow++) {
                // 初始化时格式化为一个二维数组
                if (itemColumn === 0) {
                    itemArray[itemRow] = new Array()
                }
                let flagIndex = itemColumn % (numRows - 1)
                // 当列数取余numRows - 1为0时应该填充字符串
                if (flagIndex === 0) {
                    if (characterArray[index]) {
                        itemArray[itemRow][itemColumn] = characterArray[index]
                    } else {
                        itemArray[itemRow][itemColumn] = ''
                    }
                    
                    index++
                } else {
                    // 当取余不为0时，只有当(numRows - 1) - flagIndex等于当前行数时取值，
                    // 其余全部填充空字符串
                    if (itemRow === ((numRows - 1) - flagIndex)) {
                        itemArray[itemRow][itemColumn] = characterArray[index]
                        index++
                    } else {
                        itemArray[itemRow][itemColumn] = ''
                    }

                }
            }

        }

    }
    // 拼接最终结果
    let finalString = ""
    itemArray.forEach(element => {
        finalString += element.join('')
    });
    return finalString
};
// @lc code=end

