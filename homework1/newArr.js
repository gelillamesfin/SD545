// Create a function using function expression named getNewArray with one parameter of String
//Array, return a new array which contains all string, length is greater 
//than and equal to 5, and contains letter ‘a’.


const getNewArray= function(arr){
  for (let str of arr){
  let newarr= arr.filter(char=>char.includes('a')&& char.length >=5)
  return newarr
  }
}
console.log(getNewArray(['hello','array','apple']))


