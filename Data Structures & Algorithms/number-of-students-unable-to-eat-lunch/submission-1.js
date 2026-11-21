class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        let res = students.length;
        const cnt = [0, 0];

        for (let student of students) {
            cnt[student]++;
        }

        for  (let sandwich of sandwiches) {
            if (cnt[sandwich] > 0) {
                res--;
                cnt[sandwich]--;
            } else {
                return res;
            }
        }

        return res;
    }
}
