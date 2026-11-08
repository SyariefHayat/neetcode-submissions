class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for(const operation of operations) {
            if (operation === "+") {
                const top = stack.pop();
                const newTop = top + stack[stack.length - 1];

                stack.push(top);
                stack.push(newTop);
            } else if (operation === "D") {
                stack.push(2 * stack[stack.length - 1]);
            } else if (operation === "C") {
                stack.pop();
            } else {
                stack.push(parseInt(operation));
            }
        }

        return stack.reduce((a, b) => a + b, 0);
    }
}