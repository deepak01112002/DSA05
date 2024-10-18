// Find the maximum Element  from the Array;

// let arr = [1,2,3,4,5,6];
//  output = 6; 


// let arr = [1,9,3,8,5,6];
//  output = 9; 

// let arr = [-1,-9,-6,-5,-4]
// output = -1

let max = -Infinity;

for(let x=0; x<arr.length; x++){
    if(max < arr[x]){
        max = arr[x]
    }
}

console.log(max)


