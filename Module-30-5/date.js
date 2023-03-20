const date = new Date();


const date1 = new Date('2022-03-23');
const date2 = new Date('2022-04-22');

console.log(date1);
console.log(date2);
if(date1.getTime() < date2.getTime()){
    console.log('march before april');
}
else{
    console.log('march was not before april')
}
