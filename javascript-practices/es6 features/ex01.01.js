/*
    let & const I

*/

// let의 블록 범위
try{
    if(true){
        var i = 0; // 함수 범위?
        let j = 0; // 블럭 범위
        j = 20;
    }
    console.log(i);
    console.log(j);
}catch(e){
    console.log("error:" + e);
}
