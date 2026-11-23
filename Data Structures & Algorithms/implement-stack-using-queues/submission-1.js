class MyStack {
    constructor() {
        this.q = [];
    }

    push(x) {
        this.q.push(x);
    }

    pop() {
        const size = this.q.length;

        for (let i = 0; i < size - 1; i++) {
            this.q.push(this.q.shift());
        }

        return this.q.shift();
    }

    top() {
        const size = this.q.length;

        for (let i = 0; i < size - 1; i++) {
            this.q.push(this.q.shift());
        }

        const value = this.q[0];

        this.q.push(this.q.shift());

        return value;
    }

    empty() {
        return this.q.length === 0;
    }
}