
//# 997. Find the Town Judge

/*
In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

1. The town judge trusts nobody.
2. Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.

You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled
bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and can be identified, or return -1 otherwise.
*/


// SOLUTION

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

var findJudge = function (n, trust) {
    // If there are no trust relationships, return n if there is only one person, otherwise return -1
    if (trust.length === 0) {
        return n === 1 ? n : -1;
    }

    // Create an array to keep track of the trust count for each person
    const trustCount = new Array(n + 1).fill(0);

    for (let i = 0; i < trust.length; i++) {
        // Decrease trust count for the person who trusts
        trustCount[trust[i][0]]--;

        // Increase trust count for the person who is trusted
        trustCount[trust[i][1]]++;
    }

    for (let i = 1; i <= n; i++) {
        // If a person is trusted by everyone (except himself) and trusts no one, they are the judge
        if (trustCount[i] === n - 1) {
            return i;
        }
    }

    return -1; // No judge found
};
