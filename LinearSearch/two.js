// Find the Index of the Last Occurrence of an Element
// Given an array of integers, return the index of the last occurrence of a target element. If the target is not found, return -1.

// Example:
// Input: [1, 2, 3, 2, 4], target: 2
// Output: 3

let arr = [1,2,3,2,4];
let target = 2;

let newarr = [];
function call()
{

    
    for(let i=0; i<arr.length; i++)
        {
            
            if(target == arr[i])
                {
                    newarr.push(i);
                }
                
            }
            
        return newarr[newarr.length-1];
}
// newarr = [1,3];
console.log(call());
