/*
    Destruction(구조분해)
*/


console.log('---[1. basic]');
const user = {
    firstName: '둘',
    lastName: '리',
    age: 10
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// const age = user.age;
const {firstName, lastName, age} = user;
console.log(firstName, lastName, age);


console.log('---[2. Default Value]');
const goods1 = {name: 'TV', price: 1000, countStock: 10};
const goods2 = {name: 'TV', price: 2000, countSold: 20};
const goods3 = {name: 'TV',price: 1000};

const printGoods = function({name, price, countStock=0, countSold=0}) {
    console.log(name, price, countSold, countStock);
}

printGoods(goods1);
printGoods(goods2);
printGoods(goods3);


console.log('---[3. 구조 분해 대상이 되는 객체의 속성 이름과 다른 이름 사용]');
const person = {
    n: '마이콜',
    c: 'korea'
};

const printPerson = ({n: name, c: country}) => console.log(name, country);
printPerson(person);


console.log('---[4. 내부객체(netsted object)의 구조분해]');
const student = {
    email: 'dooly@gmail.com',
    score: {
        math: 30,
        korean: 100,
        science: 60
    }
}

const {email, score: {math, korean, science} } = student;
console.log(email, math, korean, science);


console.log('---[5. 함수 파라미터]');
const avgScore = ({email, score:{math, korean, science, music=0}}) => console.log(`${email}:${(math + korean + science + music) / 4}`);
avgScore(student);


console.log('---[6. 배열의 구조 분해: Basic]');
const color = [155, 200, 75];

let [red, green, blue] = color;
console.log(red, green, blue);


console.log('---[7. 배열의 구조 분해: Default Value]');
[red, green, blue, alpha=0] = color;
console.log(red, green, blue);


console.log('---[8. 배열의 구조 분해: skip value]');
const[,,colorOfBlue] = color;
console.log(colorOfBlue);


console.log('---[9. Swap]');
let x = 10;
let y = 20;

console.log(x, y);
[y, x] = [x, y];
console.log(x, y);


console.log('---[10. Spread Operator]');
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const [firstColor, secondColor, ...otherColors] = colors;
console.log(firstColor, secondColor, otherColors);

console.log('---[10.01 가변 파라미터 함수]');
const printColor = function() {
    Array.from(arguments).forEach(e => console.log(e));
}

printColor('red', 'orange');
// printColor(colors[0], colors[1], colors[2], colors[3], colors[4], colors[5], colors[6]);
printColor(...colors);

console.log('---[10.02 함수 파라미터 이름에 사용]');
const printColor2 = function(...colors) {
    console.log(colors);
}

printColor2('red', 'yeallow', 'black');
