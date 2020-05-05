// First Unique Character in a String
/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.
*/

var firstUniqChar = function(s) {
    let hash = new Map();
    
    for (let i = 0; i < s.length; i++) {
        if (hash.has(s[i])) {
            hash.set(s[i], false);
        } else {
            hash.set(s[i], i + 1);
        }
    }
    
    for (let k of hash.values()) {
        if (k !== false) {
            return k - 1;
        }
    }
    
    return -1;
};