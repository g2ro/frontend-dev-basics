/*
    Unnamed Export Module
    
    1. default 키워드를 사용
    2. 주의: 이름 없이 export 되기 때문에 하나만 export 할 수 있다.

 */

// 방법 1
// export default{
//     add: (a, b) => a + b,
//     substract: (a, b) => a - b
// }

// 방법 2
const add = (a, b) => a + b;
const substract = (a, b) => a - b;

export default {add, substract};

// 위의 export는 아래의 export 문을 축약한 버전이다.

// export default{
//     add: add,
//     substract: substract
// }
