// Find All Anagrams in a String
/*
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
*/

var findAnagrams = function(s, p) {
    let pMap = {};
    for(let i = 0; i < p.length; ++i) {
        if (pMap[p[i]]) {
          pMap[p[i]]++;
        } else {
          pMap[p[i]] = 1;
        }
    }
    let result = [];
    
    let count = p.length;
    
    for (let i = 0; i < p.length; ++i) {
        if (pMap[s[i]] !== undefined && pMap[s[i]]-- > 0) {
          --count;
        }
    }
    
    for(let i = 0; i < s.length - p.length + 1; ++i) {
        if (count === 0) {
          result.push(i);
        }
        if (pMap[s[i]] !== undefined && pMap[s[i]]++ >= 0 ) {
          ++count;
        }
        if (pMap[s[i+p.length]] !== undefined && pMap[s[i+p.length]]-- > 0) {
          --count;
        }
    }
    return result;
};