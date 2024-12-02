let arr = [4,5,6,7,0,1,2,3]
let target = 6;
let low = 0;
let high = arr.length - 1;

function add(){
    while(low <= high){
        let mid = Math.floor((low + high) / 2)
   
        if(target == arr[mid]){
           console.log(mid)
           break;
        }
   
        if(arr[low] <= arr[mid] ){
            if(target >= arr[low] && target < arr[mid] ){
                high = mid - 1
            }else{
                low = mid + 1
            }
        
        }else{
            if(target > arr[mid] && target <= arr[high]){
               low = mid + 1
            }else{
               high = mid - 1
            }
        }
   }
   return -1
}

add()