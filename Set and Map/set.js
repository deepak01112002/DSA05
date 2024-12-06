
const mySet = new Set()

mySet.add(1)
mySet.add(2);
mySet.add(3)
mySet.add(4)
mySet.add(5)

// for(let value of mySet ){
//     console.log(value)
// }


// Map

const myMap = new Map()


myMap.set('name', 'deepak')
myMap.set(1,'a')


for(let [key,value] of myMap){
    console.log(key,value)
}