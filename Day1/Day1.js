// we have one array and one Target we have to Find that Target , If target present than we have to return its index else -1

// let arr = [1,2,3,4,5,6];
//  let target = 5;
//  output = 4; 


// let arr = [1,2,3,4,5,6];
//  let target = 9;
//  output = -1; 

// let bag = -1

// for(let x=0; x<arr.length; x++){
//     if(arr[x] == target){
//         bag = x;
//     }
// }

// console.log(bag)

let arr = [1,2,3,4,5,6];
 let target = 9;

function solve(){
    for(let x=0; x<arr.length; x++){
        if(arr[x] == target){
            return x;
        }
    }

    return -1
}

console.log(solve())