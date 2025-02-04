var MyMath = function(name) {
    console.log("MyObject called");

    this.name = name;
};

console.log("============[02.02] prototype 객체");
console.log(MyMath.prototype);

console.log("============[02.03] prototype.constructor");
console.log(MyMath.prototype.constructor);

console.log("============[02.04] prototype 객체 확장");
MyMath.prototype.add = function(a,b){
    return a + b;
}
MyMath.prototype.PI = 3.14;
console.log(MyMath.prototype);

console.log("============[03.03] MyMath 생성자 함수로 생성한 일반 객체의 __proto__ 객체");
var math = new MyMath('mymath');
console.log(math.__proto__ === MyMath.prototype);
console.log(MyMath.prototype.__proto__ === Object.prototype);
console.log("============[03.04] 리터럴 {}로 정의한 일반 객체의 __proto__ 객체");
var obj = {};
console.log(obj.__proto__ === Object.prototype);

console.log("============[04.01] prototype 객체 속성 접근(상속)");
console.log(math.add(10, -20), math.PI);


console.log("============[04.02] prototype 객체 속성 오버라이드");
math.add = function(a,b){
    return Math.abs(a) + Math.abs(b);
}
console.log(math.add(10, -20), math.PI);

console.log("============[04.03] 생성 객체만의 속성");
math.subtract = function(a,b){
    return a - b;
}
console.log(math.subtract(10,20));

console.log("============[05.01] prototype 객체의 '__proto__' 속성 확인");
console.log(MyMath.prototype.__proto__ === Object.prototype);

console.log("============[05.02] Object.prototype 객체 속성 사용하기");
console.log(math.toString(), math.hasOwnProperty('add'));
math.toString = function(){
    var a = 10;
    return `[MyMath ${this.name}]`; // 리터럴
}

console.log(math.toString());

console.log("============[05.03] function 객체의 __proto__ 확인");
console.log(MyMath.__proto__ === Function.prototype)

console.log("============[06] Function.prototype 객체 속성 사용하기");
// apply의 경우 파라미터가 없을때 사용한다. 단 caller(this)는 넣을 수 있다.
console.log(math.toString.apply({name:'ㅋㅋㅋㅋ'})); // 실행시켜보면 caller가 변한 것을 확인할 수 있다.
console.log(math.add.call(null, 10, -20));


// var MyObject = function(){
// }
// MyObject.prototype.m1 = function(){
//     console.log("m1");
// }; 

// var o1 = new MyObject();
// o1.m1();

// var o2 = new MyObject();
// o2.m1();

// var o3 = new MyObject();
// o3.m1 = function(){
//     console.log("o3.m1");
// }

// o3.m1(); // override