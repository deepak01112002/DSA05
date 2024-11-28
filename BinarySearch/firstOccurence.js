let arr = [1,2,2,2,12,19]
let target = 2;
let low = 0;
let high = arr.length - 1

let ans = -1
while(low <= high){
    let mid = Math.floor((low + high) / 2)
    if(arr[mid] == target){
       ans = mid;
       high = mid - 1
    }
    if(arr[mid] < target){
        low = mid + 1
    }else if(arr[mid] > target){
       high = mid - 1
    }
}

console.log(ans)