let arr = [1,2,2,2,2,3,3,4,5]

let myMap = new Map()

for(let val of arr){
   if(myMap.has(val)){
     myMap.set(val,myMap.get(val) + 1)
   }else{
      myMap.set(val,1)
   }
}
console.log(myMap);

let max = -Infinity  // 4
let ans = null; // 2
for(let [key,value] of myMap){
    if(value > max){
        max = value
        ans = key
    }
}
console.log(ans,max)


let a = [1,2,3]
let b = [3,4,5]

// [1,2,3,4,5]