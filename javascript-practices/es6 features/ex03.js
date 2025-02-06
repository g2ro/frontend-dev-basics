/*
    Default Parameter
 
*/

const print = function(strs, end='\n'){
    console.log(strs.join(end));
};

print(['Hello', 'World', '!']);
print(['Hello', 'World', '!'], ' ');