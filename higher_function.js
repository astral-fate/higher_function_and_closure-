'strict mode'

//const arr = [1,2,3,4,5,6]

function copy2array (array, instruction){

    const output = [];
    for(let i =0; i<array.length; i++)
    output.push(instruction[i]);
    return output;
}

function multplyarray(input) {

    return copy2array *2;
}

const result = copy2array([1,2,3,4,5,6], multplyarray);
console.log(result);