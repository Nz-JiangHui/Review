/**
 * Created by Nz on 2018/3/5.
 */
var sum  = require('./sum')

function callSum(num1, num2) {
    return sum.call(this, num1, num2)
}

console.log(callSum(10,10));