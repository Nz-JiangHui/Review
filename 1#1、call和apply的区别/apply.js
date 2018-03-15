/**
 * Created by Nz on 2018/3/5.
 */
var sum  = require('./sum')

function callSum(num1, num2) {
    return sum.apply(this, arguments)
}
console.log(callSum(10, 10));

function callSum2(num1, num2) {
    return sum.apply(this, [num1, num2])
}

console.log(callSum2(10, 10));