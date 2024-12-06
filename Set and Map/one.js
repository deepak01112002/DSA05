let arr = [1,2,2,2,2,3,3,4,5]
let a = []
const ans  = new Set(arr)

for(let value of ans){
    a.push(value)
}

console.log(a)