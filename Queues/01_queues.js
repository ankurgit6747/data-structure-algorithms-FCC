// It is similar like a sets
// Queues is first in first out not like sets

function Queue() {
    var collection = [];

    this.print = function(){
        console.log(collection);
    }

    // Put an item on to the queue
    this.enqueue = function(element){
        collection.push(element);
    }

    // Remove first item of the array
    this.dequeue = function(){
        collection.shift();
    }

    this.front = function(){
        return collection[0];
    }

    this.seze = function(){
        return collection.length
    }

    this.empty = function(){
        return (collection.length === 0)
    }
}

var q = new Queue();

q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.enqueue('d')

q.print()
