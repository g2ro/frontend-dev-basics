/*
    promise 지원 비동기 함수 사용 II: async ~ await
*/

const {fn02} = require('./fns');

// test: success
const fn = async (param) => {
    const result = await fn02(param);
    console.log(result);
}

fn('params~~');
fn(null);

console.log('wait...')