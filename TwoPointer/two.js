


function a(){
    let s = "hello";
    let str = s.split("")
    let left = 0;
    let right = str.length - 1
    while(left < right){
        // let temp = str[left];
        // str[left] = str[right];
        // str[right] = temp;
        [str[left],str[right]] = [str[right],str[left]]
        left++;
        right--
    }
    return str.join("")
}

console.log(a())