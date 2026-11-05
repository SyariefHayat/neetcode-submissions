class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let rightMax = -1;

        for (let i = arr.length - 1; i > -1; i--) {
            let current = arr[i];
            arr[i] = rightMax;

            if (current > rightMax) {
                rightMax = current;
            }
        }

        return arr;
    }
}
