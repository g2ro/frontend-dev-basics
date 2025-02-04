console.log("============[01.01] 배열생성: 내장객체(생성자함수) 사용");
var a1 = new Array();
console.log(typeof(a1), a1 instanceof(Array), a1.length);

// 생성자 함수의 파라미터가 한 개인 경우: 배열의 크기
var a2 = new Array(10);
console.log(typeof(a2), a2 instanceof(Array), a2.length);

// 배열의 크기를 지정하는 것은 아무 의미가 없다. // 원소의 type이 달라도 괜찮다.
a2[0] = 0;
a2[1] = "hello";
a2[10] = {}; // 사이즈가 동적으로 늘어난다.
console.log(a2, a2.length);

// 생성자 함수의 파라미터가 두 개이상인 경우 : 배열 초기화
var a3 = new Array(0, "hello", {})
console. log(a3, a3.length);

console.log("============[01.02] 배열생성: 리터럴 사용");
var a4 = []; // new Array() 가장 많이 사용되는 방식
console.log(typeof(a4), a4 instanceof(Array), a4.length);

// 배열의 요소의 타입은 동일하지 않아도 된다.
var a5 = [10, 'JavaScript', {
    name: '둘리',
    age: 10
}, function(){
    console.log("hello world");
}, null];

a5[3]();
console.log("============[01.03] 배열순회");
for(var i = 0; i< a5.length; i++){
    console.log(a5[i]);
}

console.log("============[01.04] Array vs Object");
// 속성 이름에 차이가 있다
//Object는 속성의 이름이 정해져 있지만, Array의 경우에는 0,1,2,3,...로 접근
// 객체 모양은 같지만, length메서드의 유무가 차이가 존재한다.
var a6 = [];    // Array-new Array();
a6[0] = 0;
a6["1"] = 1;
a6["2"] = 2;
a6.name = '둘리';
a6.age = 10;
console.log(a6[0], a6[1], a6["name"], a6["age"], a6.length);

var o6 = {}; // Object-new Object();
o6[0] = 0;
o6["1"] = 1;
o6["2"] = 2;
o6.name = '둘리';
o6.age = 10;
console.log(o6[0], o6[1], o6["name"], o6["age"], o6.length);

var propName = "name";
o6[propName]

console.log("============[01.05] for ~ in: 객체");
for(var prop in o6){
    console.log(prop + ":" + o6[prop]);
}

console.log("============[01.06] for loop: 객체");
o6.length = 3;
for(var i = 0; i< o6.length; i++){
    console.log(o6[i]);
}

console.log("============[01.07] for ~ in: 배열");
for(var prop in a6){
    console.log(prop + ":" + a6[prop]);
}

console.log("============[01.08] for loop: 배열");
for(var i = 0; i< a6.length; i++){
    console.log(a6[i]);
}