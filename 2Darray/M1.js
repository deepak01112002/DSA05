let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// output =  [
//     [2,3,4],
//     [5,6,7],
//     [8,9,10]
// ]

for(let x=0; x<arr.length; x++){
    for(let i=0; i<arr[x].length; i++){
        arr[x][i] += 1
    }
    console.log(arr[x])
}
