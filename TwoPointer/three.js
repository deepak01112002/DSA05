let arr = [1,1,2,3,3,4];

function removeDuplicate(){
    let i = 0;
    for(let j=1; j<arr.length; j++){
        if(arr[i] != arr[j]){
            i++;
            arr[i] = arr[j]
        }
    }
    console.log(arr)
    return i + 1;
}

console.log(removeDuplicate())