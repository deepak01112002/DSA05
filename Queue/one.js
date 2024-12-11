let queue = []

function enqueue(q,a){
   q.push(a)
}

function dequeue(){
   return queue.shift()
}

function front(){
    return queue[0]
}

function rear(){
    return queue[queue.length - 1]
}


function reverseQueue(){
     let stack = [];
     let ansQueue = [];
     while(queue.length){
        let a = dequeue()
         stack.push(a)
     }
     while(stack.length){
        enqueue(ansQueue,stack.pop())
     }
     console.log(ansQueue)
}





enqueue(10)
enqueue(20)
enqueue(30)
enqueue(40)
enqueue(50)

reverseQueue()

