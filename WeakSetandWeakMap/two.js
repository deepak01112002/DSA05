

const myMap = new WeakMap()

let obj = {name : "deepak"}
let obj1 = {name : "pandey"} 

myMap.set(obj,"deepak")

console.log(myMap.get(obj))
console.log(myMap.has(obj))
console.log(myMap.has(obj1))
myMap.delete(obj)
console.log(myMap.has(obj))