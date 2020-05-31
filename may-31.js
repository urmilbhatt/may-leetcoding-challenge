// Edit Distance
/*
Given two words word1 and word2, find the minimum number of operations required to convert word1 to word2.

You have the following 3 operations permitted on a word:

Insert a character
Delete a character
Replace a character
Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')

*/

var minDistance = function(word1, word2) {

    const cache = Array(word1.length + 1).fill(0).map(_ => Array(word2.length + 1).fill(-1))

    const min = (i, j) => {
        if (cache[i + 1][j + 1] > -1) {
            return che[i + 1][j + 1];
        }

        if (i < 0) return j + 1;
        if (j < 0) return i + 1;

        if (word1[i] === word2[j]) {
            cache[i + 1][j + 1] = min(i - 1, j - 1);
        } else {
            cache[i + 1][j + 1] = Math.min(min(i - 1, j), min(i - 1, j - 1), min(i, j - 1)) + 1;
        }

        return cache[i + 1][j + 1];
    }

    return min(word1.length - 1, word2.length - 1);
};