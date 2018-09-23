// good
class Queue {
    constructor(contents = []) {
        this.queue = [...contents];
    }

    pop() {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    }
}

// inheritance

class PeekableQueue extends Queue {
    peek() {
        return this.queue[0];
    }
}

// methods return this
class Jedi {
    jump() {
        this.jumping = true;
        return this;
    }

    setHeight(height) {
        this.height = height;
        return this;
    }
}

const luke = new Jedi();

console.log(luke.jump());
console.log(luke.jump().setHeight(20));

// ================================

// write custom toString()

class Jedi2 {
    constructor(options = {}) {
        this.name = options.name || 'no name';
    }

    getName() {
        return this.name;
    }

    toString() {
        return `Jedi - ${this.getName()}`;
    }
}


let sky = new Jedi2({name: 'art'})
console.log(sky.toString());