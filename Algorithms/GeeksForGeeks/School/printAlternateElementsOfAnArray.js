
//# Print alternate elements of an array

/*
You are given an array A of size N. You need to print elements 
of A in alternate order (starting from index 0).
*/

// SOLUTION

//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} n
*/

class Solution {
  print(arr,n){
    //code here
   let ans = "";
for(let i = 0 ; i<n ; i++){
  ans += arr[i] + " "
  i++;
}
console.log(ans)

  }
}

