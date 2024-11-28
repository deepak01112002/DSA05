function a(n){
    if(n == 0){
        return 1;
    }
    return n * a(n - 1)

}

console.log(a(5))