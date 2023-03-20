const numbers = [10,20,30,40];

console.log(numbers);

if(Array.isArray(numbers)){
    console.log('This is Array');
}
else{
    console.log('This is not a Array')
}

const nanCheck = 'noman';

if(!isNaN(nanCheck)){
    console.log('This is Nan')
}
else{
    console.log('this is not a nan')
}

let name;
console.log(typeof name)
if(typeof name == 'undefined'){
    console.log('this value is undefined')
}else{
    console.log('this value is not undefined')
}