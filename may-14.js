// Implement Trie (Prefix Tree)
/*
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.
*/

var Trie = function() {
    this.obj = { word: true }
};

Trie.prototype.insert = function(word) {
    let root = this.obj;
    for (let i of word) {
        if (!root[i]) {
            root[i] = { word: false };
        }
        root = root[i];
    }
    root["word"] = true;
};

Trie.prototype.search = function(word) {
    let root = this.obj;
    for(let i of word) {
        if(!root[i]) {
            return false;
        }
        root = root[i];
    }
    return root["word"]
};

Trie.prototype.startsWith = function(prefix) {
    let result = true;
    let root = this.obj;
    for(let i of prefix) {
        if (!root[i]) {
            return false;
        }
        root = root[i];
    }
    return result;    
};