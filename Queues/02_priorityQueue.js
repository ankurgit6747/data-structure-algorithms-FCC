function PriorityQueue() {
    var collection = [];

    this.printCollection = function() {
        console.log(collection);
    }

    this.isEmpty = function() {
        return (collection.length === 0);
    }

    this.enqueue = function(element) {
        if(this.isEmpty()) {
            collection.push(element);
        } else {
            var added = false;

            for(let i=0 ; i<collection.length ; i++) {
                if(element[1] < collection[i][1]) {  // checking priority
                    collection.splice(i, 0, element);
                    added = true;
                    break;
                }
            }
            if(!added) {
                collection.push(element);
            }
        }
    }

    this.dequeue = function() {
        var value = collection.shift();
        return value[0]
    }

    this.from = function() {
        return collection[0]
    }

    this.size = function() {
        return collection.length
    }
}

var pq = new PriorityQueue()
// pq.enqueue('dsf')
pq.enqueue("Kumar", 2)
pq.enqueue("Ankur", 1)
pq.enqueue("Sharma", 3)
    // pq.enqueue("Surname is :", 2)

pq.printCollection()