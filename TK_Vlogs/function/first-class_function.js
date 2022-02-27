// first-class function: sử dụng hàm như sử dụng object 

function fun1() {
    console.log("fun1");
}
// truyền vào một hàm 
function PassFunctionAsParameters(fun) { 
    
    fun();
    var f2 = function () {
        console.log("fun2");
    }
    // trả về một hàm 
    return f2;
}

PassFunctionAsParameters(fun1)();