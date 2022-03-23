var plusOne = function(digits) {
    console.log(BigInt(digits.join('')) + BigInt(1));
    return (BigInt(digits.join('')) + BigInt(1)).toString().split('')
};

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
// 输入：
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// 输出：
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,0,0,0]
// 预期结果：
// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4]