class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let ans = [];

        for (let i = 0; i < 2; i++) {
            for (let i of nums) {
                ans.push(i);
            }
        }

        return ans;
    }
}
