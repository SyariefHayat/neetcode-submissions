class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let ans = [];
        let rightMax = -1;

        for (let i = arr.length - 1; i > -1; i--) {
            ans[i] = rightMax;
            if (arr[i] > rightMax) {
                rightMax = arr[i];
            }
        }

        return ans;
    }
}
