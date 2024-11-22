let arr = [1,2,3,4,6]
let max = -Infinity
let currentSum  = 0;
for(let x=0; x<arr.length; x++){
   currentSum += arr[x];
   max = Math.max(currentSum,max)
   if(currentSum < 0){
     currentSum = 0
   }
}

console.log(max)