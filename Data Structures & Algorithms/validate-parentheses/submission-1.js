class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        const bracketMap = new Map([
            [")", "("],
            ["]", "["],
            ["}", "{"]
        ]);

        for(const char of s) {
            if (bracketMap.has(char)) {
                const top = stack.pop();

                if(top !== bracketMap.get(char)) {
                    return false;
                }
            } else {
                stack.push(char);
            }
        }

        return stack.length === 0;
    }
}
