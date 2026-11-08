class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const dupli = [...nums, ...nums];

        return dupli;
    }
}
