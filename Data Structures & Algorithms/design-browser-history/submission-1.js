class ListNode {
    constructor(val, prev = null, next = null) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }
}

class BrowserHistory {
    /**
     * @constructor
     * @param {string} homepage
     */
    constructor(homepage) {
        this.curr = new ListNode(homepage);
    }

    /**
     * @param {string} url
     * @return {void}
     */
    visit(url) {
        this.curr.next = new ListNode(url, this.curr);
        this.curr = this.curr.next;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    back(steps) {
        while(this.curr.prev && steps-- > 0) {
            this.curr = this.curr.prev;
        }

        return this.curr.val;
    }

    /**
     * @param {number} steps
     * @return {string}
     */
    forward(steps) {
        while(this.curr.next && steps-- > 0) {
            this.curr = this.curr.next;
        }

        return this.curr.val;
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
