class ListNode {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class MyLinkedList {
    constructor() {
        this.left = new ListNode(0);
        this.right = new ListNode(0);

        this.left.next = this.right;
        this.right.prev = this.left;
    }

    /**
     * @param {number} index
     * @return {ListNode}
     */
    getPrev(index) {}

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        let curr = this.left.next;

        while(curr && index > 0) {
            curr = curr.next;
            index--;
        }

        if(curr && curr !== this.right && index === 0) {
            return curr.val;
        } else {
            return -1;
        }
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtHead(val) {
        const node = new ListNode(val);
        let prev = this.left;
        let next = this.left.next;

        prev.next = node;
        next.prev = node;
        node.next = next;
        node.prev = prev;        
    }

    /**
     * @param {number} val
     * @return {void}
     */
    addAtTail(val) {
        const node = new ListNode(val);
        let prev = this.right.prev;
        let next = this.right;

        prev.next = node;
        next.prev = node;
        node.next = next;
        node.prev = prev;
    }

    /**
     * @param {number} index
     * @param {number} val
     * @return {void}
     */
    addAtIndex(index, val) {
        let curr = this.left.next;

        while(curr && index > 0) {
            curr = curr.next;
            index--;
        }

        if(curr && index === 0) {
            const node = new ListNode(val);
            let prev = curr.prev;
            let next = curr;

            prev.next = node;
            next.prev = node;
            node.next = next;
            node.prev = prev;
        } else {
            return -1;
        }
    }

    /**
     * @param {number} index
     * @return {void}
     */
    deleteAtIndex(index) {
        let curr = this.left.next;

        while(curr && index > 0) {
            curr = curr.next;
            index--;
        }

        if(curr && curr !== this.right && index === 0) {
            let prev = curr.prev;
            let next = curr.next;

            prev.next = next;
            next.prev = prev;
        } else {
            return -1;
        }
    }
}
