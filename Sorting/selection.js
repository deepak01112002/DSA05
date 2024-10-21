let arr = [53,2,1254,4,5,6];

for(let x=0; x<=arr.length-2;x++){
    let min = x;
    for(let i=x+1; i<arr.length; i++){
         if(arr[i] < arr[min]){
            min = i;
         }
    }
    let temp = arr[min];
    arr[min] = arr[x];
    arr[x] = temp;
}
console.log(arr)