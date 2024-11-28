let arr = [2,4,6,9,12,19]
let target = 12;
let low = 0;
let high = arr.length - 1


while(low <= high){
    let mid = Math.floor((low + high)/2)
    if(arr[mid] == target){
      console.log(mid);
      break;
    }

    if(arr[mid] < target){
        low = mid + 1
    }else if(arr[mid] > target){
       high = mid - 1
    }

}