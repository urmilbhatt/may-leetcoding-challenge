// Sort Characters By Frequency
/*
Given a string, sort it in decreasing order based on the frequency of characters.

Example 1:

Input:
"tree"

Output:
"eert"

Explanation:
'e' appears twice while 'r' and 't' both appear once.
So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
Example 2:

Input:
"cccaaa"

Output:
"cccaaa"

Explanation:
Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
Note that "cacaca" is incorrect, as the same characters must be together.
Example 3:

Input:
"Aabb"

Output:
"bbAa"

Explanation:
"bbaA" is also a valid answer, but "Aabb" is incorrect.
Note that 'A' and 'a' are treated as two different characters.

*/

var frequencySort = function(s) {
    let p = {};
    let dict = {};
    
    for (let i = 0; i < s.length; i++) {
        if (p[s[i]]) {
            p[s[i]] += 1;
        } else {
            p[s[i]] = 1;
        }
    }
    
    for (let key of Object.keys(p)) {
        if (dict[p[key]]) {
            dict[p[key]].push(key);
        } else {
            dict[p[key]] = [key];
        }
    }

    let sortedKeys = Object.keys(dict).map(key => parseInt(key));
    sortedKeys.sort((a , b) => Number(a) - Number(b));
    sortedKeys.reverse();

    let list = [];

    for (let num of sortedKeys) {
        for (let char of dict[num]) {
            let str = getString(char, num);
            list.push(str);
        }
    }

    function getString(char, num) {
        let text = '';
        for (let i = 0; i < num; i++) {
            text += char;
        }
        return text;
    }
    

    return list.join('');
};