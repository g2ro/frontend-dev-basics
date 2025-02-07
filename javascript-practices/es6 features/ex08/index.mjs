console.log('===[Test: Unnamed Export Module]'); // Unnamed Export Module Import 에서은 반드시 이름을 지정해야 한다.
import myFunction from './mods/ex01.mjs';
console.log(myFunction(10, 20));

import myObject from './mods/ex02.mjs'; // 관례상 import를 맨 앞으로 넣는다 => 문법적으론 import 를 중간에 넣을 수 있지만, 실행이 import로 인해 잠깐 멈춤이 발생할 수 있고, 이는 성능저하를 발생시킨다.
console.log(myObject.add(10, 20));
console.log(myObject.substract(20, 10));

console.log('===[Test: named Export Module II]'); // Named Export 모듈의 다수 객체 Destrcting Import
import {substract} from './mods/ex03.mjs';
console.log(substract(10, 20));

console.log('===[Test: Named Export Module ]'); // Named Export Module은 다수의 객체를 Export 하기 때문에 Import 할 때 특정 이름을 지정할 수 없다. 대신, '* as 이름' 를 사용할 수 있다.
import * as m from './mods/ex03.mjs'; // name export시 모든 객체를 받고 싶다면 as 이름으로 묶어서 사용한다.
console.log(m.add(10,20));
console.log(m.substract(10,20))


console.log('===[Test: Named + Unamed Export Module]')
import math, {add} from './mods/ex04.mjs';

console.log(math.add(10, 20));
console.log(add(10, 20));
