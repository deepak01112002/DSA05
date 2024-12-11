let arr = [4,5,2,25] // output = [5,25,25,-1]
let stack = [];
let ans = new Array(arr.length).fill(-1)

for(let x=0; x<arr.length; x++){
   
    while(stack.length > 0 && arr[stack[stack.length-1]] < arr[x]){
        let index = stack.pop();
        ans[index] = arr[x]
    }

    stack.push(x)
}

console.log(ans);
