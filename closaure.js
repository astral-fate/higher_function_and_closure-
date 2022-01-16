'use strict'

function createfunction(){

    function multplyby2(num){
        return num * 2;
    }

    
    return multplyby2;
}

const generatedfunction = createfunction();
const result = generatedfunction(3);

console.log(result);