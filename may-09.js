// Valid Perfect Square
/*
    Given a positive integer num, write a function which returns True if num is a perfect square else False.

    Note: Do not use any built-in library function such as sqrt.

    Example 1:

    Input: 16
    Output: true
    Example 2:

    Input: 14
    Output: false
*/




var isPerfectSquare = function(num) {
    let start = 1;
    let current = 1;
    let temp;
  
    if(num === 1){
        return true;
    }

    while(current <= num){
        start += 2;
        temp = start + current;
        if (temp <= num){
            current = temp;
            if(current === num){
                return true;
            }
        } else{
            return false;
        }
    }
};