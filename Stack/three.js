let str = '{[(])}'
let stack = []

function check(){
    for(let char of str){
        if(['{','[','('].includes(char)){
           stack.push(char)
        }else if(['}',']',')'].includes(char)){
              let a = stack.pop()
              if((a == "(" && char != ")" ) || (a == "{" && char != "}") || (a == "[" && char != "]") ){
                return false
              }
        }
    
    }
    
    return stack.length == 0
}


console.log(check())