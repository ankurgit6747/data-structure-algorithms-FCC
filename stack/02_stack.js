console.log('Stack 2');

var Stack = function() {
    this.count = 0
    this.storage = {}

    // Add a value to the end of stack
    this.push = function(value) {
        this.storage[this.count] = value
        this.count++
    }
 
    // Remove and return the value at the end of stack
    this.pop = function(value) {
        if(this.count === 0) {
            return undefined
        }

        this.count--;
        var result = this.storage[this.count]
        delete this.storage[this.count];
        return result
    }

    this.size = function() {
        return this.count
    }

    // Return the end value of stack
    this.peek = function() {
        return this.storage[this.count - 1]
    }

}

var myStack = new Stack()

myStack.push(3)
myStack.push(4)
myStack.push(2)
myStack.push(7)
myStack.push(8)
myStack.pop()
console.log(myStack.size());
console.log(myStack.peek());

