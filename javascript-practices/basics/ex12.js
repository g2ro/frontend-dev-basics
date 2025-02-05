/* Lexical Scope */
// 어휘적인 scope, 문법적인 scope => 눈으로 언제 생기고 언제 사라지는지 알 수 있는 scope
var f1 = function(){
    var s = "hello world";

    var inner = function(){
        console.log(s);
    }

    inner();
}

f1();

/* Closure is a function that has access to the outer function's scope in which it was created even after the outer function has finished executing. */
var f2 = function(){
    var s = "hello world";

    var inner = function(){
        console.log(s);
    }

    return inner
}

var Closure = f2(); // 전역 변수 회피
Closure();
