class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let ans = []

        for (let i = 0; i < arr.length; i++) {
            let rightMax = -1;

            for (let j = i + 1; j < arr.length; j++) {
                if (arr[j] > rightMax) {
                    rightMax = arr[j];
                }
            }

            ans[i] = rightMax;
        }

        return ans;
    }
}
