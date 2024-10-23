let arr = [53,2,1254,4,5,6];


for(let x=0; x<= arr.length-2; x++){
    let flag = false;
    for(let i=0; i<=arr.length-x-1; i++){
        if(arr[i] > arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp; 
            flag = true;
        }
    }
    if(flag == false){
        break;
    }
}
console.log(arr)

