let arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

// output = [
//     [1,4,7],
//     [2,5,8],
//     [3,6,9]
// ]

let mat = []
for(let i=0; i<arr.length; i++){
    mat[i] = []
    for(let j=0;j<arr[i].length; j++){
        mat[i][j] = arr[j][i]
    }
}

console.log(mat)