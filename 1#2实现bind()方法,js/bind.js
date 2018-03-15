/**
 * Created by Nz on 2018/3/5.
 */
// if(!Function.prototype.bind){
    Function.prototype.bind = function (oThis) {
        if(typeof this !== "function"){
            // closest thing possible to the ECMAScript 5
            // internal IsCallable function
            throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
        }

        var aArgs = Array.prototype.slice.call(arguments,1),
            fToBind = this,
            fNOP = function () {},
            fBound = function () {
                return fToBind.apply(
                    this instanceof fNOP?
                    this:oThis,
                    //获取调用时（fBound)的传参.bind返回的函数入参往往是这么传递的
                    aArgs.concat(Array.prototype.slice.call(arguments))
                )
            };
        if(this.prototype){
            // Function.prototype doesn't have a prototype property
            fNOP.prototype = this.prototype;
        }

        fBound.prototype = new fNOP();

        return fBound;
    }
// }
var o = {
        a:'局部环境'
}
function text() {
    console.log(this.a);
}
var b = text.bind(o);
b()