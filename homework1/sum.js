// Create a function using function declaration named sum with one parameter of Array type, the
// returned result is the sum of all elements which are greater than 20.


// function sum(arr){
//     let total=0;

// arr.filter(x=>(x>20))
//      total+=x
    

// return total
// }
// sum()
// let arr1 = [1, 21, 32, 2, 9];

// console.log(sum)



function sum (arr){
    arr=[1,21,32,2,9]
let total=0;
for(let num of arr){
    if (num>20){
        total+=num
    }
}
return total
}
console.log(sum())