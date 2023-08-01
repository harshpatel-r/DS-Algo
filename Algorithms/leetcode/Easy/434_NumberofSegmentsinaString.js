
//# 434. Number of Segments in a String

/*
Given a string s, return the number of segments in the string.

A segment is defined to be a contiguous sequence of non-space characters.
*/

// SOLUTION 1


/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) { 
    s = s.trim();
    if (s.length === 0) {
        return 0;
    }

    return s.split(/\s+/).length;
};


// SOLUTION 2


/**
 * @param {string} s
 * @return {number}
 */

var countSegments = function(s) { 
    s = s.trim();
    
    if(s.length == 0){
        return 0
    }

    let count = 1;
    for(let i = 0; i < s.length-1; i++){
        if(s[i] == " " && s[i+1] !== " "){
            count++;
        }
    }
    return count;
};
