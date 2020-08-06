interface Iterator {

    next(): any;
    hasNext(): bool;
}

interface Aggregator {
    createIterator(): Iterator;
}

class ConcreteIterator implements Iterator {
    private collection: any[] = [];
    private position: number = 0;

    constructor(collection: any[]) {
        this.collection = collection;
    }

    public next(): any {
        // Error handling is left out
        var result = this.collection[this.position];
        this.position += 1;
        return result;
    }

    public hasNext(): bool {
        if (this.position < this.collection.length) {
            return true;
        } else {
            return false;
        }
    }
}

class Numbers implements Aggregator {
    private collection: number[] = [];

    constructor(collection: number[]) {
        this.collection = collection;
    }
    public createIterator(): Iterator {
        return new ConcreteIterator(this.collection);
    }
}

(function main() {
    var nArray = [1, 7, 21, 657, 3, 2, 765, 13, 65],
        numbers: Numbers = new Numbers(nArray),
        it: ConcreteIterator = <ConcreteIterator>numbers.createIterator();

    while (it.hasNext()) {
        console.log(it.next());
    }
}());