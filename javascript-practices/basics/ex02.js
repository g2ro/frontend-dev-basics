console.log("============[02.02] 표현식(Expression)");
i = 4
2 + 2
parseInt('4')
Math.pow(2,2)
4

console.log("============[05] 세미콜론(Semicolon)");
a = 10; b = 20; 
a = 10, b = 20; // 디버깅시 실행 위치가 달라진다? => 차이점 생각해보기
// 표현식의 실행 단위가 된다.

console.log("============[06] 개행(Line Break)"); // 개행의 역할은 세미클론을 붙여서 실행하게 된다.
a = 10
b = 20 
// => 
a = 10;
b = 20;
// 이렇게 개행의 경우 자동으로 세미클론이 붙게된다.

i = 2
console.log(i)

// 개행에 대한 설명이 맞다면 아래의 코드가 실행되면 안 된다. => 개행이 무조건 세미클론이 붙지 않는다. -> 아래의 경우에는 white space로 변경된다. 즉 js engine에서 개행 처리를 자동으로 진행해준다.
k
=
10
console.log(k) // 실행되는 이유

// error: undefined error
// console.lo
// g("hello world")
// console.lo 자체에 문법적인 오류가 없기 때문에 개행이 ;으로 바뀐다.
// g("hello world") 이때 g라는 메소드가 없기 때문에 undefined error가 발생하게 된다.