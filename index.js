// No 1
// Mutating array methods is basically changing the array itself instead of returning a new array with the new changes whereas Non-Mutation is returning a whole new array which has all the changes
// Mutating Methods in JavaScript are array.copyWithin(), array.fill(), array.pop(), array.push(), array.reverse(), array.shift(), array.sort(), array.splice()
// Non-Mutating Methods in JavaScript are array.concat(), array.includes(), array.indexOf, array.join(), array.lastIndexOf, array.slice(), array.toString() and array.toLocaleString().

// No 2
var language = ["C#","JavaScript", "Ruby", "PHP", "Python"]
// 2a
language.push("Klotin")
// 2b
language.splice(3, 0 ,"Java")
// 2c
language.shift();
// 2d
language.unshift("Scala", "Swift")
// 2e
language.splice(2, 1,"Go", "Rust")

// No 3
undefined

// No 4
function getMaxValue(number) {
    return Math.max(...number)
    
}
getMaxValue([6, 9, 69]);
// ouput 69

// No 5

function valTimesIndex(newArray) {
    return newArray.map((val, index) => val * index);
 }
 valTimesIndex([5,7,9])
//  output [0, 7, 18 ]