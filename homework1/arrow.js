//  Implement an arrow function with feature below:
// concat('hi', [1,2,3], ['Hello','world']) -> return result: ['h', 'i', 1,2,3, 'Hello','world']



const concat=(str,numArr,strArr)=>{

    let newArr=[...str,...numArr,...strArr]
    return newArr
}
console.log(concat("hi", [1, 2, 3], ["Hello", "world"]));