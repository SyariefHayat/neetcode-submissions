class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MyLinkedList {
    constructor() {
        this.head = new ListNode();
        this.size = 0;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {
        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index < 0 || index >= this.size) {
            return -1;
        }

        return this.getPrev(index).next.val;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        this.addAtIndex(0, val);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        this.addAtIndex(this.size, val);
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        if (index < 0) {
            index = 0;
        }

        if (index > this.size) {
            return;
        }

        let prev = this.getPrev(index);
        let newNode = new ListNode(val);

        newNode.next = prev.next;
        prev.next = newNode;

        this.size++;
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        if (index < 0 || index >= this.size) {
            return;
        }

        let prev = this.getPrev(index);

        prev.next = prev.next.next;

        this.size--;
    }
}
