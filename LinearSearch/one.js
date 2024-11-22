// Count Occurrences of a Target Element
// Given an array and a target element, count how many times the target element appears in the array.

// Example:
// Input: [1, 2, 2, 3, 4, 2], target: 2
// Output: 3

let arr=[1, 2, 2, 3, 4, 2];
let target=2;
let count=-1;
function add(){

for(let i=0; i<arr.length; i++)
{
    if(arr[i]==target)
    {
        count++;
    }

}
return count

}

console.log(add())