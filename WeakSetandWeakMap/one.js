// add()
// delete()
// has()


const mySet = new WeakSet()


let obj = {name : "deepak"}
let obj1 = {name : "pandey"} 

mySet.add(obj)
mySet.add(obj1)

console.log(mySet.has({a : "1"}))