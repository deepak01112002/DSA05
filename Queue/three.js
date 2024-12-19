let s1 = []; // Stack used for enqueue operations
let s2 = []; // Stack used for dequeue operations

// Function to add an element to the queue
function enqueue(element) {
    s1.push(element); // Push element onto stack s1
}

// Function to remove an element from the queue
function dequeue() {
    // If both stacks are empty, queue is empty
    if (s1.length === 0 && s2.length === 0) {
        console.log("Queue is empty!");
        return null;
    }

    // If s2 is empty, move all elements from s1 to s2
    if (s2.length === 0) {
        while (s1.length > 0) {
            s2.push(s1.pop());
        }
    }

    // Return the top element from s2
    return s2.pop();
}

// Test the queue
enqueue(10);
enqueue(20);
enqueue(30);
enqueue(40);
enqueue(50);

console.log(dequeue()); // 10
console.log(dequeue()); // 20
enqueue(60);
console.log(dequeue()); // 30
console.log(dequeue()); // 40
console.log(dequeue()); // 50
console.log(dequeue()); // 60
console.log(dequeue()); // Queue is empty!
