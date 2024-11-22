let arr = [1,2,3,4,6]
let max = -Infinity
for(let x=0; x<arr.length; x++){
    let a = 0
    for(let i= x; i<arr.length ;i++){
        a += arr[i]
        // if(a > max){
        //     max = a
        // }
        max = Math.max(a,max)
    }
}
console.log(max)