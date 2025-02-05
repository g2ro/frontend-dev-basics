/*
    자바스크립트 함수
*/


console.log("============[01.01] 함수를 생성(정의) 방법: literal1");
function f1(a, b){
    return a + b;
}
console.log(typeof(f1), f1(10, 20));

console.log("============[01.02] 함수를 생성(정의) 방법: literal2");
var f2 = function(a,b){
    return a + b;
}
console.log(typeof(f2), f2(10, 20));

console.log("============[01.03] 함수를 생성(정의) 방법: Function() 생성자 함수");
var f3 = new Function("a", "b", " return a + b");
console.log(typeof(f3), f3(10, 20));

console.log("============[01.04] 함수를 생성(정의) 방법: 익명(Anonymous) 함수");
setTimeout(function(){
    console.log('time out');
}, 1000);
// 비동기

// var f = function(){

// };
// setTimeout(f);
// => 다음 구문을 생각해보면 이해하기 쉽다.
// var i = 10;
// m(i);
console.log("============[01.05] 함수를 생성(정의) 방법: 즉시 실행 함수");
var s = (function(a,b){
    return a + b;
})(10,20); // => (10)이라고 생각하면 됨.
console.log(s);

var result = (function(){
    var i =10;
    var j = 20;

    var o ={
    }
    return o;
})(); // => 로직으로 인해 실행해야할 변수들이 많은 경우에 사용함,
// 해당 변수들이 전역변수에서 사용되면 불필요한 메모리가 사용된다 따라서 함수 블럭에다 담아 초기화시킴.

console.log("============[02] 기변 파라미터");
// Array.prototype.forEach = function(callback){
//     for(var i = 0; i < this.length; i++){
//         callback(this[0], i);
//     }
// }
var sum = function(){
    var sum =0;
    // 구현1
    // for(var i = 0; i< arguments.length; i++){
    //     sum += arguments[i];
    // }


    // 구현2 : error
    // arguments는 Array가 아니다 : 유사배열
    // forEach는 arguments 함수가 아니기 때문이다.
    // console.log(arguments instanceof Array);

    // arguments.forEach(function(e){
    //     sum += e;
    // });
    
    // Array.prototype.forEach 직접 호출 + caller(this) 바꾸기
    Array.prototype.forEach.call(arguments, function(e){
        sum += e;
    });
    return sum;
}

console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3,4));
console.log(sum(1,2,3,4,5,6));

console.log("============[03] caller(this) 바꾸기");
var myObject = {
    v: 'me',
    f1: function(){
        console.log(this.v);
    },

    f2: function(param1){
        console.log(param1 + ' ' + this.v);
    }
};

// 일반적인 객체의 함수 호출
myObject.f1();

// apply: 호출되는 함수의 this를 파라미터로 전달되는 객체로 바꿔서 즉시 그 함수를 호출한다. // 파라미터가 없는 함수인 경우에 사용
var yourObject = {
    v: "you"
}

myObject.f1.apply(yourObject);

// call: 호출되는 함수의 this를 첫번째 파라미터로 전달되는 객체로 바꿔서 즉시 그 함수를 호출한다.
myObject.f2.call(yourObject, "Hello");

// bind: 호출되기 전의 함수의 this를 파파미터 전달되는 객체로 바인드한다.
var f3 = function(){
    console.log(this.v);
}.bind(myObject);

f3();